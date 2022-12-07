import React from 'react';
import Header from '../assets/components/Header';
import Jumbotron from '../assets/images/image2.png';
import NowShowing from '../assets/components/NowShowing';
import Month from '../assets/components/Month';
import Upcoming from '../assets/components/Upcoming';
import Footer from '../assets/components/Footer';

const Homepage = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Jumbotron */}
      <div className='flex items-center px-[100px] py-7 font-[mulish]'>
        <div className='flex-1'>
          <div className='text-xl text-[#A0A3BD] font-medium'>Nearest Cinema, Newest Movie,</div>
          <div className='text-5xl text-[#5F2EEA] font-bold'>Find out now!</div>
        </div>
        <div className='flex-1 flex justify-center'>
          <img src={Jumbotron} alt='jumbotron' />
        </div>
      </div>

      {/* Now Showing */}
      <div className='bg-[#F5F6F8] h-[510px] py-10 font-[mulish]'>
        <div className='flex items-align px-[100px] '>
          <div className='flex-1'>
            <div className='text-[#5F2EEA] font-bold border-b-2 pb-4 border-[#5F2EEA] inline text-2xl'>Now Showing</div>
          </div>
          <div className='text-[#5F2EEA] font-bold cursor-pointer'>view all</div>
        </div>

        <NowShowing />
      </div>

      {/* Upcoming */}
      <div className='py-10 font-[mulish]'>
        <div className='flex items-center px-[100px]'>
          <div className='flex-1 font-bold text-2xl'>Upcoming</div>
          <div className='text-[#5F2EEA] font-bold cursor-pointer'>view all</div>
        </div>

        <Month />
        <Upcoming />
      </div>

      {/* Join */}
      <div className='font-[mulish] py-10 px-[100px]'>
        <div className='shadow-md py-10 text-center'>
          <div className='my-7'>
            <div className='text-[#4E4B66] text-2xl'>Be the vanguard of the</div>
            <div className='text-[#5F2EEA] font-bold text-5xl'>Moviegoers</div>
          </div>
          <div className='my-7 gap-4'>
            <input className='w-[300px] h-[50px] pl-4 border-[2px] rounded-[4px] focus:outline-none mr-5' placeholder='Type your email'></input>
            <button className='text-white w-[100px] h-[50px] bg-[#5F2EEA] border-[#5F2EEA] border-[2px] rounded-[4px]'>join now</button>
          </div>
          <div className='flex justify-center my-7'>
            <div className='w-[400px] text-[#6E7191] text-sm'>By joining you as a Tickitz member, we will always send you the latest updates via email .</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Homepage;
