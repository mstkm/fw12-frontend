import Header from "../assets/components/Header"
import Month from "../assets/components/Month"
import ListMovie from "../assets/components/ListMovie"
import Footer from "../assets/components/Footer"

const ViewAll = () => {
  return(
    <>
      <Header />

      <div className='py-10 font-[mulish] bg-[#E5E5E5]'>
        <div className='flex items-center px-[100px]'>
          <div className='flex-1 font-bold text-2xl'>List Movie</div>
          <div className='mr-5'>
            <select className='w-[100px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none text-[#4E4B66]'>
              <option>Sort</option>
            </select>
          </div>
          <div>
            <input className='w-[200px] h-[50px] border-[1px] border-[#DEDED] rounded-[16px] bg-[#FCFDFE] pl-5 focus:outline-none' placeholder='Search Movie Name ...'></input>
          </div>
        </div>

        <Month />

        <ListMovie />
      </div>

      <Footer />
    </>


  )
}

export default ViewAll
