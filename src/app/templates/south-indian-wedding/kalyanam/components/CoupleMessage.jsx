import { assets } from "../assets";
import { useState, useEffect } from "react";
export default function CoupleMessage({data}) {
  const [coupleImage, setCoupleImage] = useState("bg_three");

  useEffect(() => {
    const updateCoupleBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setCoupleImage(assets.bg_three);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setCoupleImage(assets.bg_three);
      } else {
        // Mobile
        setCoupleImage(assets.bg_three_respo);
      }
    };
    updateCoupleBg();
    window.addEventListener("resize", updateCoupleBg);

    return () => window.removeEventListener("resize", updateCoupleBg);
  }, []);
 



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
        "Click on the Whatsapp icon to RSVP";

  const rsvpGoogleFormLink =
    data?.rsvpGoogleFormLink || data?.customData?.rsvpGoogleFormLink || "";



  return (
    <div
      className="bg-[#9e1902] bg-[url('/assets/bg_three_respo.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${coupleImage})`,
      }}
    >
      <div className="h-546 md:h-489 lg:h-982 3xl:h-1144">
        <h1 className="eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center text-[#FFF4B9] lg:pt-40 pt-20">
         {coupleTitle}
        </h1>
        <h2 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFF4B9] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-24 leading-5 md:leading-tight">
         {coupleDescription}
        </h2>

        <div className="relative flex flex-col items-start mt-7 md:mt-12 lg:mt-20 ml-10 md:ml-60 lg:ml-70 3xl:ml-130">
          <img
            src={data?.coupleMessageImages?.image1 || assets.couple1}
            alt="couple_one"
            className="absolute top-6 w-50 h-60 
                          md:top-15 md:w-80 md:h-95 lg:top-30 lg:w-140 lg:h-145 3xl:top-30 3xl:w-130 3xl:h-150 z-10"
          />

            <img
            src={data?.coupleMessageImages?.image2 ||assets.couple2}
            alt="couple_one"
            className="absolute top-30 w-30 h-35 
                          md:top-45 md:w-60 md:h-60 lg:top-70 lg:w-65 lg:h-85 3xl:top-90 3xl:w-75 3xl:h-77 z-10 md:ml-70 lg:ml-105 ml-40"
          /> 


            <img
            src={data?.coupleMessageImages?.image3 || assets.couple3}
            alt="couple_one"
            className="absolute top-6 w-30 h-35 
                          md:top-15 md:w-60 md:h-40 lg:top-10 lg:w-65 lg:h-85 3xl:top-30 3xl:w-75 3xl:h-77 z-10 md:ml-60 lg:ml-130 ml-45"
          />
            <img
            src={data?.coupleMessageImages?.image4 || assets.couple4}
            alt="couple_one"
            className="absolute top-60 w-40 h-30 
                          md:top-90 md:w-60 md:h-45 lg:top-150 lg:w-85 lg:h-85 3xl:top-150 3xl:w-95 3xl:h-77 z-10 md:ml-25 lg:ml-70 ml-20"
          />
        </div>

        <h1 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[122px] text-center text-[#FFF4B9] pt-115 md:pt-160 lg:pt-350 3xl:pt-380 leading-tight">
          {thingsToKnowTitle}
        </h1>

        <div className="flex justify-center mt-15 3xl:mt-30 pb-15 md:pb-24 lg:px-50 md:px-10 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14 lg:gap-0">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={assets.weather}
                alt="weather"
                className="h-26 w-32 md:w-25 md:h-20 lg:w-30 lg:h-25"
              />
              <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#FFF5B9] mt-2 jacques-francois">
                {weatherTitle}
              </h2>
              <p className=" text-sm lg:text-[15px] text-[#FFF5B9] mt-1 jacques-francois md:leading-5">
                {weatherDetails}
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFF5B9] lg:my-28" />
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={assets.staff}
                alt="drive"
                className="h-34 w-29 md:w-13 md:h-20 lg:w-18 lg:h-25"
              />
              <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#FFF5B9] mt-2 jacques-francois">
               {StaffTitle}
              </h2>
              <p className="text-sm lg:text-[15px] md:leading-5 text-[#FFF5B9] mt-1 jacques-francois">
                {StaffDetails}
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFF5B9] lg:my-28" />
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={assets.parking}
                alt="car"
                className="w-32 h-26 md:w-25 md:h-20 lg:w-30 lg:h-25"
              />
              <h2 className="text-[40px] md:text-3xl lg:text-[42px] text-[#FFF5B9] mt-2 jacques-francois">
                {parkingTitle}
              </h2>
              <p className="text-sm lg:text-[15px] md:leading-5 text-[#FFF5B9] mt-1 jacques-francois">
                {parkingDetails}
              </p>
            </div>
          </div>
        </div>

        <h2 className="eb-garamond font-normal text-xl md:text-2xl lg:text-3xl text-center text-[#FFF5B9] px-4 md:px-20 lg:px-56 3xl:px-107 md:pt-6 lg:pt-40 3xl:pt-46 lg:mt-4 lg:leading-tight">
          {coupleMessageThingsToKnowDescription}
        </h2>

        <div className="flex items-center mt-15 md:mt-20 lg:mt-60 3xl:mt-90 gap-0 md:gap-10 lg:gap-0 3xl:gap-13 flex-col md:flex-row">
          <img
            src={assets.couplelast}
            alt="couple"
            className="w-60 h-55 md:w-105 md:h-85 lg:w-180 lg:h-160 3xl:w-275 3xl:h-235 object-cover pl-4 md:pl-10 lg:pl-12"
          />
          <div className="flex flex-col-1 md:gap-0 gap-0 lg:gap-0 justify-center items-center md:not-first:mt-4">
                      {rsvpMode === "form" ? (
                        <div className="flex flex-col items-center text-center">
                          <h2 className="eb-garamond font-normal text-center text-2xl md:text-3xl lg:text-[54px] text-[#FFF097]  pt-5 md:pt-80 lg:pt-50 3xl:pt-150 leading-normal md:leading-8 lg:leading-12 lg:w-140 w-70">
                            {rsvpSectionHeading}
                          </h2>
        
                          <a
                            href={rsvpGoogleFormLink || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6"
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
                          <h2 className="eb-garamond font-normal text-center text-2xl md:text-3xl lg:text-[54px] text-[#FFF097] pt-5 md:pt-30 lg:pt-50 3xl:pt-150 leading-normal md:leading-8 lg:leading-12 lg:w-140 w-70">
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
        
                            <span className="eb-garamond font-normal text-xs md:text-sm lg:text-[22px] text-[#FFF097]">
                              {rsvpButtonText}
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
        </div>
          {/* <div className="flex flex-col items-center md:mt-2 lg:mt-0 gap-10 3xl:gap-12">
            
                  <div className="">
                    <div className="flex flex-col-1 md:gap-0 gap-0 lg:gap-0 justify-center items-center md:not-first:mt-4">
                      {rsvpMode === "form" ? (
                        <div className="flex flex-col items-center text-center">
                          <h2 className="eb-garamond font-normal text-center text-2xl md:text-3xl lg:text-[54px] text-[#FFF097]  pt-15 md:pt-80 lg:pt-50 3xl:pt-150 leading-normal md:leading-8 lg:leading-12 lg:w-140 w-70">
                            {rsvpSectionHeading}
                          </h2>
        
                          <a
                            href={rsvpGoogleFormLink || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6"
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
                          <h2 className="eb-garamond font-normal text-center text-2xl md:text-3xl lg:text-[54px] text-[#FFF097] pt-15 md:pt-80 lg:pt-50 3xl:pt-150 leading-normal md:leading-8 lg:leading-12 lg:w-140 w-70">
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
        
                            <span className="eb-garamond font-normal text-xs md:text-sm lg:text-[22px] text-[#FFF097]">
                              {rsvpButtonText}
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <img
                    src={assets.couple_second}
                    alt="couple"
                    className="w-108 h-88 md:w-205 md:h-103 lg:w-full lg:h-full 3xl:w-480 3xl:h-243 object-cover"
                  />
                </div> */}
      </div>
    </div>
  );
}
