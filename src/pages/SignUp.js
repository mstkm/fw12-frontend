import React from 'react'
import { Eye, EyeOff } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
  const [alertRegister, setAlertRegister] = React.useState(false)

  const navigate = useNavigate()

  const register = async (event) => {
    event.preventDefault()
    const firstName = event.target.firstName.value
    const lastName = event.target.lastName.value
    const phoneNumber = event.target.phoneNumber.value
    const email = event.target.email.value
    const password = event.target.password.value

    const { data } = await axios.post('http://localhost:8888/auth/register', { firstName, lastName, phoneNumber, email, password })

    setAlertRegister(true)

    setTimeout(() => {
      navigate('/signin')
    }, 5000)
    return data
  }

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
      <div className='flex flex-col flex-[40%] justify-center px-10 overflow-y-scroll'>
        <div className='text-5xl font-bold mb-4 mt-[18rem] max-[425.98px]:mt-[20rem] max-[768.98px]:mt-[25rem]'>Sign Up</div>
        <div className='text-[#AAAAAA] mb-10'>Fill your additional details</div>
        <form onSubmit={register} className='mb-8'>
          <div className='mb-5'>
          <div className='text-[#4E4B66] mb-2'>First Name</div>
            <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='firstName' placeholder='Write your first name'></input>
          </div>
          <div className='mb-5'>
          <div className='text-[#4E4B66] mb-2'>Last Name</div>
            <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='lastName' placeholder='Write your last name'></input>
          </div>
          <div className='mb-5'>
          <div className='text-[#4E4B66] mb-2'>Phone Number</div>
            <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='phoneNumber' placeholder='Write your phone number'></input>
          </div>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Email</div>
            <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='email' placeholder='Write your email'></input>
          </div>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Password</div>
            <div className='relative'>
              {iconEye ? <Eye onClick={showPassword} className='absolute top-3 right-[15px] cursor-pointer'/> : <EyeOff onClick={showPassword} className='absolute top-3 right-[15px] cursor-pointer'/>}
              <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='password' type={inputType} placeholder='Write your password'></input>
            </div>
          </div>
          <div className='mt-10'>
            <button className='w-[100%] h-[50px] bg-primary border-[1px] border-primary rounded-[16px] pl-4 text-white'>Sign Up</button>
          </div>
        </form>
        {alertRegister ? <div className='bg-green-100 border-[1px] border-green-600 p-3 text-center rounded-[8px] mb-3'>Register berhasil. <br/>Silahkan login dengan email dan password!</div> : false}
        <div className='text-[#8692A6] text-center mb-10'>Already have an account? <Link to='/signin' className='text-primary underline cursor-pointer hover:font-bold'>Sign In</Link></div>
      </div>
    </div>
  )
}

export default SignUp
