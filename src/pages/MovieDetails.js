import Header from "../assets/components/Header"
import ShowtimesTickets from "../assets/components/ShowtimesTickets"
import Footer from "../assets/components/Footer"

const MovieDetails = () => {
  return(
    <>
    <Header />

    {/* Movie Details */}
    <div className="flex gap-8 px-[100px] py-10 font-[mulish]">
      <div className="border-[1px] border-[#DEDEDE] rounded-[16px] p-10">
        <img src={require('../assets/images/spiderman.png')} alt='spiderman'/>
      </div>
      <div className="flex-1">
        <div>
          <div className="text-3xl font-bold mb-2">Spider-Man: Homecoming</div>
          <div className="text-[#4E4B66] text-lg mb-3">Adventure, Action, Sci-Fi</div>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <div className="text-[#4E4B66]">Release date</div>
            <div>June 28, 2017</div>
          </div>
          <div>
            <div className="text-[#4E4B66]">Directed by</div>
            <div>Jon Watss</div>
          </div>
          <div>
            <div className="text-[#4E4B66]">Duration</div>
            <div>2 hours 13 minutes </div>
          </div>
          <div>
            <div className="text-[#4E4B66]">Casts</div>
            <div>Tom Holland, Michael Keaton, Robert Downey Jr., ...</div>
          </div>
        </div>
        <div className="pt-5 border-t-[1px]">
          <div className="font-bold text-lg">Synopsis</div>
          <div>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </div>
        </div>
      </div>
    </div>

    <div className="px-[100px] py-10 font-[mulish] bg-[#F5F6F8]">
      <div className="text-center mb-5 text-xl font-bold">Showtimes and Tickets</div>
      <form className="flex gap-5 mb-[50px] justify-center items-center">
        <div>
          <input className="border-[1px] rounded-[6px] bg-[#EFF0F6] w-[200px] h-[40px] pl-3" type='date'></input>
        </div>
        <select className="border-[1px] rounded-[6px] bg-[#EFF0F6] w-[200px] h-[40px] pl-3">
          <option>Purwokerto</option>
        </select>
      </form>

      <ShowtimesTickets />
    </div>

    <Footer />
    </>
  )
}

export default MovieDetails
