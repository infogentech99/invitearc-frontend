import {assets} from "../assets";
import {useState, useEffect} from "react";

export default function CoupleMessage({data}) {
const[coupleImage, setCoupleImage] =useState(assets.couple_bg)

useEffect(() => {
    const coupleBg = () => {
      if (window.innerWidth >= 1536) {
        setCoupleImage(assets.couple_bg);
      } else if (window.innerWidth >= 768) {
        setCoupleImage(assets.bg_md);
      } else {
        setCoupleImage(assets.mobile_bg);
      }
    };

    coupleBg();
    window.addEventListener("resize", coupleBg);

    return () => window.removeEventListener("resize", coupleBg);
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
    <div className="bg-[url('/assets/bg_two.webp')] md:bg-[url('/assets/bg_md.webp')] 
                    3xl:bg-[url('/assets/couple_bg.webp')] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${coupleImage})`, }}>
      <div className="h-670 md:h-600 lg:h-1100 3xl:h-1280">
        <h1 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center pt-12 lg:pt-32 leading-12 text-[#FFF097]">
          {coupleTitle}
        </h1>
        <h2 className="font-parisienne-regular text-5xl lg:text-[100px] text-center mt-8 md:mt-12 lg:mt-28 leading-7 md:leading-8 lg:leading-8 text-[#FFF097]">
          {coupleDescription}
        </h2>
        <div className="relative flex flex-col-1 justify-center items-center mt-10 md:mt-5 lg:mt-32 pl-8 md:pl-0 h-130 lg:h-200 3xl:mb-40 3xl:mt-0">

          <img src={data?.coupleMessageImages?.image1 || assets.one} alt="couple_two" className="absolute top-5 left-10 w-52 h-66 md:top-5 md:left-37 md:w-78 
                    md:h-99 lg:top-10 lg:left-60 lg:w-157 lg:h-198 3xl:top-60 3xl:left-120 3xl:w-130 3xl:h-170 z-0" />

          <img src={assets.two} alt="flowers" className="absolute top-6 right-28 w-24 h-30 md:top-9 md:right-65 md:w-36 
                    md:h-45 lg:top-13 lg:right-112 lg:w-71 lg:h-82 3xl:w-80 3xl:h-90 3xl:mt-45 3xl:ml-16 z-5 3xl:mr-60" />

          <img src={data?.coupleMessageImages?.image2  ||assets.three} alt="couple_three" className="absolute top-27 right-17 w-37 h-47 md:top-39 md:right-50 
                    md:w-55 md:h-71 lg:top-75 lg:right-70 lg:w-110 lg:h-140 3xl:top-120 3xl:right-150 3xl:w-110 3xl:h-140 z-10" />

          <img src={data?.coupleMessageImages?.image3 || assets.four} alt="couple_four" className="absolute top-53 left-27 w-36 h-26 md:top-77 md:left-59 md:w-54
                    md:h-39 lg:top-152 lg:left-116 lg:w-108 lg:h-81 3xl:mt-50 3xl:w-110 3xl:h-80 3xl:mr-15 z-10 3xl:ml-40" />

          <img src={data?.coupleMessageImages?.image4 || assets.five} alt="five" className="absolute top-68 right-10 w-46 h-37 md:top-99 md:right-41 md:w-69 
                    md:h-55 lg:top-196 lg:right-54 lg:w-137 lg:h-112 3xl:mt-40 3xl:w-110 3xl:h-98 3xl:mr-70 z-20" />

          <img src={assets.six} alt="six" className="absolute top-75 left-40 w-18 h-15 md:top-110 md:left-77 md:w-27 md:h-23
                    lg:top-220 lg:left-154 lg:w-55 lg:h-45 3xl:mt-20 3xl:w-60 3xl:h-70 3xl:mr-15 z-25 3xl:ml-40"  />        
        </div>

        <h1 className="font-parisienne-regular text-5xl md:text-6xl lg:text-[100px] text-center pt-0 md:pt-30 lg:pt-112 text-[#FFF097]">
          {thingsToKnowTitle}
        </h1>
        
        <div className="flex justify-center mt-15 3xl:mt-30 pb-15 md:pb-24 lg:px-50 md:px-10 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14 lg:gap-0">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={assets.weather}
                alt="weather"
                className="lg:h-23 lg:w-24 h-26 w-32"/>
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] mt-2 text-[#FFF097]">
                {weatherTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm lg:text-[15px] mt-1 md:leading-5 text-[#FFF097]">
                {weatherDetails}
              </p>
            </div>

            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFF097] lg:my-28" />
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={assets.staff}
                alt="drive"
                className="w-29 h-32 md:h-26 lg:w-21 lg:h-23"/>
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] mt-2 text-[#FFF097]">
                {StaffTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm lg:text-[15px] mt-1 md:leading-5 text-[#FFF097]">
                {StaffDetails}
              </p>
            </div>

            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFF097] lg:my-28" />
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src={assets.parking}
                alt="car"
                className="lg:h-24 lg:w-24 h-26 w-32"/>
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] mt-2 text-[#FFF097]">
                {parkingTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm lg:text-[15px] mt-1 md:leading-5 text-[#FFF097]">
                {parkingDetails}
              </p>
            </div>
          </div>
        </div>
        <h2 className="font-eb-garamond font-medium text-lg md:text-2xl lg:text-3xl text-center mt-20 md:mt-15 lg:mt-4 lg:pt-6 text-[#FFF097] px-4 md:px-20 lg:px-56 3xl:px-107">
          {coupleMessageThingsToKnowDescription}
        </h2>

        {/* <h2 className="font-eb-garamond font-medium text-3xl lg:text-[64px] text-center pt-24 md:pt-15 lg:pt-46 leading-8 md:leading-11 lg:leading-16 text-[#FFF097]">
          Awaiting the Pleasure <br/> of Your Company
        </h2> */}
        <div className="flex flex-col-1 gap-1 md:gap-2 justify-center items-center mt-5 md:mt-1 lg:mt-8">
          {/* <a href="#" target="_blank">
            <img
              src={assets.whatsapp}
              alt="whatsapp"
              className=" h-7.5 w-7.5 md:w-9 md:h-9 lg:w-10.5 lg:h-10.5"/>
          </a>
          <h2 className="font-eb-garamond font-medium text-sm md:text-base lg:text-[22px] text-center text-[#FFF097]">
            Share Your RSVP
          </h2> */}

           {rsvpMode === "form" ? (
                                  <div className="flex flex-col items-center text-center">
                                    <h2 className="font-eb-garamond font-medium text-3xl lg:text-[64px] text-center pt-24 md:pt-15 lg:pt-46 leading-8 md:leading-11 lg:leading-16 text-[#FFF097] lg:px-50 3xl:px-150 md:px-50">
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
                                    <h2 className="font-eb-garamond font-medium text-3xl lg:text-[64px] text-center pt-24 md:pt-15 lg:pt-46 leading-8 md:leading-11 lg:leading-16 text-[#FFF097] lg:px-50 3xl:px-150 md:px-50">
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
                  
                                      <span className="font-eb-garamond font-normal text-xs md:text-sm lg:text-[22px] text-[#FFF097]">
                                        {rsvpButtonText}
                                      </span>
                                    </a>
                                  </div>
                                )}
        </div>
      </div>
    </div>
  );
}
