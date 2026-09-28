'use client'
import {assets} from "../assets";

export default function Reception ({data}){
    return (
<div className="bg-[#fffaef] py-24 mt-20">
 <div className="mb-1 flex flex-col items-center justify-center gap-2">
      <img
      src={assets.recep_icon}
      alt="icon"
      className="md:w-full md:h-50 w-30 object-contain mb-5"
    />
    <h2 className="font-bona-nova text-[20px] 3xl:text-[30px] tracking-[0.2em] uppercase text-[#685D4A]">
      {data.receptionInfo}
    </h2>
      <p className="mx-auto mt-3 max-w-[800px] md:text-[16px] text-[12px] leading-[1.5] text-[#817666] text-center md:px-0 px-5">
      {data.receptionMessage}
    </p>

     <h2 className="font-bona-nova text-[40px] font-bold 3xl:text-[60px] tracking-[0.1em] uppercase text-[#FEB000] mt-20">
     {data.receptionTime}
    </h2>
    </div>

<section
  className="
    relative
    w-full
    overflow-hidden
    bg-[#fdf8ee]
    bg-[url('/assets/floral-bg.webp')]
    bg-cover
    bg-center
    px-5
    py-10
    md:px-10
    md:py-12
  "
>
  {/* Date */}
  <div className="relative z-10 flex items-center justify-center md:gap-6 text-center gap-2">
    <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
      {data.receptionDay}
    </span>

    <span className="text-[#b7aa96]">•</span>

    <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
      {data.receptionDate}
    </span>

    <span className="text-[#b7aa96]">•</span>

    <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
      {data.receptionMonth}
    </span>

    <span className="text-[#b7aa96]">•</span>

    <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
      {data.receptionYear}
    </span>
  </div>

  {/* Cards */}
  <div className="relative z-10 mx-auto mt-14 grid w-full max-w-[785px] grid-cols-1 gap-4 md:grid-cols-3">

    {/* Guests Arrive */}
    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-md border border-[#e3ddd2] bg-white/90 px-5 text-center">
      <img
              src={assets.icon_n7}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />
      <h3 className="font-bona-nova text-[28px] leading-tight text-[#665c4e]">
         {data.guestTitle}
      </h3>

      <p className="mt-2 text-sm tracking-wider text-[#514b43]">
        {data.guestTime}
      </p>
    </div>

    {/* Reception */}
    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-md border border-[#e3ddd2] bg-[#f7f5f1]/95 px-5 text-center">
     <img
              src={assets.icon_n9}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />

      <h3 className="max-w-[170px] font-bona-nova text-[28px] leading-tight text-[#665c4e]">
        {data.receptionTitle}
      </h3>

      <p className="mt-2 text-sm tracking-wider text-[#514b43]">
    {data.receptionTime}
      </p>
    </div>

    {/* Countdown */}
    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-md border border-[#e3ddd2] bg-white/90 px-5 text-center">
      <img
              src={assets.icon_n10}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />

      <div className="flex items-start gap-3 font-bona-nova text-[25px] text-[#665c4e]">
        <div>
          <span>245</span>
          <p className="font-sans text-xs tracking-wide text-[#817666]">
            Days
          </p>
        </div>

        <span>:</span>

        <div>
          <span>14</span>
          <p className="font-sans text-xs tracking-wide text-[#817666]">
            Hrs
          </p>
        </div>

        <span>:</span>

        <div>
          <span>32</span>
          <p className="font-sans text-xs tracking-wide text-[#817666]">
            Min
          </p>
        </div>
      </div>
    </div>

  </div>


  <div className="relative z-10 mt-15 flex justify-center">
  <a
    href="https://calendar.google.com/calendar/render?action=TEMPLATE"
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex
      w-full
      max-w-[318px]
      justify-center
      bg-[#6c604d]
      px-6
      py-3
      text-sm
      font-medium
      tracking-[0.18em]
      text-white
      transition
      hover:bg-[#5d5241]
    "
  >
    Add to Calendar
  </a>
</div>
  

</section>
<div className="flex justify-center items-center">
      <img
      src={assets.recep_icon2}
      alt="icon"
      className="md:w-[90%] object-contain mb-5"
    />
</div>
     
</div>
    );

}