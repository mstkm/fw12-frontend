import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather'

const Footer = () => {
  return (
    <div className='font-[mulish] px-5 md:px-[100px] py-10 bg-white'>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='flex-1'>
          <div className='mb-4'>
            <img src={require('../images/bannerKarcis.png')} alt='Logo' className='w-3/4'/>
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
            <img src={require('../images/ebv.id.png')} alt='ebv.id' />
          </div>
          <div className='mb-3'>
            <img src={require('../images/cineone21.png')} alt='CineOne21' />
          </div>
          <div className='mb-3'>
            <img src={require('../images/hiflix.png')} alt='Hiflix' />
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
  )
}

export default Footer
