'use client'
import {assets} from "../assets";

export default function Reception (){
    return (
<div className="bg-[#fffaef] py-24 mt-20">
 <div className="mb-1 flex flex-col items-center justify-center gap-2">
      <img
      src={assets.recep_icon}
      alt="icon"
      className="md:w-full md:h-50 w-30 object-contain mb-5"
    />
    <h2 className="font-bona-nova text-[20px] 3xl:text-[30px] tracking-[0.2em] uppercase text-[#685D4A]">
      Reception Info
    </h2>
      <p className="mx-auto mt-3 max-w-[800px] md:text-[16px] text-[12px] leading-[1.5] text-[#817666] text-center md:px-0 px-5">
      Please join us for an evening of dinner and dancing as we celebrate our new life together.
    </p>

     <h2 className="font-bona-nova text-[40px] font-bold 3xl:text-[60px] tracking-[0.1em] uppercase text-[#FEB000] mt-20">
      18:30
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
      SATURDAY
    </span>

    <span className="text-[#b7aa96]">•</span>

    <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
      10
    </span>

    <span className="text-[#b7aa96]">•</span>

    <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
      OCTOBER
    </span>

    <span className="text-[#b7aa96]">•</span>

    <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
      2026
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
        Guests Arrive
      </h3>

      <p className="mt-2 text-sm tracking-wider text-[#514b43]">
        18:00 PM
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
        Reception
        <br />
        Begins
      </h3>

      <p className="mt-2 text-sm tracking-wider text-[#514b43]">
        18:30 PM
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

  {/* Calendar */}
  {/* <div className="relative z-10 mx-auto mt-16 w-full max-w-[335px] rounded-md border border-[#e8e0d4] bg-white/90 px-7 py-4"> */}

    {/* <div className="mb-3 flex items-center justify-between">
      <h3 className="font-sans text-base font-semibold tracking-[0.12em] text-[#504a40]">
        OCT 2026
      </h3>

      <span className="text-xs text-[#817666]">
        ▣
      </span>
    </div> */}

    {/* Days */}
    {/* <div className="grid grid-cols-7 text-center text-[11px] text-[#817666]">
      <span>S</span>
      <span>M</span>
      <span>T</span>
      <span>W</span>
      <span>T</span>
      <span>F</span>
      <span>S</span>
    </div> */}

    {/* Dates */}
    {/* <div className="mt-2 grid grid-cols-7 gap-y-3 text-center text-[12px]">

      <span className="text-[#bcb8b0]">27</span>
      <span className="text-[#bcb8b0]">28</span>
      <span className="text-[#bcb8b0]">29</span>
      <span className="text-[#bcb8b0]">30</span>

      <span>1</span>
      <span>2</span>
      <span>3</span>

      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span> */}

      {/* Selected Date */}
      {/* <span className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#f2dfbd]">
        10
      </span>

    </div>
  </div> */}

  {/* Add to Calendar */}
  <div className="relative z-10 mt-6 md:mt-16 text-center">
    <button
      type="button"
      className="
        border-b
        border-[#817666]
        pb-1
        font-sans
        text-sm
        tracking-[0.18em]
        text-[#817666]
      "
    >
      Add to Calendar
    </button>
  </div>

  {/* Confirm Button */}
  <div className="relative z-10 mt-7 flex justify-center">
    <button
      type="button"
      className="
        w-full
        max-w-[318px]
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
      Confirm Your Attendance
    </button>
    
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