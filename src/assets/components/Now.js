import React from 'react';
import axios from 'axios';


function Now() {
  const [nowMovies, setNowMovies] = React.useState({});
  React.useEffect(() => {
    getNowMovies().then((data) => {
      setNowMovies(data)
    })
  }, []);


  const getNowMovies = async () => {
    const {data} = await axios.get('http://localhost:8888/movies/nowShowing?limit=8');
    return data;
  }

  return(
    <div className='flex flex-nowrap mt-10 gap-6 ml-[100px] overflow-x-scroll'>
      {nowMovies?.results?.map((movie, index) => {
        return(
          <React.Fragment key={String(index)}>
            <div className='min-w-fit p-6 border-2 border-white rounded-[8px]'>
              <img className='w-[159px] h-[244px] rounded-[8px]' src={movie.picture} alt={movie.title} />
            </div>
        </React.Fragment>
        )
      })}

    </div>
  )
}

export default Now
