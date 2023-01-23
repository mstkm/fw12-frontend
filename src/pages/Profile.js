/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react'
import Header from '../assets/components/Header'
import { Eye, EyeOff } from 'react-feather'
import Footer from '../assets/components/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import http from '../helpers/http'
import { Oval } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
import HeaderAdmin from '../assets/components/HeaderAdmin'
YupPassword(Yup)

const phoneRegExpID = /^(^08)(\d{8,10})$/

const InformationSchema = Yup.object().shape({
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
  email: Yup.string().email('Invalid email').required('Required')
})
const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .password()
    .min(8, 'Min length 8')
    .minLowercase(1, 'Lowercase 1')
    .minUppercase(1, 'Uppercase 1')
    .minSymbols(1, 'Symbols 1')
    .minNumbers(1, 'Numbers 1')
})

const Profile = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const { id, role } = jwt_decode(token)

  const directToOrderHistory = () => {
    navigate('/orderHistory')
  }

  // Get user data by id
  const [userResponse, setUserResponse] = React.useState(null)
  const user = userResponse?.data?.results
  const [profilePicture, setProfilePicture] = React.useState(null)
  const [fullName, setFullName] = React.useState(null)
  React.useEffect(() => {
    getUser().then(response => {
      setUserResponse(response)
    })
  }, [])
  const getUser = async () => {
    try {
      const response = await http(token).get(`/users/${id}`)
      setProfilePicture(response?.data?.results?.picture)
      setFullName(response?.data?.results?.firstName + ' ' + response?.data?.results?.lastName)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  // Update picture
  const [openModalPicture, setOpenModalPicture] = React.useState(false)
  const [picture, setPicture] = React.useState(null)
  const [alertSuccessMessage, setAlertSuccessMessage] = React.useState(null)
  const [alertErrorMessage, setAlertErrorMessage] = React.useState(null)
  const [loadingUpdatePicture, setLoadingUpdatePicture] = React.useState(false)
  const fileSize = picture?.size
  const openModal = () => {
    setOpenModalPicture(false)
    setPicture(null)
    setAlertSuccessMessage(null)
    setAlertErrorMessage(null)
  }
  const updatePicture = async () => {
    if (picture && fileSize < 5024 * 1024) {
      setLoadingUpdatePicture(true)
      setAlertErrorMessage(null)
      try {
        const form = new FormData()
        form.append('picture', picture)
        const response = await http(token).patch('/profile/update', form, {
          headers: {
            'Content-type': 'multipart/form-data'
          }
        })
        setAlertSuccessMessage('Update success')
        setLoadingUpdatePicture(false)
        setTimeout(() => {
          setAlertSuccessMessage(null)
          setOpenModalPicture(false)
          setPicture(null)
        }, 3000)
        setProfilePicture(response?.data?.results?.picture)
        return response
      } catch (error) {
        console.log(error)
      }
    } else if (picture && fileSize > 5024 * 1024) {
      setAlertErrorMessage('File too large. Max 5 MB.')
    } else {
      setAlertErrorMessage('Picture not found. Please choose picture!')
    }
  }

  // Update information
  const [loadingUpdateInformation, setLoadingUpdateInformation] = React.useState(false)
  const [informationSuccess, setInformationSuccess] = React.useState(null)
  const [informationFailed, setInformationFailed] = React.useState(null)
  const updateInformation = async (value) => {
    setLoadingUpdateInformation(true)
    try {
      const response = await http(token).patch(`/users/${id}`, value)
      setFullName(response?.data?.results?.firstName + ' ' + response?.data?.results?.lastName)
      setInformationSuccess('Update Success')
      setLoadingUpdateInformation(false)
      setTimeout(() => {
        setInformationSuccess(null)
      }, 5000)
      return response
    } catch (error) {
      console.log(error)
      setInformationFailed('Update failed')
      setLoadingUpdateInformation(false)
      setTimeout(() => {
        setInformationFailed(null)
      }, 5000)
    }
  }

  // Update password
  const [loadingUpdatePassword, setLoadingUpdatePassword] = React.useState(false)
  const [passwordSuccess, setPasswordSuccess] = React.useState(null)
  const [passwordFailed, setPasswordFailed] = React.useState(null)
  const updatePassword = async (value) => {
    const { password, confirmPassword } = value
    if (password === confirmPassword) {
      setLoadingUpdatePassword(true)
      try {
        const response = await http(token).patch(`/users/${id}`, { password })
        setPasswordSuccess('Update success')
        setLoadingUpdatePassword(false)
        setTimeout(() => {
          setPasswordSuccess(null)
        }, 5000)
        return response
      } catch (error) {
        console.log(error)
        setLoadingUpdatePassword(false)
        setPasswordFailed('Update failed')
        setTimeout(() => {
          setPasswordFailed(null)
        }, 5000)
      }
    } else {
      setPasswordFailed('Password and confirm password not match')
      setTimeout(() => {
        setPasswordFailed(null)
      }, 5000)
    }
  }

  // Show / hide password
  const [inputType, setInputType] = React.useState(true)
  const [inputTypeConfirm, setInputTypeConfirm] = React.useState(true)
  const [iconEye, setIconEye] = React.useState(true)
  const [iconEyeConfirm, setIconEyeConfirm] = React.useState(true)
  const showPassword = () => {
    if (iconEye === true) {
      setIconEye(false)
      setInputType(false)
    }
    if (iconEye === false) {
      setIconEye(true)
      setInputType(true)
    }
  }
  const showConfirmPassword = () => {
    if (iconEyeConfirm === true) {
      setIconEyeConfirm(false)
      setInputTypeConfirm(false)
    }
    if (iconEyeConfirm === false) {
      setIconEyeConfirm(true)
      setInputTypeConfirm(true)
    }
  }

  return (
    <div className='relative'>
    {role === '1' ? <HeaderAdmin image={profilePicture} /> : <Header image={profilePicture} />}
    <div className="relative flex flex-col md:flex-row gap-8 bg-[#E5E5E5] px-5 md:px-[100px] py-10 font-[mulish]">
      {openModalPicture && <div className='fixed top-0 -left-0 overflow-auto w-full h-screen bg-black/50 z-10 flex justify-center items-center'>
        <div className='bg-white rounded p-10'>
          <div>
            <input onChange={e => {
              setPicture(e.target.files[0])
              setAlertErrorMessage(false)
            }} className='file:bg-primary file:border-0 file:rounded file:text-white file:btn file:normal-case hover:file:bg-blue-600 cursor-pointer bg-slate-300 rounded' type="file" accept="image/png, image/jpeg, image/jpg" />
          </div>
          {loadingUpdatePicture && <div className='mt-5 flex justify-center'>
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
          {alertSuccessMessage && <p className='text-green-600 text-center mt-5'>{alertSuccessMessage}</p>}
          {alertErrorMessage && <p className='text-red-600 text-center mt-5'>{alertErrorMessage}</p>}
          <div className='flex justify-center gap-5 mt-10'>
            <div className='flex w-[100px]'>
              <button onClick={openModal} className='btn btn-sm bg-slate-600 hover:bg-slate-800'>Cancel</button>
            </div>
            <div className='flex w-[100px]'>
              <button onClick={updatePicture} className='btn btn-sm bg-primary hover:bg-blue-600'>Save</button>
            </div>
          </div>
        </div>
      </div>}
      <div className="flex-[30%]">
        {!user?.firstName && <Skeleton className='h-[350px]' />}
        {user?.firstName && <div className="bg-white rounded-[24px] p-5">
          <div className="text-[#4E4B66] mb-5">INFO</div>
          <div className="flex flex-col justify-center items-center mb-8">
            <img onClick={() => setOpenModalPicture(true)} className="w-[100px] h-[100px] rounded-full mb-5 cursor-pointer" src={profilePicture || 'https://res.cloudinary.com/dvzrmzldr/image/upload/v1673836551/Desain_tanpa_judul_bsia1l.png'} alt="foto-profil" />
            <div className="font-bold mb-2">{fullName}</div>
            <div className="text-[#4E4B66]">Moviegoers</div>
          </div>
          <div className="flex justify-center pt-5 border-t-[1px]">
            <button className="bg-primary w-[150px] h-[50px] text-white rounded-[16px]">Logout</button>
          </div>
        </div>}
      </div>

      <div className="flex-[70%]">
        <div className="flex gap-12 bg-white rounded-[24px] px-8 mb-5">
          <div className="text-[#4E4B66] font-bold py-5 border-b-2 border-primary cursor-pointer">Account Setting</div>
          <div onClick={directToOrderHistory} className="text-[#4E4B66] py-5 cursor-pointer hover:font-bold">Order History</div>
        </div>
        {!user?.firstName && <Skeleton className='h-[350px] my-10' />}
        {user?.firstName &&
        <Formik
          initialValues={{
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            phoneNumber: user?.phoneNumber
          }}
          validationSchema={InformationSchema}
          onSubmit={(value) => updateInformation(value)}>
            {({ errors, touched }) => (
          <Form>
          <div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
            <div className="text-[#4E4B66] border-b-[1px] pb-2 mb-5">Details Information</div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <div className="text-[#4E4B66] mb-2">First Name</div>
                <div>
                  <Field name='firstName' className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text'></Field>
                  {errors.firstName && touched.firstName ? <div className=' text-red-500 text-sm'>{errors.firstName}</div> : null}
                </div>
              </div>
              <div>
                <div className="text-[#4E4B66] mb-2">Last Name</div>
                <div>
                  <Field name='lastName' className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text'></Field>
                  {errors.lastName && touched.lastName ? <div className=' text-red-500 text-sm'>{errors.lastName}</div> : null}
                </div>
              </div>
              <div>
                <div className="text-[#4E4B66] mb-2">Email</div>
                <div>
                  <Field name='email' className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='email'></Field>
                  {errors.email && touched.email ? <div className=' text-red-500 text-sm'>{errors.email}</div> : null}
                </div>
              </div>
              <div>
                <div className="text-[#4E4B66] mb-2">Phone Number</div>
                <div>
                  <Field name='phoneNumber' className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text'></Field>
                  {errors.phoneNumber && touched.phoneNumber ? <div className=' text-red-500 text-sm'>{errors.phoneNumber}</div> : null}
                </div>
              </div>
            </div>
            {loadingUpdateInformation && <div className='mt-5 flex justify-center'>
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
          {informationSuccess && <p className='text-green-600 text-center mt-5'>{informationSuccess}</p>}
          {informationFailed && <p className='text-red-600 text-center mt-5'>{informationFailed}</p>}
          </div>
          <div className="mb-8">
            <button type='submit' className="bg-primary w-[350px] h-[50px] text-white rounded-[16px]">Update changes</button>
          </div>
          </Form>
            )}
        </Formik>}

        <Formik
          initialValues={{
            password: '',
            confirmPassword: ''
          }}
          validationSchema={PasswordSchema}
          onSubmit={value => updatePassword(value)}>
        {({ errors, touched }) => (
          <Form>
          <div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
            <div className="text-[#4E4B66] border-b-[1px] pb-2 mb-5">Account and Privacy</div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <div className="text-[#4E4B66] mb-2">New Password</div>
                <div className="relative">
                  {iconEye ? <Eye onClick={showPassword} className="absolute right-4 top-3" /> : <EyeOff onClick={showPassword} className="absolute right-4 top-3" />}
                  <Field name='password' className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type={inputType ? 'password' : 'text'} placeholder="Write your password"></Field>
                  {errors.password && touched.password ? <div className=' text-red-500 text-sm'>{errors.password}</div> : null}
                </div>
              </div>
              <div>
                <div className="text-[#4E4B66] mb-2">Confirm Password</div>
                <div className="relative">
                  {iconEyeConfirm ? <Eye onClick={showConfirmPassword} className="absolute right-4 top-3" /> : <EyeOff onClick={showConfirmPassword} className="absolute right-4 top-3" />}
                  <Field name='confirmPassword' className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type={inputTypeConfirm ? 'password' : 'text'} placeholder="Confirm your password"></Field>
                </div>
              </div>
            </div>
            {loadingUpdatePassword && <div className='mt-5 flex justify-center'>
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
            {passwordSuccess && <p className='mt-5 text-green-600 text-center'>{passwordSuccess}</p>}
            {passwordFailed && <p className='mt-5 text-red-600 text-center'>{passwordFailed}</p>}
          </div>
          <div className="mb-5">
            <button type='submit' className="bg-primary w-[350px] h-[50px] text-white rounded-[16px]">Update changes</button>
          </div>
          </Form>
        )}
        </Formik>

      </div>
    </div>

    <Footer />
    </div>
  )
}

export default Profile
