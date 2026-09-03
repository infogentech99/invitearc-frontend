import { assets } from "../assets";
export default function CoupleMessage({ data }) {
  const coupleTitle = data?.coupleMessageTitle || "INTRODUCING";
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

  return (
    <div
      className="bg-[#9e1902] bg-[url('/assets/respo_three.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${assets.bg_three})` }}
    >
      <div className="h-630 md:h-744 lg:h-1141 3xl:h-1200">
        <h1 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center text-[#A25000] lg:pt-40 pt-20">
          {coupleTitle}
        </h1>
        <h2 className="font-parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#A25000] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-24 leading-5 md:leading-tight">
          {coupleDescription}
        </h2>

        <div className="relative flex flex-col mt-10 md:mt-10 lg:mt-20">
          <h2 className="absolute font-eb-garamond font-medium text-3xl md:text-5xl lg:text-[60px] 3xl:text-[68px] text-center text-[#A25000] 3xl:left-50">
            <span className="absolute font-eb-garamond font-medium top-5 left-13 md:top-16 md:left-23 lg:top-6 lg:left-60">
              {data.groomName}
            </span>
            <br />
            <span className="absolute font-eb-garamond font-medium text-6xl md:text-8xl lg:text-[150px] text-[#DF5200] top-6 left-22 md:top-19 md:left-37 lg:top-13 lg:left-78 -rotate-20 opacity-50">
              &
            </span>
            <br />
            <span className="absolute font-eb-garamond font-medium top-15 left-13 md:top-35 md:left-23 lg:top-35 lg:left-60">
              {data.brideName}
            </span>
          </h2>
          <img
            src={data?.coupleMessageImages?.image1 || assets.one}
            alt="couple_one"
            className="absolute top-23 left-10 w-50 h-53 
                       md:w-85 md:h-106 md:top-48 md:left-20 lg:w-167 lg:h-158 lg:top-60 lg:left-49 3xl:top-60 3xl:left-100 z-20"
          />
          <img
           src={data?.coupleMessageImages?.image2 || assets.two}
            alt="couple_two"
            className="absolute top-6 right-10 w-45 h-56
                       md:w-90 md:h-112 md:top-15 md:right-24 lg:w-134 lg:h-168 lg:top-10 lg:right-50  3xl:right-100 z-10"
          />
          <img
           src={data?.coupleMessageImages?.image3 || assets.three}
            alt="couple_three"
            className="absolute top-72 left-12 w-44 h-54 
                       md:w-88 md:h-108 md:top-150 md:left-23 lg:w-131 lg:h-161 lg:top-210 lg:left-55 3xl:left-105 z-10"
          />
          <img
        src={data?.coupleMessageImages?.image4 || assets.four}
            alt="couple_four"
            className="absolute top-60 right-8 w-51 h-49 
                       md:w-102 md:h-98 md:top-125 md:right-20 lg:w-2xl lg:h-148 lg:top-175 lg:right-45 3xl:right-80 z-30"
          />
        </div>

        <h1 className="font-parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center pt-140 md:pt-280 lg:pt-400 leading-tight text-[#A25000]">
          {thingsToKnowTitle}
        </h1>

        <div className="flex justify-center mt-15 3xl:mt-30 pb-15 md:pb-24 lg:px-50 px-10 "> 
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14 lg:gap-0 lg:w-300 3xl:w-250">
            <div className="flex flex-col items-center justify-center text-center ">
            
                <img
                              src={data?.coupleMessageWeatherImage || assets.weather}
                              alt="weather"
                              className="w-31 h-25 md:w-24 md:h-22 lg:w-33 lg:h-26"
                            />
              <h2 className="font-eb-garamond font-medium text-[40px] md:text-3xl lg:text-[42px] text-[#A25000] mt-2">
                {weatherTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm md:text-base lg:text-xl text-[#A25000] mt-1 md:leading-5">
                {weatherDetails}
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#A25000] lg:my-28" />
            <div className="flex flex-col items-center justify-center text-center">
              {/* <img
                src={assets.staff}
                alt="drive"
                className="h-34 w-29 md:w-13 md:h-20 lg:w-18 lg:h-25"
              /> */}


              <img
                              src={data?.coupleMessageStaffImage || assets.staff}
                              alt="drive"
                              className="w-28 h-35 md:w-17 md:h-23 lg:w-21 lg:h-27"
                            />
              <h2 className="font-eb-garamond font-medium text-[40px] md:text-3xl lg:text-[42px] text-[#A25000] mt-2">
                {StaffTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm md:text-base lg:text-xl md:leading-5 text-[#A25000] mt-1">
                {StaffDetails}
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#A25000] lg:my-28" />
            <div className="flex flex-col items-center justify-center text-center">
             
               <img
                              src={data?.coupleMessageParkingImage || assets.parking}
                              alt="car"
                              className="w-31 h-25 md:w-26 md:h-23 lg:w-30 lg:h-27"
                            />
              <h2 className="font-eb-garamond font-medium text-[40px] md:text-3xl lg:text-[42px] text-[#A25000] mt-2">
                {parkingTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm md:text-base lg:text-xl md:leading-5 text-[#A25000] mt-1">
                {parkingDetails}
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-eb-garamond font-normal text-xl md:text-2xl lg:text-3xl text-center px-6 md:px-0 md:pt-4 lg:pt-10 lg:mt-4 lg:leading-tight text-[#A25000] 3xl:px-100 lg:px-40">
          {coupleMessageThingsToKnowDescription}
        </h2>

        <div className="flex flex-col justify-center items-center" id="rsvp-section">
          <div className="flex flex-col-1 md:gap-0 gap-0 lg:gap-0 justify-center items-center 3xl:w-180">
            {rsvpMode === "form" ? (
              <div className="flex flex-col items-center text-center">
                <h2 className="font-eb-garamond font-normal text-center text-2xl md:text-3xl lg:text-[54px] text-[#A25000] leading-normal md:leading-8 lg:leading-12 pt-15 md:pt-80 lg:pt-50 3xl:pt-80 ">
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
                    className="rounded-xl bg-[#A25000] text-white px-6 py-2 text-[14px] md:text-lg font-semibold cursor-pointer"
                  >
                    {rsvpButtonText}
                  </button>
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center">
                <h2 className="font-eb-garamond font-normal text-center text-2xl md:text-3xl lg:text-[54px] text-[#A25000] pt-15 md:pt-80 lg:pt-50 3xl:pt-80 leading-normal md:leading-8 lg:leading-12 ">
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

                  <span className="font-eb-garamond font-normal text-[16px] md:text-sm lg:text-[22px] text-[#A25000]">
                    {rsvpButtonText}
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-20 md:pt-30 lg:pt-40">
          <img
            src={assets.bg_three_couple}
            alt="whatsapp"
            className="w-108 h-90 md:w-205 md:h-150 lg:w-381 lg:h-280"
          />
        </div>
      </div>
    </div>
  );
}
