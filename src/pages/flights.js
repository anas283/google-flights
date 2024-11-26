import FlightsHeaderImage from "../images/flights_nc_4.svg";
import FindFlight from "../sections/FindFlight";
import UsefulTools from "../sections/UsefulTools";
import PopularDestination from "../sections/PopularDestinations";
import Faq from "../sections/Faq";
import FindCheapFlight from "../sections/FindCheapFlight";
import Footer from "../components/Footer";

const Flights = () => {
  return (
    <div className="mt-14 md:mt-16">
      <div className="max-w-[1248px] mx-auto">
        <img className="w-full h-full scale-[1.47] md:scale-100 translate-y-5 md:translate-x-0" src={FlightsHeaderImage} alt="flight-image" />
      </div>
    
      <div className="w-full max-w-2xl md:max-w-5xl mx-auto mt-2 md:-mt-[65px] px-4 relative z-10">
        <h1 className="text-4xl md:text-[56px] font-normal text-center">Flights</h1>

        <div className="relative min-h-[156px] bg-white rounded-lg custom-shadow px-4 pb-12 md:pt-2 mt-2 mb-8 md:my-14">
          <div>
            <div className="flex flex-row gap-1">
              <button className="flex justify-between items-center gap-2 rounded px-2 py-2 hover:bg-gray-100">
                <span>
                  <svg className="fill-[#70757a]" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" focusable="false"><g><rect fill="none" height="24" width="24" x="0"></rect></g><g><g><polygon points="8.41,12.41 7,11 2,16 7,21 8.41,19.59 5.83,17 21,17 21,15 5.83,15"></polygon><polygon points="15.59,11.59 17,13 22,8 17,3 15.59,4.41 18.17,7 3,7 3,9 18.17,9"></polygon></g></g></svg>
                </span>
                <span className="font-roboto text-sm text-[#3c4043]">Round trip</span>
                <span className="w-5 h-5 flex justify-center items-center">
                  <svg className="w-[40%] fill-[#70757a]" viewBox="7 10 10 5" focusable="false">
                    <polygon stroke="none" fillRule="evenodd" points="7 10 12 15 17 10"></polygon>
                  </svg>
                </span>
              </button>

              <button className="flex justify-between items-center gap-2 rounded px-2 py-2 hover:bg-gray-100">
                <span>
                  <svg className="fill-[#70757a]" width="20" height="20" viewBox="0 0 24 24" focusable="false"><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 9c2.7 0 5.8 1.29 6 2v1H6v-.99c.2-.72 3.3-2.01 6-2.01m0-11C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></svg>
                </span>
                <span className="font-roboto text-sm text-[#3c4043]">1</span>
                <span className="w-5 h-5 flex justify-center items-center">
                  <svg className="w-[40%] fill-[#70757a]" viewBox="7 10 10 5" focusable="false">
                    <polygon stroke="none" fillRule="evenodd" points="7 10 12 15 17 10"></polygon>
                  </svg>
                </span>
              </button>

              <button className="flex justify-between items-center gap-2 rounded px-2 py-2 hover:bg-gray-100">
                <span className="font-roboto text-sm text-[#3c4043]">Economy</span>
                <span className="w-5 h-5 flex justify-center items-center">
                  <svg className="w-[40%] fill-[#70757a]" viewBox="7 10 10 5" focusable="false">
                    <polygon stroke="none" fillRule="evenodd" points="7 10 12 15 17 10"></polygon>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-2 gap-3 md:gap-0">
            <div className="md:flex-[1_1_388px]">
              <div className="flex justify-between gap-2 relative"> 
                <div className="w-1/2">
                  <div className="relative overflow-hidden">
                    <span className="absolute top-5 left-5">
                      <svg className="fill-[#5f6368]" width="16" height="16" viewBox="0 0 24 24" focusable="false"><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path></svg>
                    </span>
                    <input 
                      type="text" 
                      className="w-full h-[56px] border rounded pl-12 pr-6  font-roboto placeholder:text-gray-700"
                      placeholder="Alor Setar"
                    />
                    <div className="absolute top-2.5 -right-[22px] w-9 h-9 border rounded-l-full"></div>
                  </div>
                </div>
                <div className="absolute w-[34px] h-[34px] bg-white rounded-full top-[10.5px] left-0 right-0 mx-auto z-10 flex justify-center items-center">
                  <svg className="fill-[#adb3be]" width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M17 4l-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"></path></svg>
                </div>
                <div className="w-1/2">
                  <div className="relative overflow-hidden">
                    <span className="absolute top-4 left-5">
                      <svg className="fill-[#5f6368]" width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>
                    </span>
                    <input 
                      type="text" 
                      className="w-full h-[56px] border rounded pl-14 pr-6 font-roboto placeholder:text-gray-700"
                      placeholder="Where to?"
                    />
                    <div className="absolute top-2.5 -left-[22px] w-9 h-9 border rounded-r-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-[0_1_372px] md:ml-4">
              <div className="flex justify-between relative"> 
                <div className="w-1/2">
                  <div className="relative">
                    <span className="absolute top-4 left-4">
                      <svg className="fill-[#5f6368]" width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path><path d="M8 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path></svg>
                    </span>
                    <input 
                      type="text" 
                      className="w-full h-[56px] border rounded rounded-tr-none rounded-br-none pl-12 pr-3 border-r-0 font-roboto placeholder:text-gray-700"
                      placeholder="Departure"
                    />
                  </div>
                </div>
                <div className="h-8 w-[1px] absolute top-3 left-0 right-0 mx-auto bg-gray-300"></div>
                <div className="w-1/2">
                  <div>
                    <input 
                      type="text" 
                      className="w-full h-[56px] border rounded rounded-tl-none rounded-bl-none px-3 border-l-0 font-roboto placeholder:text-gray-700"
                      placeholder="Return"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

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