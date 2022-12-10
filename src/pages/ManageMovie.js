import HeaderAdmin from "../assets/components/HeaderAdmin"
import DataMovie from "../assets/components/DataMovie"
import Footer from "../assets/components/Footer"

const ManageMovie = () => {
  return(
    <>
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
              <label className="block mb-2">Movie Name</label>
              <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='movie-name' placeholder='Spider-Man: Homecoming'></input>
            </div>
            <div>
              <label className="block mb-2">Category</label>
              <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='category' placeholder='Action, Adventure, Sci-Fi'></input>
            </div>
            <div>
              <label className="block mb-2">Director</label>
              <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='director' placeholder='Jon Watts'></input>
            </div>
            <div>
              <label className="block mb-2">Casts</label>
              <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='casts' placeholder='Tom Holland, Michael Keaton, Robert Dow..'></input>
            </div>
            <div>
              <label className="block mb-2">Release date</label>
              <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='release-date' placeholder='07/05/2020'></input>
            </div>
            <div className="flex gap-5">
              <div>
                <label className="block mb-2">Duration Hour</label>
                <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='duration-hour' placeholder='2'></input>
              </div>
              <div>
                <label className="block mb-2">Duration Minute</label>
                <input className="w-[100%] h-[50px] border-[1px] pl-4 rounded-[4px] focus:outline-none" type='text' name='duration-minute' placeholder='13'></input>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <label className="block mb-2">Synposis</label>
          <textarea className="w-[100%] h-[100px] border-[1px] p-5 rounded-[4px] focus:outline-none" type='text' name='release-date' placeholder='Thrilled by his experience with the Avengers, Peter returns home, where he
lives with his Aunt May, | '></textarea>
        </div>
        <div className="flex gap-5 justify-end">
          <div>
            <button className="w-[180px] h-[50px] border-2 border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] font-bold">Reset</button>
          </div>
          <div>
            <button className="w-[180px] h-[50px] border-2 border-[#5F2EEA] text-[#5F2EEA] rounded-[4px] font-bold">Submit</button>
          </div>
        </div>
      </div>
    </div>

    <div className='font-[mulish] bg-[#E5E5E5]'>
      <div className='flex items-center px-[100px]'>
        <div className='flex-1 font-bold text-2xl'>Data Movie</div>
        <div className='mr-5'>
          <select className='w-[100px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
            <option>Sort</option>
          </select>
        </div>
        <div>
          <input className='w-[200px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none' placeholder='Search Movie Name ...'></input>
        </div>
      </div>

      <DataMovie />
    </div>

    <Footer />
    </>
  )
}

export default ManageMovie
