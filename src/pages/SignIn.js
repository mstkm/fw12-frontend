/* eslint-disable camelcase */
import React from 'react'
import { Eye, EyeOff } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as loginAction } from '../redux/reducers/auth'
import http from '../helpers/http'
import { Oval } from 'react-loader-spinner'
import jwt_decode from 'jwt-decode'

const SignIn = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Login
  const [loadingLogin, setLoadingLogin] = React.useState(false)
  const [loginSuccessMessage, setLoginSuccessMessage] = React.useState(null)
  const [loginFailedMessage, setLoginFailedMessage] = React.useState(null)
  const login = async (event) => {
    event.preventDefault()
    setLoadingLogin(true)
    setLoginSuccessMessage(null)
    setLoginFailedMessage(null)
    const email = event.target.email.value
    const password = event.target.password.value
    try {
      const response = await http().post('/auth/login', { email, password })
      const token = response?.data?.results?.token
      const { role } = jwt_decode(token)
      setLoadingLogin(false)
      setLoginSuccessMessage(response?.data?.message)
      dispatch(loginAction({ token }))
      const cb = () => {
        if (role === '1') {
          navigate('/dashboard')
        } else {
          navigate('/')
        }
      }
      setTimeout(() => {
        cb()
      }, 3000)
      return response
    } catch (error) {
      console.log(error)
      setLoadingLogin(false)
      setLoginFailedMessage(error?.response?.data?.message)
    }
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
      <div className="flex-[60%] bg-[url('../images/image1.png')] bg-cover max-[426px]:hidden">
        <div className='flex flex-col justify-center items-center bg-primary opacity-80 h-screen'>
          <div className='flex justify-center'>
          <img className='w-3/4 mb-5' src={require('../assets/images/bannerKarcisWhite.png')} alt='Logo' />
          </div>
          <div className='flex justify-center text-5xl text-white opacity-80 max-[769px]:text-[2rem]'>wait, watch, wow!</div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-[40%] justify-center px-10 max-[425.98px]:pt-[5rem] max-[768.98px]:pt-[10rem] max-[768.98px]:pb-[2rem] max-[768.98px]:overflow-y-scroll bg-white">
        <div className='text-5xl font-bold mb-4'>Sign In</div>
        <div className='text-[#AAAAAA] mb-10'>Sign in with your data that you entered during your registration</div>
        {loadingLogin && <div className='mb-5 flex justify-center'>
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
        {loginSuccessMessage && <p className='mb-5 text-center text-green-600'>{loginSuccessMessage}</p>}
        {loginFailedMessage && <p className='mb-5 text-center text-red-600'>{loginFailedMessage}</p>}
        <form onSubmit={login} className='mb-8'>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Email</div>
            <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none bg-white' type='text' name='email' placeholder='Write your email'></input>
          </div>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Password</div>
            <div className='relative'>
              {iconEye ? <Eye onClick={showPassword} className='absolute top-3 right-[15px] cursor-pointer'/> : <EyeOff onClick={showPassword} className='absolute top-3 right-[15px] cursor-pointer'/>}
                <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none bg-white' name='password' type={inputType} placeholder='Write your password'></input>
            </div>
          </div>
          <div className='mt-10'>
            <button className='w-[100%] h-[50px] bg-primary border-[1px] border-primary rounded-[16px] pl-4 text-white'>Sign In</button>
          </div>
        </form>
        <div className='text-[#8692A6] text-center mb-2'>Forgot your password? <Link to='/forgotPassword' className='text-primary underline cursor-pointer hover:font-bold'>Reset now</Link></div>
        <div className='text-[#8692A6] text-center'>Don`t have an account? <Link to='/signup' className='text-primary underline cursor-pointer hover:font-bold'>Sign Up</Link></div>
      </div>

    </div>
  )
}

export default SignIn
