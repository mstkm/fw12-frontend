import React from 'react';
import axios from 'axios';

const DataMovie = () => {
  const [ListMovies, setLisMovies] = React.useState({});
  React.useEffect(() => {
    getLisMovies().then((data) => {
      setLisMovies(data)
    })
  }, []);


  const getLisMovies = async () => {
    const {data} = await axios.get('http://localhost:8888/movies/upcoming?limit=8');
    return data;
  }

  return(
    <div className='px-[100px] py-5 font-[mulish] bg-[#E5E5E5]'>
    <div className='grid grid-cols-4 gap-4 p-8 bg-[white] rounded-[8px]'>
      {ListMovies?.results?.map((movie, index) => {
        return (
          <React.Fragment key={String(index)}>
            <div className='flex flex-col justify-center items-center min-w-fit p-5 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
              <img className='w-[190px] h-[260px] rounded-[8px]' src={movie.picture} alt='The Witches' />
              <div className='w-[190px] text-center mt-5'>
                <div className='font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{movie.title}</div>
                <div className='font-medium text-sm text-[#A0A3BD] whitespace-nowrap overflow-hidden text-ellipsis'>{movie.genre}</div>
                <div>
                 <button className='w-[100%] mt-7 p-1 border-[0.5px] border-[#5F2EEA] rounded-[4px] text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white'>Update</button>
                </div>
                <div>
                 <button className='w-[100%] mt-3 p-1 border-[0.5px] border-[#ED2E7E] rounded-[4px] text-[#ED2E7E] hover:bg-[#ED2E7E] hover:text-white'>Delete</button>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>

    <div className='flex justify-center gap-3 mt-8 mb-8'>
      <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-[#5F2EEA] hover:text-white'>1</div>
      <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-[#5F2EEA] hover:text-white'>2</div>
      <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-[#5F2EEA] hover:text-white'>3</div>
      <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-[#5F2EEA] hover:text-white'>4</div>
    </div>

    </div>

  )

}

export default DataMovie
