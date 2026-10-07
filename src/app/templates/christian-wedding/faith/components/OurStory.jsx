"use client";
import {assets} from "../assets";
export default function OurStory({data}) {
  return (
    <div className=" top-10 md:top-20 lg:top-50 flex flex-col items-center text-center md:mt-20 mt-10">
      <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px]">
        {data.noteText}
      </p>

      <p className="text-[#5E7C43] text-xl md:text-2xl px-12 max-w-200 font-playfair-display mt-6">
        {data.noteTitle}
      </p>

      <p className="text-[#667085] text-[14px] md:text-[16px] px-12 max-w-200 font-jost mt-6">
        {data.noteDes}
      </p>

      <img
        src={assets.story_image}
        alt="icon"
        className=" object-contain mb-5"
      />

      <div className="flex flex-row justify-center text-center gap-4 md:gap-10 lg:mt-40 mt-20 mt-0">
        <div className="max-w-200 items-center justify-center flex">
          <img
            src={assets.couple_story}
            alt="icon"
            className="w-200 lg:h-200 object-contain mb-5"
          />
        </div>
        <div className="max-w-130 text-left lg:mt-20 md:mt-0 mt-20">
          <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px]">
           {data.storyText}
          </p>
          <h1 className="mt-4 font-bona-nova text-[25px] md:text-[40px] 3xl:text-[55px] text-[#5E7C43] md:leading-16 leading-8">
           {data.storyTitle}
          </h1>
          <p className="text-[#667085] text-[14px] md:text-[16px] max-w-200 font-jost mt-6">
            {data.storyDes}
          </p>

          <p className="text-[#667085] text-[14px] md:text-[16px] max-w-200 font-jost mt-4">
            {data.storyDes2}
          </p>

          <h2 className=" flex items-center md:mt-10 mt-2 gap-4 md:gap-6 text-[#727272] text-2xl md:text-5xl lg:text-[60px] font-great-vibes tracking-widest">
            {data.coupleLetter}
          </h2>
        </div>
      </div>
  <div className="mx-auto h-px w-[50%] md:my-16 mt-10 mb-5 bg-[#b9a98d]" />
      <div className="mx-auto  flex flex-row justify-center items-center md:gap-10 lg:gap-24 gap-4 text-center px-2 ">
        <div className="flex flex-col justify-center items-center max-w-80">
          <img
            src={assets.first_icon}
            alt="icon"
            className="md:w-16 md:h-16 w-10 object-contain mb-1 mt-4"
          />
          <p className="mt-1 lg:text-[26px] md:text-[22px] text-[20px] tracking-wider text-[#1E1B18] font-playfair-display">
            {data.journeyTitle1}
          </p>
          <p className="text-[12px] md:text-[13px] lg:text-[16px] text-[#667085] font-jost">
            {data.journeyDes1}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-80">
          <img
            src={assets.star_icon}
            alt="icon"
            className="md:w-16 md:h-16 w-10 object-contain mb-1 mt-4"
          />
          <p className="mt-1 lg:text-[26px] md:text-[22px] text-[20px] tracking-wider text-[#1E1B18] font-playfair-display">
            {data.journeyTitle2}
          </p>
          <p className="text-[12px] md:text-[13px] lg:text-[16px] text-[#667085] font-jost">
            {data.journeyDes2}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center max-w-80">
          <img
            src={assets.pencil_icon}
            alt="icon"
            className="md:w-16 md:h-16 w-10 object-contain mb-1 mt-4"
          />
          <p className="mt-1 lg:text-[26px] md:text-[22px] text-[20px] tracking-wider text-[#1E1B18] font-playfair-display">
            {data.journeyTitle3}
          </p>
          <p className="text-[12px] md:text-[13px] lg:text-[16px] text-[#667085] font-jost">
            {data.journeyDes3}
          </p>
        </div>
      </div>

   
    </div>
  );
}
