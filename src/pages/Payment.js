import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"
import { AlertTriangle } from "react-feather"

const Payment = () => {
  return(
    <div>
      <Header />

      <div className="flex gap-8 px-[100px] py-10 font-[mulish] bg-[#EFF0F7]">
        <div className="flex-[70%]">
          <div className="mb-8">
            <div className='font-bold text-lg mb-5'>Payment Info</div>
            <div className="bg-[white] p-5 rounded-[6px]">
              <div className="flex border-b-[1px] p-3">
                <div className="flex-1 text-[#6B6B6B]">Date & time</div>
                <div className="font-bold">Tuesday, 07 July 2020 at 02:00</div>
              </div>
              <div className="flex border-b-[1px] p-3">
                <div className="flex-1 text-[#6B6B6B]">Movie title</div>
                <div className="font-bold">Spider-Man: Homecoming</div>
              </div>
              <div className="flex border-b-[1px] p-3">
                <div className="flex-1 text-[#6B6B6B]">Cinema name</div>
                <div className="font-bold">CineOne21 Cinema</div>
              </div>
              <div className="flex border-b-[1px] p-3">
                <div className="flex-1 text-[#6B6B6B]">Number of tickets</div>
                <div className="font-bold">3 pieces</div>
              </div>
              <div className="flex p-3">
                <div className="flex-1 text-[#6B6B6B]">Total payment</div>
                <div className="font-bold text-lg">$30,00</div>
              </div>
            </div>
          </div>

          <div>
            <div className='font-bold text-lg mb-5'>Choose a Payment Method</div>
            <div className="bg-[white] p-5 rounded-[6px] mb-8">
              <div className="grid grid-cols-4 gap-5">
                <div className="flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px]">
                  <img src={require('../assets/images/google-pay.png')} alt='google-pay' />
                </div>
                <div className="flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px]">
                  <img src={require('../assets/images/visa.png')} alt='visa' />
                </div>
                <div className="flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px]">
                  <img src={require('../assets/images/gopay.png')} alt='gopay' />
                </div>
                <div className="flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px]">
                  <img src={require('../assets/images/paypal.png')} alt='paypal' />
                </div>
                <div className="flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px]">
                  <img src={require('../assets/images/dana.png')} alt='dana' />
                </div>
                <div className="flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px]">
                  <img src={require('../assets/images/bca.png')} alt='bca' />
                </div>
                <div className="flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px]">
                  <img src={require('../assets/images/bri.png')} alt='bri' />
                </div>
                <div className="flex justify-center items-center border-2 w-[145px] h-[50px] rounded-[8px]">
                  <img src={require('../assets/images/ovo.png')} alt='ovo' />
                </div>
              </div>
              <div className='flex items-center py-8'>
                <div className='flex-1'>
                  <div className='border-[1px] bg-[#DEDEDE]'></div>
                </div>
                <div className='text-[#5F2EEA] px-5 cursor-pointer hover:font-bold'>or</div>
                <div className='flex-1 relative'>
                  <div className='border-[1px] bg-[#DEDEDE]'></div>
                </div>
              </div>
              <div className="text-center">Pay via cash. <span className="text-[#5F2EEA]">See how it work</span></div>
            </div>

            <div className="flex">
              <div className="flex-1">
                <button className="flex justify-center items-center w-[300px] h-[50px] p-5 border-[2px] border-[#5F2EEA] text-[#5F2EEA] font-bold rounded-[4px] hover:bg-[#5F2EEA] hover:text-white">Previous Step</button>
              </div>
              <div>
                <button className="flex justify-center items-center w-[300px] h-[50px] p-5 border-[2px] border-[#5F2EEA] text-[#5F2EEA] font-bold rounded-[4px] hover:bg-[#5F2EEA] hover:text-white">Pay Your Order</button>
              </div>

            </div>

          </div>
        </div>

        <div className="flex-[30%]">
          <div className='flex-1 font-bold text-lg mb-5'>Personal Info</div>
          <div className="bg-white p-5 rounded-[6px]">
            <div className="mb-5">
              <div className="mb-2">Full Name</div>
              <div>
                <input className="border-[1px] w-[100%] h-[50px] rounded-[4px] pl-5 focus:outline-none" type='text' placeholder="Jonas El Rodriguez"></input>
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-2">Email</div>
              <div>
                <input className="border-[1px] w-[100%] h-[50px] rounded-[4px] pl-5 focus:outline-none" type='email' placeholder="jonasrodri123@gmail.com"></input>
              </div>
            </div>
            <div className="mb-5">
              <div className="mb-2">Phone Number</div>
              <div>
                <input className="border-[1px] w-[100%] h-[50px] rounded-[4px] pl-5 focus:outline-none" type='text' placeholder="+62 | 81445687121"></input>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex items-center justify-center border-[1px] w-[100%] h-[50px] rounded-[4px] bg-[#F4B740] opacity-30"><AlertTriangle className="mr-5"/>Fill your data correctly.</div>
            </div>
          </div>
        </div>
      </div>

    <Footer />
    </div>
  )
}

export default Payment
