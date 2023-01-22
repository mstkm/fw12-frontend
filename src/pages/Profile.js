/* eslint-disable camelcase */
import React from 'react'
import Header from '../assets/components/Header'
import { Eye } from 'react-feather'
import Footer from '../assets/components/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import jwt_decode from 'jwt-decode'
import http from '../helpers/http'
import { Oval } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton'

const Profile = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const { id } = jwt_decode(token)

  const directToOrderHistory = () => {
    navigate('/orderHistory')
  }

  // Get user data by id
  const [userResponse, setUserResponse] = React.useState(null)
  const user = userResponse?.data?.results
  const [profilePicture, setProfilePicture] = React.useState(null)
  const fullName = user?.firstName + ' ' + user?.lastName
  React.useEffect(() => {
    getUser().then(response => {
      setUserResponse(response)
    })
  }, [])
  const getUser = async () => {
    try {
      const response = await http(token).get(`/users/${id}`)
      setProfilePicture(response?.data?.results?.picture)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  // Update picture
  const [openModalPicture, setOpenModalPicture] = React.useState(false)
  const [picture, setPicture] = React.useState(null)
  const [alertSuccessMessage, setAlertSuccessMessage] = React.useState(null)
  const [alertErrorMessage, setAlertErrorMessage] = React.useState(null)
  const [loadingUpdatePicture, setLoadingUpdatePicture] = React.useState(false)
  const openModal = () => {
    setOpenModalPicture(false)
    setPicture(null)
    setAlertSuccessMessage(null)
    setAlertErrorMessage(null)
  }
  const updatePicture = async () => {
    if (picture) {
      setLoadingUpdatePicture(true)
      setAlertErrorMessage(null)
      try {
        const form = new FormData()
        form.append('picture', picture)
        const response = await http(token).patch('/profile/update', form, {
          headers: {
            'Content-type': 'multipart/form-data'
          }
        })
        setAlertSuccessMessage('Update success')
        setLoadingUpdatePicture(false)
        setTimeout(() => {
          setAlertSuccessMessage(null)
          setOpenModalPicture(false)
          setPicture(null)
        }, 3000)
        setProfilePicture(response?.data?.results?.picture)
        return response
      } catch (error) {
        console.log(error)
      }
    } else {
      setAlertErrorMessage('Picture not found. Please choose picture!')
    }
  }

  return (
    <div className='relative'>
    <Header />
    <div className="relative flex flex-col md:flex-row gap-8 bg-[#E5E5E5] px-5 md:px-[100px] py-10 font-[mulish]">
      {openModalPicture && <div className='fixed top-0 -left-0 overflow-auto w-full h-screen bg-black/50 z-10 flex justify-center items-center'>
        <div className='bg-white rounded p-10'>
          <div>
            <input onChange={e => {
              setPicture(e.target.files[0])
              setAlertErrorMessage(false)
            }} className='file:bg-primary file:border-0 file:rounded file:text-white file:btn file:normal-case hover:file:bg-blue-600 cursor-pointer bg-slate-300 rounded' type="file" accept="image/png, image/jpeg" />
          </div>
          {loadingUpdatePicture && <div className='mt-5 flex justify-center'>
            <Oval
              height={25}
              width={25}
              color="#00005C"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel='oval-loading'
              secondaryColor="grey"
              strokeWidth={5}
              strokeWidthSecondary={5}
            />
          </div>}
          {alertSuccessMessage && <p className='text-green-600 text-center mt-5'>{alertSuccessMessage}</p>}
          {alertErrorMessage && <p className='text-red-600 text-center mt-5'>{alertErrorMessage}</p>}
          <div className='flex justify-center gap-5 mt-10'>
            <div className='flex w-[100px]'>
              <button onClick={openModal} className='btn btn-sm bg-slate-600 hover:bg-slate-800'>Cancel</button>
            </div>
            <div className='flex w-[100px]'>
              <button onClick={updatePicture} className='btn btn-sm bg-primary hover:bg-blue-600'>Save</button>
            </div>
          </div>
        </div>
      </div>}
      <div className="flex-[30%]">
        {!user?.firstName && <Skeleton className='h-[350px]' />}
        {user?.firstName && <div className="bg-white rounded-[24px] p-5">
          <div className="text-[#4E4B66] mb-5">INFO</div>
          <div className="flex flex-col justify-center items-center mb-8">
            <img onClick={() => setOpenModalPicture(true)} className="w-[100px] h-[100px] rounded-full mb-5 cursor-pointer" src={profilePicture || 'https://res.cloudinary.com/dvzrmzldr/image/upload/v1673836551/Desain_tanpa_judul_bsia1l.png'} alt="foto-profil" />
            <div className="font-bold mb-2">{fullName}</div>
            <div className="text-[#4E4B66]">Moviegoers</div>
          </div>
          <div className="flex justify-center pt-5 border-t-[1px]">
            <button className="bg-primary w-[150px] h-[50px] text-white rounded-[16px]">Logout</button>
          </div>
        </div>}
      </div>

      <div className="flex-[70%]">
        <div className="flex gap-12 bg-white rounded-[24px] px-8 mb-5">
          <div className="text-[#4E4B66] font-bold py-5 border-b-2 border-primary cursor-pointer">Account Setting</div>
          <div onClick={directToOrderHistory} className="text-[#4E4B66] py-5 cursor-pointer hover:font-bold">Order History</div>
        </div>
        {!user?.firstName && <Skeleton className='h-[350px]' />}
        {user?.firstName && <><div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
            <div className="text-[#4E4B66] border-b-[1px] pb-2 mb-5">Details Information</div>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <div className="text-[#4E4B66] mb-2">First Name</div>
                <div>
                  <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text' defaultValue={user?.firstName}></input>
                </div>
              </div>
              <div>
                <div className="text-[#4E4B66] mb-2">Last Name</div>
                <div>
                  <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text' defaultValue={user?.lastName}></input>
                </div>
              </div>
              <div>
                <div className="text-[#4E4B66] mb-2">Email</div>
                <div>
                  <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='email' defaultValue={user?.email}></input>
                </div>
              </div>
              <div>
                <div className="text-[#4E4B66] mb-2">Phone Number</div>
                <div>
                  <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='email' defaultValue={user?.phoneNumber}></input>
                </div>
              </div>
            </div>
          </div><div className="mb-8">
              <button className="bg-primary w-[350px] h-[50px] text-white rounded-[16px]">Update changes</button>
            </div></>}

        <div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
          <div className="text-[#4E4B66] border-b-[1px] pb-2 mb-5">Account and Privacy</div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <div className="text-[#4E4B66] mb-2">New Password</div>
              <div className="relative">
                <Eye className="absolute right-4 top-3" />
                <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='password' placeholder="Write your password"></input>
              </div>
            </div>
            <div>
              <div className="text-[#4E4B66] mb-2">Confirm Password</div>
              <div className="relative">
                <Eye className="absolute right-4 top-3" />
                <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text' placeholder="Confirm your password"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <button className="bg-primary w-[350px] h-[50px] text-white rounded-[16px]">Update changes</button>
        </div>

      </div>
    </div>

    <Footer />
    </div>
  )
}

export default Profile
