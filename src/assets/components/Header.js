import React from 'react';
import { Search } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const DropSearch = () => {
  return(
    <div id='searchMovie' className='flex items-center relative'>
      <div className='absolute top-3.5 left-3 cursor-pointer'><Search /></div>
      <input className='w-[250px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-12 focus:outline-none' placeholder='Search Movie Name ...'></input>
  </div>
  )
}

const DropPhotoProfile = () => {
  return(
    <div id='drop-profile' className='absolute top-[50px] right-1 border-[1px] border-[#DEDED] rounded-[2px] bg-[#FCFDFE] pl-2 pr-8 pt-1 pb-3'>
    <div className='mb-3 cursor-pointer hover:font-bold'>Profile</div>
    <div className='cursor-pointer hover:font-bold'>Logout</div>
  </div>
  )
}

const Header = () => {
  const navigate = useNavigate()
  const directToHome = () => {
    navigate('/home')
  }

  const directToViewAll = () => {
    navigate('/viewAll')
  }

  const [clickSearch, getClickSearch] = React.useState(false)
  const showDropSearch = () => {
    if (clickSearch === false) {
      getClickSearch(true)
    } else {
      getClickSearch(false)
    }
  }

  const [clickPhotoProfile, getClickPhotoProfile] = React.useState(false)
  const showDropPhotoProfile = () => {
    if (clickPhotoProfile === false) {
      getClickPhotoProfile(true)
    } else {
      getClickPhotoProfile(false)
    }
  }

  return(
    <div className='flex items-center px-[100px] py-7 font-[mulish]'>
      <div className='flex flex-1 items-center'>
        <img className='w-[120.41px] mr-[80px]' src={require('../images/logo.png')} alt='logo' />
        <div onClick={directToHome} className='mr-[80px] cursor-pointer hover:font-bold'>Home</div>
        <div onClick={directToViewAll} className='cursor-pointer hover:font-bold'>List Movie</div>
      </div>

      <div className='relative w-[250px] h-[50px] mr-[50px]'>
        {clickSearch ? <DropSearch /> : false}
        <div onClick={showDropSearch} className='absolute cursor-pointer top-3.5 right-1'><Search /></div>
      </div>

      <div className='relative'>
        <div onClick={showDropPhotoProfile} className='cursor-pointer'>
          <img className='w-[50px] h-[50px] rounded-full' src='https://picsum.photos/200/300' alt='foto-profil'/>
        </div>
        {clickPhotoProfile ? <DropPhotoProfile /> : false}
      </div>
    </div>
  )
}

export default Header
