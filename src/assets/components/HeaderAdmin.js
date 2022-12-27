// import { useNavigate } from 'react-router-dom';
import { Search } from 'react-feather';
import { useNavigate } from 'react-router-dom';


const HeaderAdmin = () => {
  const navigate = useNavigate()
  const directToDashboard = () => {
    navigate('/dashboard')
  }
  const directToManageMovie = () => {
    navigate('/manageMovie')
  }
  const directTomanageSchedule = () => {
    navigate('/manageSchedule')
  }
  return(
    <div className='flex items-center px-[100px] py-7 font-[mulish]'>
      <div className='flex gap-10 flex-1 items-center'>
        <img className='w-1/4' src={require('../images/bannerKarcis.png')} alt='logo' />
        <div onClick={directToDashboard} className='cursor-pointer hover:font-bold'>Dashboard</div>
        <div onClick={directToManageMovie} className='cursor-pointer hover:font-bold'>Manage Movie</div>
        <div onClick={directTomanageSchedule} className='cursor-pointer hover:font-bold'>Manage Schedule</div>
      </div>

      <div className='relative w-[250px] h-[50px] mr-[50px]'>
        <div id='searchMovie' className='flex items-center relative hidden'>
          <div className='absolute top-3.5 left-3 cursor-pointer'><Search /></div>
          <input className='w-[250px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-12 focus:outline-none' placeholder='Search Movie Name ...'></input>
        </div>
        <div className='absolute cursor-pointer top-3.5 right-1'><Search /></div>
      </div>

      <div className='relative'>
        <div className='cursor-pointer'>
          <img className='w-[50px] h-[50px] rounded-full' src='https://picsum.photos/200/300' alt='foto-profil'/>
        </div>
        <div id='drop-profile' className='absolute top-[50px] right-1 border-[1px] border-[#DEDED] rounded-[2px] bg-[#FCFDFE] pl-2 pr-8 pt-1 pb-3 hidden'>
          <div className='mb-3 cursor-pointer hover:font-bold'>Profile</div>
          <div className='cursor-pointer hover:font-bold'>Logout</div>
        </div>
      </div>
    </div>
  )
}

export default HeaderAdmin
