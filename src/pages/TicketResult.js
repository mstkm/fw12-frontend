/* eslint-disable no-constant-condition */
import React from 'react'
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import TicketActive from '../assets/components/TicketActive'
import TicketExpired from '../assets/components/TicketExpired'
import http from '../helpers/http'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const TicketResult = () => {
  const { id } = useParams()
  const token = useSelector(state => state?.auth?.token)

  // Get transaction
  const [transaction, setTransaction] = React.useState({})
  React.useEffect(() => {
    getTransaction().then(response => {
      setTransaction(response?.data?.results)
    })
  }, [])
  const getTransaction = async () => {
    try {
      const response = await http(token).get(`/profile/transaction/details/${id}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  // Get movie
  const [movie, setMovie] = React.useState({})
  const movieId = transaction?.movieId
  React.useEffect(() => {
    getMovie().then((response) => {
      setMovie(response?.data?.results)
    })
  }, [movieId])
  const getMovie = async () => {
    try {
      const response = await http().get(`/movies/${movieId}`)
      return response
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header />

      <div className="hidden md:block bg-[#E5E5E5] py-10 px-[190px] font-[mulish]">
        <div className="flex flex-col justify-center items-center bg-white rounded-[8px] py-10">
          <div className="font-bold mb-5">Proof of Payment</div>
          {movie?.genre
            ? <div className="flex w-[600px] border-[1px] rounded-[16px]">
            <div className="flex-[70%]">
              <div className="flex bg-primary rounded-tl-[16px] items-center px-10 mb-5 py-5">
                <div className="flex-1">
                  <img className="w-[115px] h-[28px]" src={require('../assets/images/bannerKarcisWhite.png')} alt='Logo' />
                </div>
                <div className="text-white">Admit One</div>
              </div>
              <div className="px-10 mb-3">
                <div className="text-[#AAAAAA]">Movie</div>
                <div className="font-bold">{transaction?.movieTitle}</div>
              </div>
              <div className="grid grid-cols-3 gap-3 px-10 pb-3">
                <div>
                  <div className="text-[#AAAAAA]">Date</div>
                  <div className="font-bold">{moment(transaction?.bookingDate).format('ll')}</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Time</div>
                  <div className="font-bold">{`${transaction?.bookingTime?.split(':')[0]}:${transaction?.bookingTime?.split(':')[1]}${transaction?.bookingTime?.split(':')[0] < 12 ? 'am' : 'pm'}`}</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Category</div>
                  <div className="font-bold">{movie?.genre.split(', ')[0]}</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Count</div>
                  <div className="font-bold">{transaction?.seatNum?.split(', ').length} Pieces</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Seats</div>
                  <div className="font-bold">{transaction?.seatNum}</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Price</div>
                  <div className="font-bold text-lg">Rp{new Intl.NumberFormat('en-DE').format(transaction?.totalPrice)}</div>
                </div>

              </div>

            </div>

            <div className="flex-[30%] border-l-2 border-dashed">
              <div className="bg-primary rounded-tr-[16px] flex justify-center py-5">
                <img className="w-[115px] h-[28px]" src={require('../assets/images/bannerKarcisWhite.png')} alt='Logo' />
              </div>
              <div className="flex justify-center items-center py-5">
                {(moment().format() < moment(transaction?.bookingDate).format().split('T')[0] + 'T' + transaction?.bookingTime) ? <TicketActive /> : <TicketExpired />}
              </div>
            </div>
          </div>
            : <div>
            <Skeleton className='h-[300px]' />
          </div>
          }
        </div>
      </div>

      {/* Responsive mobile */}
      <div className='md:hidden bg-[#E5E5E5] py-10 px-10 font-[mulish]'>
        {movie?.genre
          ? <div className='relative bg-white rounded-xl'>
          <div className='absolute -left-8 top-60 bg-[#E5E5E5] w-[50px] h-[50px] rounded-full'></div>
          <div className='absolute -right-8 top-60 bg-[#E5E5E5] w-[50px] h-[50px] rounded-full'></div>
          <div className='flex justify-center py-10 border-b-2 border-[#E5E5E5] border-dashed'>
            <img src={require('../assets/images/qr-code.png')} alt='codeQR' />
          </div>
          <div className='flex flex-col gap-5 px-8 pt-16 pb-10'>
            <div className='flex'>
              <div className='flex-1'>
                <p>Movie</p>
                <p className='font-bold'>{movie?.title}</p>
              </div>
              <div className='w-[100px]'>
                <p>Category</p>
                <p className='font-bold'>{movie?.genre?.split(', ')[0]}</p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex-1'>
                <p>Date</p>
                <p className='font-bold'>{moment(movie?.bookingDate).format('ll')}</p>
              </div>
              <div className='w-[100px]'>
                <p>Time</p>
                <p className='font-bold'>{`${transaction?.bookingTime?.split(':')[0]}:${transaction?.bookingTime?.split(':')[1]}${transaction?.bookingTime?.split(':')[0] < 12 ? 'am' : 'pm'}`}</p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex-1'>
                <p>Count</p>
                <p className='font-bold'>{transaction?.seatNum?.split(', ').length} Pieces</p>
              </div>
              <div className='w-[100px]'>
                <p>Seats</p>
                <p className='font-bold'>{transaction?.seatNum}</p>
              </div>
            </div>
            <div className='flex border-[1px] border-black rounded p-3 mt-8'>
              <div className='flex-1'>
                <p>Total</p>
              </div>
              <div>
                <p className='font-bold'>Rp{new Intl.NumberFormat('en-DE').format(transaction?.totalPrice)}</p>
              </div>
            </div>
          </div>
        </div>
          : <div>
        <Skeleton className='h-[500px]' />
      </div>}
      </div>
      <Footer />
    </>
  )
}

export default TicketResult
