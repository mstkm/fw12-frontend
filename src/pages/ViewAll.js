import React from 'react'
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import { useNavigate } from 'react-router-dom'
import http from '../helpers/http'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ViewAll = () => {
  const navigate = useNavigate()

  // Get list movies
  const [ListMovies, setLisMovies] = React.useState({})
  const [page, setPage] = React.useState(1)
  const [sort, setSort] = React.useState('')
  const [search, setSearch] = React.useState('')
  React.useEffect(() => {
    getLisMovies().then((response) => {
      setLisMovies(response?.data)
    })
  }, [page, sort, search])
  const getLisMovies = async () => {
    try {
      const response = await http().get(`/movies?limit=8&page=${page}&search=${search}&sort=${sort}&sortBy=title&month`)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  console.log(ListMovies)

  // Pagination
  const increament = () => {
    if (page < ListMovies?.pageInfo?.totalPage) {
      setPage(page + 1)
    } else {
      setPage(page)
    }
  }
  const decreament = () => {
    if (page > 1) {
      setPage(page - 1)
    } else {
      setPage(page)
    }
  }

  // Handle detail button '/movieDetails/' + movie.id
  const handleDetail = (id) => {
    navigate(`/movieDetails/${id}`)
  }

  return (
    <>
      <Header />

      <div className='py-10 font-[mulish] bg-[#E5E5E5]'>
        <div className='md:hidden flex-1 font-bold text-2xl p-5'>List Movie</div>
        <div className='flex items-center px-5 md:px-[100px]'>
          <div className='hidden md:block flex-1 font-bold text-2xl'>List Movie</div>
          <div className='mr-5'>
            <select onChange={(e) => setSort(e.target.value)} className='w-[100px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
              <option hidden>Sort</option>
              <option value="ASC" label='ASC'>ASC</option>
              <option value="DESC" label='DESC'>DESC</option>
            </select>
          </div>
          <div>
            <input onChange={(e) => setSearch(e.target.value)} className='w-[200px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none' placeholder='Search Movie Name ...'></input>
          </div>
        </div>

        {ListMovies?.results
          ? <>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-8 bg-[white] md:mx-[100px] mt-5 rounded-[8px]'>
            {ListMovies?.results?.map((movie, index) => {
              return (
                <React.Fragment key={String(index)}>
                  <div className='flex flex-col justify-center items-center min-w-fit p-4 md:p-5 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
                    <img className='w-[150px] h-[220px] md:w-[190px] md:h-[260px] rounded-[8px]' src={movie.picture} alt={movie.title} />
                    <div className='w-[150px] md:w-[190px] text-center mt-5'>
                      <div className='font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{movie.title}</div>
                      <div className='font-medium text-sm text-[#A0A3BD] whitespace-nowrap overflow-hidden text-ellipsis'>{movie.genre}</div>
                      <div>
                      <button onClick={() => handleDetail(movie?.id)} type='button' className='w-[100%] mt-7 p-1 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Detail</button>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
          <div className='flex justify-center gap-3 mt-8 mb-8'>
            <div onClick={decreament} className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-primary cursor-pointer hover:bg-primary hover:text-white'>&lsaquo;</div>
            <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-primary cursor-pointer hover:bg-primary hover:text-white'>{page}</div>
            <div onClick={increament} className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-primary cursor-pointer hover:bg-primary hover:text-white'>&rsaquo;</div>
          </div>
        </>
          : <div className='md:mx-[100px] mx-5 py-10'>
          <Skeleton className='h-[800px]' />
        </div>}

      </div>

      <Footer />
    </>

  )
}

export default ViewAll
