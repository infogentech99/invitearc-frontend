"use state";
import { useEffect, useState } from "react";
import { assets } from "../assets";
import { MapPin, ArrowRight } from "lucide-react";
export default function Countdown({ data }) {
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
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

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

  // const events = [
  //   {
  //     title: "Engagement Celebration",
  //     subtitle: "PROLOGUE",
  //     date: "OCTOBER 12TH, 2024",
  //     time: "11:00 AM — 3:00 PM",
  //     location: "The Rose Garden, Fairmont Palace",
  //     description:
  //       "An afternoon of henna, folk music, and vibrant colors amidst the blooming roses.",
  //     locationUrl: "https://maps.google.com/?q=The+Rose+Garden+Fairmont+Palace",
  //     calendarUrl:
  //       "https://calendar.google.com/calendar/render?action=TEMPLATE",
  //   },
  //   {
  //     title: "Rehearsal Dinner",
  //     subtitle: "TWILIGHT TOAST",
  //     date: "OCTOBER 12TH, 2024",
  //     time: "7:00 PM — Late",
  //     location: "Grand Ballroom, Fairmont Palace",
  //     description:
  //       "A night of dazzling performances, laughter, and dance as we celebrate the union of two families.",
  //     locationUrl: "https://maps.google.com/?q=Grand+Ballroom+Fairmont+Palace",
  //     calendarUrl:
  //       "https://calendar.google.com/calendar/render?action=TEMPLATE",
  //   },
  //   {
  //     title: "Wedding Ceremony",
  //     subtitle: "THE SACRED UNION",
  //     date: "OCTOBER 13TH, 2024",
  //     time: "4:00 PM — 5:30 PM",
  //     location: "The Lakeside Pavilion",
  //     description:
  //       "Join us by the serene waters as we exchange our vows and begin our forever journey together.",
  //     locationUrl: "https://maps.google.com/?q=The+Lakeside+Pavilion",
  //     calendarUrl:
  //       "https://calendar.google.com/calendar/render?action=TEMPLATE",
  //   },
  //   {
  //     title: "Evening Reception",
  //     subtitle: "THE GRAND FINALE",
  //     date: "OCTOBER 13TH, 2024",
  //     time: "7:30 PM — Midnight",
  //     location: "Imperial Banquet Hall",
  //     description:
  //       "A formal gala dinner to toast to our love, accompanied by fine dining and exquisite jazz.",
  //     locationUrl: "https://maps.google.com/?q=Imperial+Banquet+Hall",
  //     calendarUrl:
  //       "https://calendar.google.com/calendar/render?action=TEMPLATE",
  //   },
  // ];

  return (
    <div className="md:mt-40 mt-20">
      <p className="text-[#AE9B7B] font-semibold tracking-widest text-[12px] md:text-[14px] text-center">
        THE MOMENT IS NEAR
      </p>
      <h1 className="mt-4 font-bona-nova text-[30px] 3xl:text-[55px] text-[#1F2922] leading-16 text-center">
        {data.marriageCountdownTitle}
      </h1>
      <p className="text-[#172319] font-semibold tracking-widest text-[12px] md:text-[14px] font-jost text-center mt-4">
        {data.marriageCountdownDescription}
      </p>

      <div className="bg-[url('/assets/bg_four.webp')] bg-cover bg-no-repeat">
        <div className="flex md:gap-12 gap-5 justify-center items-center mt-6">
          <div className="border md:px-8 px-4  md:py-4 py-2 border-[#D7C3B3] rounded-md">
            <h2 className="text-[22px] md:text-4xl lg:text-[52px] text-center text-[#1F2922] font-cormorant-garamond">
              {timeLeft.days}
            </h2>
            <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
              Days
            </h2>
          </div>
          <div className="border md:px-8 px-4 md:py-4 py-2 border-[#D7C3B3] rounded-md">
            <h2 className="text-[22px] md:text-4xl lg:text-[52px] text-center text-[#1F2922] font-cormorant-garamond">
              {timeLeft.hours}
            </h2>
            <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
              Hours
            </h2>
          </div>
          <div className="border md:px-8 px-4 md:py-4 py-2 border-[#D7C3B3] rounded-md">
            <h2 className="text-[22px] md:text-4xl lg:text-[52px] text-center text-[#1F2922] font-cormorant-garamond">
              {timeLeft.minutes}
            </h2>
            <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
              Minutes
            </h2>
          </div>
          <div className="border md:px-8 px-4 md:py-4 py-2 border-[#D7C3B3] rounded-md">
            <h2 className="text-[22px] md:text-4xl lg:text-[52px] text-center text-[#1F2922] font-cormorant-garamond">
              {timeLeft.seconds}
            </h2>
            <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
              Seconds
            </h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] mt-24">
          OUR CELEBRATIONS
        </p>
        <h1 className="mt-4 font-bona-nova text-[30px] 3xl:text-[55px] text-[#1F2922] md:leading-16 leading-9 text-center">
          Celebrate Every Beautiful Moment With Us
        </h1>

        <p className="text-[#1F2922] text-[14px] md:text-[16px] md:px-12 mt-6 text-center italic font-playfair-display md:max-w-150">
          “Every ceremony is a cherished chapter of our love story. We would be
          honored to have you celebrate each beautiful moment with us.”
        </p>
      </div>

      <div
        className={`grid gap-5 mt-16 max-w-6xl mx-auto ${
          (data?.events || []).length === 1
            ? "grid-cols-1 justify-items-center"
            : (data?.events || []).length === 2
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {(data?.events || []).map((event, index) => (
          <div
            key={index}
            className={`
        group relative
        w-full min-h-[420px]
        rounded-none
        border border-[#d8cda9]
        bg-[#fffdf7]
        px-6 py-8
        text-center
        shadow-sm
        transition-all duration-500 ease-out
        hover:z-50
        hover:-translate-y-10
        hover:scale-[1.03]
        hover:shadow-2xl
        ${index === 1 ? "bg-[#edf3e9]" : ""}
      `}
          >
            {/* Top Icon */}
            {event.image && (
              <div className="mx-auto mt-5 h-[55px] w-[110px] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title_ceremony || "Event icon"}
                  className="h-full w-full object-contain"
                />
              </div>
            )}

            <div className="mt-5 border-t border-[#e8e1d1] py-3" />
            {/* Top Subtitle */}
            <p className="text-[9px] tracking-[3px] text-[#8a8a70]">
              {event.subtitle}
            </p>

            {/* Image */}

            {/* Title */}
            <h2 className="mt-5 font-cormorant-garamond text-3xl leading-tight text-[#263329]">
              {event.title_ceremony === "Wedding Ceremony" ? (
                <>
                  Wedding
                  <br />
                  <span className="italic">Ceremony</span>
                </>
              ) : (
                event.title_ceremony
              )}
            </h2>

            {/* Date & Time */}
            <div className="mt-5 border-y border-[#e8e1d1] py-3">
              <p className="text-[9px] tracking-[2px] text-[#333]">
                {event.date}
              </p>

              <p className="mt-1 text-xs text-[#666]">{event.time}</p>
            </div>

            <div className="pb-12 pt-5">
              {/* Location */}
              <p className="flex items-center justify-center gap-1 text-xs italic text-[#777]">
                <MapPin size={18} color="#60754A" />
                {event.venue}
              </p>

              {/* Description */}
              <p className="mt-5 text-xs leading-5 text-[#555]">
                {event.theme}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 md:absolute md:bottom-6 md:left-0 md:right-0 md:mx-6 flex flex-col md:flex-row md:gap-4 gap-3 items-center justify-center border-t border-[#e5dfd0] pb-3 pt-4 text-[9px] tracking-wider text-[#444]">
              {/* View Location */}
              {event.link && (
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#5f7f43] transition-colors duration-300"
                >
                  VIEW LOCATION <ArrowRight size={16} />
                </a>
              )}

              {/* Add To Calendar */}
              <a
                href={
                  event.calendarUrl ||
                  "https://calendar.google.com/calendar/render?action=TEMPLATE"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#5f7f43] transition-colors duration-300"
              >
                ADD TO CALENDAR <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center flex-col mt-14">
        <p className="text-[#1F2922] text-[14px] md:text-[16px] px-12 font-jost mt-6 text-center italic font-playfair-display max-w-150">
          {data.momentText}
        </p>
        <p className="text-[#172319] font-semibold tracking-widest text-[12px] md:text-[14px] font-jost text-center mt-8">
          {data.momentTitle}
        </p>
      </div>
    </div>
  );
}
