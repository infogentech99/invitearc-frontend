"use client";
import {assets} from "../assets";
export default function Celebration({data}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#fffdf9] px-5 py-12 text-[#685D4A]">
      {/* ================= VENUE ================= */}
      <div className="mx-auto max-w-[700px] text-center">
        <h2 className="mx-auto mt-10 md:text-[12px] text-[12px] font-semibold leading-[1.5] text-[#817666]">
          THE CELEBRATION
        </h2>
        <p className="font-bona-nova text-[20px] 3xl:text-[30px] tracking-[0.2em] uppercase text-[#685D4A]">
          Reception Venue
        </p>

        <p className="font-cormorant text-[24px] font-bona-nova italic">
         {data.venueName}
        </p>

        <p className="mt-1 text-[12px]">{data.venueLocation}</p>

        {/* Venue Image */}
        <div className="mx-auto mt-8 max-w-[800px] overflow-hidden">
          <img
            src={assets.celebration_image}
            alt="Reception Venue"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Venue Details */}
        <div className="mx-auto mt-12 grid max-w-[700px] grid-cols-4 gap-3 text-center">
          <div className="flex flex-col justify-center items-center">
             <img
              src={assets.icon_n}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain mb-1 mt-4"
            />
            <p className="mt-1 text-[10px] uppercase tracking-wider">
              {data.locationTitle}
            </p>
            <p className="text-[16px]">{data.location}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src={assets.icon_n2}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain mb-1 mt-4"
            />
            <p className="mt-1 text-[10px] uppercase tracking-wider">
              {data.ceremonyTitle}
            </p>
            <p className="text-[16px]">{data.ceremony}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src={assets.icon_n3}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain mb-1 mt-4"
            />
            <p className="mt-1 text-[10px] uppercase tracking-wider">
              {data.dressTitle}
            </p>
            <p className="text-[16px]">{data.dress}</p>
          </div>

          <div className="flex flex-col justify-center items-center">
             <img
              src={assets.icon_n4}
              alt="icon"
              className="md:w-5 md:h-5 w-4 object-contain mb-1 mt-4"
            />
            <p className="mt-1 text-[10px] uppercase tracking-wider">{data.parkingTitle}</p>
            <p className="text-[16px]">{data.parking}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-2">
          <button className="border border-[#d7cbb8] px-8 py-2 text-[12px] tracking-wider">
            GET DIRECTIONS
          </button>

          <button className="bg-[#756752] px-5 py-1.5 text-[12px] tracking-wider text-white">
            RSVP
          </button>
        </div>
      </div>

      <section className=" relative w-full overflow-hidden px-5 py-16 text-[#685D4A] md:px-10 lg:py-20">
        <div className="relative z-10 mx-auto max-w-[900px]">
          {/* Heading */}
          <div className="mb-16 text-center">
           <div className="flex justify-center">
             <img
              src={assets.ico2}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain mb-3 mt-4"
            />
           </div>

            <h2 className="mt-2 font-bona-nova text-[20px] 3xl:text-[30px] tracking-[0.2em] uppercase text-[#685D4A]">
              {data.eventDayJourney}
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div
              className="
          absolute
          left-1/2
          top-0
          h-full
          w-px
          -translate-x-1/2 bg-[#ddd5c8] "
            />

            {/* ================= WELCOME ================= */}
            <div className="relative grid min-h-[110px] grid-cols-2">
              {/* Left */}
              <div className="flex items-center justify-end pr-12">
                <h3 className="font-bona-nova text-[26px] italic md:text-[30px]">
                 {data.eventName1}
                </h3>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <div>
                  <p className="font-cormorant text-[13px] tracking-[0.15em]">
                    {data.eventTime1}
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    {data.eventDetails1}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div
                className="
            absolute
            left-1/2
            top-1/2
            flex
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-lg
            border
            border-[#ddd5c8]
            bg-[#faf8f3]
            text-xl
          "
              >
                <img
              src={assets.icon_n6}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />
              </div>
            </div>

            {/* ================= RECEPTION ================= */}
            <div className="relative grid min-h-[110px] grid-cols-2">
              {/* Left */}
              <div className="flex items-center justify-end pr-12 text-right">
                <div>
                  <p className="font-cormorant text-[13px] tracking-[0.15em]">
                    {data.eventTime2}
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    {data.eventDetails2}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <h3 className="font-bona-nova text-[26px] italic md:text-[30px]">
                  {data.eventName2}
                </h3>
              </div>

              {/* Icon */}
              <div
                className="
            absolute
            left-1/2
            top-1/2
            flex
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-lg
            border
            border-[#ddd5c8]
            bg-[#faf8f3]
            text-xl
          "
              >
               <img
              src={assets.icon_n8}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />
              </div>
            </div>

            {/* ================= TOASTS ================= */}
            <div className="relative grid min-h-[110px] grid-cols-2">
              {/* Left */}
              <div className="flex items-center justify-end pr-12">
                <h3 className="font-bona-nova text-[26px] italic md:text-[30px]">
                  {data.eventName3}
                </h3>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <div>
                  <p className="font-cormorant text-[13px] tracking-[0.15em]">
                    {data.eventTime3}
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    {data.eventDetails3}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div
                className="
            absolute
            left-1/2
            top-1/2
            flex
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-lg
            border
            border-[#ddd5c8]
            bg-[#faf8f3]
            text-xl
          "
              >
                <img
              src={assets.icon_n9}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />
              </div>
            </div>

            {/* ================= MAIN COURSE ================= */}
            <div className="relative grid min-h-[110px] grid-cols-2">
              {/* Left */}
              <div className="flex items-center justify-end pr-12 text-right">
                <div>
                  <p className="font-cormorant text-[13px] tracking-[0.15em]">
                    {data.eventTime4}
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    {data.eventDetails4}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <h3 className="font-bona-nova text-[26px] italic md:text-[30px]">
                  {data.eventName4}
                </h3>
              </div>

              {/* Icon */}
              <div
                className="
            absolute
            left-1/2
            top-1/2
            flex
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-lg
            border
            border-[#ddd5c8]
            bg-[#faf8f3]
            text-xl
          "
              >
                 <img
              src={assets.icon_n7}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />
              </div>
            </div>

            {/* ================= FAREWELL ================= */}
            <div className="relative grid min-h-[110px] grid-cols-2">
              {/* Left */}
              <div className="flex items-center justify-end pr-12">
                <h3 className="font-bona-nova text-[26px] italic md:text-[30px]">
                  {data.eventName5}
                </h3>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <div>
                  <p className="font-cormorant text-[13px] tracking-[0.15em]">
                   {data.eventTime5}
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    {data.eventDetails5}
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div
                className="
            absolute
            left-1/2
            top-1/2
            flex
            h-12
            w-12
            -translate-x-1/2
            -translate-y-1/2
            rounded-lg
            border
            border-[#ddd5c8]
            bg-[#faf8f3]
            items-center
            justify-center
            text-xl
          "
              >
                <img
              src={assets.icon_n5}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GUEST WISHES ================= */}
      <div className="mx-auto mt-20 max-w-[500px] text-center">
          
<h2 className="mt-2 font-bona-nova text-[20px] 3xl:text-[30px] tracking-[0.2em] uppercase text-[#685D4A]">
              {data.guestwishestitle}
            </h2>
        <p className="mx-auto mt-2 text-[14px] leading-relaxed">
          {data.guestwishesdesc}
        </p>

    
        
      </div>

      {/* ================= BOTTOM BIRDS ================= */}
      <div className="mx-auto mt-16 flex max-w-[1000px] items-end justify-between px-2">
        <img
          src={assets.bird_left}
          alt=""
          className="w-40 md:w-80 object-contain"
        />

        <img
          src={assets.bird_right}
          alt=""
          className="w-40 md:w-80 object-contain"
        />
      </div>

      {/* Footer */}
      <p className="mt-8 text-center text-[16px] italic text-[#8c8274]">
        {data.giftmessage}
      </p>
    </section>
  );
}
