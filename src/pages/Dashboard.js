import React from 'react'
import Footer from '../assets/components/Footer'
import HeaderAdmin from '../assets/components/HeaderAdmin'

const Dashboard = () => {
  return (
    <div>
      <HeaderAdmin />

      <div className="flex flex-col md:flex-row px-5 md:px-[100px] bg-[#E5E5E5] py-10 font-[mulish] gap-8">
        <div className="flex-[70%]">
          <div className="text-2xl font-bold mb-3">Dashboard</div>
          <div>
            <img src={require('../assets/images/dashboard.png')} alt='dashboard' />
          </div>
        </div>
        <div className="flex-[30%]">
          <div className="text-2xl font-bold mb-3">Filtered</div>
          <div className="bg-white p-5 rounded-[4px]">
            <select className="border-[1px] rounded-[4px] border-[#DEDEDE] h-[50px] w-[100%] px-2 mb-5">
              <option>Select Movie</option>
            </select>
            <select className="border-[1px] rounded-[4px] border-[#DEDEDE] h-[50px] w-[100%] px-2 mb-5">
              <option>Select Premiere</option>
            </select>
            <select className="border-[1px] rounded-[4px] border-[#DEDEDE] h-[50px] w-[100%] px-2 mb-8">
              <option>Select Location</option>
            </select>
            <div className="mb-5">
              <button className="border-[1px] rounded-[4px] border-primary h-[50px] w-[100%] font-bold text-primary hover:text-white hover:bg-primary">Filter</button>
            </div>
            <div>
              <button className="border-[1px] rounded-[4px] border-primary h-[50px] w-[100%] font-bold text-primary hover:text-white hover:bg-primary">Reset</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Dashboard
