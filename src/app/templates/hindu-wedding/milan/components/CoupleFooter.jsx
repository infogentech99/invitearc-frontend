"use client";
import {assets} from "../assets";

export default function CoupleFooter() {

    return (

        <div className="bg-[url('/assets/respo_five.webp')] md:bg-[url('/assets/bg_five.webp')] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.bg_five})`, }}>
        <div className="relative flex flex-col items-center h-100 md:h-185 lg:h-345 3xl:h-440">
          <img src={assets.hearts} alt="frame-design" className="w-10 h-10 md:w-14 md:h-14 lg:w-27 lg:h-27 mt-6 md:mt-15 lg::mt-30 3xl:mt-40"/>
          <h2 className="font-parisienne-regular font-normal text-3xl md:text-5xl lg:text-[82px] text-center mt-2 md:mt-6 text-[#FFFFFF]">
            Weather Forecast
          </h2>
          <p className="font-eb-garamond font-medium text-base md:text-[22px] lg:text-[36px] text-center text-[#FFFFFF]">
            28°C | Sunny Skies
          </p>
          <img src={assets.instagram} alt="frame-design" className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-12 lg:h-12 mt-2 md:mt-12 lg:mt-30"/>
          <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-base text-center mt-2 md:mt-4 text-[#FFFFFF]">
            © InviteArc 2026
          </p>
        </div>
      </div>
    );
}
