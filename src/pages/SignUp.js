/* eslint-disable no-unused-vars */
import React from 'react'
import { Eye, EyeOff } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import http from '../helpers/http'
import { useDispatch } from 'react-redux'
import { login as loginAction } from '../redux/reducers/auth'
import { Oval } from 'react-loader-spinner'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(Yup)

const phoneRegExpID = /^(^08)(\d{8,10})$/

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .matches(phoneRegExpID, 'Invalid phone number')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .password()
    .min(8, 'Min length 8')
    .minLowercase(1, 'Lowercase 1')
    .minUppercase(1, 'Uppercase 1')
    .minSymbols(1, 'Symbols 1')
    .minNumbers(1, 'Numbers 1')
})

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Register
  const [alertError, setAlertError] = React.useState(null)
  const [alertSuccess, setAlertSuccess] = React.useState(null)
  const [loadingRegister, setLoadingRegister] = React.useState(false)
  const cb = () => {
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }
  const register = async (value) => {
    setLoadingRegister(true)
    try {
      const response = await http().post('/auth/register', value)
      setAlertSuccess(response?.data?.message)
      if (response?.data?.message) {
        setLoadingRegister(false)
      }
      const token = response?.data?.results?.token
      dispatch(loginAction({ token }))
      cb()
      return response
    } catch (error) {
      console.log(error)
      setAlertError(error?.response?.data?.message)
      if (error?.response?.data?.message) {
        setLoadingRegister(false)
      }
      setTimeout(() => {
        setAlertError(null)
      }, 5000)
    }
  }

  // Show / hide password
  const [inputType, setInputType] = React.useState('password')
  const [iconEye, setIconEye] = React.useState(true)
  const showPassword = () => {
    if (iconEye === true) {
      setIconEye(false)
      setInputType('text')
    }
    if (iconEye === false) {
      setIconEye(true)
      setInputType('password')
    }
  }

  return (
    <div className='flex font-[inter] h-screen'>
      {/* Left */}
      <div className='flex-[60%] bg-[url("../images/image1.png")] bg-cover max-[426px]:hidden'>
        <div className='flex flex-col justify-center items-center bg-primary opacity-80 h-screen'>
          <div className='flex justify-center'>
            <img className='w-3/4 mb-5' src={require('../assets/images/bannerKarcisWhite.png')} alt='Logo' />
          </div>
          <div className='flex justify-center text-5xl text-white opacity-80 max-[769px]:text-[2rem]'>wait, watch, wow!</div>
        </div>
      </div>

      {/* Right */}
      <div className='flex flex-col flex-[40%] justify-center px-10 overflow-y-scroll bg-white'>
        <div className='text-5xl font-bold mb-4 mt-[18rem] max-[425.98px]:mt-[20rem] max-[768.98px]:mt-[25rem]'>Sign Up</div>
        <div className='text-[#AAAAAA] mb-10'>Fill your additional details</div>
        {loadingRegister && <div className='flex justify-center mb-10'>
          <Oval
            height={50}
            width={50}
            color="#00005C"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="grey"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>}
        {alertError && <div className="alert alert-error shadow-lg mb-10">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{alertError}</span>
          </div>
        </div>}
        {alertSuccess && <div className="alert alert-success shadow-lg mb-10">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{alertSuccess}</span>
          </div>
        </div>}
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={(value) => register(value)}>
            {({ errors, touched }) => (
              <Form>
          <div className='mb-5'>
          <div className='text-[#4E4B66] mb-2'>First Name</div>
            <Field className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none bg-white' name='firstName' placeholder='Write your first name'></Field>
            {errors.firstName && touched.firstName ? <div className=' text-red-500 text-sm'>{errors.firstName}</div> : null}
          </div>
          <div className='mb-5'>
          <div className='text-[#4E4B66] mb-2'>Last Name</div>
            <Field className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none bg-white' name='lastName' placeholder='Write your last name'></Field>
            {errors.lastName && touched.lastName ? <div className=' text-red-500 text-sm'>{errors.lastName}</div> : null}
          </div>
          <div className='mb-5'>
          <div className='text-[#4E4B66] mb-2'>Phone Number</div>
            <Field className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none bg-white' name='phoneNumber' placeholder='Write your phone number'></Field>
            {errors.phoneNumber && touched.phoneNumber ? <div className=' text-red-500 text-sm'>{errors.phoneNumber}</div> : null}
          </div>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Email</div>
            <Field className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none bg-white' name='email' placeholder='Write your email'></Field>
            {errors.email && touched.email ? <div className=' text-red-500 text-sm'>{errors.email}</div> : null}
          </div>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Password</div>
            <div className='relative'>
              {iconEye ? <Eye onClick={showPassword} className='absolute top-3 right-[15px] cursor-pointer'/> : <EyeOff onClick={showPassword} className='absolute top-3 right-[15px] cursor-pointer'/>}
              <Field className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none bg-white' name='password' type={inputType} placeholder='Write your password'></Field>
              {errors.password && touched.password ? <div className=' text-red-500 text-sm'>{errors.password}</div> : null}
            </div>
          </div>
          <div className='mt-10'>
            <button type='submit' className='btn w-[100%] h-[50px] bg-primary border-[1px] border-primary rounded-[16px] pl-4 text-white'>Sign Up</button>
          </div>
              </Form>
            )}
        </Formik>
        <div className='text-[#8692A6] text-center my-10'>Already have an account? <Link to='/signin' className='text-primary underline cursor-pointer hover:font-bold'>Sign In</Link></div>
      </div>
    </div>
  )
}

export default SignUp
