/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../assets/components/Footer'
import HeaderAdmin from '../assets/components/HeaderAdmin'
import http from '../helpers/http'
import { Oval } from 'react-loader-spinner'
import moment from 'moment'

const ManageSchedule = () => {
  const token = useSelector(state => state?.auth?.token)
  // Get movies
  const [dataMovies, setDataMovies] = React.useState(null)
  const movies = dataMovies?.results
  React.useEffect(() => {
    getMovies().then(response => {
      setDataMovies(response?.data)
    })
  }, [])
  const getMovies = async () => {
    try {
      const response = await http().get('/movies?limit=1000&sortBy=title')
      return response
    } catch (error) {
      console.log(error)
    }
  }

  // Handle movie
  const [movieId, setMovieId] = React.useState(null)
  const [movie, setMovie] = React.useState(null)
  React.useEffect(() => {
    getMovie().then(response => {
      setMovie(response?.data?.results)
    })
  }, [movieId])
  const getMovie = async () => {
    if (movieId) {
      try {
        const response = await http().get(`/movies/${movieId}`)
        return response
      } catch (error) {
        console.log(error)
      }
    }
  }

  // Handle price
  const [price, setPrice] = React.useState(null)

  // Handle Date Start & Date End
  const [dateStart, setDateStart] = React.useState(null)
  const [dateEnd, setDateEnd] = React.useState(null)

  // Handle premiere & location
  const [premiere, setPremiere] = React.useState('')
  const [location, setLocation] = React.useState('')
  const [cinemaId, setCinemaId] = React.useState(null)
  const handlePremiere = cinema => {
    setPremiere(cinema)
    if (location === 'Purwokerto' && cinema === 'ebv.id') {
      setCinemaId(1)
    } else if (location === 'Purwokerto' && cinema === 'hiflix') {
      setCinemaId(2)
    } else if (location === 'Purwokerto' && cinema === 'cineone21') {
      setCinemaId(3)
    } else if (location === 'Jakarta' && cinema === 'ebv.id') {
      setCinemaId(4)
    } else if (location === 'Jakarta' && cinema === 'hiflix') {
      setCinemaId(5)
    } else if (location === 'Jakarta' && cinema === 'cineone21') {
      setCinemaId(6)
    }
  }
  const handleLocation = city => {
    setLocation(city)
    if (city === 'Purwokerto' && premiere === 'ebv.id') {
      setCinemaId(1)
    } else if (city === 'Purwokerto' && premiere === 'hiflix') {
      setCinemaId(2)
    } else if (city === 'Purwokerto' && premiere === 'cineone21') {
      setCinemaId(3)
    } else if (city === 'Jakarta' && premiere === 'ebv.id') {
      setCinemaId(4)
    } else if (city === 'Jakarta' && premiere === 'hiflix') {
      setCinemaId(5)
    } else if (city === 'Jakarta' && premiere === 'cineone21') {
      setCinemaId(6)
    }
  }

  // Handle time
  const times = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']
  const [selectedTimes, setSelectedTimes] = React.useState([])
  const handleTime = (elTimes) => {
    if (!selectedTimes.includes(elTimes)) {
      setSelectedTimes([...selectedTimes, elTimes])
    } else {
      setSelectedTimes(selectedTimes?.filter(el => el !== elTimes))
    }
  }

  // Handle Reset
  const handleReset = () => {
    setMovieId(null)
    setLocation(null)
    setPrice(null)
    setDateStart(null)
    setDateEnd(null)
    setPremiere(null)
    setSelectedTimes([])
  }

  // Handle submit
  const [loadingSubmit, setLoadingSubmit] = React.useState(false)
  const [addScheculeSuccess, setAddScheduleSuccess] = React.useState(null)
  const [addScheculeFailed, setAddScheduleFailed] = React.useState(null)
  const handleSubmit = async () => {
    setLoadingSubmit(true)
    setAddScheduleFailed(null)
    setAddScheduleSuccess(null)
    try {
      const response = await http(token).post('/movieSchedule', {
        movieId,
        cinemaId,
        price,
        startDate: dateStart,
        endDate: dateEnd
      })
      const movieScheduleId = response?.data?.results?.id
      selectedTimes?.map(async item => {
        await http(token).post('/movieScheduleTimes', {
          time: item,
          movieScheduleId
        })
      })
      setLoadingSubmit(false)
      setAddScheduleSuccess('Add schedule success')
      setTimeout(() => {
        setAddScheduleSuccess(null)
      }, 3000)
    } catch (error) {
      console.log(error)
      setLoadingSubmit(false)
      setAddScheduleFailed('Add schedule failed')
      setTimeout(() => {
        setAddScheduleFailed(null)
      }, 3000)
    }
  }

  // Data Schedule
  // Get data schedule
  const [sort, setSort] = React.useState(null)
  const [locationSchedule, setLocationSchedule] = React.useState(null)
  const [movieIdSchedule, setMovieIdSchedule] = React.useState(null)
  const [schedules, setSchedules] = React.useState([])
  const today = moment().format().split('T')[0]
  React.useEffect(() => {
    getSchedules().then(response => {
      setSchedules(response?.data?.results)
    })
  }, [movieIdSchedule, locationSchedule, sort])
  const getSchedules = async () => {
    try {
      const response = await http(token).get(
        `/movieSchedule/listMovieSChedule/${movieIdSchedule}/${locationSchedule}/${today}`
      )
      setSchedules(response?.data?.results)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  // Delete movie
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [scheduleIdDelete, setScheduleIdDelete] = React.useState(null)
  const [loadingDelete, setLoadingDelete] = React.useState(false)
  const [successDelete, setSuccessDelete] = React.useState(null)
  const [failedDelete, setFailedDelete] = React.useState(null)
  const showModalDelete = (scheduleId) => {
    setOpenModalDelete(true)
    setScheduleIdDelete(scheduleId)
    setFailedDelete(null)
  }
  const deleteMovie = async () => {
    setLoadingDelete(true)
    try {
      const response = await http(token).delete(`/movieSchedule/${scheduleIdDelete}`)
      console.log(response)
      setLoadingDelete(false)
      setSuccessDelete('Delete success')
      setTimeout(() => {
        setSuccessDelete(null)
        setOpenModalDelete(false)
      }, 3000)
      getSchedules()
      return response
    } catch (error) {
      console.log(error)
      setLoadingDelete(false)
      setFailedDelete('Delete failed')
    }
  }

  return (
    <div>
      <HeaderAdmin />

      <div className='px-5 md:px-[100px] py-10 font-[mulish] bg-[#E5E5E5]'>
      <div className="font-bold text-2xl mb-3">Form Movie</div>
      <form className='bg-white p-8 rounded-[8px]'>
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="w-fit p-8 border-[1px] rounded-[8px]">
            <img src={movie?.picture || 'https://res.cloudinary.com/dvzrmzldr/image/upload/v1674459773/camera-2008489_ugzcpg.png'} alt='image-movie' className='w-[160px] h-[245px] rounded-[8px]' />
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">Movie</label>
              <select onChange={e => setMovieId(e.target.value)} className="w-[100%] h-[50px] border-[1px] px-4 rounded-[16px] focus:outline-none" type='text' name='movieName'>
                <option hidden>Select Movie</option>
                {movies?.map((movie, index) => {
                  return (
                    <option key={String(index)} value={movie?.id} label={movie?.title}></option>
                  )
                })}
              </select>
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <select onChange={e => handleLocation(e.target.value)} className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[16px] focus:outline-none" type='text' name='movie-name' placeholder='Spider-Man: Homecoming'>
                <option hidden>Select Location</option>
                <option value='Jakarta'>Jakarta</option>
                <option value='Purwokerto'>Purwokerto</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Price</label>
              <input onChange={e => setPrice(e.target.value)} className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[16px] focus:outline-none" type='text' name='duration-hour' placeholder='Enter price'></input>
            </div>
            <div className="flex gap-5">
              <div>
                <label className="block mb-2">Date Start</label>
                <input onChange={e => setDateStart(e.target.value)} className="w-[100%] h-[50px] border-[1px] px-4 rounded-[16px] focus:outline-none" type='date' name='duration-hour'></input>
              </div>
              <div>
                <label className="block mb-2">Date End</label>
                <input onChange={e => setDateEnd(e.target.value)} className="w-[100%] h-[50px] border-[1px] px-4 rounded-[16px] focus:outline-none" type='date' name='duration-minute' ></input>
              </div>
            </div>
            <div>
              <label className="block mb-2">Premiere</label>
              <div className="flex gap-5 items-center">
                <div className={`${premiere === 'ebv.id' && 'bg-primary'} rounded p-2`}>
                  <img onClick={() => handlePremiere('ebv.id')} src={require('../assets/images/ebv.id.png')} alt='ebv.id' className='cursor-pointer' />
                </div>
                <div className={`${premiere === 'hiflix' && 'bg-primary'} rounded p-2`}>
                  <img onClick={() => handlePremiere('hiflix')} src={require('../assets/images/hiflix.png')} alt='hiflix' className='cursor-pointer' />
                </div>
                <div className={`${premiere === 'cineone21' && 'bg-primary'} rounded p-2`}>
                  <img onClick={() => handlePremiere('cineone21')} src={require('../assets/images/cineone21.png')} alt='cineone21' className='cursor-pointer' />
                </div>
              </div>
            </div>
            <div>
              <label>Time</label>
              <div className="grid grid-cols-4 gap-3">
                <div className="flex justify-center items-center border-[1px] rounded-[8px] font-bold text-primary">+</div>
                {times?.map((elTimes, index) => {
                  return (
                    <div onClick={() => handleTime(elTimes)} key={String(index)} className={`${selectedTimes?.includes(elTimes) && 'font-bold text-primary'} cursor-pointer`}>{elTimes + (elTimes?.split(':')[0] < 12 ? 'am' : 'pm')}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:justify-end mt-8">
          <div className='md:w-[180px]'>
            <button type='reset' onClick={handleReset} className="btn w-full md:w-[180px] h-[50px] border-2 border-primary text-primary rounded-[4px] font-bold bg-white hover:text-white hover:bg-blue-400 hover:border-blue-400">Reset</button>
          </div>
          <div className='md:w-[180px]'>
            <button type='button' onClick={handleSubmit} className="btn w-full md:w-[180px] h-[50px] border-2 border-primary text-primary rounded-[4px] font-bold bg-primary text-white hover:bg-blue-400 hover:border-blue-400">Submit</button>
          </div>
        </div>
        {loadingSubmit && <div className='mt-5 flex justify-center'>
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
        {addScheculeSuccess && <p className='mt-8 text-center text-green-600'>{addScheculeSuccess}</p>}
        {addScheculeFailed && <p className='mt-8 text-center text-red-600'>{addScheculeFailed}</p>}
      </form>
    </div>

    <div className='font-[mulish] bg-[#E5E5E5] pb-10'>
      <div className='flex flex-col md:flex-row items-center px-5 md:px-[100px] gap-5'>
        <div className='flex-1 font-bold text-2xl'>Data Schedule</div>
        <div className='flex'>
          <div className='mr-5'>
            <select onChange={e => setSort(e.target.value)} className='w-[100px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
              <option hidden>Sort</option>
              <option value='ASC'>ASC</option>
              <option value='DESC'>DESC</option>
            </select>
          </div>
          <div className='mr-5'>
            <select onChange={e => setLocationSchedule(e.target.value)} className='w-[150px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
              <option hidden>Location</option>
              <option>Jakarta</option>
              <option>Purwokerto</option>
            </select>
          </div>
          <div>
          <select onChange={e => setMovieIdSchedule(e.target.value)} className="w-[100px] h-[50px] border-[1px] px-4 rounded-[16px] focus:outline-none text-[#4E4B66]" type='text' name='movieName'>
            <option hidden>Movie</option>
            {movies?.map((movie, index) => {
              return (
                <option key={String(index)} value={movie?.id} label={movie?.title}></option>
              )
            })}
          </select>
          </div>
        </div>
      </div>

      <div className={`grid ${schedules?.length && 'md:grid-cols-3'} p-8 gap-5 bg-white mx-5 md:mx-[100px] rounded-[8px] mt-5`}>
        {openModalDelete && <div className='fixed top-0 -left-0 overflow-auto w-full h-screen bg-black/50 z-10 flex justify-center items-center'>
          <div className='bg-white rounded p-10'>
            <div className='mb-5'>
              <p>Are you sure?</p>
            </div>
            <div className='mb-3'>
              <button onClick={() => setOpenModalDelete(false)} className='btn btn-sm bg-white border-black text-black hover:bg-blue-600'>Cancel</button>
            </div>
            <div>
              <button onClick={deleteMovie} className='btn btn-sm bg-primary hover:bg-blue-600'>Delete</button>
            </div>
            {loadingDelete && <div className='mt-5 flex justify-center'>
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
            {successDelete && <p className='mt-8 text-center text-green-600'>{successDelete}</p>}
            {failedDelete && <p className='mt-8 text-center text-red-600'>{failedDelete}</p>}
          </div>
        </div>}
        {schedules?.map((elSchedules, index) => {
          return (
            <div key={String(index)} className="w-[320px] border-[1px] pb-5 font-[mulish] rounded-[8px]">
              <div className="grid grid-cols-2 items-center px-5 py-5 border-b-[1px]">
                <div>
                  <img className="w-[70%]" src={elSchedules?.cinemaPicture} alt='ebv.id' />
                </div>
                <div>
                  <div className="font-bold text-lg">{elSchedules?.cinemaName}</div>
                  <div className="text-sm">{elSchedules?.address}</div>
                </div>
              </div>

              <div className="grid grid-cols-4 px-5 py-5 gap-2 text-sm">
                {elSchedules?.time.sort().map((time, index) => {
                  return (
                    <div key={String(index)}>{time.split(':')[0] +
                    ':' +
                    time.split(':')[1] +
                    (time.split(':')[0] < 12 ? 'am' : 'pm')}</div>
                  )
                })}
              </div>

              <div className="flex px-5 py-5 mb-3">
                <div className="flex-1">Price</div>
                <div className="font-bold">Rp{new Intl.NumberFormat('en-DE').format(elSchedules?.price)}</div>
              </div>

              <div className="flex gap-5 px-5">
                {/* <div className="flex-1">
                  <button onClick={() => console.log(elSchedules?.id)} className='w-[100%] p-2 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Update</button>
                </div> */}
                <div className="flex-1">
                  <button onClick={() => showModalDelete(elSchedules?.id)} className='w-[100%]  p-2 border-[0.5px] border-red-600 rounded-[4px] text-red-600 hover:bg-red-600 hover:text-white'>Delete</button>
                </div>
              </div>
            </div>
          )
        })}
        {!schedules?.length && <p className='text-center'>No results.</p>}
      </div>

      {/* <div className='flex justify-center gap-3 py-10'>
        <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-primary hover:text-white'>1</div>
        <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-primary hover:text-white'>2</div>
        <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-primary hover:text-white'>3</div>
        <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-primary hover:text-white'>4</div>
      </div> */}
    </div>

    <Footer />
    </div>
  )
}

export default ManageSchedule
