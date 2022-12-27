import React from 'react';
import { Link } from 'react-router-dom';
import http from '../../helpers/http';

const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = React.useState({});
  React.useEffect(() => {
    getUpcomingMovies().then((data) => {
      setUpcomingMovies(data)
    })
  }, []);

  const getUpcomingMovies = async () => {
    const {data} = await http().get('/movies/upcoming?limit=8');
    return data;
  }

  return(
    <div className='flex flex-nowrap items-center mt-10 ml-[100px] gap-5 overflow-x-scroll'>
      {upcomingMovies?.results?.map((movie, index) => {
        return (
          <React.Fragment key={String(index)}>
            <div className='flex flex-col justify-center min-w-fit p-5 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
              <img className='w-[190px] h-[260px] rounded-[8px]' src={movie.picture} alt='The Witches' />
              <div className='w-[190px] text-center mt-5'>
                <div className='font-bold whitespace-nowrap overflow-hidden text-ellipsis'>{movie.title}</div>
                <div className='font-medium text-sm text-[#A0A3BD] whitespace-nowrap overflow-hidden text-ellipsis'>{movie.genre}</div>
                <div>
                 <Link to={'/movieDetails/'+movie.id}><button className='w-[100%] mt-7 p-1 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Detail</button></Link>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </div>

  )
}

export default Upcoming
