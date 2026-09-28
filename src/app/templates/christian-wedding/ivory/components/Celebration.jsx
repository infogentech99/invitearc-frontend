"use client";
import {assets} from "../assets";
export default function Celebration() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fffdf9] px-5 py-12 text-[#685D4A]">
      {/* ================= VENUE ================= */}
      <div className="mx-auto max-w-[700px] text-center">
        <h2 className="mx-auto mt-10 md:text-[12px] text-[12px] font-semibold leading-[1.5] text-[#817666]">
          THE CELEBRATION
        </h2>
        <p className="font-bona-nova text-[20px] 3xl:text-[30px] tracking-[0.2em] uppercase text-[#685D4A]">
          Reception Venue{" "}
        </p>

        <p className="font-cormorant text-[24px] font-bona-nova italic">
          Schloss Elaria
        </p>

        <p className="mt-1 text-[12px]">Retreat Kamin-Terrasse, Bavaria</p>

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
              Location
            </p>
            <p className="text-[16px]">France</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src={assets.icon_n2}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain mb-1 mt-4"
            />
            <p className="mt-1 text-[10px] uppercase tracking-wider">
              Ceremony
            </p>
            <p className="text-[16px]">18:00 PM</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img
              src={assets.icon_n3}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain mb-1 mt-4"
            />
            <p className="mt-1 text-[10px] uppercase tracking-wider">
              Dress Code
            </p>
            <p className="text-[16px]">Formal</p>
          </div>

          <div className="flex flex-col justify-center items-center">
             <img
              src={assets.icon_n4}
              alt="icon"
              className="md:w-5 md:h-5 w-4 object-contain mb-1 mt-4"
            />
            <p className="mt-1 text-[10px] uppercase tracking-wider">Parking</p>
            <p className="text-[16px]">Available</p>
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
              Wedding Day Journey
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
                  Welcome
                </h3>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <div>
                  <p className="font-cormorant text-[13px] tracking-[0.15em]">
                    17:30
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    Arrival and welcome drinks on the Kamin-
                    <br className="hidden md:block" />
                    Terrasse overlooking the Bavarian Alps.
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
                    18:30
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    Gathering in the main hall as we prepare for
                    <br className="hidden md:block" />
                    the evening's festivities.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <h3 className="font-bona-nova text-[26px] italic md:text-[30px]">
                  Reception
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
                  Toasts & Cake
                </h3>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <div>
                  <p className="font-cormorant text-[13px] tracking-[0.15em]">
                    18:45
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    Heartfelt words and the cutting of the cake.
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
                    19:00
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    A multi-course culinary experience
                    <br className="hidden md:block" />
                    prepared by the chefs at Schloss Elmau.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <h3 className="font-bona-nova text-[26px] italic md:text-[30px]">
                  Main Course
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
                  Farewell
                </h3>
              </div>

              {/* Right */}
              <div className="flex items-center pl-12">
                <div>
                  <p className="font-cormorant text-[13px] tracking-[0.15em]">
                    21:00
                  </p>

                  <p className="mt-1 max-w-[300px] font-cormorant text-[15px] leading-relaxed">
                    The conclusion of the formal reception and
                    <br className="hidden md:block" />
                    transition to evening celebrations.
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
              Guest Wishes
            </h2>
        <p className="mx-auto mt-2 text-[14px] leading-relaxed">
          Leave your warmest wishes and blessings for the couple.
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
        The greatest gift is having you celebrate with us.
      </p>
    </section>
  );
}
