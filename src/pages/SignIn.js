import React from 'react'
import { Eye, EyeOff } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { login as loginAction } from '../redux/reducers/auth';
import { loginAction } from '../redux/actions/auth'

const SignIn = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)

  const [showAlertLogin, setShowAlertLogin] = React.useState(true)

  const dispatch = useDispatch()
  const login = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    const cb = () => {
      navigate('/')
    }
    dispatch(loginAction({ email, password, cb }))
    if (token === null) {
      setTimeout(() => {
        setShowAlertLogin(true)
      }, 500)
    }
  }

  const hideAlertLogin = () => {
    setShowAlertLogin(false)
  }

  const AlertLogin = () => {
    return (
      <div className='flex bg-red-100 border-[1px] border-red-600 py-3 px-5 rounded-[8px] mb-3'>
        <div className='flex-1'>Wrong username or password</div>
        <div>
          <button onClick={hideAlertLogin} className='bg-gray-50 border-[1px] px-2 rounded-[4px]'>x</button>
        </div>
      </div>
    )
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
      <div className="flex flex-col flex-[40%] justify-center px-10 max-[425.98px]:pt-[5rem] max-[768.98px]:pt-[10rem] max-[768.98px]:pb-[2rem] max-[768.98px]:overflow-y-scroll">
        <div className='text-5xl font-bold mb-4'>Sign In</div>
        <div className='text-[#AAAAAA] mb-10'>Sign in with your data that you entered during your registration</div>
        {showAlertLogin ? <AlertLogin /> : false}
        <form onSubmit={login} className='mb-8'>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Email</div>
            <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' type='text' name='email' placeholder='Write your email'></input>
          </div>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Password</div>
            <div className='relative'>
              {iconEye ? <Eye onClick={showPassword} className='absolute top-3 right-[15px] cursor-pointer'/> : <EyeOff onClick={showPassword} className='absolute top-3 right-[15px] cursor-pointer'/>}
                <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='password' type={inputType} placeholder='Write your password'></input>
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
