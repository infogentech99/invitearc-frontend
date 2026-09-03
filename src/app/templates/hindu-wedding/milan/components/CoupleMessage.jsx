"use client";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets";

export default function CoupleMessage({ data }) {
  const rsvpMode = data?.rsvpMode || data?.customData?.rsvpMode || "whatsapp";

  const whatsappNumber =
    data?.whatsappNumber || data?.customData?.whatsappNumber || "919876543210";
  const whatsappHref = `https://wa.me/${String(whatsappNumber).replace(/\D/g, "")}`;
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
    <div className="relative flex flex-col items-center h-285 md:h-440 lg:h-630 3xl:h-640" id="couple-section">
      <img
        src={assets.left}
        alt="frame-design"
        className="absolute w-57 h-84 md:w-86 md:h-126 lg:w-172 lg:h-251 top-0 left-0 "
      />
      <img
        src={assets.right}
        alt="frame-design"
        className="absolute w-57 h-84 md:w-86 md:h-126 lg:w-172 lg:h-251 top-0 right-0 "
      />
      <img
        src={assets.bg_three_design}
        alt="frame-design"
        className="w-16 h-5 md:w-26 md:h-8 lg:w-41 lg:h-10 mt-15 lg:mt-30"
      />
      <h2 className="font-parisienne-regular font-medium text-3xl md:text-5xl lg:text-[82px] text-center pt-4 lg:pt-4 text-[#D99447]">
        {data.coupleTitle}
      </h2>
      <div className="relative flex flex-col items-center w-full h-105 md:h-205 lg:h-310">
        <img
          src={data?.coupleMessageImages?.image1 || assets.one}
          alt="frame-design"
          className="absolute top-8 w-86 h-27 md:w-172 md:h-54 md:top-15 lg:w-257 lg:h-81 lg:top-20"
        />
        <img
          src={data?.coupleMessageImages?.image2 || assets.two}
          alt="frame-design"
          className="absolute top-40 left-11 w-42 h-27 md:w-84 md:h-54 md:top-75 md:left-17 lg:w-126 lg:h-81 lg:top-108 lg:left-62 3xl:left-112"
        />
        <img
          src={data?.coupleMessageImages?.image3 || assets.three}
          alt="frame-design"
          className="absolute top-40 right-11 w-42 h-27 md:w-84 md:h-54 md:top-75 md:right-17 lg:w-126 lg:h-81 lg:top-108 lg:right-62 3xl:right-112"
        />
        <img
          src={data?.coupleMessageImages?.image4 || assets.four}
          alt="frame-design"
          className="absolute top-72 w-86 h-27 md:w-172 md:h-54 md:top-135 lg:w-257 lg:h-81 lg:top-195"
        />
      </div>
      <img
        src={assets.bg_three_design}
        alt="frame-design"
        className="w-16 h-5 md:w-26 md:h-8 lg:w-41 lg:h-10 mt-12"
      />
      <h2 className="font-parisienne-regular font-medium text-3xl md:text-5xl lg:text-[82px] text-center pt-4 lg:pt-4 leading-8 md:leading-tight text-[#D99447] md:w-180 w-80" id="rsvp-section">
        {data.thankyoutitle}
      </h2>
      <p className="font-eb-garamond font-medium text-sm md:text-lg lg:text-3xl text-center mt-6 md:mt-8 text-[#D99447]">
        {data.thankyoumessage}
      </p>
      <div
        className="flex justify-center items-center bg-[url('/assets/gold_frame.webp')] bg-cover bg-no-repeat bg-center w-38 h-10 md:w-42 md:h-11 lg:w-68 lg:h-18 mt-10 lg:mt-16"
        style={{ backgroundImage: `url(${assets.gold_frame})` }}
      >
        <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-lg text-center text-[#634000]">
          {data.attendingTitle}
        </p>
      </div>
      <p className="font-eb-garamond font-semibold text-xs md:text-sm lg:text-xl text-center mt-8 lg:mt-12 text-[#D99447]">
        RSVP NOW
      </p>
      <img
        src={assets.drop_down}
        alt="icon"
        className="w-4 h-2 md:w-5 md:h-3 lg:w-7 lg:h-4 mt-4 lg:mt-12"
      />
      <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-2xl text-center mt-16 md:mt-22 text-[#5D5D5D]">
        {data.celebrateTitle}
      </p>
      <p className="font-eb-garamond font-medium text-lg md:text-[22px] lg:text-3xl text-center mt-3 md:mt-6 text-[#D99447]">
        {data.rsvpSectionHeading}
      </p>
      {/* <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl text-center mt-3 md:mt-6 text-[#D99447]">
                    Click the link to whatsapp
                </p>
                <img src={assets.whatsapp} alt="whatsapp-icon" className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-12 lg:h-12 mt-2 md:mt-4 lg:mt-10"/> */}

      {rsvpMode === "form" ? (
        <div className="flex flex-col items-center text-center">
          <a
            href={rsvpGoogleFormLink || "#"}
            target="_blank"
            rel="noreferrer"
            className="mt-6"
          >
            <button
              type="button"
              className="rounded-xl bg-[#D99447] text-white px-6 py-2 text-sm md:text-lg font-semibold cursor-pointer"
            >
              {rsvpButtonText}
            </button>
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 mt-4"
          >
            <img
              src={assets.whatsapp}
              alt="WhatsApp"
              className="h-8 w-8 md:h-8 md:w-8 lg:h-12 lg:w-12 mt-3"
            />

            <span className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl text-center mt-3 md:mt-6 text-[#D99447]">
              {rsvpButtonText}
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
