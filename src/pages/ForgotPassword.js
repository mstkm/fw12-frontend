import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const directToUpdatePassword= () => {
    navigate('/updatePassword')
  }

  return(
    <div className='flex font-[mulish] h-screen'>
      {/* Left */}
      <div className="flex-[60%] bg-[url('../images/image1.png')] bg-cover max-[426px]:hidden">
        <div className='bg-[#2B156B] opacity-80 h-screen px-[100px] py-[20px] max-[768.98px]:px-[2rem]'>
          <img className='w-[50%] mb-10' src={require('../assets/images/tickitz1.png')} alt='Logo' />
          <div className='text-white text-3xl font-bold mb-3 max-[768.98px]:text-xl'>Lets reset your password</div>
          <div className='text-white text-xl opacity-80 mb-10 max-[768.98px]:text-base'>To be able to use your account again, please complete the following steps.</div>
          <div className='relative'>
            <div className='flex gap-8 items-center text-white text-lg mb-5 max-[768.98px]:text-base max-[768.98px]:mb-3'>
              <div className='flex items-center justify-center border-2 border-white w-[40px] h-[40px] rounded-full bg-white text-[#290341] font-bold'>1</div>
              <div className='font-bold'>Fill your complete email</div>
            </div>
            <div className='flex gap-8 items-center text-white text-lg mb-5 max-[768.98px]:text-base max-[768.98px]:mb-3'>
              <div className='flex items-center justify-center border-2 border-white w-[40px] h-[40px] rounded-full'>2</div>
              <div className='opacity-80'>Check your email</div>
            </div>
            <div className='flex gap-8 items-center text-white text-lg mb-5 max-[768.98px]:text-base max-[768.98px]:mb-3'>
              <div className='flex items-center justify-center border-2 border-white w-[40px] h-[40px] rounded-full'>3</div>
              <div className='opacity-80'>Enter your new password</div>
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
        <div className='text-[#AAAAAA] mb-10'>we'll send a link to your email shortly</div>
        <form className='mb-8'>
          <div className='mb-5'>
            <div className='text-[#4E4B66] mb-2'>Email</div>
            <input className='w-[100%] h-[50px] border-[1px] border-[#DEDEDE] rounded-[4px] pl-4 focus:outline-none' placeholder='Write your email'></input>
          </div>
          <div className='mt-10'>
            <button onClick={directToUpdatePassword} className='w-[100%] h-[50px] bg-[#5F2EEA] border-[1px] border-[#5F2EEA] rounded-[4px] pl-4 text-white'>Send</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default ForgotPassword
