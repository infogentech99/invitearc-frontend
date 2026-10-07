"use state";
import { useEffect, useState } from "react";
import {assets} from "../assets";


export default function Countdown({data}) {
 const targetDate = data?.marriageCountdownDate || "2026-12-21";
const TARGET_DATE = new Date(targetDate).getTime();

const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

useEffect(() => {
    const updateCountdown = () => {
        const now = new Date().getTime();
        const diff = TARGET_DATE - now;

        if (diff <= 0) {
            setTimeLeft({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            });
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (diff % (1000 * 60 * 60)) / (1000 * 60)
        );

        const seconds = Math.floor(
            (diff % (1000 * 60)) / 1000
        );

        setTimeLeft({
            days,
            hours,
            minutes,
            seconds,
        });
    };

    updateCountdown(); // first run

    const interval = setInterval(updateCountdown, 1000); // every second

    return () => clearInterval(interval);
}, [targetDate]);




  return (
    <div className=" bg-no-repeat bg-cover pt-20  lg:mt-40 mt-20" style={{
          backgroundImage: `url(${assets.coutdown_bg})`,
        }}>
      <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] text-center">
        THE CELEBRATION BEGINS IN
      </p>
      <h1 className="md:mt-4 mt-2 font-bona-nova text-[30px] 3xl:text-[55px] text-[#5E7C43] leading-16 text-center">
        {data.marriageCountdownTitle}
      </h1>

      <p className="text-[#667085] text-[14px] md:text-[16px] px-12 font-jost md:mt-6 mt-2 text-center">
        {data.marriageCountdownDescription}
      </p>

      <div className="bg-cover bg-no-repeat">
        <div className="flex lg:gap-12 md:gap-6 gap-2 justify-center items-center mt-6">
          <div className="border md:px-8 py-2 px-4 md:py-4 bg-[#FFF8F5] border-[#D7C3B3] rounded-md">
            <h2 className="text-[20px] md:text-3xl lg:text-[52px] text-center text-[#5E7C43] font-cormorant-garamond">
              {timeLeft.days}
            </h2>
            <h2 className="text-[10px] md:text-[12px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
              Days
            </h2>
          </div>
          <div className="border md:px-8 py-2 px-4 md:py-4 bg-[#FFF8F5] border-[#D7C3B3] rounded-md">
            <h2 className="text-[20px] md:text-3xl lg:text-[52px] text-center text-[#5E7C43] font-cormorant-garamond">
              {timeLeft.hours}
            </h2>
            <h2 className="text-[10px] md:text-[12px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
              Hours
            </h2>
          </div>
          <div className="border md:px-8 py-2 px-4 md:py-4 bg-[#FFF8F5] border-[#D7C3B3] rounded-md">
            <h2 className="text-[20px] md:text-3xl lg:text-[52px] text-center text-[#5E7C43] font-cormorant-garamond">
              {timeLeft.minutes}
            </h2>
            <h2 className="text-[10px] md:text-[12px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
              Minutes
            </h2>
          </div>
          <div className="border md:px-8 py-2 px-4 md:py-4 bg-[#FFF8F5] border-[#D7C3B3] rounded-md">
            <h2 className="text-[20px] md:text-3xl lg:text-[52px] text-center text-[#5E7C43] font-cormorant-garamond">
              {timeLeft.seconds}
            </h2>
            <h2 className="text-[10px] md:text-[12px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
              Seconds
            </h2>
          </div>
        </div>
      </div>

      <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] text-center mt-24">
        OUR CELEBRATIONS
      </p>
      <h1 className="mt-4 font-bona-nova text-[30px] 3xl:text-[55px] text-[#5E7C43] md:leading-16 leading-10 text-center">
        Celebrate Every Beautiful Moment With Us
      </h1> 

      <p className="text-[#667085] text-[14px] md:text-[16px] px-12 font-jost md:mt-6 mt-4 text-center">
        Every ceremony is a cherished chapter of our love story. We would be
        honored to have you celebrate each beautiful moment with us.
      </p>

    <div
  className={`grid gap-8 mt-14 max-w-280 md:mx-auto px-4 ${
    data?.events?.length === 1
      ? "grid-cols-1 justify-items-center"
      : data?.events?.length === 2
        ? "grid-cols-2 justify-items-center"
        : "grid-cols-1 md:grid-cols-2"
  }`}
>
  {(data?.events || []).map((event, index) => (
    <div
      key={index}
      className="w-full rounded-2xl bg-[#fffdf8] p-8 text-center shadow-lg border border-[#eee9df]"
    >
      {/* Top Icon */}
      {event.image && (
        <img
          src={event.image}
          alt={event.title_ceremony || "Event icon"}
          className="mx-auto mb-3 w-5 h-5 object-contain"
        />
      )}

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-serif text-[#3f3a34] font-cormorant-garamond">
        {event.title_ceremony}
      </h2>

      <div className="mx-auto my-4 h-px w-10 bg-[#7a965d]" />

      {/* Details */}
      <div className="space-y-4 text-sm text-[#66615a]">
        <p>▣ &nbsp; {event.date}</p>

        <p>◷ &nbsp; {event.time}</p>

        <p>
          ⌖ &nbsp; {event.venue}
          {event.venue_address && (
            <>
              <br />
              {(event.theme || "")
                .split("\n")
                .map((line, li) => (
                  <span key={li}>
                    {line}
                    <br />
                  </span>
                ))}
            </>
          )}
        </p>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm italic leading-relaxed text-[#96918a]">
        {event.description}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-3">
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#5f7f43] px-7 py-3 md:text-xs text-[10px] font-medium text-white"
          >
            VIEW LOCATION
          </a>
        )}

        <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE"
            target="_blank"
            rel="noopener noreferrer" 
            className="rounded-full border border-[#78945d] px-7 py-3 md:text-xs text-[10px] font-medium text-[#5f7f43]">
          ADD TO CALENDAR
        </a>
      </div>
    </div>
  ))}
</div>

      <img
        src={assets.coutdown_bg_bottom}
        alt="icon"
        className="object-contain mb-5"
      />
    </div>
  );
}
