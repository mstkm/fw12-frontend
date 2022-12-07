// import React from 'react';
import {Eye} from 'react-feather';
import {Link} from 'react-router-dom';

const SignIn = () => {
  return(
    <div className='flex font-[inter] h-screen'>
      {/* Left */}
      <div className="flex-[60%] bg-[url('../images/image1.png')] bg-cover max-[426px]:hidden">
        <div className='flex flex-col justify-center items-center bg-[#2B156B] opacity-80 h-screen'>
          <div className='flex justify-center'>
            <img className='max-[769px]:w-[80%]' src={require('../assets/images/tickitz1.png')} alt='Logo' />
          </div>
          <div className='flex justify-center text-5xl text-white opacity-80 max-[769px]:text-[2rem]'>wait, watch, wow!</div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col flex-[40%] justify-center px-10 max-[425.98px]:py-[18rem] max-[768.98px]:pt-[10rem] max-[768.98px]:pb-[2rem] max-[768.98px]:overflow-y-scroll">
        <div className='text-5xl font-bold mb-4'>Sign In</div>
        <div className='text-[#AAAAAA] mb-10'>Sign in with your data that you entered during your registration</div>
        <form className='mb-8'>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Email</div>
            <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' placeholder='Write your email'></input>
          </div>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Password</div>
            <div className='relative'>
              <Eye className='absolute bottom-3 right-[15px]'/>
              <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[16px] pl-4 focus:outline-none' placeholder='Write your password'></input>
            </div>
          </div> 
          <div className='mt-10'>
            <button className='w-[100%] h-[50px] bg-[#5F2EEA] border-[1px] border-[#5F2EEA] rounded-[16px] pl-4 text-white'>Sign In</button>
          </div>         
        </form>
        <div className='text-[#8692A6] text-center mb-2'>Forgot your password? <span className='text-[#5F2EEA] underline cursor-pointer hover:font-bold'>Reset now</span></div>
        <div className='text-[#8692A6] text-center'>Don't have an account? <Link to='/signup' className='text-[#5F2EEA] underline cursor-pointer hover:font-bold'>Sign Up</Link></div>
      </div>
      
    </div>
  )
}

export default SignIn