/* eslint-disable camelcase */
import React from 'react'
import { Search, Menu } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout as logoutAction } from '../../redux/reducers/auth'
import http from '../../helpers/http'
import jwt_decode from 'jwt-decode'

const HeaderAdmin = (profilePicture) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector(state => state?.auth?.token)
  const { id } = jwt_decode(token)

  // Get user
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    getUser().then(response => {
      setUser(response?.data?.results)
    })
  }, [])
  const getUser = async () => {
    try {
      const response = await http(token).get(`/users/${id}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const directToDashboard = () => {
    navigate('/dashboard')
  }
  const directToManageMovie = () => {
    navigate('/manageMovie')
  }
  const directTomanageSchedule = () => {
    navigate('/manageSchedule')
  }
  const directToProfile = () => {
    navigate('/profile')
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

  // Show / hide drop menu
  const [dropMenu, setDropMenu] = React.useState(false)
  const handleDropMenu = () => {
    if (dropMenu === false) {
      setDropMenu(true)
    } else {
      setDropMenu(false)
    }
  }

  // Handle logout
  const handleLogout = () => {
    dispatch(logoutAction())
    navigate('/')
  }

  return (
    <>
    <div className='hidden md:flex items-center px-[100px] py-7 font-[mulish]'>
      <div className='flex gap-10 flex-1 items-center'>
        <img className='w-1/4' src={require('../images/bannerKarcis.png')} alt='logo' />
        <div onClick={directToDashboard} className='cursor-pointer hover:font-bold'>Dashboard</div>
        <div onClick={directToManageMovie} className='cursor-pointer hover:font-bold'>Manage Movie</div>
        <div onClick={directTomanageSchedule} className='cursor-pointer hover:font-bold'>Manage Schedule</div>
      </div>

      <div onMouseLeave={hiddenDropSearch} className='relative w-[250px] h-[50px] mr-[50px]'>
        {dropSearch
          ? <div className='flex items-center relative z-10'>
            <div className='absolute top-3.5 left-3 cursor-pointer'><Search /></div>
            <input className='w-[250px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-12 focus:outline-none' placeholder='Search Movie Name ...'></input>
          </div>
          : false}
        <div onMouseEnter={showDropSearch} className='absolute cursor-pointer top-3.5 right-1'><Search /></div>
      </div>

      <div className='relative'>
        <div className='group cursor-pointer'>
          <img className='w-[50px] h-[50px] rounded-full' src={user?.picture || profilePicture?.image || 'https://res.cloudinary.com/dvzrmzldr/image/upload/v1673836551/Desain_tanpa_judul_bsia1l.png'} alt='foto-profil' />
          <div id='drop-profile' className='z-20 group-hover:block hidden absolute top-[50px] right-1 border-[1px] border-[#DEDED] rounded-[2px] bg-[#FCFDFE] pl-2 pr-8 pt-1 pb-3'>
            <div onClick={directToProfile} className='mb-3 cursor-pointer hover:font-bold'>Profile</div>
            <div onClick={handleLogout} className='cursor-pointer hover:font-bold'>Logout</div>
          </div>
        </div>
      </div>
    </div>

    {/* Responsive web */}
    <div className='sticky top-0 md:hidden bg-white z-10'>
      <div className='flex p-5'>
        <div className='flex-1'>
          <img className='w-1/4' src={require('../images/bannerKarcis.png')} alt='logo' />
        </div>
        <div onClick={handleDropMenu}>
          <Menu />
        </div>
      </div>
      {dropMenu && <div className='absolute top-12 right-0 w-full flex flex-col items-center justify-center bg-white z-10'>
        <div className='relative w-full p-5 flex justify-center'>
          <input type="text" placeholder="Search ..." className="input pl-12 input-bordered w-full max-w-xs focus:outline-none" />
          <Search className='absolute top-8 left-16 ' />
        </div>
        <div onClick={() => navigate('/dashboard')} className='py-5 w-full border-t-2'>
          <p className='text-center'>Dashboard</p>
        </div>
        <div onClick={() => navigate('/manageMovie')} className='py-5 w-full border-t-2'>
          <p className='text-center'>Manage Movie</p>
        </div>
        <div onClick={() => navigate('/manageSchedule')} className='py-5 w-full border-t-2'>
          <p className='text-center'>Manage Schedule</p>
        </div>
        <div onClick={() => navigate('/profile')} className='py-5 w-full border-t-2'>
          <p className='text-center'>Profile</p>
        </div>
        <div onClick={handleLogout} className='py-5 w-full border-t-2'>
          <p className='text-center'>Logout</p>
        </div>
        <div className='py-10 w-full border-t-2'>
          <p className='text-center'>© 2023 Karcis. All Rights Reserved.</p>
        </div>
      </div>}
    </div>
    </>
  )
}

export default HeaderAdmin
