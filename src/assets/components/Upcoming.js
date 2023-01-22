import React from 'react'
import { useNavigate } from 'react-router-dom'
import http from '../../helpers/http'
import { useSelector } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Upcoming = () => {
  const token = useSelector((state) => state?.auth?.token)
  const navigate = useNavigate()

  // Months
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const [month, setMonth] = React.useState(1)
  const selectMonth = (index) => {
    setMonth(index + 1)
  }

  const [upcomingMovies, setUpcomingMovies] = React.useState([])
  const [noResults, setNoResults] = React.useState(null)
  React.useEffect(() => {
    getUpcomingMovies().then((data) => {
      setUpcomingMovies(data)
      if (data?.results?.length === 0) {
        setNoResults('No Results')
      } else {
        setNoResults(null)
      }
    })
  }, [upcomingMovies])
  const getUpcomingMovies = async () => {
    try {
      const { data } = await http().get(`/movies/upcoming?month=${month}&year&limit=8&page&search&sort&sortBy`)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  // Handle detail
  const handleDetail = (id) => {
    if (!token) {
      navigate('/signin')
    } else {
      navigate(`/movieDetails/${id}`)
    }
  }

  return (
    <>
    <div className='flex flex-nowrap mx-5 md:mx-[100px] pt-8 overflow-x-scroll gap-4'>
      {months.map((elMonths, index) => {
        return (
          <div onClick={() => selectMonth(index)} key={String(index)} className={`flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-primary text-primary rounded-[4px] cursor-pointer ${index + 1 === month ? 'bg-primary' : 'bg-white'} ${index + 1 === month ? 'text-white' : 'text-primary'}`}>{elMonths}</div>
        )
      })}
    </div>
    { upcomingMovies?.results?.length
      ? <div className='flex flex-nowrap items-center mt-10 mx-5 md:mx-[100px] gap-5 overflow-x-scroll'>
        {upcomingMovies?.results?.map((movie, index) => {
          return (
            <React.Fragment key={String(index)}>
              <div className='flex flex-col justify-center min-w-fit p-5 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
                <img className='w-[190px] h-[260px] rounded-[8px]' src={movie.picture} alt='The Witches' />
                <div className='w-[190px] text-center mt-5'>
                  <div className='font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{movie.title}</div>
                  <div className='font-medium text-sm text-[#A0A3BD] whitespace-nowrap overflow-hidden text-ellipsis'>{movie.genre}</div>
                  <div>
                    <button onClick={() => handleDetail(movie.id)} className='w-[100%] mt-7 p-1 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Detail</button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })}
    </div>
      : <div className='mx-5 md:mx-[100px] py-10'>
      {noResults ? <p className='text-center py-10'>{noResults}</p> : <Skeleton className='h-72' />}
    </div>}
    </>
  )
}

export default Upcoming
