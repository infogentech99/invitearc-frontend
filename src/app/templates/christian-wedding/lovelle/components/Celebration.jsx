"use state";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { assets } from "../assets";
export default function Celebration({ data }) {
  const functions = [
    {
      time: data.functionTime1,
      title: data.functionName1,
      image: data?.coupleMessageFunctionImage1 || assets.event3,
      side: "left",
    },
    {
      time: data.functionTime2,
      title: data.functionName2,
      image: data?.coupleMessageFunctionImage2 || assets.event5,
      side: "right",
    },
    {
      time: data.functionTime3,
      title: data.functionName3,
      image: data?.coupleMessageFunctionImage3 || assets.event2,
      side: "left",
    },
    {
      time: data.functionTime4,
      title: data.functionName4,
      image: data?.coupleMessageFunctionImage4 || assets.event4,
      side: "right",
    },
    {
      time: data.functionTime5,
      title: data.functionName5,
      image: data?.coupleMessageFunctionImage5 || assets.event1,
      side: "left",
    },
  ];

  // const events = [
  //   {
  //     image: assets.vector,
  //     title_ceremony: "CEREMONY",
  //     time: "5:00 PM",
  //     venue: "The Orangery Gardens",
  //   },

  //   {
  //     image: assets.vector2,
  //     title_ceremony: "RECEPTION",
  //     time: "7:00 PM",
  //     venue: "The Historic Wine Cellar & Terrace",
  //   },
  // ];

  return (
    <div
      className="bg-no-repeat bg-cover pt-6 md:pt-14 flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${assets.main_bg})` }}
    >
      <img
        src={assets.celebration_top}
        alt="icon"
        className="object-contain "
      />

      <p className="text-[#494740] text-[11px] md:text-[18px] lg:text-[20px] 3xl:text-[34px] tracking-[2px] uppercase  font-cormorant-garamond">
        {data.joinTitle}
      </p>

      <div className="mt-3 flex flex-col items-center">
        <img
          src={assets.element2}
          alt="icon"
          className="lg:w-3/4 md:w-1/2 w-1/2"
        />
      </div>
      <h1 className="md:mt-10 mt-2 font-bona-nova text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond leading-16  ">
        {data.eventTitle}
      </h1>

      <p className="text-[#2E382E] text-[14px] md:text-[20px] lg:text-[24px] 3xl:text-xl px-12 font-cormorant-garamond md:mt-6 mt-2 text-center ">
        {data.eventDescription}
      </p>

      <p className="text-[#2C2B29] text-[15px] md:text-[16px] lg:text-[24px] 3xl:text-2xl px-12 font-jost md:mt-6 mt-2  font-cormorant-garamond">
        {data.eventVenue}
      </p>

      <p className="text-[#725B25] text-[15px] md:text-[16px] lg:text-[24px] 3xl:text-2xl px-12 font-jost md:mt-2 mt-2  font-cormorant-garamond">
        {data.eventVenueAddress}
      </p>

      <p className="text-[#5A5854] text-[14px] md:text-[16px] px-12 font-jost md:mt-6 mt-2  font-cormorant-garamond">
        {data.eventDay}
      </p>

      <p className="text-[#2C2B29] text-[15px] md:text-[16px] lg:text-[24px] px-12 font-jost md:mt-2 mt-1  font-cormorant-garamond">
        {data.eventDate}
      </p>

      <section className="w-full px-5 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">

          <div className="w-full border border-[#ded6c8] bg-white/50 px-6 py-8 md:px-10 md:py-9">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {data?.events.map((event, index) => (
                <div
                  key={event.title_ceremony}
                  className={`text-center ${
                    index === 0
                      ? "md:border-r md:border-[#ded6c8] md:pr-8"
                      : "mt-8 border-t border-[#ded6c8] pt-8 md:mt-0 md:border-t-0 md:pl-8 md:pt-0"
                  }`}
                >
                  <div className="mx-auto mt-5 h-[25px] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title_ceremony || "Event icon"}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Event Title */}
                  <h3 className="font-serif text-[18px] tracking-[4px] text-[#34302c] md:text-[20px] mt-3">
                    {event.title_ceremony}
                  </h3>

                  {/* Event Time */}
                  <p className="mt-2 font-serif text-[18px] text-[#80652e] md:text-[20px]">
                    {event.time}
                  </p>

                  {/* Event Venue */}
                  <p className="mt-1 font-jost text-[14px] text-[#6c6a67] md:text-[15px]">
                    {event.venue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <button
              type="button"
              className="min-w-[205px] h-[42px] flex items-center justify-center gap-2 border border-[#d3cbb9] bg-white px-6 text-[10px] md:text-[14px] tracking-[3px] uppercase font-serif text-[#39433d] transition hover:bg-[#f5f0e7]"
            >
              <FaMapMarkerAlt />
              <span ClassName="text-2xl">Open in Maps</span>
            </button>

            <button
              type="button"
              className="min-w-[205px] h-[42px] flex items-center justify-center gap-2 border border-[#d3cbb9] bg-white px-6 text-[10px] md:text-[14px] tracking-[3px] uppercase font-serif text-[#39433d] transition hover:bg-[#f5f0e7]"
            >
              <SlCalender />

              <span>Add to Calender</span>
            </button>
          </div>
        </div>
      </section>

      <img
        src={assets.celebration_bottom}
        alt="icon"
        className="object-contain mt-20 md:mt-26"
      />
      <h1 className="md:mt-4 mt-2 text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond">
        {data.attireguide}
      </h1>
      <div className="mt-3 flex flex-col items-center">
        <img
          src={assets.element2}
          alt="icon"
          className="lg:w-3/4 md:w-1/2 w-1/6"
        />
      </div>
      <p className="text-[#7D4E4EE5] text-xl md:text-2xl lg:text-3xl 3xl:text-5xl px-12 font-cormorant-garamond mt-2 md:mt-20">
        {data.gardenFormal}
      </p>

      <img
        src={assets.couple_dance}
        alt="icon"
        className="object-contain 3xl:px-30 mt-12"
      />

      <h1 className="md:mt-30 mt-20 text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond">
        {data.storyTitle}
      </h1>
      <div className="mt-3 flex flex-col items-center">
        <img
          src={assets.element2}
          alt="icon"
          className="lg:w-3/4 md:w-1/2 w-1/6"
        />
      </div>
      <p className="text-[#2E382E] text-[13px] md:text-[18px] lg:text-[22px] 3xl:text-2xl px-4 max-w-300 mt-6 font-cormorant-garamond text-center">
        {data.storyDescription}
      </p>

      <img
        src={assets.story_bottom}
        alt="icon"
        className="object-contain 3xl:px-30 px-4 3xl:mt-40 md:mt-30 mt-20"
      />

      <h1 className="md:mt-44 mt-30 text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond">
        {data.momentTitle}
      </h1>
      <div className="mt-3 flex flex-col items-center my-12">
        <img
          src={assets.element2}
          alt="icon"
          className="lg:w-3/4 md:w-1/2 w-1/2"
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 py-10 md:py-16">
        {/* Center dotted line */}
        <div className="absolute left-1/2 top-8 bottom-8 hidden -translate-x-1/2 border-l-[3px] border-dashed border-[#94645b] md:block" />

        {/* Center decorative image */}
        <div className="absolute left-1/2 top-1/3 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
          <img
            src={assets.seap}
            alt="Timeline decoration"
            className="h-12 w-12 rounded-full object-cover"
          />
        </div>

        <div className="relative flex flex-col gap-8 md:gap-12">
          {functions.map((func, index) => (
            <div
              key={func.time}
              className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_80px_1fr] md:gap-0"
            >
              {/* Left side */}
              <div className="flex min-w-0 items-center justify-center gap-5 md:justify-end lg:gap-6 md:gap-3 md:pr-8">
                {func.side === "left" && (
                  <>
                    <img
                      src={func.image}
                      alt={func.title}
                      className="w-32 h-33 md:w-42 md:h-44 lg:w-53 lg:h-55 shrink-0 object-contain"
                    />
                    <div className="text-left ">
                      <p className="font-cinzel font-medium text-base md:text-base lg:text-3xl text-black font-semibold">
                        {func.time}
                      </p>
                      <p className="font-cormorant-garamond font-medium text-base md:text-base lg:text-xl  text-[#2E382E] lg:w-60 md:w-35 w-45">
                        {func.title}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Center timeline node */}
              <div className="relative hidden h-full items-center justify-center md:flex">
                {/* <div className="z-10 h-3 w-3 rounded-full border-2 border-[#94645b] bg-[#fff8ed]" /> */}
              </div>

              {/* Right side */}
              <div className="flex min-w-0 items-center justify-center gap-5 md:justify-start lg:gap-6 md:gap-3 md:pl-8">
                {func.side === "right" && (
                  <>
                    <div className="text-left">
                      <p className="font-cinzel font-medium text-base md:text-base lg:text-3xl text-black font-semibold">
                        {func.time}
                      </p>
                      <p className="font-cormorant-garamond font-medium text-base md:text-base lg:text-xl  text-[#2E382E] lg:w-60  md:w-35 w-45">
                        {func.title}
                      </p>
                    </div>
                    <img
                      src={func.image}
                      alt={func.title}
                      className="w-32 h-33 md:w-42 md:h-44 lg:w-55 lg:h-55 shrink-0 object-contain"
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[#2E382E] text-[14px] md:text-[16px] 3xl:text-2xl my-26 text-center font-cormorant-garamond  lg:px-80 px-3">
        {data.weddingCeremony}
      </p>
      <img src={assets.moment_bg} alt="icon" className=" object-contain mb-5" />

      <h1 className="lg:mt-34 3xl:mt-44 mt-2 md:mt-12 font-bona-nova text-[40px] lg:text-[50px] 3xl:text-[55px] text-[#7D4E4E] leading-16  ">
        {data.dayToUnwind}
      </h1>

      <div className="flex flex-col items-center lg:my-5">
        <img
          src={assets.element2}
          alt="icon"
          className="lg:w-3/4 md:w-1/2 w-1/2"
        />
      </div>

      <p className="text-[#7D4E4EE5] text-xl md:text-2xl 3xl:text-3xl px-12 font-cormorant-garamond md:my-8 lg:my-16 my-4 ">
        {data.quietDayTogether}
      </p>

      <img
        src={assets.unwind_image}
        alt="icon"
        className=" object-contain mt-5"
      />

      <section className="w-full px-6 py-16 md:py-20 text-[#304139]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col items-center my-5">
            <img
              src={assets.element}
              alt="icon"
              className="lg:w-1/4 md:w-1/2 w-1/2"
            />
          </div>
          {/* Venue Name */}
          <h2 className="font-serif text-[32px] md:text-[44px] tracking-[1px]">
            {data.venueLocationName}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-[12px] md:text-[14px] tracking-[5px] uppercase text-[#728276]">
            {data.venueSubtitle}
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className="h-px w-24 md:w-32 bg-[#cfc8b6]" />
            <span className="text-[#b9a878] text-xs">◇</span>
            <span className="h-px w-24 md:w-32 bg-[#cfc8b6]" />
          </div>

          {/* Date */}
          <div className="mt-12">
            <h3 className="font-serif text-[24px] md:text-[29px] tracking-[1px]">
              {data.celebrationDate}
            </h3>

            <p className="mt-5 text-[12px] md:text-[14px] tracking-[1.5px] uppercase text-[#718177]">
              {data.celebrationTime}
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mt-12">
            <span className="h-px w-20 md:w-28 bg-[#d4cdbb]" />
          </div>

          {/* Location */}
          <div className="mt-10">
            <p className="text-[11px] md:text-[13px] tracking-[5px] uppercase text-[#718177]">
              Join Us At
            </p>

            <p className="mt-4 font-serif text-[23px] md:text-[27px]">
              {data.addressVenueDetails}
            </p>

            <p className="mt-3 text-[11px] md:text-[13px] tracking-[5px] uppercase text-[#718177]">
              {data.addressVenueCountry}
            </p>
          </div>

          <div className="flex flex-col items-center my-5">
            <img
              src={assets.element}
              alt="icon"
              className="lg:w-1/4 md:w-1/2 w-1/2 rotate-180"
            />
          </div>
          {/* Description */}
          <div className="max-w-6xl mx-auto mt-12">
            <p className="font-serif text-[17px] md:text-[20px] leading-[1.8] text-[#39453f]">
              {data.notetoOurGuests}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <button
              type="button"
              className="min-w-[205px] h-[42px] flex items-center justify-center gap-2 border border-[#d3cbb9] bg-white px-6 text-[10px] md:text-[14px] tracking-[3px] uppercase font-serif text-[#39433d] transition hover:bg-[#f5f0e7]"
            >
              <FaMapMarkerAlt />
              <span ClassName="text-2xl">Open in Maps</span>
            </button>

            <button
              type="button"
              className="min-w-[205px] h-[42px] flex items-center justify-center gap-2 border border-[#d3cbb9] bg-white px-6 text-[10px] md:text-[14px] tracking-[3px] uppercase font-serif text-[#39433d] transition hover:bg-[#f5f0e7]"
            >
              <SlCalender />

              <span>Add to Calender</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
