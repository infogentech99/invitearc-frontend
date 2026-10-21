"use client";
import { assets } from "../assets";
export default function OurStory({data}) {
  return (
    <div className=" top-10 md:top-20 lg:top-50 flex flex-col items-center text-center md:mt-20 mt-10">
      <p className="text-[#1F2922] text-xl md:text-5xl px-12 max-w-150 font-playfair-display mt-6 italic">
       {data.welcomeTitle}
      </p> 

      <p className="text-[#667085] text-[14px] md:text-[16px] px-12 max-w-200 font-jost mt-6">
        {data.welcomeDes}
      </p>
      <p className="text-[#44403C] tracking-widest font-semibold text-[12px] md:text-[14px] mt-4">
        {data.welcomeSubTitle}
      </p>
      <img 
        src={assets.flower}
        alt="icon"
        className="md:w-1/4 w-[90%] object-contain my-15"
      />

      <p className="text-[#44403C] font-semibold tracking-widest text-[12px] md:text-[14px] mt-4">
        {data.storyTitle}
      </p>
      <p className="text-[#1F2922] text-xl md:text-5xl px-12 max-w-150 font-playfair-display mt-6">
        {data.storySubTitle}
      </p>

      <img
        src={assets.story_image}
        alt="icon"
        className="md:w-1/4 w-1/2 object-contain mb-15 mt-5"
      />
      <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] font-playfair-display">
        {data.storyDes}
      </p>

      <h2 className="md:mt-10 mt-16 flex items-center justify-center gap-4 md:gap-6 text-[#172319] text-4xl md:text-5xl lg:text-[80px]">
        <span className="font-playfair-display italic">{data.groomName}</span>
        <span className="text-base md:text-2xl lg:text-[38px] italic font-playfair-display">
          &
        </span>
        <span className="font-playfair-display italic">{data.brideName}</span>
      </h2>

      <p className="text-[#667085] text-[14px] md:text-[16px] px-12 max-w-200 font-playfair-display mt-6">
       {data.storyDes2}
      </p>

      <p className="text-[#172319] font-semibold tracking-widest text-[12px] md:text-[14px] font-jost underline mt-8">
        DISCOVER OUR CHAPTER
      </p>
      <div className="mx-auto h-px w-[50%] md:mt-22 mt-12 bg-[#b9a98d]" />
      <div className="flex flex-row justify-center md:gap-20 gap-4 px-4">
        <div className="max-w-100 flex flex-col justify-center items-start">
          <p className="text-[#AE9B7B] font-semibold tracking-widest text-[10px] md:text-[14px] font-jost md:mt-8">
            {data.beginningTitle}
          </p>
          <p className="text-[#1F2922] max-w-50 text-[15px] md:text-3xl font-playfair-display mt-3 text-left">
            {data.beginningSubTitle}
          </p>
        </div>
        <div className="md:max-w-130 max-w-50 text-left mt-10 md:mt-20">
          <p className="text-[#667085] text-[14px] md:text-[16px] max-w-200 font-jost mt-6">
            {data.beginningDes}
          </p>

          <h2 className=" flex items-center mt-6 gap-4 md:gap-6 text-[#AE9B7B] text-xl md:text-2xl lg:text-[30px] font-playfair-display italic">
            {data.beginningDes2}
          </h2>
        </div>
      </div>
    </div>
  );
}
