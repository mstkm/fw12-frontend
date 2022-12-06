import React from 'react';
import Logo from '../assets/images/logo.png';
import Jumbotron from '../assets/images/image2.png';
// import Spiderman from '../assets/images/spiderman.png';
// import LionKing from '../assets/images/lion king.png';
// import JohnWick3 from '../assets/images/john wick 3.png';
import BlackWidow from '../assets/images/black widow.png';
import TheWitches from '../assets/images/witches.png';
import Tenet from '../assets/images/tenet.png';
import ebv from '../assets/images/ebv.id.png';
import cineone21 from '../assets/images/cineone21.png';
import hiflix from '../assets/images/hiflix.png';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import Now from '../assets/components/Now';

const Homepage = () => {
  const navigate = useNavigate()
  const directToSignin = () => {
    navigate('/signin')
  }
  return (
    <div>
      {/* Header */}
      <div className='flex items-center px-[100px] py-7 font-[mulish]'>
        <div className='flex flex-1 items-center'>
          <img className='w-[120.41px] mr-[80px]' src={Logo} alt='logo' />
          <div className='mr-[80px] cursor-pointer hover:font-bold'>Home</div>
          <div className='cursor-pointer hover:font-bold'>List Movie</div>
        </div>
        <div >
        <button onClick={directToSignin} className='bg-[#5F2EEA] text-white w-[120px] h-[40px] rounded-[4px] hover:font-bold'>Sign In</button>
        </div>
      </div>

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
      <div className='bg-[#F5F6F8] py-10 font-[mulish]'>
        <div className='flex items-align px-[100px] '>
          <div className='flex-1'>
            <div className='text-[#5F2EEA] font-bold border-b-2 pb-4 border-[#5F2EEA] inline text-2xl'>Now Showing</div>
          </div>
          <div className='text-[#5F2EEA] font-bold cursor-pointer'>view all</div>
        </div>

        <Now />
        {/* <div className='flex flex-nowrap mt-10 gap-6 ml-[100px] overflow-x-scroll'>
          <div className='min-w-fit p-6 border-2 border-white rounded-[8px]'>
            <img src={Spiderman} alt='Spiderman' />
          </div>
          <div className='min-w-fit p-6 border-2 border-white rounded-[8px]'>
            <img src={LionKing} alt='Lion King' />
          </div>
          <div className='min-w-fit p-6 border-2 border-white rounded-[8px]'>
            <img src={JohnWick3} alt='John Wick 3' />
          </div>
          <div className='min-w-fit p-6 border-2 border-white rounded-[8px]'>
            <img src={Spiderman} alt='Spiderman' />
          </div>
          <div className='min-w-fit p-6 border-2 border-white rounded-[8px]'>
            <img src={LionKing} alt='Lion King' />
          </div>
          <div className='min-w-fit p-6 border-2 border-white rounded-[8px]'>
            <img src={JohnWick3} alt='John Wick 3' />
          </div>
        </div> */}
      </div>

      {/* Upcoming */}
      <div className='py-10 font-[mulish]'>
        <div className='flex items-center px-[100px]'>
          <div className='flex-1 font-bold text-2xl'>Upcoming</div>
          <div className='text-[#5F2EEA] font-bold cursor-pointer'>view all</div>
        </div>

        <div className='flex flex-nowrap ml-[100px] py-5 overflow-x-scroll gap-4'>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>September</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>October</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>November</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>December</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>January</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>February</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>March</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>April</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>May</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>June</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>July</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer active:bg-[#5F2EEA] active:text-white'>Augustus</div>
        </div>

        <div className='flex flex-nowrap items-center mt-10 ml-[100px] gap-5 overflow-x-scroll'>
          <div className='flex flex-col justify-center min-w-fit p-6 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
            <img src={BlackWidow} alt='Black Widow' />
            <div className='text-center mt-5'>
              <div className='font-bold text-lg'>Black Widow</div>
              <div className='font-medium text-sm text-[#A0A3BD]'>Action, Adventure, Sci-fi</div>
              <div>
                <button className='w-[100%] mt-7 p-1 border-[0.5px] border-[#5F2EEA] rounded-[4px] text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white'>Detail</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center min-w-fit p-6 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
            <img src={TheWitches} alt='The Witches' />
            <div className='text-center mt-5'>
              <div className='font-bold text-lg'>The Witches</div>
              <div className='font-medium text-sm text-[#A0A3BD]'>Action, Comedy, Family</div>
              <div>
                <button className='w-[100%] mt-7 p-1 border-[0.5px] border-[#5F2EEA] rounded-[4px] text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white'>Detail</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center min-w-fit p-6 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
            <img src={Tenet} alt='Tenet' />
            <div className='text-center mt-5'>
              <div className='font-bold text-lg'>Tenet</div>
              <div className='font-medium text-sm text-[#A0A3BD]'>Action, Sci-fi</div>
              <div>
                <button className='w-[100%] mt-7 p-1 border-[0.5px] border-[#5F2EEA] rounded-[4px] text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white'>Detail</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center min-w-fit p-6 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
            <img src={BlackWidow} alt='Black Widow' />
            <div className='text-center mt-5'>
              <div className='font-bold text-lg'>Black Widow</div>
              <div className='font-medium text-sm text-[#A0A3BD]'>Action, Adventure, Sci-fi</div>
              <div>
                <button className='w-[100%] mt-7 p-1 border-[0.5px] border-[#5F2EEA] rounded-[4px] text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white'>Detail</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center min-w-fit p-6 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
            <img src={TheWitches} alt='The Witches' />
            <div className='text-center mt-5'>
              <div className='font-bold text-lg'>The Witches</div>
              <div className='font-medium text-sm text-[#A0A3BD]'>Action, Comedy, Family</div>
              <div>
                <button className='w-[100%] mt-7 p-1 border-[0.5px] border-[#5F2EEA] rounded-[4px] text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white'>Detail</button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center min-w-fit p-6 border-[0.5px] border-[#DEDEDE] rounded-[8px]'>
            <img src={Tenet} alt='Tenet' />
            <div className='text-center mt-5'>
              <div className='font-bold text-lg'>Tenet</div>
              <div className='font-medium text-sm text-[#A0A3BD]'>Action, Sci-fi</div>
              <div>
                <button className='w-[100%] mt-7 p-1 border-[0.5px] border-[#5F2EEA] rounded-[4px] text-[#5F2EEA] hover:bg-[#5F2EEA] hover:text-white'>Detail</button>
              </div>
            </div>
          </div>
        </div>
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
      <div className='font-[mulish] px-[100px] py-10'>
        <div className='flex gap-8'>
          <div className='flex-1'>
            <div className='mb-4'>
              <img src={Logo} alt='Logo'/>
            </div>
            <div className='text-[#6E7191] text-sm'>Stop waiting in line. Buy tickets conveniently, watch movies quietly.</div>
          </div>
          <div className='flex-1'>
            <div className='text-lg font-bold mb-4'>Explore</div>
            <div className='text-[#6E7191] text-sm mb-2'>Home</div>
            <div className='text-[#6E7191] text-sm'>List Movie</div>
          </div>
          <div className='flex-1'>
            <div className='text-lg font-bold mb-4'>Our Sponsor</div>
            <div className='mb-3'>
              <img src={ebv} alt='ebv.id' />
            </div>
            <div className='mb-3'>
              <img src={cineone21} alt='CineOne21' />
            </div>
            <div className='mb-3'>
              <img src={hiflix} alt='Hiflix' />
            </div>
          </div>
          <div className='flex-1'>
            <div className='text-lg font-bold mb-4'>Follow us</div>
            <div className='flex items-center text-[#6E7191] text-sm mb-3'>
              <div className='mr-4'>
                <Facebook />
              </div>
              <div>Tickitz Cinema id</div>
            </div>
            <div className='flex items-center text-[#6E7191] text-sm mb-3'>
              <div className='mr-4'>
                <Instagram />
              </div>
              <div>tickitz.id</div>
            </div>
            <div className='flex items-center text-[#6E7191] text-sm mb-3'>
              <div className='mr-4'>
                <Twitter />
              </div>
              <div>tickitz.id</div>
            </div>
            <div className='flex items-center text-[#6E7191] text-sm mb-3'>
              <div className='mr-4'>
                <Youtube />
              </div>
              <div>Tickitz Cinema id</div>
            </div>
          </div>
        </div>
        <div className='mt-[60px] text-center text-[#6E7191] text-sm'>© 2020 Tickitz. All Rights Reserved.</div>
      </div>

    </div>
  );
}

export default Homepage;
