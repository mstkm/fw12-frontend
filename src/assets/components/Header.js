import React from 'react';
import { Search } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const directToHome = () => {
    navigate('/home')
  }
  const directToProfile = () => {
    navigate('/profile')
  }
  const directLogout = () => {
    navigate('/')
  }
  const directToViewAll = () => {
    navigate('/viewAll')
  }

  const [dropSearch, setDropSearch] = React.useState(false)
  const showDropSearch = () => {
    if (dropSearch === false) {
      setDropSearch(true)
    }
  }
  const hiddenDropSearch = () => {
    if (dropSearch === true) {
      setDropSearch(false)
    }
  }

  return(
    <div className='flex items-center px-[100px] py-7 font-[mulish]'>
      <div className='flex flex-1 items-center'>
        <img className='w-[120.41px] mr-[80px]' src={require('../images/logo.png')} alt='logo' />
        <div onClick={directToHome} className='mr-[80px] cursor-pointer hover:font-bold'>Home</div>
        <div onClick={directToViewAll} className='cursor-pointer hover:font-bold'>List Movie</div>
      </div>

      <div onMouseLeave={hiddenDropSearch} className='relative w-[250px] h-[50px] mr-[50px]'>
        {dropSearch ? <div className='flex items-center relative z-10'>
          <div className='absolute top-3.5 left-3 cursor-pointer'><Search /></div>
          <input className='w-[250px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-12 focus:outline-none' placeholder='Search Movie Name ...'></input>
        </div> : false}
        <div onMouseEnter={showDropSearch} className='absolute cursor-pointer top-3.5 right-1'><Search /></div>
      </div>

      <div className='relative'>
        <div className='group cursor-pointer'>
          <img className='w-[50px] h-[50px] rounded-full' src='https://picsum.photos/200/300' alt='foto-profil'/>
          <div id='drop-profile' className='group-hover:block hidden absolute top-[50px] right-1 border-[1px] border-[#DEDED] rounded-[2px] bg-[#FCFDFE] pl-2 pr-8 pt-1 pb-3'>
          <div onClick={directToProfile} className='mb-3 cursor-pointer hover:font-bold'>Profile</div>
          <div onClick={directLogout} className='cursor-pointer hover:font-bold'>Logout</div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header
