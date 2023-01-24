/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React from 'react'
import HeaderAdmin from '../assets/components/HeaderAdmin'
import Footer from '../assets/components/Footer'
import http from '../helpers/http'
import { useSelector } from 'react-redux'
import { Oval } from 'react-loader-spinner'

const ManageMovie = () => {
  const token = useSelector(state => state?.auth?.token)
  // Get movie
  const [movie, setMovie] = React.useState(null)
  const getMovie = async (movieId) => {
    try {
      const response = await http().get(`/movies/${movieId}`)
      setMovie(response?.data?.results)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  // Handle submit
  const [openModalPicture, setOpenModalPicture] = React.useState(false)
  const [picture, setPicture] = React.useState(null)
  const [movieName, setMovieName] = React.useState(null)
  const [category, setCategory] = React.useState(null)
  const [director, setDirector] = React.useState(null)
  const [casts, setCasts] = React.useState(null)
  const [releaseDate, setReleaseDate] = React.useState(null)
  const [durationHour, setDurationHour] = React.useState(null)
  const [durationMinute, setDurationMinute] = React.useState(null)
  const [synopsis, setSynopsis] = React.useState(null)
  const [loadingSubmit, setLoadingSubmit] = React.useState(false)
  const [updateMovieSuccess, setUpdateMovieSuccess] = React.useState(null)
  const [updateMovieFailed, setUpdateMovieFailed] = React.useState(null)
  const [addMovieSuccess, setAddMovieSuccess] = React.useState(null)
  const [addMovieFailed, setAddMovieFailed] = React.useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoadingSubmit(true)
    if (movie?.title) {
      // Update movie
      try {
        const response = await http(token).patch(`/movies/${movie?.id}`, {
          picture: picture || movie?.picture,
          title: movieName || movie?.title,
          releaseDate: releaseDate || movie?.releaseDate,
          director: director || movie?.director,
          duration: movie?.duration,
          synopsis: synopsis || movie?.synopsis
        })
        setLoadingSubmit(false)
        setUpdateMovieSuccess('Update movie success')
        setTimeout(() => {
          setUpdateMovieSuccess(null)
        }, 3000)
        // const movieId = response?.data?.results?.id
        // console.log(movieId)
        // category?.split(', ').map(async genre => {
        //   const responseGenre = await http(token).post('/genre', { name: genre })
        //   const genreId = responseGenre?.data?.results?.id
        //   await http(token).post('/movieGenre', { movieId, genreId })
        // })
        // casts?.split(', ').map(async cast => {
        //   const responseCasts = await http(token).post('/casts', { name: cast })
        //   const castsId = responseCasts?.data?.results?.id
        //   await http(token).post('/movieCasts', { movieId, castsId })
        // })
      } catch (error) {
        console.log(error)
        setLoadingSubmit(false)
        setUpdateMovieFailed('Update movie failed')
        setTimeout(() => {
          setUpdateMovieFailed(null)
        }, 3000)
      }
    } else {
      // Add new movie
      try {
        const response = await http(token).post('/movies', {
          picture,
          title: movieName,
          releaseDate,
          director,
          duration: durationHour + ':' + durationMinute,
          synopsis
        })
        const movieId = response?.data?.results?.id
        category?.split(', ').map(async genre => {
          const responseGenre = await http(token).post('/genre', { name: genre })
          const genreId = responseGenre?.data?.results?.id
          await http(token).post('/movieGenre', { movieId, genreId })
        })
        casts?.split(', ').map(async cast => {
          const responseCasts = await http(token).post('/casts', { name: cast })
          const castsId = responseCasts?.data?.results?.id
          await http(token).post('/movieCasts', { movieId, castsId })
        })
        setLoadingSubmit(false)
        setAddMovieSuccess('Add movie success')
        setTimeout(() => {
          setAddMovieSuccess(null)
        }, 3000)
      } catch (error) {
        console.log(error)
        setLoadingSubmit(false)
        setAddMovieFailed('Add movie failed')
        setTimeout(() => {
          setAddMovieFailed(null)
        }, 3000)
      }
    }
  }

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
      setLisMovies(response?.data)
      return response
    } catch (error) {
      console.log(error)
    }
  }

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

  // Delete movie
  const [openModalDelete, setOpenModalDelete] = React.useState(false)
  const [movieIdDelete, setMovieIdDelete] = React.useState(null)
  const [loadingDelete, setLoadingDelete] = React.useState(false)
  const [successDelete, setSuccessDelete] = React.useState(null)
  const [failedDelete, setFailedDelete] = React.useState(null)
  const showModalDelete = (movieId) => {
    setOpenModalDelete(true)
    setMovieIdDelete(movieId)
    setFailedDelete(null)
  }
  const deleteMovie = async () => {
    setLoadingDelete(true)
    try {
      const response = await http(token).delete(`/movies/${movieIdDelete}`)
      console.log(response)
      setLoadingDelete(false)
      setSuccessDelete('Delete success')
      getLisMovies()
      setTimeout(() => {
        setSuccessDelete(null)
        setOpenModalDelete(false)
      }, 3000)
      return response
    } catch (error) {
      console.log(error)
      setLoadingDelete(false)
      setFailedDelete('Delete failed')
    }
  }

  return (
    <>
     <HeaderAdmin />

    <div className='px-5 md:px-[100px] py-10 font-[mulish] bg-[#E5E5E5]'>
      {openModalPicture && <div className='fixed top-0 -left-0 overflow-auto w-full h-screen bg-black/50 z-10 flex justify-center items-center'>
        <div className='bg-white rounded p-10'>
          <div className='mb-5'>
            <label>uri:</label>
            <input onChange={e => setPicture(e.target.value)} type="text" placeholder="Enter uri" className="input input-bordered w-full max-w-xs focus:outline-none" />
          </div>
          {/* <div>
            <input onChange={e => setPicture(e.target.files)} className='file:bg-primary file:border-0 file:rounded file:text-white file:btn file:normal-case hover:file:bg-blue-600 cursor-pointer bg-slate-300 rounded' type="file" accept="image/png, image/jpeg, image/jpg" />
          </div> */}
          <div>
            <button onClick={() => setOpenModalPicture(false)} className='btn btn-sm bg-primary hover:bg-blue-600'>OK</button>
          </div>
        </div>
      </div>}
      <div className="font-bold text-2xl mb-3">Form Movie</div>
      <form onSubmit={e => handleSubmit(e)} className='bg-white p-8 rounded-[8px]'>
        <div className="flex items-center flex-col md:flex-row gap-8">
          <div className="p-8 border-[1px] rounded-[8px] w-fit cursor-pointer">
            <img onClick={() => setOpenModalPicture(true)} src={movie?.picture || picture || 'https://res.cloudinary.com/dvzrmzldr/image/upload/v1674459773/camera-2008489_ugzcpg.png'} alt='image-movie' className='w-[160px] h-[245px] rounded-[8px]' />
          </div>
          <div className="flex-1 grid md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">Movie Name</label>
              <input onChange={e => setMovieName(e.target.value)} className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='movieName' placeholder='Enter movie title' defaultValue={movie?.title}></input>
            </div>
            <div className='relative'>
              <label className="block mb-2">Category</label>
              <input onChange={e => setCategory(e.target.value)} className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='category' placeholder='Enter category' defaultValue={movie?.genre}></input>
              <p className='absolute italic text-slate-500 text-xs'>Example: Action, War, Drama</p>
            </div>
            <div>
              <label className="block mb-2">Director</label>
              <input onChange={e => setDirector(e.target.value)} className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='director' placeholder='Enter director' defaultValue={movie?.director}></input>
            </div>
            <div className='relative'>
              <label className="block mb-2">Casts</label>
              <input onChange={e => setCasts(e.target.value)} className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='casts' placeholder='Enter casts' defaultValue={movie?.casts ? movie?.casts?.slice(0, 36) + '...' : null}></input>
              <p className='absolute italic text-slate-500 text-xs'>Example: John Doe, David A, Tony J Freeman</p>
            </div>
            <div>
              <label className="block mb-2">Release date</label>
              <input onChange={e => setReleaseDate(e.target.value)} className="w-[100%] h-[50px] border-[1px] px-4 rounded-[4px] focus:outline-none" type='date' name='releaseDate' placeholder='Enter release date' defaultValue={movie?.releaseDate?.split('T')[0]}></input>
            </div>
            <div className="flex gap-5">
              <div>
                <label className="block mb-2">Duration Hour</label>
                <input onChange={e => setDurationHour(e.target.value)} className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='durationHour' placeholder='Enter hour' defaultValue={movie?.duration?.split(':')[0]}></input>
              </div>
              <div>
                <label className="block mb-2">Duration Minute</label>
                <input onChange={e => setDurationMinute(e.target.value)} className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='durationMinute' placeholder='Enter minute' defaultValue={movie?.duration?.split(':')[1]}></input>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <label className="block mb-2">Synposis</label>
          <textarea onChange={e => setSynopsis(e.target.value)} className="w-[100%] h-[100px] border-[1px] p-5 rounded-[4px] focus:outline-none" type='text' name='synopsis' placeholder='Enter synopsis' defaultValue={movie?.synopsis ? movie?.synopsis : ''}></textarea>
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:justify-end">
          <div className='md:w-[180px]'>
            <button type='reset' onClick={() => setMovie(null)} className="btn w-full md:w-[180px] h-[50px] border-2 border-primary text-primary rounded-[4px] font-bold bg-white hover:text-white hover:bg-blue-400 hover:border-blue-400">Reset</button>
          </div>
          <div className='md:w-[180px]'>
            <button type='submit' className="btn w-full md:w-[180px] h-[50px] border-2 border-primary text-primary rounded-[4px] font-bold bg-primary text-white hover:bg-blue-400 hover:border-blue-400">Submit</button>
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
        {updateMovieFailed && <p className='mt-8 text-red-600 text-center'>{updateMovieFailed}</p>}
        {updateMovieSuccess && <p className='mt-8 text-green-600 text-center'>{updateMovieSuccess}</p>}
        {addMovieFailed && <p className='mt-8 text-red-600 text-center'>{addMovieFailed}</p>}
        {addMovieSuccess && <p className='mt-8 text-green-600 text-center'>{addMovieSuccess}</p>}
      </form>
    </div>

    <div className='font-[mulish] bg-[#E5E5E5]'>
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
      <div className='flex flex-col md:flex-row gap-5 px-5 md:px-[100px]'>
        <div className='flex-1 font-bold text-2xl'>Data Movie</div>
        <div className='flex'>
          <div className='mr-5'>
            <select onChange={(e) => setSort(e.target.value)} className='w-[100px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
                <option hidden>Sort</option>
                <option value="ASC" label='ASC'>ASC</option>
                <option value="DESC" label='DESC'>DESC</option>
              </select>
          </div>
          <div>
          <input onChange={(e) => setSearch(e.target.value)} className='w-[265px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none' placeholder='Search Movie Name ...'></input>
          </div>
        </div>
      </div>

      <div className='px-5 md:px-[100px] py-5 font-[mulish] bg-[#E5E5E5]'>
        <div className={`grid ${ListMovies?.results?.length && 'grid-cols-2 md:grid-cols-4'} gap-2 md:gap-4 p-4 md:p-8 bg-[white] rounded-[8px]`}>
          {ListMovies?.results?.map((movie, index) => {
            return (
              <React.Fragment key={String(index)}>
                <div className='flex flex-col justify-center items-center min-w-fit p-3 md:p-5 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
                  <img className='w-[140px] md:w-[190px] h-[220px] md:h-[260px] rounded-[8px]' src={movie?.picture} alt='The Witches' />
                  <div className='w-[140px] md:w-[190px] text-center mt-5'>
                    <div className='font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{movie?.title}</div>
                    <div className='font-medium text-sm text-[#A0A3BD] whitespace-nowrap overflow-hidden text-ellipsis'>{movie?.genre}</div>
                    <div>
                    <button onClick={() => getMovie(movie?.id)} className='w-[100%] mt-7 p-1 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Update</button>
                    </div>
                    <div>
                    <button onClick={() => showModalDelete(movie?.id)} className='w-[100%] mt-3 p-1 border-[0.5px] border-red-600 rounded-[4px] text-red-600 hover:bg-red-600 hover:text-white'>Delete</button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
          {!ListMovies?.results?.length && <p className='text-center'>No results.</p>}
        </div>

        <div className='flex justify-center gap-3 mt-8 mb-8'>
            <div onClick={decreament} className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-primary cursor-pointer hover:bg-primary hover:text-white'>&lsaquo;</div>
            <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-primary cursor-pointer hover:bg-primary hover:text-white'>{page}</div>
            <div onClick={increament} className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-primary cursor-pointer hover:bg-primary hover:text-white'>&rsaquo;</div>
          </div>

        </div>
    </div>

    <Footer />
    </>
  )
}

export default ManageMovie
