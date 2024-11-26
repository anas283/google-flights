import { useState } from "react";
import DateBenefitImage from "../images/dates_benefits_light.svg";
import PriceBenefitImage from "../images/price_insights_benefits_light.svg";
import TrackingBenefitImage from "../images/tracking_prices_benefits_light.svg";

const toolsData = [
  {
    id: 1,
    title: "Find the cheapest days to fly",
    subtitle: "The Date grid and Price graph make it easy to see the best flight deals",
    info: "Insightful tools help you choose your trip dates",
    infoDetail: "If your travel plans are flexible, use the form above to start searching for a specific trip. Then, play around with the Date grid and Price graph options on the Search page to find the cheapest days to get to your destination – and back again for round trips.",
    image: DateBenefitImage,
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" focusable="false" className=" NMm5M"><path d="M8 33.333a2.889 2.889 0 0 1-2.119-.88A2.889 2.889 0 0 1 5 30.332v-21c0-.825.294-1.53.881-2.118A2.889 2.889 0 0 1 8 6.333h1.5v-3h3v3h12v-3h3v3H29c.825 0 1.531.294 2.119.882.587.587.881 1.293.881 2.118v21c0 .825-.294 1.532-.881 2.12a2.889 2.889 0 0 1-2.119.88H8Zm0-3h21v-15H8v15Zm0-18h21v-3H8v3Zm10.5 9c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.451 1.451 0 0 1-1.069.43Zm-6 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm12 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm-6 6c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.451 1.451 0 0 1-1.069.43Zm-6 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Zm12 0c-.425 0-.781-.143-1.069-.43a1.452 1.452 0 0 1-.431-1.07c0-.425.144-.78.431-1.068a1.451 1.451 0 0 1 1.069-.432c.425 0 .781.144 1.069.432.287.287.431.643.431 1.068 0 .425-.144.782-.431 1.07a1.452 1.452 0 0 1-1.069.43Z" fill="#1A73E8"></path></svg>
  },
  {
    id: 2,
    title: "See the whole picture with price insights",
    subtitle: "Price history and trend data show you when to book to get the best price on your flight",
    info: "Get smart insights about flight prices",
    infoDetail: "Real-time insights can tell you if a fare is lower or higher than usual, and if the fare you’re seeing is a good price. So, you don’t have to worry about paying too much for a flight or missing out on the cheapest time to book. On some routes, you might also see historical data that helps you better understand how flight prices vary over time.",
    image: PriceBenefitImage,
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" focusable="false" className=" NMm5M"><path d="M38.333 13.333c0 1.834-1.5 3.334-3.333 3.334a2.833 2.833 0 0 1-.85-.117l-5.933 5.917c.083.266.116.566.116.866 0 1.834-1.5 3.334-3.333 3.334a3.343 3.343 0 0 1-3.333-3.334c0-.3.033-.6.116-.866l-4.25-4.25a2.944 2.944 0 0 1-.866.116c-.3 0-.6-.033-.867-.116l-7.583 7.6c.083.266.116.55.116.85C8.333 28.5 6.833 30 5 30a3.343 3.343 0 0 1-3.333-3.333c0-1.834 1.5-3.334 3.333-3.334.3 0 .583.034.85.117l7.6-7.583a2.946 2.946 0 0 1-.117-.867c0-1.833 1.5-3.333 3.334-3.333C18.5 11.667 20 13.167 20 15c0 .3-.033.6-.117.867l4.25 4.25C24.4 20.033 24.7 20 25 20c.3 0 .6.033.867.117l5.916-5.934a2.833 2.833 0 0 1-.116-.85C31.667 11.5 33.167 10 35 10c1.833 0 3.333 1.5 3.333 3.333Z" fill="#1A73E8"></path></svg>
  },
  {
    id: 3,
    title: "Track prices for a trip",
    subtitle: "Not ready to book yet? Observe price changes for a route or flight and get notified when prices drop",
    info: "Monitor flight prices and make sure you never miss a price change",
    infoDetail: "Effortlessly track prices for specific travel dates or for any dates, if your plans are flexible, to uncover the best deals. You can easily set up tracking for multiple routes while searching for flights and opt-in to receive email updates when the price changes. Once that's done, you can come back to your Tracked Flights page to monitor prices whenever you like, or relax knowing you’ll never miss a flight deal.",
    image: TrackingBenefitImage,
    icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" focusable="false" className=" NMm5M"><g clipPath="url(#a)"><path d="M24.667 21.333v4.5h-12v-10.5c0-3.315 2.685-6 6-6 1.275 0 2.46.39 3.42 1.08l2.145-2.145a8.805 8.805 0 0 0-3.315-1.635v-1.05a2.247 2.247 0 0 0-2.25-2.25 2.247 2.247 0 0 0-2.25 2.25v1.05a8.98 8.98 0 0 0-6.75 8.7v10.5h-3v3h24v-3h-3v-4.5h-3Zm-6 12c1.65 0 3-1.35 3-3h-6c0 1.65 1.35 3 3 3Zm18-21h-4.5v-4.5h-3v4.5h-4.5v3h4.5v4.5h3v-4.5h4.5v-3Z" fill="#1A73E8"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z"></path></clipPath></defs></svg>
  }
]

const UsefulTools = () => {
  const [tools, setTools] = useState(toolsData[0]);

  return (
    <div className="w-full">
      <div className="my-14">
        <h5 className="text-xl font-medium">
          Useful tools to help you find the best deals
        </h5>
        <div className="flex flex-col md:flex-row md:justify-between mt-4">
          <div className="md:w-[588px] flex flex-col gap-4">
            {toolsData.map((data, key) => {
              return (
                <div 
                  key={key}
                  className={
                    tools.id === data.id ?
                    `border-2 border-blue-500 flex flex-row w-full md:min-h-48 bg-[#F3F7FF] rounded-2xl md:border md:border-[#d2e3fc] p-6 gap-2.5 relative cursor-pointer`
                    :
                    `flex flex-row w-full md:min-h-48 bg-[#F3F7FF] rounded-2xl border border-[#d2e3fc] p-6 gap-2.5 relative cursor-pointer`
                  }
                  onClick={() => setTools(data)}
                >
                  <div>
                    {data.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-base font-medium">
                      {data.title}
                    </h5>
                    <h6 className="text-sm font-roboto">
                      {data.subtitle}
                    </h6>
                  </div>
                  {tools.id === data.id &&
                    <div className="hidden md:flex w-[30px] h-[30px] bg-[#F3F7FF] border-t border-r border-[#d2e3fc] absolute top-[45%] -right-4 rotate-45"></div>
                  }
                </div>
              )
            })}
          </div>
          <div className="w-full md:pl-20 flex flex-col gap-4 my-4">
            <h5 className="text-2xl">
              {tools.info}
            </h5>
            <p className="text-sm font-roboto">
              {tools.infoDetail}
            </p>
            <img src={tools.image} alt="benefit-image" className="max-w-[460px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsefulTools;