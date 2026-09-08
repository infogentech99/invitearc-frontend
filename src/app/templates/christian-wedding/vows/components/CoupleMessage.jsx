import { assets } from "../assets";
// import { useState, useEffect } from "react";

export default function CoupleMessage({ data }) {
  // const [coupleImage, setCoupleImage] = useState(assets.countdown_bg);

  // useEffect(() => {
  //   const coupleBg = () => {
  //     if (window.innerWidth >= 1536) {
  //       setCoupleImage(assets.vows_lg);
  //     } 
  //       else if (window.innerWidth >= 768) {
  //       // setCoupleImage(assets.bg_md);  
  //               setCoupleImage(assets.vows_lg);
  //     } else {
  //       setCoupleImage(assets.mobile_bg);
  //     }
  //   };

  //   coupleBg();
  //   window.addEventListener("resize", coupleBg);

  //   return () => window.removeEventListener("resize", coupleBg);
  // }, []);

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

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${assets.vows_lg})` }}
    >
      <div className="h-540 md:h-400 lg:h-540 3xl:h-620">
        <h1 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center pt-12 lg:pt-32 leading-12 text-[#FFF097]">
          {coupleTitle}
        </h1>
        <h2 className="font-parisienne-regular text-5xl lg:text-[100px] text-center mt-8 md:mt-12 lg:mt-28 leading-7 md:leading-8 lg:leading-8 text-[#FFF097]">
          {coupleDescription}
        </h2>
        

     <div className="relative flex justify-center items-center mx-auto md:mt-20 my-20
                 w-[300px] h-[340px] 
                 md:w-[480px] md:h-[480px] 
                 lg:w-[596px] lg:h-[640px] 
                 3xl:w-[775px] 3xl:h-[830px]">

  {/* Main photo - couple at wooden arch, top-left */}
  <img
    src={data?.coupleMessageImages?.image1 || assets.one}
    alt="couple_two"
    className="absolute z-0
               top-[10px] left-[8px] w-[150px] h-[190px]
               md:top-[15px] md:left-[11px] md:w-[225px] md:h-[285px]
               lg:top-[20px] lg:left-[15px] lg:w-[300px] lg:h-[380px]
               3xl:top-[26px] 3xl:left-[20px] 3xl:w-[390px] 3xl:h-[494px]"
  />

  {/* flower - top right */}
  <img
    src={assets.two}
    alt="flowers"
    className="absolute z-5
               top-[25px] left-[135px] w-[115px] h-[75px]
               md:top-[32px] md:left-[200px] md:w-[173px] md:h-[113px]
               lg:top-[40px] lg:left-[330px] lg:w-[230px] lg:h-[150px]
               3xl:top-[50px] 3xl:left-[350px] 3xl:w-[299px] 3xl:h-[195px]"
  />

  {/* Medium photo - couple walking, right side */}
  <img
    src={data?.coupleMessageImages?.image2 || assets.three}
    alt="couple_three"
    className="absolute z-10
               top-[78px] left-[143px] w-[115px] h-[125px]
               md:top-[116px] md:left-[214px] md:w-[173px] md:h-[188px]
               lg:top-[155px] lg:left-[285px] lg:w-[230px] lg:h-[250px]
               3xl:top-[202px] 3xl:left-[371px] 3xl:w-[299px] 3xl:h-[325px]"
  />

  {/* Small square photo - bride closeup, left-center */}
  <img
    src={data?.coupleMessageImages?.image3 || assets.four}
    alt="couple_four"
    className="absolute z-10
               top-[145px] left-[50px] w-[108px] h-[85px]
               md:top-[218px] md:left-[75px] md:w-[161px] md:h-[128px]
               lg:top-[290px] lg:left-[100px] lg:w-[215px] lg:h-[170px]
               3xl:top-[377px] 3xl:left-[130px] 3xl:w-[280px] 3xl:h-[221px]"
  />

  {/* flower - daisy, bottom-left overlap */}
  <img
    src={assets.six}
    alt="six"
    className="absolute z-25
               top-[223px] left-[93px] w-[70px] h-[55px]
               md:top-[334px] md:left-[139px] md:w-[105px] md:h-[83px]
               lg:top-[445px] lg:left-[185px] lg:w-[140px] lg:h-[110px]
               3xl:top-[579px] 3xl:left-[241px] 3xl:w-[182px] 3xl:h-[143px]"
  />

  {/* Bottom photo - sunset silhouette, bottom-center */}
  <img
    src={data?.coupleMessageImages?.image4 || assets.five}
    alt="five"
    className="absolute z-20
               top-[190px] left-[125px] w-[138px] h-[115px]
               md:top-[285px] md:left-[188px] md:w-[206px] md:h-[173px]
               lg:top-[380px] lg:left-[250px] lg:w-[275px] lg:h-[230px]
               3xl:top-[494px] 3xl:left-[325px] 3xl:w-[358px] 3xl:h-[299px]"
  />
</div>


        

        <h1 className="font-parisienne-regular text-5xl md:text-6xl lg:text-[100px] text-center pt-0 md:pt-0 lg:pt-20 3xl:pt-42 text-[#FFF097] px-8 md:px-0">
          {thingsToKnowTitle}
        </h1>

        <div className="flex justify-center mt-15 3xl:mt-30 pb-15 md:pb-24 lg:px-50 md:px-10 px-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14 lg:gap-0 3xl:w-250">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                // src={assets.weather}
                src={data?.coupleMessageWeatherImage || assets.weather}
                alt="weather"
                className="lg:h-23 lg:w-24 h-26 w-32"
              />
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
                // src={assets.staff}
                src={data?.coupleMessageStaffImage || assets.staff}
                alt="drive"
                className="w-29 h-32 md:h-26 lg:w-21 lg:h-23"
              />

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
                src={data?.coupleMessageParkingImage || assets.parking}
                alt="car"
                className="lg:h-24 lg:w-24 h-26 w-32"
              />
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] mt-2 text-[#FFF097]">
                {parkingTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm lg:text-[15px] mt-1 md:leading-5 text-[#FFF097]">
                {parkingDetails}
              </p>
            </div>
          </div>
        </div>
        <h2 className="font-eb-garamond font-medium text-lg md:text-2xl lg:text-3xl text-center mt-20 md:mt-4 lg:mt-4 lg:pt-6 text-[#FFF097] px-4 md:px-20 lg:px-56 3xl:px-107">
          {coupleMessageThingsToKnowDescription}
        </h2>

        <div
          className="flex flex-col-1 gap-1 md:gap-2 justify-center items-center mt-5 md:mt-1 lg:mt-8"
          id="rsvp-section"
        >
          {rsvpMode === "form" ? (
            <div className="flex flex-col items-center text-center">
              <h2 className="font-eb-garamond font-medium text-2xl lg:text-[50px] text-center pt-24 md:pt-15 lg:pt-46 leading-8 md:leading-11 lg:leading-16 text-[#FFF097] lg:px-50 3xl:px-150 md:px-50">
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
              <h2 className="font-eb-garamond font-medium text-2xl lg:text-[50px] text-center pt-24 md:pt-15 lg:pt-46 leading-8 md:leading-11 lg:leading-16 text-[#FFF097] lg:px-50 3xl:px-150 md:px-50">
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
      <img
                  src={assets.vows_couple}
                  alt="couple"
                  className="w-108 h-88 md:w-full md:h-full lg:w-full lg:h-full 3xl:w-480 3xl:h-full object-cover md:mt-12 lg:mt-60 3xl:mt-80"
                />
    </div>
  );
}
