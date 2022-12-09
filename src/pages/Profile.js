import Header from "../assets/components/Header"
import { Eye } from "react-feather"
import Footer from "../assets/components/Footer"
import { useNavigate } from "react-router-dom"

const Profile = () => {
  const navigate = useNavigate()
  const directToOrderHistory = () => {
    navigate('/orderHistory')
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
          <div className="text-[#4E4B66] font-bold py-5 border-b-2 border-[#5F2EEA] cursor-pointer">Account Setting</div>
          <div onClick={directToOrderHistory} className="text-[#4E4B66] py-5 cursor-pointer hover:font-bold">Order History</div>
        </div>
        <div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
          <div className="text-[#4E4B66] border-b-[1px] pb-2 mb-5">Details Information</div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="text-[#4E4B66] mb-2">First Name</div>
              <div>
                <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text' placeholder="Jonas"></input>
              </div>
            </div>
            <div>
              <div className="text-[#4E4B66] mb-2">Last Name</div>
              <div>
                <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text' placeholder="El Rodriguez"></input>
              </div>
            </div>
            <div>
              <div className="text-[#4E4B66] mb-2">Email</div>
              <div>
                <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='email' placeholder="jonasrodrigu123@gmail.com"></input>
              </div>
            </div>
            <div>
              <div className="text-[#4E4B66] mb-2">Phone Number</div>
              <div>
                <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='email' placeholder="62 | 81445687121"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <button className="bg-[#5F2EEA] w-[350px] h-[50px] text-white rounded-[16px]">Update changes</button>
        </div>

        <div className="gap-12 bg-white rounded-[24px] p-8 mb-5">
          <div className="text-[#4E4B66] border-b-[1px] pb-2 mb-5">Account and Privacy</div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <div className="text-[#4E4B66] mb-2">New Password</div>
              <div className="relative">
                <Eye className="absolute right-4 top-3" />
                <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='password' placeholder="Write your password"></input>
              </div>
            </div>
            <div>
              <div className="text-[#4E4B66] mb-2">Confirm Password</div>
              <div className="relative">
                <Eye className="absolute right-4 top-3" />
                <input className="border-[1px] w-[100%] h-[50px] rounded-[16px] pl-5 focus:outline-none" type='text' placeholder="Confirm your password"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <button className="bg-[#5F2EEA] w-[350px] h-[50px] text-white rounded-[16px]">Update changes</button>
        </div>


      </div>
    </div>

    <Footer />
    </>
  )
}

export default Profile
