import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"
import TicketActive from "../assets/components/TicketActive"

const TicketResult = () => {
  return(
    <>
      <Header />

      <div className="bg-[#E5E5E5] py-10 px-[190px] font-[mulish]">
        <div className="flex flex-col justify-center items-center bg-white rounded-[8px] py-10">
          <div className="font-bold mb-5">Proof of Payment</div>
          <div className="flex w-[600px] border-[1px] rounded-[16px]">
            <div className="flex-[70%]">
              <div className="flex bg-[#5F2EEA] rounded-tl-[16px] items-center px-10 mb-5 py-2">
                <div className="flex-1">
                  <img className="w-[115px] h-[38px]" src={require('../assets/images/tickitz1.png')} alt='Logo' />
                </div>
                <div className="text-white">Admit One</div>
              </div>
              <div className="px-10 mb-3">
                <div className="text-[#AAAAAA]">Movie</div>
                <div className="font-bold">Spider-Man: Homecoming</div>
              </div>
              <div className="grid grid-cols-3 gap-3 px-10 pb-3">
                <div>
                  <div className="text-[#AAAAAA]">Date</div>
                  <div className="font-bold">07 July</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Time</div>
                  <div className="font-bold">02:00pm</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Category</div>
                  <div className="font-bold">Action</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Count</div>
                  <div className="font-bold">3 Pieces</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Seats</div>
                  <div className="font-bold">C4, C5, C6</div>
                </div>
                <div>
                  <div className="text-[#AAAAAA]">Price</div>
                  <div className="font-bold text-lg">$30.00</div>
                </div>

              </div>

            </div>

            <div className="flex-[30%] border-l-2 border-dashed">
              <div className="bg-[#5F2EEA] rounded-tr-[16px] flex justify-center py-2">
                <img className="w-[115px] h-[38px]" src={require('../assets/images/tickitz1.png')} alt='Logo' />
              </div>
              <div className="flex justify-center items-center py-5">
                <TicketActive />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TicketResult
