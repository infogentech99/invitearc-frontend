"use client";
import {assets} from "../assets";

export default function CoupleEvents() {

    return (

        <div className="bg-[url('/assets/respo_four.webp')] md:bg-[url('/assets/bg_four.webp')] bg-size-[100%_auto]
                        md:bg-cover bg-top bg-no-repeat w-full relative overflow-hidden lg:min-h-screen" style={{ backgroundImage: `url(${assets.bg_four})`, }}>
        <div className="relative flex flex-col items-center h-210 md:h-120 lg:h-180 3xl:h-230">
          <img src={assets.bg_three_design} alt="frame-design" className="w-16 h-5 md:w-26 md:h-8 lg:w-41 lg:h-10 mt-15 md:mt-12 3xl:mt-28"/>
          <h2 className="font-parisienne-regular font-normal text-3xl md:text-5xl lg:text-[82px] mt-6 lg:mt-8 3xl:mt-10 bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
            Our Events 
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-6 md:gap-4 lg:gap-12 3xl:gap-20 mt-15 md:mt-6 lg:mt-12 3xl:mt-20">
            <div className="flex justify-center items-center bg-[url('/assets/events_frame.webp')] bg-cover bg-no-repeat bg-center w-40 h-58 md:w-45 md:h-65 lg:w-68 lg:h-100" style={{ backgroundImage: `url(${assets.events_frame})`, }}>
              <div className="flex flex-col leading-none"> 
                <h3 className="font-parisienne-regular font-normal text-3xl md:text-4xl lg:text-[52px] text-center text-[#E1B340]"> Sangeet </h3>
                <p className="font-eb-garamond font-normal text-base md:text-xl lg:text-[24px] text-center text-[#5D5D5D]"> 04 April 2026 </p>
                <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-lg text-center text-[#5D5D5D]"> From 10:30 AM </p>
                <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-lg text-center text-[#5D5D5D]"> The Oberoi Amarvilas Agra </p>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[url('/assets/events_frame.webp')] bg-cover bg-no-repeat bg-center w-40 h-58 md:w-45 md:h-65 lg:w-68 lg:h-100" style={{ backgroundImage: `url(${assets.events_frame})`, }}>
              <div className="flex flex-col leading-none"> 
                <h3 className="font-parisienne-regular font-normal text-3xl md:text-4xl lg:text-[52px] text-center text-[#E1B340]"> Haldi </h3>
                <p className="font-eb-garamond font-normal text-base md:text-xl lg:text-[24px] text-center text-[#5D5D5D]"> 04 April 2026 </p>
                <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-lg text-center text-[#5D5D5D]"> From 01:00 PM </p>
                <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-lg text-center text-[#5D5D5D]"> The Oberoi Amarvilas Agra </p>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[url('/assets/events_frame.webp')] bg-cover bg-no-repeat bg-center w-40 h-58 md:w-45 md:h-65 lg:w-68 lg:h-100" style={{ backgroundImage: `url(${assets.events_frame})`, }}>
              <div className="flex flex-col leading-none"> 
                <h3 className="font-parisienne-regular font-normal text-3xl md:text-4xl lg:text-[52px] text-center text-[#E1B340]"> Wedding </h3>
                <p className="font-eb-garamond font-normal text-base md:text-xl lg:text-[24px] text-center text-[#5D5D5D]"> 05 April 2026 </p>
                <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-lg text-center text-[#5D5D5D]"> From 07:00 PM </p>
                <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-lg text-center text-[#5D5D5D]"> The Oberoi Amarvilas Agra </p>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[url('/assets/events_frame.webp')] bg-cover bg-no-repeat bg-center w-40 h-58 md:w-45 md:h-65 lg:w-68 lg:h-100" style={{ backgroundImage: `url(${assets.events_frame})`, }}>
              <div className="flex flex-col leading-none"> 
                <h3 className="font-parisienne-regular font-normal text-3xl md:text-4xl lg:text-[52px] text-center text-[#E1B340]"> Reception </h3>
                <p className="font-eb-garamond font-normal text-base md:text-xl lg:text-[24px] text-center text-[#5D5D5D]"> 06 April 2026 </p>
                <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-lg text-center text-[#5D5D5D]"> From 07:00 PM </p>
                <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-lg text-center text-[#5D5D5D]"> The Oberoi Amarvilas Agra </p>
              </div>
            </div>
        </div>

        </div>
      </div>
    
    
    );
}
