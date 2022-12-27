import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"
import { AlertTriangle } from "react-feather"
import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import http from "../helpers/http"
import { choosePayment as choosePaymentAction } from "../redux/reducers/transactions"
import { useNavigate } from "react-router-dom"

const Payment = () => {
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate()
  if (!token) {
    navigate('/signin')
  }

  let bookingDate = useSelector((state) => state.transactions.bookingDate)
  const date = new Date(bookingDate).getDate()
  const [day, setDay] = React.useState(new Date(bookingDate).getDay() + 1)
  React.useEffect(() => {
    if (day === 1) {
      setDay('Sunday')
    } else if (day === 2) {
      setDay('Monday')
    } else if (day === 3) {
      setDay('Tuesday')
    } else if (day === 4) {
      setDay('Wednesday')
    } else if (day === 5) {
      setDay('Thursday')
    } else if (day === 6) {
      setDay('Friday')
    } else if (day === 7) {
      setDay('Saturday')
    }
  }, [day])
  const [month, setMonth] = React.useState(new Date(bookingDate).getMonth() + 1)
  React.useEffect(() => {
    if (month === 1) {
      setMonth('January')
    } else if (month === 2) {
      setMonth('February')
    } else if (month === 3) {
      setMonth('March')
    } else if (month === 4) {
      setMonth('April')
    } else if (month === 5) {
      setMonth('May')
    } else if (month === 6) {
      setMonth('June')
    } else if (month === 7) {
      setMonth('July')
    } else if (month === 8) {
      setMonth('August')
    } else if (month === 9) {
      setMonth('September')
    } else if (month === 10) {
      setMonth('October')
    } else if (month === 11) {
      setMonth('November')
    } else if (month === 12) {
      setMonth('December')
    }
  }, [month])
  const year = new Date(bookingDate).getFullYear()
  bookingDate = `${day}, ${date} ${month} ${year}`
  const bookingTime = useSelector((state) => state.transactions.bookingTime)
  const cinemaName = useSelector((state) => state.transactions.cinemaName)
  const seatNum = useSelector((state) => state.transactions.seatNum)
  const price = useSelector((state) => state.transactions.price)
  const userId = useSelector((state) => state.transactions.userId)
  const cinemaId = useSelector((state) => state.transactions.cinemaId)
  const movieScheduleId = useSelector((state) => state.transactions.movieScheduleId)
  const paymentMethodId = useSelector((state) => state.transactions.paymentMethodId)

  // Get data movie by id
  const movieId = useSelector((state) => state.transactions.movieId)
  const [movie, setMovie] = React.useState({})
  React.useEffect(() => {
    getMovie().then((data) => {
      setMovie(data)
    })
  }, [movieId]);
  const getMovie = async () => {
    const {data} = await http().get(`/movies/${movieId}`);
    return data;
  }
  const title = movie?.results?.title

  // Get payment method
  const [paymentMethod, setPaymentMethod] = React.useState([])
  React.useEffect(() => {
    getPaymentMethod().then((data) => {
      setPaymentMethod(data)
    })
  }, [])
  const getPaymentMethod = async () => {
    const {data} = await http().get('/paymentMethod?limit=8')
    return data
  }

  const dispatch = useDispatch()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(null)
  const [fullName, setFullName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [showAlertPaymentMethod, setShowAlertPaymentMethod] = React.useState(false)
  const [showAlertForm, setShowAlertForm] = React.useState(false)

  const booking = useSelector((state) => state.transactions.bookingDate)
  const payOrder = async () => {
    if (selectedPaymentMethod === null) {
      setShowAlertPaymentMethod(true)
    } else if (fullName === '' || email === '' || phoneNumber === '') {
      setShowAlertForm(true)
    } else {
      dispatch(choosePaymentAction({
        paymentMethodId: selectedPaymentMethod,
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        statusId: 1
      }))
      const {data} = await http(token).post('/profile/transaction', {
        bookingDate: booking,
        movieId,
        userId,
        cinemaId,
        movieScheduleId,
        fullName,
        email,
        phoneNumber,
        statusId: 1,
        paymentMethodId,
        seatNum,
        bookingTime
      })
      return data;
    }
  }


  return(
    <div>
      <Header />

      <div className="flex gap-8 px-[100px] py-10 font-[mulish] bg-[#EFF0F7]">
        <div className="flex-[70%]">
          <div className="mb-8">
            <div className='font-bold text-lg mb-5'>Payment Info</div>
            <div className="bg-[white] p-5 rounded-[6px]">
              <div className="flex border-b-[1px] p-3">
                <div className="flex-1 text-[#6B6B6B]">Date & time</div>
                <div className="font-bold">{bookingDate + ' at ' + bookingTime}</div>
              </div>
              <div className="flex border-b-[1px] p-3">
                <div className="flex-1 text-[#6B6B6B]">Movie title</div>
                <div className="font-bold">{title}</div>
              </div>
              <div className="flex border-b-[1px] p-3">
                <div className="flex-1 text-[#6B6B6B]">Cinema name</div>
                <div className="font-bold">{cinemaName + ' Cinema'}</div>
              </div>
              <div className="flex border-b-[1px] p-3">
                <div className="flex-1 text-[#6B6B6B]">Number of tickets</div>
                <div className="font-bold">{seatNum.length + ' pieces'}</div>
              </div>
              <div className="flex p-3">
                <div className="flex-1 text-[#6B6B6B]">Total payment</div>
                <div className="font-bold text-lg">{'Rp'+new Intl.NumberFormat('id-ID').format(Number(seatNum.length*price))}</div>
              </div>
            </div>
          </div>

          <div>
            <div className='font-bold text-lg mb-5'>Choose a Payment Method</div>
            <div className="bg-[white] p-5 rounded-[6px] mb-8">
              <div className="grid grid-cols-4 gap-5">
                {paymentMethod?.results?.map((payment, index) => {
                  return(
                    <button onClick={()=>setSelectedPaymentMethod(payment.id) & setShowAlertPaymentMethod(false)} key={String(index)} className={`flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px] hover:border-primary ${(payment.id === selectedPaymentMethod) ? ' bg-primary' : ''}`}>
                      <img src={payment.picture} alt={payment.name} />
                   </button>
                  )
                })}

              </div>
              <div className='flex items-center py-8'>
                <div className='flex-1'>
                  <div className='border-[1px] bg-[#DEDEDE]'></div>
                </div>
                <div className='text-primary px-5 cursor-pointer hover:font-bold'>or</div>
                <div className='flex-1 relative'>
                  <div className='border-[1px] bg-[#DEDEDE]'></div>
                </div>
              </div>
              <div className="text-center">Pay via cash. <span className="text-primary">See how it work</span></div>
            </div>

            <div className="flex">
              <div className="flex-1">
                <button onClick={() => navigate('/order')} className="flex justify-center items-center w-[300px] h-[50px] p-5 border-[2px] border-primary text-primary font-bold rounded-[4px] hover:bg-primary hover:text-white">Previous Step</button>
              </div>
              <div>
                <button onClick={payOrder} className="flex justify-center items-center w-[300px] h-[50px] p-5 border-[2px] border-primary text-primary font-bold rounded-[4px] hover:bg-primary hover:text-white">Pay Your Order</button>
              </div>

            </div>

          </div>
        </div>

        <div className="flex-[30%]">
          <div className='flex-1 font-bold text-lg mb-5'>Personal Info</div>
          <div className="bg-white p-5 rounded-[6px]">
            <div className="mb-5">
              <div className="mb-2">Full Name</div>
              <div>
                <input onChange={(e) => setFullName(e.target.value) & setShowAlertForm(false)} className="border-[1px] w-[100%] h-[50px] rounded-[4px] pl-5 focus:outline-none" type='text' placeholder="Jonas El Rodriguez"></input>
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-2">Email</div>
              <div>
                <input onChange={(e) => setEmail(e.target.value) & setShowAlertForm(false)} className="border-[1px] w-[100%] h-[50px] rounded-[4px] pl-5 focus:outline-none" type='email' placeholder="jonasrodri123@gmail.com"></input>
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-2">Phone Number</div>
              <div>
                <input onChange={(e) => setPhoneNumber(e.target.value) & setShowAlertForm(false)} className="border-[1px] w-[100%] h-[50px] rounded-[4px] pl-5 focus:outline-none" type='text' placeholder="+62 | 81445687121"></input>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center justify-center border-[1px] w-[100%] h-[50px] rounded-[4px] bg-[#F4B740]"><AlertTriangle className="mr-5"/>Fill your data correctly.</div>
            </div>
            {showAlertPaymentMethod ? <div className="mb-5">
              <div className="flex items-center justify-center border-[1px] w-[100%] h-[50px] rounded-[4px] bg-red-300 border-red-500 p2">
                 <p>Please select a payment method</p>
              </div>
            </div> : false}
            {showAlertForm ? <div className="mb-5">
              <div className="flex items-center justify-center border-[1px] w-[100%] h-[50px] rounded-[4px] bg-red-300 border-red-500 text-center">
                 <p>Name, email and mobile number cannot be empty</p>
              </div>
            </div> : false}
          </div>
        </div>
      </div>

    <Footer />
    </div>
  )
}

export default Payment
