import StaticMapImage from "../images/staticmap.png";
import StaticMapDesktopImage from "../images/staticmap-desktop.png";
import { Info } from "lucide-react";

const FindFlight = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <h2 className="text-xl font-medium">
          Find cheap flights from Alor Setar to anywhere
        </h2>
        <Info className="w-5 h-5 text-gray-400" />
      </div>

      <div className="flex flex-wrap gap-2.5 my-4">
        <button className="bg-[#F3F7FE] text-[#1A73E8] text-sm font-medium px-3 py-1.5 rounded-full">
          Alor Setar
        </button>
        <button className="bg-white border text-sm font-medium px-3 py-1.5 rounded-full hover:text-[#1A73E8]">
          Penang
        </button>
        <button className="bg-white border text-sm font-medium px-3 py-1.5 rounded-full hover:text-[#1A73E8]">
          Ipoh
        </button>
        <button className="bg-white border text-sm font-medium px-3 py-1.5 rounded-full hover:text-[#1A73E8]">
          Kota Bharu
        </button>
      </div>

      <div className="relative rounded-[20px] overflow-hidden cursor-pointer group h-[240px] md:h-[300px] hover:shadow-md">
        <img className="w-full h-full" src={StaticMapDesktopImage} alt="staticmap-image" />
        <div className="absolute top-0 w-full h-full bg-black opacity-0 z-10 group-hover:opacity-40"></div>
        <div className="absolute top-[45%] left-0 right-0 mx-auto w-fit z-20">
          <button className="flex justify-between gap-2 items-center bg-white text-[#1A73E8] text-sm font-medium rounded-full px-6 py-2 hover:text-blue-700 shadow-lg">
            Explore destinations
          </button>
        </div>         
      </div>

      <div className="grid grid-cols-4 gap-7 mt-4">
        <div>
          <div className="w-full h-[107px] bg-gray-200 rounded-2xl"></div>
          <div className="mt-2.5 mb-1 flex justify-between">
            <h6 className="text-base font-medium">Singapore</h6>
            <span className="text-base font-medium">MYR 615</span>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="font-roboto text-sm text-[#70757a]">Feb 22 - Mar 1</h6>
            <h6 className="text-sm text-[#70757a]">1 Stop · 5 hr 30 min</h6>
          </div>
        </div>
        <div>
          <div className="w-full h-[107px] bg-gray-200 rounded-2xl"></div>
          <div className="mt-2.5 mb-1 flex justify-between">
            <h6 className="text-base font-medium">Singapore</h6>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="font-roboto text-sm text-[#70757a]">Feb 22 - Mar 1</h6>
            <h6 className="text-sm text-[#70757a]"></h6>
          </div>
        </div>
        <div>
          <div className="w-full h-[107px] bg-gray-200 rounded-2xl"></div>
          <div className="mt-2.5 mb-1 flex justify-between">
            <h6 className="text-base font-medium">Paris</h6>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="font-roboto text-sm text-[#70757a]">Feb 22 - Mar 1</h6>
            <h6 className="text-sm text-[#70757a]"></h6>
          </div>
        </div>
        <div>
          <div className="w-full h-[107px] bg-gray-200 rounded-2xl"></div>
          <div className="mt-2.5 mb-1 flex justify-between">
            <h6 className="text-base font-medium">New York</h6>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="font-roboto text-sm text-[#70757a]">Feb 22 - Mar 1</h6>
            <h6 className="text-sm text-[#70757a]"></h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindFlight;