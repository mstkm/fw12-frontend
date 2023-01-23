/* eslint-disable no-unused-vars */
import React from 'react'
import { Eye, EyeOff } from 'react-feather'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import http from '../helpers/http'
import { resetForgotPassword as resetForgotPasswordAction } from '../redux/reducers/forgotPassword'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(Yup)

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .password()
    .min(8, 'Min length 8')
    .minLowercase(1, 'Lowercase 1')
    .minUppercase(1, 'Uppercase 1')
    .minSymbols(1, 'Symbols 1')
    .minNumbers(1, 'Numbers 1')
})

const UpdatePassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const email = useSelector(state => state?.forgotPassword?.email)
  const directToSignIn = () => {
    navigate('/signin')
  }

  // Update password
  const [loadingUpdatePassword, setLoadingUpdatePassword] = React.useState(false)
  const [successMessage, setSuccessMessage] = React.useState(null)
  const [failedMessage, setFailedMessage] = React.useState(null)
  const updatePassword = async (value) => {
    setLoadingUpdatePassword(true)
    setFailedMessage(null)
    setSuccessMessage(null)
    const { password, confirmPassword } = value
    if (password === confirmPassword) {
      try {
        const response = await http().post('/auth/resetPassword', value)
        setLoadingUpdatePassword(false)
        setSuccessMessage(response?.data?.message)
        setTimeout(() => {
          directToSignIn()
          dispatch(resetForgotPasswordAction())
        }, 5000)
      } catch (error) {
        setFailedMessage(error?.response?.data?.message)
        setLoadingUpdatePassword(false)
      }
    } else {
      setLoadingUpdatePassword(false)
      setFailedMessage('Password and confirm password not match')
    }
  }

  // Show / hide password
  const [inputTypeA, setInputTypeA] = React.useState('password')
  const [inputTypeB, setInputTypeB] = React.useState('password')
  const [iconEyeA, setIconEyeA] = React.useState(true)
  const [iconEyeB, setIconEyeB] = React.useState(true)
  const showPasswordA = () => {
    if (iconEyeA === true) {
      setIconEyeA(false)
      setInputTypeA('text')
    }
    if (iconEyeA === false) {
      setIconEyeA(true)
      setInputTypeA('password')
    }
  }
  const showPasswordB = () => {
    if (iconEyeB === true) {
      setIconEyeB(false)
      setInputTypeB('text')
    }
    if (iconEyeB === false) {
      setIconEyeB(true)
      setInputTypeB('password')
    }
  }

  return (
    <div className='flex font-[mulish] h-screen'>
      {/* Left */}
      <div className="flex-[60%] bg-[url('../images/image1.png')] bg-cover max-[426px]:hidden">
        <div className='bg-primary opacity-80 h-screen px-[100px] py-[20px] max-[768.98px]:px-[2rem]'>
          <img className='w-2/4 py-10' src={require('../assets/images/bannerKarcisWhite.png')} alt='Logo' />
          <div className='text-white text-3xl font-bold mb-3 max-[768.98px]:text-xl'>Lets reset your password</div>
          <div className='text-white text-xl opacity-80 mb-10 max-[768.98px]:text-base'>To be able to use your account again, please complete the following steps.</div>
          <div className='relative'>
            <div className='flex gap-8 items-center text-white text-lg mb-5 max-[768.98px]:text-base max-[768.98px]:mb-3'>
              <div className='flex items-center justify-center border-2 border-white w-[40px] h-[40px] rounded-full'>1</div>
              <div className='opacity-80'>Fill your complete email</div>
            </div>
            <div className='flex gap-8 items-center text-white text-lg mb-5 max-[768.98px]:text-base max-[768.98px]:mb-3'>
              <div className='flex items-center justify-center border-2 border-white w-[40px] h-[40px] rounded-full'>2</div>
              <div className='opacity-80'>Check your email</div>
            </div>
            <div className='flex gap-8 items-center text-white text-lg mb-5 max-[768.98px]:text-base max-[768.98px]:mb-3'>
              <div className='flex items-center justify-center border-2 border-white w-[40px] h-[40px] rounded-full bg-white text-primary font-bold'>3</div>
              <div className='font-bold'>Enter your new password</div>
            </div>
            <div className='flex gap-8 items-center text-white text-lg mb-5 max-[768.98px]:text-base max-[768.98px]:mb-3'>
              <div className='flex items-center justify-center border-2 border-white w-[40px] h-[40px] rounded-full'>4</div>
              <div className='opacity-80'>Done</div>
            </div>
            <div className='absolute h-[20px] border-l-2 border-white top-[40px] left-5 max-[768.98px]:h-[14px]'></div>
            <div className='absolute h-[20px] border-l-2 border-white top-[100px] left-5 max-[768.98px]:h-[14px] max-[768.98px]:top-[90px]'></div>
            <div className='absolute h-[20px] border-l-2 border-white top-[160px] left-5 max-[768.98px]:h-[14px] max-[768.98px]:top-[143px]'></div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-[40%] justify-center px-10 max-[425.98px]:py-[300px]">
        <div className='text-3xl font-bold mb-4'>Fill your complete email</div>
        <div className='text-[#AAAAAA] mb-10'>set your new password</div>
        {loadingUpdatePassword && <div className='mb-8 flex justify-center'>
          <Oval
            height={25}
            width={25}
            color="#00005C"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="grey"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        </div>}
        {successMessage && <p className='mb-8 text-center text-green-600'>{successMessage}</p>}
        {failedMessage && <p className='mb-8 text-center text-red-600'>{failedMessage}</p>}
        <Formik
          initialValues={{
            email,
            code: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={PasswordSchema}
          onSubmit={value => updatePassword(value)} className='mb-8'>
          {({ errors, touched }) => (
            <Form>
            <div className='mb-5'>
              <div className='text-[#4E4B66] mb-2'>Code</div>
              <div className='relative'>
                  <Field className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='code' type='text' placeholder='Write your code'></Field>
              </div>
            </div>
            <div className='mb-5'>
              <div className='text-[#4E4B66] mb-2'>Password</div>
              <div className='relative'>
                {iconEyeA ? <Eye onClick={showPasswordA} className='absolute top-3 right-[15px] cursor-pointer'/> : <EyeOff onClick={showPasswordA} className='absolute top-3 right-[15px] cursor-pointer'/>}
                  <Field className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='password' type={inputTypeA} placeholder='Write your password'></Field>
                  {errors.password && touched.password ? <div className=' text-red-500 text-sm'>{errors.password}</div> : null}
              </div>
            </div>
            <div className='mb-5'>
              <div className='text-[#4E4B66] mb-2'>Confirm Password</div>
              <div className='relative'>
              {iconEyeB ? <Eye onClick={showPasswordB} className='absolute top-3 right-[15px] cursor-pointer'/> : <EyeOff onClick={showPasswordB} className='absolute top-3 right-[15px] cursor-pointer'/>}
                  <Field className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='confirmPassword' type={inputTypeB} placeholder='Write your confirm password'></Field>
              </div>
            </div>
            <div className='mt-10'>
              <button type='submit' className='w-[100%] h-[50px] bg-primary border-[1px] border-primary rounded-[4px] pl-4 text-white'>Submit</button>
            </div>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  )
}

export default UpdatePassword
