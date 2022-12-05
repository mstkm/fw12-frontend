// import React from 'react';
import {Eye} from 'react-feather';

const SignIn = () => {
  return(
    <div className='flex font-[inter]'>
      <div className="flex-[60%] hero">
        <div className='flex flex-col justify-center items-center bg-[#2B156B] opacity-80 h-[100%]'>
          <div>
            <img src={require('../assets/images/tickitz1.png')} alt='Hero' />
          </div>
          <div className='text-5xl text-white opacity-80'>wait, watch, wow!</div>
        </div>
      </div>
      <div className="flex flex-col flex-[40%] justify-center p-10">
        <div className='text-5xl font-bold mb-4'>Sign In</div>
        <div className='text-[#AAAAAA] mb-10'>Sign in with your data that you entered during your registration</div>
        <form className='mb-5'>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Email</div>
            <input className='w-[400px] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4' placeholder='Write your email'></input>
          </div>
          <div className='mb-10'>
            <div className='text-[#4E4B66] mb-2'>Password</div>
            <div className='relative'>
              <Eye className='absolute bottom-3 right-[50px]'/>
              <input className='w-[400px] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4' placeholder='Write your password'></input>
            </div>
          </div> 
          <div>
            <button className='w-[400px] h-[50px] bg-[#5F2EEA] border-[1px] border-[#5F2EEA] rounded-[16px] pl-4 text-white'>Sign In</button>
          </div>         
        </form>
        <div className='text-[#8692A6] text-center'>Forgot your password? <span className='text-[#5F2EEA] underline cursor-pointer'>Reset now</span></div>
        <div className='text-[#8692A6] text-center'>Don't have an account? <span className='text-[#5F2EEA] underline cursor-pointer'>Sign Up</span></div>
      </div>
      
    </div>
  )
}

export default SignIn