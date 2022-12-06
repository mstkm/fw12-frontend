// import React from 'react';
import {Eye} from 'react-feather';

const SignIn = () => {
  return(
    <div className='auth-wrapper'>
      {/* Left */}
      <div className='left-auth'>
        <div className='bg-layer'>
          <div className='flex justify-center'>
            <img className='max-[769px]:w-[80%]' src={require('../assets/images/tickitz1.png')} alt='Logo' />
          </div>
          <div className='text-banner'>wait, watch, wow!</div>
        </div>
      </div>

      {/* Right */}
      <div className="right-auth max-[425.98px]:py-[19rem] max-[768.98px]:overflow-y-scroll max-[768.98px]:pt-[10rem] max-[768.98px]:pb-[2rem]">
        <div className='text-h'>Sign In</div>
        <div className='text-p'>Sign in with your data that you entered during your registration</div>
        <form className='form-auth'>
          <div className='input-wrapper'>
            <div className='label-input'>Email</div>
            <input className='input' placeholder='Write your email'></input>
          </div>
          <div className='input-wrapper'>
            <div className='label-input'>Password</div>
            <div className='relative'>
              <Eye className='absolute bottom-3 right-[15px]'/>
              <input className='input' placeholder='Write your password'></input>
            </div>
          </div> 
          <div className='mt-10'>
            <button className='button-auth'>Sign In</button>
          </div>         
        </form>
        <div className='text-[#8692A6] text-center mb-2'>Forgot your password? <span className='link'>Reset now</span></div>
        <div className='text-[#8692A6] text-center'>Don't have an account? <span className='link'>Sign Up</span></div>
      </div>
      
    </div>
  )
}

export default SignIn