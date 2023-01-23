/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React from 'react'
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import http from '../helpers/http'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const OrderHistory = () => {
  const navigate = useNavigate()
  const token = useSelector((state) => state?.auth?.token)
  const { id } = jwt_decode(token)
  const directToAccountSetting = () => {
    navigate('/profile')
  }

  // Get user data by id
  const [userResponse, setUserResponse] = React.useState(null)
  const user = userResponse?.data?.results
  const fullName = user?.firstName + ' ' + user?.lastName
  React.useEffect(() => {
    getUser().then(response => {
      setUserResponse(response)
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

  // Get transaction
  const [transactions, setTransactions] = React.useState([])
  const [messageError, setMessageError] = React.useState(null)
  React.useEffect(() => {
    getTransactions().then(response => {
      setTransactions(response?.data)
    })
  }, [transactions])
  const getTransactions = async () => {
    try {
      const response = await http(token).get(`/transactions/${id}`)
      return response
    } catch (error) {
      console.log(error)
      setMessageError(error?.response)
    }
  }
  return (
    <>
    <Header />

    <div className="flex flex-col md:flex-row gap-8 bg-[#E5E5E5] px-5 md:px-[100px] py-10 font-[mulish]">
      <div className="flex-[30%]">
        {!user?.firstName && <Skeleton className='h-[350px]' />}
        {user?.firstName && <div className="bg-white rounded-[24px] p-5">
          <div className="text-[#4E4B66] mb-5">INFO</div>
          <div className="flex flex-col justify-center items-center mb-8">
            <img className="w-[100px] h-[100px] rounded-full mb-5" src={user?.picture || 'https://res.cloudinary.com/dvzrmzldr/image/upload/v1673836551/Desain_tanpa_judul_bsia1l.png'} alt="foto-profil" />
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
          <div onClick={directToAccountSetting} className="text-[#4E4B66] py-5 cursor-pointer hover:font-bold ">Account Setting</div>
          <div className="text-[#4E4B66] font-bold  py-5 cursor-pointer border-b-2 border-primary">Order History</div>
        </div>
        {transactions?.results?.map((transaction, index) => {
          return (
            <div key={String(index)} className="gap-12 bg-white rounded-[24px] p-8 mb-5">
              <div className="flex items-center border-b-[2px] pb-5 mb-5">
                <div className="flex-1">
                  <div className="text-[#AAAAAA] text-sm">{`${moment(transaction?.bookingDate).format('ll')} - ${transaction?.bookingTime.split(':')[0]}:${transaction?.bookingTime.split(':')[1]}${transaction?.bookingTime.split(':')[0] < 12 ? 'am' : 'pm'}`}</div>
                  <div className="font-bold text-xl">{transaction?.movieTitle}</div>
                </div>
                <div>
                  <img src={transaction?.cinemaPicture} alt='CineOne21' />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-1">
                  <div className={`flex items-center justify-center w-[150px] h-[40px] ${(moment().format() < moment(transaction?.bookingDate).format().split('T')[0] + 'T' + transaction?.bookingTime) ? 'bg-[#00BA88]' : 'bg-black'} rounded-[4px] text-white`}>Ticket Active</div>
                </div>
                <div onClick={() => navigate(`/ticketResult/${transaction?.id}`)} className="text-[#AAAAAA] cursor-pointer hover:font-bold hover:text-primary">See Details</div>
              </div>
            </div>
          )
        })}
        {transactions && !transactions?.message && <div>
          <Skeleton className='h-[300px]' />
        </div>}
        {messageError && !messageError?.data?.message && <div>
          <Skeleton className='h-[300px]' />
        </div>}
        {messageError && <p className='text-center'>No results</p>}
      </div>
    </div>

    <Footer />
    </>
  )
}

export default OrderHistory
