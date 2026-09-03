"use client";

import { assets } from "../assets";

export default function CoupleEvents({ data }) {
  const eventTitle = data?.eventTitle || "The Celebrations";
  const eventIntro = data?.eventIntro || "Our Events";

  const eventRows = (data?.events || []).reduce((rows, event, index) => {
    const pairIndex = Math.floor(index / 2);

    if (!rows[pairIndex]) {
      rows[pairIndex] = [];
    }

    rows[pairIndex].push(event);
    return rows;
  }, []);

  const renderEvent = (event, side = "left") => {
    const title = event?.title_ceremony || event?.leftEvent?.title_ceremony || event?.rightEvent?.title_ceremony;
    const date = event?.date || event?.leftEvent?.date || event?.rightEvent?.date;
    const month = event?.month || event?.leftEvent?.month || event?.rightEvent?.month;
    const description = event?.description || event?.leftEvent?.description || event?.rightEvent?.description;
    const time = event?.time || event?.leftEvent?.time || event?.rightEvent?.time;
    const image = event?.image || (side === "left" ? event?.leftImage : event?.rightImage);
    const alt = event?.alt || (side === "left" ? event?.leftAlt : event?.rightAlt);
    const imageClass = event?.imageClass || (side === "left" ? event?.leftClass : event?.rightClass);

    return (
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-10" id="events-section">
        {side === "left" && (
          <img src={image} alt={alt} className={imageClass} />
        )}

        <div className="flex flex-col items-center justify-center">
          <div
            className="flex justify-center items-center bg-cover md:bg-contain bg-no-repeat bg-center w-15 h-15 md:w-22 md:h-22 lg:w-23 lg:h-23 mt-6"
            style={{
              backgroundImage: `url(${assets.circle})`,
            }}
          >
            <span className="font-eb-garamond font-normal text-center text-xs md:text-base lg:text-[20px] text-[#FFFFFF]">
              {date}
              <br />
              {month}
            </span>
          </div>

          <h4 className="font-eb-garamond font-medium text-xl md:text-xl lg:text-[32px] text-[#E2B441]">
            {title}
          </h4>

          <p className="font-eb-garamond font-medium text-base md:text-base lg:text-[16px] text-center text-[#E1B340]">
            {description}
          </p>

          <p className="font-eb-garamond font-medium text-base md:text-base lg:text-[16px] text-[#E1B340]">
            {time}
          </p>
        </div>

        {side === "right" && (
          <img src={image} alt={alt} className={imageClass} />
        )}
      </div>
    );
  };

  return (
    <div
      className="bg-[url('/assets/respo_three.png')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${assets.bg_three})`,
      }}
    >
      {/* <div className="h-480 md:h-250 lg:h-466 3xl:h-421 flex flex-col items-center relative"> */}
      <div className="min-h-[480px] md:min-h-[250px] lg:min-h-[466px] 3xl:min-h-[421px] flex flex-col items-center relative md:pb-20 pb-20">
        <h2 className="font-eb-garamond font-normal text-xs md:text-xl lg:text-[26px] 3xl:text-[36px] pt-10 md:pt-15 3xl:pt-25 bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
          {eventTitle}
        </h2>

        <h2 className="font-eb-garamond font-medium text-3xl md:text-5xl lg:text-[82px] pt-5 md:pt-10 bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
          {eventIntro}
        </h2>

        <div className="flex justify-center gap-10 lg:gap-20 mt-4">
          <hr className="w-15 md:w-20 lg:w-40 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
          <hr className="w-15 md:w-20 lg:w-40 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
        </div>

        <div className="flex flex-col md:gap-6 lg:gap-20 items-center justify-center">
          {(eventRows || []).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-col items-center md:flex-row md:items-center md:justify-center mt-5 md:mt-10 md:gap-30 gap-10"
            >
              {row.map((event, i) => (
                <div key={i} className="flex">
                  {renderEvent(event, i === 0 ? "left" : "right")}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}