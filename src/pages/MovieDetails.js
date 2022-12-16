import React from 'react'
import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"
import { useParams } from "react-router-dom"
import axios from "axios"
import moment from 'moment'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const MovieDetails = () => {
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate()
  if (!token) {
    navigate('/signin')
  }

  const {id} = useParams()

  const [movie, setMovie] = React.useState({});
  const [date, setDate] = React.useState(moment().format('YYYY-MM-DD'));
  const [city, setCity] = React.useState('Jakarta');
  const [dataSchedule, setDataSchedule] = React.useState([]);

  // Get Movie Detail
  React.useEffect(() => {
    getMovie().then((data) => {
      setMovie(data)
    })
  }, []);
  const getMovie = async () => {
    const {data} = await axios.get(`http://localhost:8888/movies/${id}`);
    return data;
  }
  const title = movie?.results?.title;
  const genre = movie?.results?.genre;
  const casts = movie?.results?.casts;
  const releaseDateArr = Date(movie?.results?.releaseDate).split(' ');
  const releaseDate = releaseDateArr[1]+' '+releaseDateArr[2]+', '+releaseDateArr[3]
  const duration = movie?.results?.duration?.charAt('1')+' hours '+movie?.results?.duration?.charAt('3')+movie?.results?.duration?.charAt('4')+' minutes';

  // Get Movie Schedule
  React.useEffect(() => {
    getDataSchedule().then((data) => {
      setDataSchedule(data)
    })
  }, [id, city, date]);
  const getDataSchedule = async () => {
    const {data} = await axios.get(`http://localhost:8888/movieSchedule/listMovieSChedule/${id}/${city}/${date}`)
    return data
  }

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
            <div>{releaseDate}</div>
          </div>
          <div>
            <div className="text-[#4E4B66]">Directed by</div>
            <div>{movie?.results?.director}</div>
          </div>
          <div>
            <div className="text-[#4E4B66]">Duration</div>
            <div>{duration}</div>
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
      <div className="flex gap-5 mb-[50px] justify-center items-center">
        <div>
          <input id='selectDate' className="border-[1px] rounded-[6px] bg-[#EFF0F6] w-[200px] h-[40px] px-3" type='date' placeholder='Select Date' name='date' defaultValue={date} onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <select id='selectCity' onChange={(e) => setCity(e.target.value)} className="border-[1px] rounded-[6px] bg-[#EFF0F6] w-[200px] h-[40px] px-3">
          <option value='Jakarta'>Jakarta</option>
          <option value='Purwokerto'>Purwokerto</option>
        </select>
      </div>

      <div className='grid grid-cols-3 gap-8'>
        {dataSchedule?.results?.map((cinema, index) => {
          return(
            <div key={String(index)} className="w-[320px] bg-white pb-5 font-[mulish] rounded-[8px]">
          <div className="grid grid-cols-2 items-center px-5 py-5 border-b-[1px]">
            <div>
              <img className="w-[70%]" src={cinema.cinemaPicture} alt='ebv.id' />
            </div>
            <div>
              <div className="font-bold text-lg">{cinema.cinemaName}</div>
              <div className="text-sm">{cinema.address}</div>
            </div>
          </div>
          <div className="grid grid-cols-4 px-5 py-5 gap-2 text-sm">
            {cinema.time.sort().map((el, index) => {
              return(<button key={String(index)} className='hover:font-bold hover:text-[#5F2EEA]'>{el.slice(0, 2) <= 12 ? el.slice(0, 5)+'am' : el.slice(0, 5)+'pm'}</button>)
            })}
          </div>

          <div className="flex px-5 py-5 mb-3">
            <div className="flex-1">Price</div>
            <div className="font-bold">{'Rp'+new Intl.NumberFormat('id-ID').format(Number(cinema.price))+'/seat'}</div>
          </div>

          <div className="px-5">
            <button className="border-[1px] w-[100%] h-[40px] bg-[#5F2EEA] rounded-[4px] text-white">Book Now</button>
          </div>
        </div>
          )
        })}



        </div>
      </div>

    <Footer />
    </>
  )
}

export default MovieDetails
