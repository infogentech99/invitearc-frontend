"use client";
import {assets} from "../assets";

export default function CelebrateUs() {

    return (

        <div className="bg-[url('/assets/respo_two.webp')] md:bg-[url('/assets/bg_two.webp')] bg-size-[100%_auto]
                        md:bg-cover bg-top bg-no-repeat w-full relative overflow-hidden md:min-h-screen" style={{ backgroundImage: `url(${assets.bg_two})`, }}>
        <div className="h-190 md:h-150 lg:h-325 3xl:h-421 flex flex-col items-center relative">
          <img src={assets.up_frame} alt="frame-design" className="w-37 h-6 md:w-56 md:h-8 lg:w-111 lg:h-12 mt-12 md:mt-30"/>
          <h2 className="font-eb-garamond font-medium text-base md:text-lg lg:text-3xl pt-6 md:pt-17 lg:pt-15 3xl:pt-25 text-[#D99447]">
            Celebrate With Us 
          </h2>
          <h2 className="font-eb-garamond font-medium text-sm md:text-base lg:text-[26px] text-center pt-5 md:pt-5 lg:pt-10 text-[#D99447]">
            With grateful hearts and joyful spirits, we invite you to witness the celebration of our love <br className="hidden md:block" /> and the 
            beginning of our forever. Your presence will make our day truly special.
          </h2>
          <h2 className="font-parisienne-regular font-normal text-3xl md:text-5xl lg:text-[82px] mt-6 md:pt-10 text-[#D99447]">
            Tanvi
          </h2>
          <img src={assets.center_frame} alt="frame-design" className="w-29 h-2 md:w-36 md:h-5 lg:w-58 lg:h-5 mt-3"/>
          <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-[22px] text-center mt-2 text-[#D99447]">
            Beloved Daughter of <br /> Mr. & Mrs. Sharma
          </p>
          <p className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-[42px] text-center mt-6 text-[#D99447]">
            20ᵗʰ - 21ˢᵗ November, 2026
          </p>
          <h2 className="font-parisienne-regular font-normal text-3xl md:text-5xl lg:text-[82px] mt-6 md:pt-10 text-[#D99447]">
            Roshan 
          </h2>
          <img src={assets.center_frame} alt="frame-design" className="w-29 h-2 md:w-36 md:h-5 lg:w-58 lg:h-5 mt-3"/>
          <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-[22px] text-center mt-2 text-[#D99447]">
            Beloved Son of <br /> Mr. & Mrs. Kapoor
          </p>
          <p className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-[42px] text-center mt-8 lg:mt-14 text-[#D99447]">
            Venue
          </p>
          <p className="font-eb-garamond font-medium text-base md:text-sm lg:text-[22px] text-center mt-4 text-[#D99447]">
            The Oberoi Amarvilas Agra
          </p>
          <img src={assets.up_frame} alt="frame-design" className="w-37 h-6 md:w-56 md:h-8 lg:w-111 lg:h-12 mt-6 md:mt-15"/>
        </div>
      </div>
    
    
    );
}
