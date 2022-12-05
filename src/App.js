import React from 'react';
import Logo from './assets/images/logo.png';
import Jumbotron from './assets/images/image2.png';
import Spiderman from './assets/images/spiderman.png';
import LionKing from './assets/images/lion king.png';
import JohnWick3 from './assets/images/john wick 3.png';

function App() {
  return (
    <div>
      {/* Header Navbar */}
      <div className='flex items-center px-[100px] py-7 font-[mulish]'>
        <div className='flex flex-1 items-center'>
          <img className='w-[120.41px] mr-[80px]' src={Logo} alt='logo' />
          <div className='mr-[80px] cursor-pointer'>Home</div>
          <div className='cursor-pointer'>List Movie</div>
        </div>
        <div >
          <button className='bg-[#5F2EEA] text-white w-[120px] h-[40px] rounded-[4px]'>Sign In</button>
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
            <div className='text-[#5F2EEA] font-bold border-b-2 pb-4 border-[#5F2EEA] inline cursor-pointer'>Now Showing</div>
          </div>
          <div className='text-[#5F2EEA] font-bold cursor-pointer'>view all</div>
        </div>
        <div className='flex flex-nowrap mt-10 gap-6 ml-[100px] overflow-x-scroll'>
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
        </div>
      </div>

      {/* Upcoming */}
      <div className='py-10 font-[mulish]'>
        <div className='flex items-center px-[100px]'>
          <div className='flex-1 font-bold cursor-pointer'>Upcoming</div>
          <div className='text-[#5F2EEA] font-bold cursor-pointer'>view all</div>
        </div>

        <div className='flex flex-nowrap ml-[100px] py-5 overflow-x-scroll gap-4'>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>September</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>October</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>November</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>December</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>January</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>February</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>March</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>April</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>May</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>June</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>July</div>
          <div className='flex justify-center items-center min-w-[127px] min-h-[40px] border-[1px] border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] cursor-pointer'>Augustus</div>
          
        </div>
        <div></div>
      </div>
      

    </div>
  );
}

export default App;
