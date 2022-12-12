import React from 'react'
import Header from "../assets/components/Header"
import ShowtimesTickets from "../assets/components/ShowtimesTickets"
import Footer from "../assets/components/Footer"
import { useParams } from "react-router-dom"
import axios from "axios"

const MovieDetails = () => {
  const {id} = useParams()

  const [movie, setMovie] = React.useState({});
  React.useEffect(() => {
    getMovie().then((data) => {
      setMovie(data)
    })
  }, []);

  const getMovie = async () => {
    const {data} = await axios.get('http://localhost:8888/movies/'+ id );
    return data;
  }

  const title = movie?.results?.title;
  const genre = movie?.results?.genre;
  const casts = movie?.results?.casts;

  return(
    <>
    <Header />

    {/* Movie Details */}
    <div className="flex gap-8 px-[100px] py-10 font-[mulish]">
      <div className="border-[1px] border-[#DEDEDE] rounded-[16px] p-10">
        <img src={movie?.results?.picture} alt='spiderman' className='h-[362.83px] w-[236.72px] rounded-[8px]'/>
      </div>
      <div className="flex-1">
        <div>
          <div className="text-3xl font-bold mb-2">{title}</div>
          <div className="text-[#4E4B66] text-lg mb-3">{genre}</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <div className="text-[#4E4B66]">Release date</div>
            <div>{movie?.results?.releaseDate}</div>
          </div>
          <div>
            <div className="text-[#4E4B66]">Directed by</div>
            <div>{movie?.results?.director}</div>
          </div>
          <div>
            <div className="text-[#4E4B66]">Duration</div>
            <div>{movie?.results?.duration}</div>
          </div>
          <div>
            <div className="text-[#4E4B66]">Casts</div>
            <div>{casts}</div>
          </div>
        </div>
        <div className="pt-5 border-t-[1px]">
          <div className="font-bold text-lg">Synopsis</div>
          <div>{movie?.results?.synopsis}</div>
        </div>
      </div>
    </div>

    <div className="px-[100px] py-10 font-[mulish] bg-[#F5F6F8]">
      <div className="text-center mb-5 text-xl font-bold">Showtimes and Tickets</div>
      <form className="flex gap-5 mb-[50px] justify-center items-center">
        <div>
          <input className="border-[1px] rounded-[6px] bg-[#EFF0F6] w-[200px] h-[40px] pl-3" type='date'></input>
        </div>
        <select className="border-[1px] rounded-[6px] bg-[#EFF0F6] w-[200px] h-[40px] pl-3">
          <option>Purwokerto</option>
        </select>
      </form>

      <ShowtimesTickets />
    </div>

    <Footer />
    </>
  )
}

export default MovieDetails
