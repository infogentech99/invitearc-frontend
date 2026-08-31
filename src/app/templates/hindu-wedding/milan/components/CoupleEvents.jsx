"use client";

import { assets } from "../assets";
import { useEffect, useState } from "react";
export default function CoupleEvents({ data }) {
  const [coupleImage, setCoupleImage] = useState(assets.bg_four);

  useEffect(() => {
    const coupleBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setCoupleImage(assets.bg_four);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setCoupleImage(assets.bg_four);
      } else {
        // Mobile
        setCoupleImage(assets.respo_four);
      }
    };

    coupleBg();
    window.addEventListener("resize", coupleBg);

    return () => window.removeEventListener("resize", coupleBg);
  }, []);

  return (
    <div
      className="
        bg-[url('/assets/respo_four.webp')]
        md:bg-[url('/assets/bg_four.webp')]
        bg-size-[100%_auto]
        md:bg-cover bg-top bg-no-repeat
        w-full relative overflow-hidden lg:min-h-screen
      "
      style={{ backgroundImage: `url(${coupleImage})` }}
    >
      <div className="flex flex-col items-center  bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden md:pb-30  ">
        <img
          src={assets.bg_three_design}
          alt="frame-design"
          className="w-16 h-5 md:w-26 md:h-8 lg:w-41 lg:h-10 mt-15 md:mt-12 3xl:mt-28"
        />

        <h2
          className="
            font-parisienne-regular font-normal
            text-3xl md:text-5xl lg:text-[82px]
            mt-6 lg:mt-8 3xl:mt-10
            bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447]
            bg-clip-text text-transparent
          "
        >
          Our Events
        </h2>

        <div
          className="
            grid grid-cols-2 md:grid-cols-4
            justify-center items-center
            gap-6 md:gap-4 lg:gap-12 3xl:gap-20
            mt-15 md:mt-6 lg:mt-12 3xl:mt-20 
          "
        >
          {(data?.events || []).map((event, i) => {
            const eventTitle =
              event?.title_ceremony || event?.title || `Event ${i + 1}`;
            const eventImage =
              event?.image || event?.imageUrl || event?.eventImage;
            const isCustomFrame = Boolean(eventImage && eventImage.trim());

            return (
              <div
                key={i}
                className="
                  flex justify-center items-center
                  bg-cover bg-no-repeat bg-center
                  w-40 h-58
                  md:w-45 md:h-65
                  lg:w-68 lg:h-100 
                "
                style={{
                  backgroundImage: isCustomFrame
                    ? `url(${eventImage})`
                    : `url(${assets.events_frame})`,
                }}
              >
                {/* {!isCustomFrame && (
                  <div className="flex flex-col leading-none px-3 text-center">
                    <h3
                      className="
                        font-parisienne-regular font-normal
                        text-3xl md:text-4xl lg:text-[52px]
                        text-center text-[#E1B340]
                      "
                    >
                      {eventTitle}
                    </h3>

                    <p
                      className="
                        font-eb-garamond font-normal
                        text-base md:text-xl lg:text-[24px]
                        text-center text-[#5D5D5D]
                      "
                    >
                      {event.date}
                    </p>

                    <p
                      className="
                        font-eb-garamond font-normal
                        text-xs md:text-sm lg:text-lg
                        text-center text-[#5D5D5D]
                      "
                    >
                      {event.time}
                    </p>

                    <p
                      className="
                        font-eb-garamond font-normal
                        text-xs md:text-sm lg:text-lg
                        text-center text-[#5D5D5D]
                      "
                    >
                      {event.venue}
                    </p>
                  </div>
                )} */}
                <div className="flex flex-col leading-none px-3 text-center relative z-10">
                  <h3
                    className="
      font-parisienne-regular font-normal
      text-3xl md:text-4xl lg:text-[52px]
      text-center text-[#E1B340]
    "
                  >
                    {eventTitle}
                  </h3>

                  <p
                    className="
      font-eb-garamond font-normal
      text-base md:text-xl lg:text-[24px]
      text-center text-[#5D5D5D]
    "
                  >
                    {event.date}
                  </p>

                  <p
                    className="
      font-eb-garamond font-normal
      text-xs md:text-sm lg:text-lg
      text-center text-[#5D5D5D]
    "
                  >
                    {event.time}
                  </p>

                  <p
                    className="
      font-eb-garamond font-normal
      text-xs md:text-sm lg:text-lg
      text-center text-[#5D5D5D]
    "
                  >
                    {event.venue}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
