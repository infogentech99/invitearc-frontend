"use client";

import { assets } from "../assets";
import { useEffect, useState } from "react";

export default function Reception({ data }) {

  const targetDate =
    data?.eventCountdown || "2026-12-21";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const updateCountdown = () => {

      const target = new Date(
        `${targetDate}T23:59:59`
      ).getTime();

      const now = Date.now();

      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const totalSeconds = Math.floor(
        difference / 1000
      );

      const days = Math.floor(
        totalSeconds / 86400
      );

      const hours = Math.floor(
        (totalSeconds % 86400) / 3600
      );

      const minutes = Math.floor(
        (totalSeconds % 3600) / 60
      );

      const seconds =
        totalSeconds % 60;

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () => {
      clearInterval(interval);
    };

  }, [targetDate]);

  return (

    <div className="bg-[#fffaef] py-24 mt-20">


      {/* ==========================================
          RECEPTION HEADER
      ========================================== */}

      <div className="mb-1 flex flex-col items-center justify-center gap-2">

        <img
          src={assets.recep_icon}
          alt="icon"
          className="md:w-full md:h-50 w-30 object-contain mb-5"
        />


        <h2 className="font-bona-nova text-[20px] 3xl:text-[30px] tracking-[0.2em] uppercase text-[#685D4A]">
          {data?.receptionInfo}
        </h2>


        <p className="mx-auto mt-3 max-w-[800px] md:text-[16px] text-[12px] leading-[1.5] text-[#817666] text-center md:px-0 px-5">
          {data?.receptionMessage}
        </p>


        <h2 className="font-bona-nova text-[40px] font-bold 3xl:text-[60px] tracking-[0.1em] uppercase text-[#FEB000] mt-20">
          {data?.receptionTime}
        </h2>

      </div>



      {/* ==========================================
          RECEPTION SECTION
      ========================================== */}

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


        {/* ==========================================
            DATE
        ========================================== */}

        <div className="relative z-10 flex items-center justify-center md:gap-6 text-center gap-2">

          <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
            {data?.receptionDay}
          </span>


          <span className="text-[#b7aa96]">
            •
          </span>


          <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
            {data?.receptionDate}
          </span>


          <span className="text-[#b7aa96]">
            •
          </span>


          <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
            {data?.receptionMonth}
          </span>


          <span className="text-[#b7aa96]">
            •
          </span>


          <span className="font-bona-nova text-sm font-semibold tracking-[0.25em] text-[#504a40] md:text-base">
            {data?.receptionYear}
          </span>

        </div>



        {/* ==========================================
            CARDS
        ========================================== */}

        <div className="relative z-10 mx-auto mt-14 grid w-full max-w-[785px] grid-cols-1 gap-4 md:grid-cols-3">


          {/* ========================================
              GUESTS ARRIVE
          ======================================== */}

          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-md border border-[#e3ddd2] bg-white/90 px-5 text-center">

            <img
              src={assets.icon_n7}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />


            <h3 className="font-bona-nova text-[28px] leading-tight text-[#665c4e]">
              {data?.guestTitle}
            </h3>


            <p className="mt-2 text-sm tracking-wider text-[#514b43]">
              {data?.guestTime}
            </p>

          </div>



          {/* ========================================
              RECEPTION
          ======================================== */}

          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-md border border-[#e3ddd2] bg-[#f7f5f1]/95 px-5 text-center">

            <img
              src={assets.icon_n9}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />


            <h3 className="max-w-[170px] font-bona-nova text-[28px] leading-tight text-[#665c4e]">
              {data?.receptionTitle}
            </h3>


            <p className="mt-2 text-sm tracking-wider text-[#514b43]">
              {data?.receptionTime}
            </p>

          </div>



          {/* ========================================
              COUNTDOWN
          ======================================== */}

          <div className="flex min-h-[180px] flex-col items-center justify-center rounded-md border border-[#e3ddd2] bg-white/90 px-5 text-center">

            <img
              src={assets.icon_n10}
              alt="icon"
              className="md:w-5 md:h-5 w-5 object-contain"
            />


            {/* ======================================
                COUNTDOWN VALUES
            ====================================== */}

            <div className="flex items-start gap-2 md:gap-3 font-bona-nova text-[25px] text-[#665c4e]">


              {/* DAYS */}

              <div className="text-center">

                <span>
                  {String(timeLeft.days).padStart(2, "0")}
                </span>

                <p className="font-sans text-xs tracking-wide text-[#817666]">
                  Days
                </p>

              </div>


              <span>
                :
              </span>


              {/* HOURS */}

              <div className="text-center">

                <span>
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>

                <p className="font-sans text-xs tracking-wide text-[#817666]">
                  Hrs
                </p>

              </div>


              <span>
                :
              </span>


              {/* MINUTES */}

              <div className="text-center">

                <span>
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>

                <p className="font-sans text-xs tracking-wide text-[#817666]">
                  Min
                </p>

              </div>


              <span>
                :
              </span>


              {/* SECONDS */}

              <div className="text-center">

                <span>
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>

                <p className="font-sans text-xs tracking-wide text-[#817666]">
                  Sec
                </p>

              </div>

            </div>

          </div>

        </div>



        {/* ==========================================
            ADD TO CALENDAR
        ========================================== */}

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



      {/* ==========================================
          BOTTOM IMAGE
      ========================================== */}

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