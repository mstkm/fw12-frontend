import React from 'react';
import axios from 'axios';


function NowShowing() {
  const [nowShowingMovies, setNowShowingMovies] = React.useState({});
  React.useEffect(() => {
    getNowShowingMovies().then((data) => {
      setNowShowingMovies(data)
    })
  }, []);


  const getNowShowingMovies = async () => {
    const {data} = await axios.get('http://localhost:8888/movies/nowShowing?limit=8');
    return data;
  }

  return(
    <div className='flex flex-nowrap mt-10 gap-6 ml-[100px] overflow-x-scroll'>
      {nowShowingMovies?.results?.map((movie, index) => {
        return(
          <React.Fragment key={String(index)}>
            <div className='min-w-fit p-6 border-2 border-white rounded-[8px]'>
              <img className='w-[159px] h-[244px] rounded-[8px]' src={movie.picture} alt={movie.title} />
              <div className='w-[159px] text-center mt-5'>
                <div className='font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{movie.title}</div>
                <div className='font-medium text-sm text-[#A0A3BD] whitespace-nowrap overflow-hidden text-ellipsis'>{movie.genre}</div>
                <div>
                  <button className='w-[100%] mt-7 p-1 border-[0.5px] border-[#5F2EEA] rounded-[4px] text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white'>Detail</button>
                </div>
              </div>
            </div>
        </React.Fragment>
        )
      })}

    </div>
  )
}

export default NowShowing
