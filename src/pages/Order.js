import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"
import http from "../helpers/http"
import { useSelector, useDispatch } from "react-redux"
import React from 'react'
import { chooseSeat as chooseSeatAction, changeMovie as changeMovieAction } from "../redux/reducers/transactions"
import { useNavigate } from "react-router-dom"

const Order = () => {
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate()
  if (!token) {
    navigate('/signin')
  }
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
  const price = useSelector((state) => state.transactions.price)

  // Select seat
  const [selectedSeat, setSelectedSeat] = React.useState([])

  const selectSeat = (seat) => {
    if (!selectedSeat.includes(seat)) {
      setSelectedSeat([...selectedSeat, seat])
    } else {
      setSelectedSeat(selectedSeat.filter(el => el !== seat))
    }
  }
  const dispatch = useDispatch()
  const [showAlertChooseSeat, setShowAlertChooseSeat] = React.useState(false)
  const checkOut = () => {
    if (selectedSeat.length) {
      dispatch(chooseSeatAction({seatNum: selectedSeat}))
      navigate('/payment')
    } else {
      setShowAlertChooseSeat(true)
    }
  }
  const closeShowAlert = () => {
    setShowAlertChooseSeat(false)
  }
  const changeMovie = () => {
    dispatch(changeMovieAction({
      bookingDate: null,
      bookingTime: null,
      movieId: null,
      cinemaId: null,
      price: null,
      seatNum: null
    }))
    navigate('/viewAll')
  }

  return(
    <div>
      <Header />

      <div className="flex gap-8 px-[100px] py-10 font-[mulish] bg-[#EFF0F7]">
        <div className="flex-[70%]">
          <div className="mb-8">
            <div className='flex-1 font-bold text-lg mb-5'>Movie Selected</div>
            <div className="flex bg-[white] p-5 rounded-[6px]">
              <div className='flex-1 font-bold text-xl'>{title}</div>
              <div>
                <button onClick={changeMovie} className="w-[140px] h-[35px] border-[1px] bg-[#EFF0F7] rounded-[4px] text-[#5F2EEA] font-bold">Change Movie</button>
              </div>
            </div>
          </div>

          <div>
            <div className='flex-1 font-bold text-lg mb-5'>Choose Your Seat</div>
            <div className="bg-[white] py-10 px-[100px] rounded-[6px] mb-8">
              <div className="flex flex-col items-center ">
                <div className="font-bold mb-2">Screen</div>
                <div className="border-[1px] w-[50%] h-[8px] bg-[#D6D8E7] rounded-[4px] mb-5"></div>
              </div>

              {/* Select Seat */}
              <div className="grid grid-cols-2 mb-8 gap-10">
                <div className="grid gap-2">{['A', 'B', 'C', 'D', 'E', 'F', 'G', ' '].map((alphabet, i) => {
                  return(
                    <div key={String(i)} className="grid grid-cols-8 gap-2">{[0, 1, 2, 3, 4, 5, 6, 7].map((number, i) => {
                      if ((number > 0)) {
                        if (alphabet !== ' ') {
                          const seatNumber = alphabet+String(number)
                          return(
                          <button key={String(i)} onClick={() => selectSeat(seatNumber)} className={`flex justify-center items-center w-5 h-5 hover:bg-[#5F2EEA] rounded ${selectedSeat.includes(seatNumber) ? ' bg-[#5F2EEA]' : ' bg-[#D6D8E7]'}`} />
                        )} else {
                          return(<button key={String(i)} className="flex justify-center items-center w-5 h-5">{number}</button>)
                        }
                      } else {
                        return(<button key={String(i)} className="flex justify-center items-center w-5 h-5">{alphabet}</button>)
                      }
                    })}</div>
                  )
                })}</div>
                <div className="grid gap-2">{['A', 'B', 'C', 'D', 'E', 'F', 'G', ' '].map((alphabet, i) => {
                  return(
                    <div key={String(i)} className="grid grid-cols-8">{[8, 9, 10, 11, 12, 13, 14].map((number, i) => {
                      if ((number > 0)) {
                        if (alphabet !== ' ') {
                          const seatNumber = alphabet+String(number)
                          return(<button key={String(i)} onClick={() => selectSeat(seatNumber)} className={`flex justify-center items-center w-5 h-5 hover:bg-[#5F2EEA] rounded ${selectedSeat.includes(seatNumber) ? ' bg-[#5F2EEA]' : ' bg-[#D6D8E7]'}`} />
                        )} else {
                          return(<button key={String(i)} className="flex justify-center items-center w-5 h-5">{number}</button>)
                        }
                      } else {
                        return(<button key={String(i)} className="flex justify-center items-center w-5 h-5">{alphabet}</button>)
                      }
                    })}</div>
                  )
                })}</div>
              </div>

              <div className="font-bold mb-5">Seating Key</div>
              <div className="flex gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div>Available</div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-[26px] h-[26px] bg-[#5F2EEA] rounded-[4px]"></div>
                  <div>Selected</div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-[26px] h-[26px] bg-[#6E7191] rounded-[4px]"></div>
                  <div>Sold</div>
                </div>
              </div>

            </div>

            <div className="flex">
              <div className="flex-1">
                <button onClick={changeMovie} className="flex justify-center items-center w-[300px] h-[50px] p-5 border-[2px] border-[#5F2EEA] text-[#5F2EEA] font-bold rounded-[4px] hover:bg-[#5F2EEA] hover:text-white">Change your movie</button>
              </div>
              <div>
                <button onClick={checkOut} className="flex justify-center items-center w-[300px] h-[50px] p-5 border-[2px] border-[#5F2EEA] text-[#5F2EEA] font-bold rounded-[4px] hover:bg-[#5F2EEA] hover:text-white">Checkout now</button>
              </div>

            </div>

          </div>
        </div>

        <div className="flex-[30%]">
          <div className='flex-1 font-bold text-lg mb-5'>Order Info</div>
          <div className="bg-white p-5 rounded-[6px]">
            <div className="flex flex-col items-center mb-5">
              <img className="w-[50%] mb-3" src={require('../assets/images/cineone21.png')} alt='CineOne21' />
              <div className="font-bold">CineOne21 Cinemas</div>
            </div>
            <div className="flex mb-2">
              <div className="flex-1 text-sm text-[#6B6B6B]">Movie selected</div>
              <div className="text-sm font-bold">{title}</div>
            </div>
            <div className="flex mb-2">
              <div className="flex-1 text-sm text-[#6B6B6B]">{bookingDate}</div>
              <div className="text-sm font-bold">{bookingTime}</div>
            </div>
            <div className="flex mb-2">
              <div className="flex-1 text-sm text-[#6B6B6B]">One ticket price</div>
              <div className="text-sm font-bold">{'Rp'+new Intl.NumberFormat('id-ID').format(Number(price))}</div>
            </div>
            <div className="flex mb-2">
              <div className="flex-1 text-sm text-[#6B6B6B]">Seat choosed</div>
              <div className="text-sm font-bold">{(!selectedSeat.length) ? 'Empty' : selectedSeat.join(', ')}</div>
            </div>
            <div className="flex py-5 border-t-[1px]">
              <div className="flex-1 font-bold">Total Payment</div>
              <div className="font-bold text-[#5F2EEA]">{'Rp'+new Intl.NumberFormat('id-ID').format(Number(selectedSeat.length*price))}</div>
            </div>
            {showAlertChooseSeat ? <div className="relative rounded p-5 border-2 border-red-500 bg-red-200">
            <p className="text-center">You haven't chosen a seat yet.<br/>Please select a seat before checkout!</p>
            <div className="absolute top-1 right-1 flex items-center justify-center border-2 border-black w-3 h-3 p-2 rounded bg-slate-500">
              <button onClick={closeShowAlert} className="text-white text-sm">X</button>
            </div>
          </div> : false}
          </div>
        </div>
      </div>

    <Footer />
    </div>
  )
}

export default Order
