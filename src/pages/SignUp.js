import {Eye} from 'react-feather';
import {Link} from 'react-router-dom';

function SignUp() {
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
      <div className='right-auth overflow-y-scroll'>
        <div className='text-h mt-[18rem]'>Sign Up</div>
        <div className='text-p'>Fill your additional details</div>
        <form className='form-auth'>
          <div className='input-wrapper'>
          <div className='label-input'>First Name</div>
            <input className='input' placeholder='Write your first name'></input>
          </div>
          <div className='input-wrapper'>
          <div className='label-input'>Last Name</div>
            <input className='input' placeholder='Write your last name'></input>
          </div>
          <div className='input-wrapper'>
          <div className='label-input'>Phone Number</div>
            <input className='input' placeholder='Write your phone number'></input>
          </div>
          <div className='input-wrapper'>
            <div className='label-input'>Email</div>
            <input className='input' placeholder='Write your email'></input>
          </div>
          <div className='input-wrapper'>
            <div className='label-input'>Password</div>
            <div className='relative'>
              <Eye className='absolute top-3 right-[15px]'/>
              <input className='input' placeholder='Write your password'></input>
            </div>
          </div> 
          <div className='mt-10'>
            <button className='button-auth'>Sign Up</button>
          </div>         
        </form>
        <div className='text-[#8692A6] text-center'>Already have an account? <Link to='/signin' className='link'>Sign In</Link></div>
      </div>
    </div>
  )
}

export default SignUp