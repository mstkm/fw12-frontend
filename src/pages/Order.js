import Header from "../assets/components/Header"
import Footer from "../assets/components/Footer"

const Order = () => {
  return(
    <div>
      <Header />

      <div className="flex gap-8 px-[100px] py-10 font-[mulish] bg-[#EFF0F7]">
        <div className="flex-[70%]">
          <div className="mb-8">
            <div className='flex-1 font-bold text-lg mb-5'>Movie Selected</div>
            <div className="flex bg-[white] p-5 rounded-[6px]">
              <div className='flex-1 font-bold text-xl'>Spider-Man: Homecoming</div>
              <div>
                <button className="w-[140px] h-[35px] border-[1px] bg-[#EFF0F7] rounded-[4px] text-[#5F2EEA] font-bold">Change Movie</button>
              </div>
            </div>
          </div>

          <div>
            <div className='flex-1 font-bold text-lg mb-5'>Choose Your Seat</div>
            <div className="bg-[white] py-10 px-[100px] rounded-[6px] mb-8">
              <div className="flex flex-col items-center ">
                <div className="font-bold mb-2">Screen</div>
                <div className="border-[1px] w-[50%] h-[8px] bg-[#D6D8E7] rounded-[4px] mb-5"></div>
              </div>

              {/* Grid */}
              <div className="flex gap-8 justify-center items-center mb-10">
                {/* Left Grid */}
                <div className="grid grid-cols-8 w-fit gap-2">
                  <div className="flex justify-center items-center">A</div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="flex justify-center items-center">B</div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="flex justify-center items-center">C</div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="flex justify-center items-center">D</div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="flex justify-center items-center">E</div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="flex justify-center items-center">F</div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="flex justify-center items-center">G</div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div></div>
                  <div className="flex justify-center items-center">1</div>
                  <div className="flex justify-center items-center">2</div>
                  <div className="flex justify-center items-center">3</div>
                  <div className="flex justify-center items-center">4</div>
                  <div className="flex justify-center items-center">5</div>
                  <div className="flex justify-center items-center">6</div>
                  <div className="flex justify-center items-center">7</div>
                </div>
                {/* Right Grid */}
                <div className="grid grid-cols-7 w-fit gap-2">
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>

                  <div className="flex justify-center items-center">8</div>
                  <div className="flex justify-center items-center">9</div>
                  <div className="flex justify-center items-center">10</div>
                  <div className="flex justify-center items-center">11</div>
                  <div className="flex justify-center items-center">12</div>
                  <div className="flex justify-center items-center">13</div>
                  <div className="flex justify-center items-center">14</div>

                </div>
              </div>

              <div className="font-bold mb-5">Seating Key</div>
              <div className="flex gap-8">
                <div className="flex items-center gap-5">
                  <div className="w-[26px] h-[26px] bg-[#D6D8E7] rounded-[4px]"></div>
                  <div>Available</div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-[26px] h-[26px] bg-[#5F2EEA] rounded-[4px]"></div>
                  <div>Selected</div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-[26px] h-[26px] bg-[#6E7191] rounded-[4px]"></div>
                  <div>Sold</div>
                </div>
              </div>

            </div>

            <div className="flex">
              <div className="flex-1">
                <button className="flex justify-center items-center w-[300px] h-[50px] p-5 border-[2px] border-[#5F2EEA] text-[#5F2EEA] font-bold rounded-[4px] hover:bg-[#5F2EEA] hover:text-white">Change your movie</button>
              </div>
              <div>
                <button className="flex justify-center items-center w-[300px] h-[50px] p-5 border-[2px] border-[#5F2EEA] text-[#5F2EEA] font-bold rounded-[4px] hover:bg-[#5F2EEA] hover:text-white">Checkout now</button>
              </div>

            </div>

          </div>
        </div>

        <div className="flex-[30%]">
          <div className='flex-1 font-bold text-lg mb-5'>Order Info</div>
          <div className="bg-white p-5 rounded-[6px]">
            <div className="flex flex-col items-center mb-5">
              <img className="w-[50%] mb-3" src={require('../assets/images/cineone21.png')} alt='CineOne21' />
              <div className="font-bold">CineOne21 Cinemas</div>
            </div>
            <div className="flex mb-2">
              <div className="flex-1 text-sm text-[#6B6B6B]">Movie selected</div>
              <div className="text-sm font-bold">Spider-Man: Homecoming</div>
            </div>
            <div className="flex mb-2">
              <div className="flex-1 text-sm text-[#6B6B6B]">Tuesday, 07 July 2020</div>
              <div className="text-sm font-bold">02:00</div>
            </div>
            <div className="flex mb-2">
              <div className="flex-1 text-sm text-[#6B6B6B]">One ticket price</div>
              <div className="text-sm font-bold">$10</div>
            </div>
            <div className="flex mb-2">
              <div className="flex-1 text-sm text-[#6B6B6B]">Seat choosed</div>
              <div className="text-sm font-bold">C4, C5, C6</div>
            </div>
            <div className="flex py-5 border-t-[1px]">
              <div className="flex-1 font-bold">Total Payment</div>
              <div className="font-bold text-[#5F2EEA]">$30</div>
            </div>
          </div>
        </div>
      </div>

    <Footer />
    </div>
  )
}

export default Order
