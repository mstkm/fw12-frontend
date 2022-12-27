import Footer from "../assets/components/Footer"
import HeaderAdmin from "../assets/components/HeaderAdmin"

const ManageSchedule = () => {
  return(
    <div>
      <HeaderAdmin />

      <div className='px-[100px] py-10 font-[mulish] bg-[#E5E5E5]'>
      <div className="font-bold text-2xl mb-3">Form Movie</div>
      <div className='bg-white p-8 rounded-[8px]'>
        <div className="flex gap-8">
          <div className="p-5 border-[1px] rounded-[8px]">
            <img src={require('../assets/images/spiderman.png')} alt='spiderman' />
          </div>
          <div className="flex-1 grid grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">Movie</label>
              <select className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[16px] focus:outline-none" type='text' name='movie-name' placeholder='Spider-Man: Homecoming'>
                <option>Select Movie</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Location</label>
              <select className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[16px] focus:outline-none" type='text' name='movie-name' placeholder='Spider-Man: Homecoming'>
                <option>Select Location</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Price</label>
              <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[16px] focus:outline-none" type='text' name='duration-hour' placeholder='10'></input>
            </div>
            <div className="flex gap-5">
              <div>
                <label className="block mb-2">Date Start</label>
                <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[16px] focus:outline-none" type='text' name='duration-hour' placeholder='07/05/2020'></input>
              </div>
              <div>
                <label className="block mb-2">Date End</label>
                <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[16px] focus:outline-none" type='text' name='duration-minute' placeholder='07/07/2020'></input>
              </div>
            </div>
            <div>
              <label className="block mb-2">Premiere</label>
              <div className="flex gap-5 items-center">
                <div>
                  <img src={require('../assets/images/ebv.id.png')} alt='ebv.id' />
                </div>
                <div>
                  <img src={require('../assets/images/hiflix.png')} alt='hiflix' />
                </div>
                <div>
                  <img src={require('../assets/images/cineone21.png')} alt='cineone21' />
                </div>
              </div>
            </div>
            <div>
              <label>Time</label>
              <div className="grid grid-cols-4 gap-3">
                <div className="flex justify-center items-center border-[1px] rounded-[8px] font-bold text-primary cursor-pointer hover:bg-primary hover:text-white">+</div>
                <div>08:30am</div>
                <div>10:30pm</div>
                <div>12:00pm</div>
                <div>04:30pm</div>
                <div>07:00pm</div>
                <div>08:30pm</div>
                <div>08:30pm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-end mt-8">
          <div>
            <button className="w-[180px] h-[50px] border-2 border-primary text-primary rounded-[4px] font-bold hover:bg-primary hover:text-white">Reset</button>
          </div>
          <div>
            <button className="w-[180px] h-[50px] border-2 border-primary text-primary rounded-[4px] font-bold hover:bg-primary hover:text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div className='font-[mulish] bg-[#E5E5E5]'>
      <div className='flex items-center px-[100px]'>
        <div className='flex-1 font-bold text-2xl'>Data Schedule</div>
        <div className='mr-5'>
          <select className='w-[100px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
            <option>Sort</option>
          </select>
        </div>
        <div className='mr-5'>
          <select className='w-[150px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
            <option>Location</option>
          </select>
        </div>
        <div>
          <select className='w-[120px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
            <option>Movie</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 p-8 gap-5 bg-white mx-[100px] rounded-[8px] mt-5">
          <div className="w-[320px] border-[1px] pb-5 font-[mulish] rounded-[8px]">
            <div className="grid grid-cols-2 items-center px-5 py-5 border-b-[1px]">
              <div>
                <img className="w-[70%]" src={require('../assets/images/ebv.id.png')} alt='ebv.id' />
              </div>
              <div>
                <div className="font-bold text-lg">ebv.id</div>
                <div className="text-sm">Whatever street No.12, South Purwokerto</div>
              </div>
            </div>

            <div className="grid grid-cols-4 px-5 py-5 gap-2 text-sm">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>

            <div className="flex px-5 py-5 mb-3">
              <div className="flex-1">Price</div>
              <div className="font-bold">$10.00/seat</div>
            </div>

            <div className="flex gap-5 px-5">
              <div className="flex-1">
                <button className='w-[100%] p-2 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Update</button>
              </div>
              <div className="flex-1">
                <button className='w-[100%]  p-2 border-[0.5px] border-red-600 rounded-[4px] text-red-600 hover:bg-red-600 hover:text-white'>Delete</button>
              </div>
            </div>
          </div>

          <div className="w-[320px] border-[1px] pb-5 font-[mulish] rounded-[8px]">
            <div className="grid grid-cols-2 items-center px-5 py-5 border-b-[1px]">
              <div>
                <img className="w-[70%]" src={require('../assets/images/hiflix.png')} alt='ebv.id' />
              </div>
              <div>
                <div className="font-bold text-lg">Hiflix</div>
                <div className="text-sm">Whatever street No.12, South Purwokerto</div>
              </div>
            </div>

            <div className="grid grid-cols-4 px-5 py-5 gap-2 text-sm">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>

            <div className="flex px-5 py-5 mb-3">
              <div className="flex-1">Price</div>
              <div className="font-bold">$10.00/seat</div>
            </div>

            <div className="flex gap-5 px-5">
              <div className="flex-1">
                <button className='w-[100%] p-2 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Update</button>
              </div>
              <div className="flex-1">
                <button className='w-[100%]  p-2 border-[0.5px] border-red-600 rounded-[4px] text-red-600 hover:bg-red-600 hover:text-white'>Delete</button>
              </div>
            </div>
          </div>

          <div className="w-[320px] border-[1px] pb-5 font-[mulish] rounded-[8px]">
            <div className="grid grid-cols-2 items-center px-5 py-5 border-b-[1px]">
              <div>
                <img className="w-[70%]" src={require('../assets/images/cineone21.png')} alt='ebv.id' />
              </div>
              <div>
                <div className="font-bold text-lg">CineOne21</div>
                <div className="text-sm">Whatever street No.12, South Purwokerto</div>
              </div>
            </div>

            <div className="grid grid-cols-4 px-5 py-5 gap-2 text-sm">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>

            <div className="flex px-5 py-5 mb-3">
              <div className="flex-1">Price</div>
              <div className="font-bold">$10.00/seat</div>
            </div>

            <div className="flex gap-5 px-5">
              <div className="flex-1">
                <button className='w-[100%] p-2 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Update</button>
              </div>
              <div className="flex-1">
                <button className='w-[100%]  p-2 border-[0.5px] border-red-600 rounded-[4px] text-red-600 hover:bg-red-600 hover:text-white'>Delete</button>
              </div>
            </div>
          </div>

          <div className="w-[320px] border-[1px] pb-5 font-[mulish] rounded-[8px]">
            <div className="grid grid-cols-2 items-center px-5 py-5 border-b-[1px]">
              <div>
                <img className="w-[70%]" src={require('../assets/images/ebv.id.png')} alt='ebv.id' />
              </div>
              <div>
                <div className="font-bold text-lg">ebv.id</div>
                <div className="text-sm">Whatever street No.12, South Purwokerto</div>
              </div>
            </div>

            <div className="grid grid-cols-4 px-5 py-5 gap-2 text-sm">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>

            <div className="flex px-5 py-5 mb-3">
              <div className="flex-1">Price</div>
              <div className="font-bold">$10.00/seat</div>
            </div>

            <div className="flex gap-5 px-5">
              <div className="flex-1">
                <button className='w-[100%] p-2 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Update</button>
              </div>
              <div className="flex-1">
                <button className='w-[100%]  p-2 border-[0.5px] border-red-600 rounded-[4px] text-red-600 hover:bg-red-600 hover:text-white'>Delete</button>
              </div>
            </div>
          </div>

          <div className="w-[320px] border-[1px] pb-5 font-[mulish] rounded-[8px]">
            <div className="grid grid-cols-2 items-center px-5 py-5 border-b-[1px]">
              <div>
                <img className="w-[70%]" src={require('../assets/images/hiflix.png')} alt='ebv.id' />
              </div>
              <div>
                <div className="font-bold text-lg">Hiflix</div>
                <div className="text-sm">Whatever street No.12, South Purwokerto</div>
              </div>
            </div>

            <div className="grid grid-cols-4 px-5 py-5 gap-2 text-sm">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>

            <div className="flex px-5 py-5 mb-3">
              <div className="flex-1">Price</div>
              <div className="font-bold">$10.00/seat</div>
            </div>

            <div className="flex gap-5 px-5">
              <div className="flex-1">
                <button className='w-[100%] p-2 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Update</button>
              </div>
              <div className="flex-1">
                <button className='w-[100%]  p-2 border-[0.5px] border-red-600 rounded-[4px] text-red-600 hover:bg-red-600 hover:text-white'>Delete</button>
              </div>
            </div>
          </div>

          <div className="w-[320px] border-[1px] pb-5 font-[mulish] rounded-[8px]">
            <div className="grid grid-cols-2 items-center px-5 py-5 border-b-[1px]">
              <div>
                <img className="w-[70%]" src={require('../assets/images/cineone21.png')} alt='ebv.id' />
              </div>
              <div>
                <div className="font-bold text-lg">CineOne21</div>
                <div className="text-sm">Whatever street No.12, South Purwokerto</div>
              </div>
            </div>

            <div className="grid grid-cols-4 px-5 py-5 gap-2 text-sm">
              <div>08:30am</div>
              <div>10:30pm</div>
              <div>12:00pm</div>
              <div>02:00pm</div>
              <div>04:30pm</div>
              <div>07:00pm</div>
              <div>08:30pm</div>
            </div>

            <div className="flex px-5 py-5 mb-3">
              <div className="flex-1">Price</div>
              <div className="font-bold">$10.00/seat</div>
            </div>

            <div className="flex gap-5 px-5">
              <div className="flex-1">
                <button className='w-[100%] p-2 border-[0.5px] border-primary rounded-[4px] text-primary hover:bg-primary hover:text-white'>Update</button>
              </div>
              <div className="flex-1">
                <button className='w-[100%]  p-2 border-[0.5px] border-red-600 rounded-[4px] text-red-600 hover:bg-red-600 hover:text-white'>Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-3 py-10'>
          <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-primary hover:text-white'>1</div>
          <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-primary hover:text-white'>2</div>
          <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-primary hover:text-white'>3</div>
          <div className='flex justify-center items-center w-[40px] h-[40px] border-[1px] border-[#DEDEDE] bg-[#FFFFFF] rounded-[8px] text-[#4E4B66] cursor-pointer hover:bg-primary hover:text-white'>4</div>
        </div>
    </div>

    <Footer />
    </div>
  )
}

export default ManageSchedule
