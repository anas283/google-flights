import FlightsHeaderImage from "../images/flights_nc_4.svg";
import FindFlight from "../components/FindFlight";
import UsefulTools from "../components/UsefulTools";
import PopularDestination from "../components/PopularDestinations";
import Faq from "../components/Faq";
import FindCheapFlight from "../components/FindCheapFlight";
import Footer from "../components/Footer";

const Flights = () => {
  return (
    <div>
      <img className="mx-4" src={FlightsHeaderImage} alt="flight-image" />
    
      <div className="w-full max-w-2xl md:max-w-5xl mx-auto -mt-[85px] px-4">
        <h1 className="text-[56px] font-normal text-center">Flights</h1>

        <div className="relative min-h-[156px] rounded-lg custom-shadow px-4 pt-2 pb-12 my-8">

          <div className="absolute -bottom-5 left-0 right-0 mx-auto w-fit">
            <button className="flex justify-between gap-2 items-center bg-[#1A73E8] text-white text-sm font-medium rounded-full pl-3 pr-4 py-2 hover:bg-blue-700 shadow-lg">
              <svg className="fill-white" width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path></svg>
              <span>
                Explore
              </span>
            </button>
          </div>
        </div>

        <div className="my-12">
          <FindFlight />

          <UsefulTools />

          <PopularDestination />

          <Faq />

          <FindCheapFlight />

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Flights;