"use client";
import { useEffect, useState } from "react";
import {assets} from "../assets";

export default function CoupleMessage({ data }) { 

 const coupleTitle = data?.coupleMessageTitle || "Introducing";
  const coupleDescription = data?.coupleMessageDescription || "The Couple";
  const thingsToKnowTitle =
    data?.coupleMessageThingsToKnowTitle || "A Guide for Guests";

  const coupleMessageThingsToKnowDescription =
    data?.coupleMessageThingsToKnowDescription ||
    "Your presence means the world to us. To make your experience effortless and enjoyable, we've gathered a few useful details below.";
  const StaffTitle = data?.coupleMessageStaffTitle || "Staff";
  const StaffDetails =
    data?.coupleMessageStaffDetails ||
    "For those traveling from afar, Royal Orchid Suites offers a comfortable stay nearby.";
  const weatherTitle = data?.coupleMessageWeatherTitle || "Weather";
  const weatherDetails =
    data?.coupleMessageWeatherDetails ||
    "Clouds may drop by uninvited, but so will great vibes and better dance moves. A little rain never stopped a good celebration anyway.";
  const parkingTitle = data?.coupleMessageParkingTitle || "Parking";
  const parkingDetails =
    data?.coupleMessageParkingDetails ||
    "Valet parking for all our guests will be available at the venue.";

  const rsvpMode = data?.rsvpMode || data?.customData?.rsvpMode || "whatsapp";

  const whatsappNumber =
    data?.whatsappNumber || data?.customData?.whatsappNumber || "919876543210";

  const whatsappHref = `https://wa.me/${String(whatsappNumber).replace(/\D/g, "")}`;

  const rsvpSectionHeading =
    data?.rsvpSectionHeading ||
    data?.coupleMessageClosingTitle ||
    data?.customData?.coupleMessageClosingTitle ||
    "Awaiting the Pleasure of Your Company";

  const rsvpButtonText =
    rsvpMode === "form"
      ? data?.rsvpFormButtonText ||
        data?.customData?.rsvpFormButtonText ||
        "Fill RSVP Form"
      : data?.rsvpWhatsappButtonText ||
        data?.customData?.rsvpWhatsappButtonText ||
        "Click the link to RSVP";

  const rsvpGoogleFormLink =
    data?.rsvpGoogleFormLink || data?.customData?.rsvpGoogleFormLink || "";

const [coupleBg, setCoupleBgImage] = useState(assets.background_third);


  useEffect(() => {
    const coupleBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setCoupleBgImage(assets.background_third);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setCoupleBgImage(assets.background_third);
      } else {
        // Mobile
        setCoupleBgImage(assets.respo_third);
      }
    };

    coupleBg();
    window.addEventListener("resize", coupleBg);

    return () => window.removeEventListener("resize", coupleBg);
  }, []);

    return (
        <section className="bg-[url('/assets/respo_third.webp')] md:bg-[url('/assets/background_third.webp')] bg-cover bg-no-repeat bg-top md:bg-center w-full overflow-hidden" style={{ backgroundImage: `url(${coupleBg})` }}>

        <div className="h-505 md:h-517 lg:h-950 3xl:h-1182">
          <h1 className="eb-garamond font-medium text-[24px] md:text-2xl lg:text-[38px] text-center text-[#FFFFFF] lg:pt-40 pt-20">{coupleTitle}</h1>
          <h2 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFFFFF] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-24 leading-5 md:leading-tight">
            {coupleDescription}
          </h2>
          <div className="relative flex flex-col items-center mt-14 md:mt-16 lg:mt-20 3xl:mt-50">
            <img src={data?.coupleMessageImages?.image1 || assets.couple_one} alt="couple_one" className=" absolute lg:top-0 w-32 h-25 md:w-47 md:h-37 lg:w-108 lg:h-76 3xl:w-120 3xl:h-88 z-10" />
            <div className="flex flex-col ">
              <h2 className="flex flex-col items-center text-center text-xl md:text-4xl lg:text-[68px] ml-58 md:ml-92 lg:ml-192 3xl:ml-230 md:mt-2 3xl:mt-6">
                <span className="eb-garamond font-medium text-[#F2AD15] ">{data.groomName}</span>
                <span className="eb-garamond font-medium text-[#7CE670] opacity-50 text-5xl md:text-7xl lg:text-[124px] -my-5 md:-my-8 lg:-my-12 pr-8 md:pr-12 lg:pr-30">&</span>
                <span className="eb-garamond font-medium text-[#F2AD15] pr-6 md:pr-10 lg:pr-20">{data.brideName}</span>
              </h2>
            </div>
            <img src={data?.coupleMessageImages?.image2 || assets.couple_two} alt="couple_two" className="absolute top-15 left-12 w-28 h-45 md:top-25 md:left-35 md:w-50 md:h-65 
                      lg:top-50 lg:left-50 lg:w-108 lg:h-126 3xl:top-60 3xl:left-70 3xl:w-130 3xl:h-180 z-0" />
            <img src={assets.flowers} alt="flowers" className="ml-2 mt-2 w-24 h-30 md:w-40 md:h-46 lg:w-58 lg:h-96 3xl:w-90 3xl:h-118 3xl:mt-7 3xl:ml-26 z-40" />
            <img src={data?.coupleMessageImages?.image3 || assets.couple_three} alt="couple_three" className="absolute top-17 right-12 w-28 h-48 md:top-25 md:right-40 md:w-50 md:h-75 
                      lg:top-55 lg:right-50 lg:w-108 lg:h-146 3xl:top-60 3xl:right-65 3xl:w-140 3xl:h-200 z-20" />
            <img src={data?.coupleMessageImages?.image4 || assets.couple_four} alt="couple_four" className="mt-2 w-33 h-25 md:w-60 md:h-40 lg:w-123 lg:h-96 lg:mt-8 3xl:mt-20 3xl:w-140 3xl:h-108 3xl:mr-15 z-10" />
          </div>
          <div className="lg:mt-25">
            <h1 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[122px] text-center text-[#FFFFFF] pt-10 md:pt-35 lg:pt-30 3xl:pt-60 leading-tight">
              {thingsToKnowTitle}
            </h1>

            <div className="flex justify-center mt-10 md:mt-14 lg:mt-30 3xl:mt-40 pb-10 md:pb-16 lg:pb-24 3xl:pb-34 lg:px-48 px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-14 md:gap-25 lg:gap-0 3xl:gap-0 lg:w-300 3xl:w-250">
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src={data?.coupleMessageWeatherImage || assets.weather}
                    alt="weather"
                    className="w-30 h-26 md:w-25 md:h-20 lg:w-32 lg:h-27 3xl:w-36 3xl:h-31"
                  />
                  <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2">
                    {weatherTitle}
                  </h2>
                  <p className="eb-garamond font-medium text-sm lg:text-xl text-[#FFFFFF] mt-1 md:leading-5">
                    {weatherDetails}
                  </p>
                </div>
                <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFFFFF] lg:my-28" />
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src={data?.coupleMessageStaffImage || assets.staff}
                    alt="drive"
                    className="w-26 h-27 md:w-20 md:h-20 lg:w-21 lg:h-27 3xl:w-26 3xl:h-31"
                  />
                  <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2">
                    {StaffTitle}
                  </h2>
                  <p className="eb-garamond font-medium text-sm lg:text-xl md:leading-5 text-[#FFFFFF] mt-1">
                    {StaffDetails}
                  </p>
                </div>
                <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFFFFF] lg:my-28" />
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src={data?.coupleMessageParkingImage || assets.parking}
                    alt="car"
                    className="w-30 h-27 md:w-25 md:h-20 lg:w-30 lg:h-27 3xl:w-34 3xl:h-31"
                  />
                  <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFFFFF] mt-2">
                    {parkingTitle}
                  </h2>
                  <p className="eb-garamond font-medium text-sm lg:text-xl md:leading-5 text-[#FFFFFF] mt-1">
                    {parkingDetails}
                  </p>
                </div>
              </div>
            </div>
            <h2 className="eb-garamond font-normal text-xl md:text-2xl lg:text-[32px] text-center text-[#FFFFFF] px-4 md:px-20 lg:px-56 3xl:px-107 pt-4 md:pt-22 lg:pt-40 3xl:pt-46 mt-2 lg:mt-4 lg:leading-tight">
              {coupleMessageThingsToKnowDescription}
            </h2>
            {/*  */}
          </div>
          <div className="lg:mt-20 3xl:mt-40" id="rsvp-section">
             {rsvpMode === "form" ? (
                            <div className="flex flex-col items-center text-center">
                              <h2 className="eb-garamond font-normal text-center text-xl md:text-3xl lg:text-[50px] 3xl:text-[64px] text-[#FFFFFF] pt-26 md:pt-50 lg:pt-85 3xl:pt-150 leading-6 md:leading-8 lg:leading-15 pr-26 md:pr-66 lg:pr-155 lg:w-350">
                                {rsvpSectionHeading}
                              </h2>
            
                              <a
                                href={rsvpGoogleFormLink || "#"}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-6 pr-30 md:pr-70 lg:mr-90"
                              >
                                <button
                                  type="button"
                                  className="rounded-xl bg-[#FFF097] text-black px-6 py-2 text-sm md:text-lg font-semibold cursor-pointer"
                                >
                                  {rsvpButtonText}
                                </button>
                              </a>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center text-center">
                              <h2 className="eb-garamond font-normal text-center text-xl md:text-3xl lg:text-[50px] 3xl:text-[64px] text-[#FFFFFF] pt-26 md:pt-50 lg:pt-85 3xl:pt-150 leading-6 md:leading-8 lg:leading-15 pr-26 md:pr-66 lg:pr-155 lg:w-350">
                                {rsvpSectionHeading}
                              </h2>
            
                              <a
                                href={whatsappHref}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-1 mt-4"
                              >
                                <img
                                  src={assets.whatsapp}
                                  alt="WhatsApp"
                                  className="h-8 w-8 md:h-8 md:w-8 lg:h-16 lg:w-16"
                                />
            
                                <span className="eb-garamond font-normal text-xs md:text-sm lg:text-[22px] text-[#FFFFFF] pr-30 md:pr-70 lg:mr-90">
                                  {rsvpButtonText}
                                </span>
                              </a>
                            </div>
                          )}
          </div>

        </div>

      </section>
    );
}