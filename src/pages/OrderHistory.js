import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"
import { useNavigate } from "react-router-dom"

const OrderHistory = () => {
  const navigate = useNavigate();
  const directToAccountSetting = () => {
    navigate('/profile')
  }
  return(
    <>
    <Header />

    <div className="flex gap-8 bg-[#E5E5E5] px-[100px] py-10 font-[mulish]">
      <div className="flex-[30%]">
        <div className="bg-white rounded-[24px] p-5">
          <div className="text-[#4E4B66] mb-5">INFO</div>
          <div className="flex flex-col justify-center items-center mb-8">
            <img className="w-[100px] h-[100px] rounded-full mb-5" src="https://picsum.photos/200/300" alt="foto-profil" />
            <div className="font-bold mb-2">Jonas El Rodriguez</div>
            <div className="text-[#4E4B66]">Moviegoers</div>
          </div>
          <div className="flex justify-center pt-5 border-t-[1px]">
            <button className="bg-[#5F2EEA] w-[150px] h-[50px] text-white rounded-[16px]">Logout</button>
          </div>
        </div>
      </div>

      <div className="flex-[70%]">
        <div className="flex gap-12 bg-white rounded-[24px] px-8 mb-5">
          <div onClick={directToAccountSetting} className="text-[#4E4B66] py-5 cursor-pointer hover:font-bold ">Account Setting</div>
          <div className="text-[#4E4B66] font-bold  py-5 cursor-pointer border-b-2 border-[#5F2EEA]">Order History</div>
        </div>

        <div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
          <div className="flex items-center border-b-[2px] pb-5 mb-5">
            <div className="flex-1">
              <div className="text-[#AAAAAA] text-sm">Tuesday, 07 July 2020 - 04:30pm</div>
              <div className="font-bold text-xl">Spider-Man: Homecoming</div>
            </div>
            <div>
              <img src={require('../assets/images/cineone21.png')} alt='CineOne21' />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="flex items-center justify-center w-[150px] h-[40px] bg-[#00BA88] rounded-[4px] text-white">Ticket Active</div>
            </div>
            <div className="text-[#AAAAAA] cursor-pointer hover:font-bold">See Details</div>
          </div>
        </div>
        <div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
          <div className="flex items-center border-b-[2px] pb-5 mb-5">
            <div className="flex-1">
              <div className="text-[#AAAAAA] text-sm">Monday, 14 June 2020 - 02:00pm</div>
              <div className="font-bold text-xl">Avengers: End Game</div>
            </div>
            <div>
              <img src={require('../assets/images/ebv.id.png')} alt='ebv.id' />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="flex items-center justify-center w-[150px] h-[40px] bg-[#6E7191] rounded-[4px] text-white">Ticket Used</div>
            </div>
            <div className="text-[#AAAAAA] cursor-pointer hover:font-bold">See Details</div>
          </div>
        </div>
        <div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
          <div className="flex items-center border-b-[2px] pb-5 mb-5">
            <div className="flex-1">
              <div className="text-[#AAAAAA] text-sm">Monday, 10 March 2020 - 04:00pm</div>
              <div className="font-bold text-xl">Thor: Ragnarok</div>
            </div>
            <div>
              <img src={require('../assets/images/ebv.id.png')} alt='ebv.id' />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <div className="flex items-center justify-center w-[150px] h-[40px] bg-[#6E7191] rounded-[4px] text-white">Ticket Expired</div>
            </div>
            <div className="text-[#AAAAAA] cursor-pointer hover:font-bold">See Details</div>
          </div>
        </div>

      </div>
    </div>

    <Footer />
    </>
  )
}

export default OrderHistory
