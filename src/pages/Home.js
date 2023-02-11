import React from 'react'
import Logo from '../assets/images/bannerKarcis.png'
import Jumbotron from '../assets/images/image2.png'
import { useNavigate } from 'react-router-dom'
import Now from '../assets/components/Now'
import NowShowing from '../assets/components/NowShowing'
import Upcoming from '../assets/components/Upcoming'
import { useSelector } from 'react-redux'
import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'

const Home = () => {
  const token = useSelector((state) => state.auth.token)
  const navigate = useNavigate()
  const directToSignin = () => {
    navigate('/signup')
  }
  const toListMovie = () => {
    if (!token) {
      navigate('/signin')
    } else {
      navigate('/viewAll')
    }
  }
  const Head = () => {
    return (
      <div className='flex items-center p-5 md:px-24 md:py-7 font-[mulish]'>
        <div className='flex gap-16 flex-1 items-center'>
          <img className='w-28' src={Logo} alt='logo' />
          <div className='hidden md:block cursor-pointer hover:font-bold'>Home</div>
          <div onClick={toListMovie} className='hidden md:block cursor-pointer hover:font-bold'>List Movie</div>
        </div>
        <div>
          <button onClick={directToSignin} className='bg-primary text-white w-28 h-10 rounded hover:font-bold active:border-2 active:border-white'>Sign Up</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      {!token ? <Head /> : <Header />}

      {/* Jumbotron */}
      <div className='flex flex-col md:flex-row md:items-center p-5 md:px-24 md:py-7 font-[mulish]'>
        <div className='flex-1 fadeInLeft'>
          <p className='md:text-xl text-[#A0A3BD] font-medium'>Nearest Cinema, Newest Movie,</p>
          <p className='md:text-5xl text-primary font-bold'>Find out now!</p>
        </div>
        <div className='flex-1 flex justify-center fadeInRight'>
          <img src={Jumbotron} alt='jumbotron' />
        </div>
      </div>

      {/* Now Showing */}
      <div className='bg-gray-200 h-[500px] py-10 font-[mulish]'>
        <div className='flex items-align px-5 md:px-[100px] '>
          <div className='flex-1'>
            <div className='text-primary font-bold border-b-2 pb-4 border-primary inline text-2xl'>Now Showing</div>
          </div>
          <div onClick={toListMovie} className='text-primary font-bold cursor-pointer'>view all</div>
        </div>

        {!token ? <Now /> : <NowShowing />}
      </div>

      {/* Upcoming */}
      <div className='py-10 font-[mulish]'>
        <div className='flex items-center px-5 md:px-[100px]'>
          <div className='flex-1 font-bold text-2xl'>Upcoming</div>
          <div onClick={toListMovie} className='text-primary font-bold cursor-pointer'>view all</div>
        </div>

        <Upcoming />
      </div>

      {/* Join */}
      <div className='font-[mulish] py-10 px-5 md:px-[100px]'>
        <div className='shadow-md py-10 text-center'>
          <div className='my-7'>
            <div className='text-[#4E4B66] text-2xl'>Be the vanguard of the</div>
            <div className='text-primary font-bold text-5xl'>Moviegoers</div>
          </div>
          <div className='my-7 gap-4'>
            <input className='w-[300px] h-[50px] pl-4 border-[2px] rounded-[4px] focus:outline-none mr-5' placeholder='Type your email'></input>
            <button className='text-white w-[100px] h-[50px] bg-primary border-primary border-[2px] rounded-[4px] mt-5 md:mt-0'>join now</button>
          </div>
          <div className='flex justify-center my-7'>
            <div className='w-[400px] text-[#6E7191] text-sm'>By joining you as a Tickitz member, we will always send you the latest updates via email .</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home
