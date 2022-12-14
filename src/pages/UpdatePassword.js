import React from 'react';
import { Eye, EyeOff } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
  const navigate = useNavigate()
  const directToSignIn= () => {
    navigate('/signin')
  }

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

  return(
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
      <div className="flex flex-col flex-[40%] justify-center px-10 max-[425.98px]:py-0">
        <div className='text-3xl font-bold mb-4'>Fill your complete email</div>
        <div className='text-[#AAAAAA] mb-10'>set your new password</div>
        <form className='mb-8'>
        <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Password</div>
            <div className='relative'>
              {iconEyeA ? <Eye onClick={showPasswordA} className='absolute top-3 right-[15px] cursor-pointer'/> : <EyeOff onClick={showPasswordA} className='absolute top-3 right-[15px] cursor-pointer'/>}
                <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='password' type={inputTypeA} placeholder='Write your password'></input>
            </div>
          </div> <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Confirm Password</div>
            <div className='relative'>
            {iconEyeB ? <Eye onClick={showPasswordB} className='absolute top-3 right-[15px] cursor-pointer'/> : <EyeOff onClick={showPasswordB} className='absolute top-3 right-[15px] cursor-pointer'/>}
                <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' name='password' type={inputTypeB} placeholder='Write your confirm password'></input>
            </div>
          </div>
          <div className='mt-10'>
            <button onClick={directToSignIn} className='w-[100%] h-[50px] bg-primary border-[1px] border-primary rounded-[4px] pl-4 text-white'>Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default UpdatePassword
