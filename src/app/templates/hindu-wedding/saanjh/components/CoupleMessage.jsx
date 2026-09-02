"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/effect-cards";

import "../saanjh-globals.css";

// import required modules
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets";

export default function CoupleMessage({ data }) {
const [coupleBg, setCoupleBg] = useState(assets.bg_four);

    useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setCoupleBg(assets.bg_four);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setCoupleBg(assets.bg_four);
      } else {
        // Mobile
        setCoupleBg(assets.respo_four);
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);




  const extractImageSrc = (image) => {
    if (!image) return "";
    if (typeof image === "string") return image;
    return image?.image || image?.src || image?.url || "";
  };

  const carouselImages =
    Array.isArray(data?.coupleMessageCarouselImages) &&
    data.coupleMessageCarouselImages.length > 0
      ? data.coupleMessageCarouselImages
      : [
          assets.one,
          assets.two,
          assets.three,
          assets.one,
          assets.two,
          assets.three,
          assets.one,
          assets.two,
        ];

  const coupleTitle = data?.coupleMessageTitle || "INTRODUCING";
  const coupleDescription = data?.coupleMessageDescription || "The Couple";
  const thingsToKnowTitle =
    data?.coupleMessageThingsToKnowTitle || "Grateful Beyond Words";
  const coupleMessageThingsToKnowDescription =
    data?.coupleMessageThingsToKnowDescription ||
    "Our hearts are full of gratitude for your love, blessings, and presence. Thank you for making our wedding celebration so memorable.";

  return (
    <div
      className="bg-[url('/assets/respo_four.png')] md:bg-[url('/assets/bg_four.webp')] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${coupleBg})` }}
    >
      <div className="h-330 md:h-360 lg:h-500 3xl:h-630">
        <h1 className=" font-eb-garamond font-normal text-base md:text-xl lg:text-[26px] text-center pt-10 lg:pt-20 bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
          {coupleTitle}
        </h1>
        <h2 className=" font-eb-garamond font-medium text-5xl md:text-5xl lg:text-[82px] text-center pt-8 lg:pt-4  md:leading-tight bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
          {coupleDescription}
        </h2>
        <div className="flex justify-center gap-10 lg:gap-20 mt-6 md:mt-4">
          <hr className="w-25 lg:w-50 my-1 md:my-0 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
          <hr className="w-25 lg:w-50 my-1 md:my-0 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
        </div>
        <div className="mt-20 md:mt-18 lg:mt-20 flex justify-center items-center overflow-visible">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {carouselImages.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={extractImageSrc(item)}
                  alt={`Carousel ${index + 1}`}
                  className="w-full h-95 md:h-126 lg:h-135 3xl:h-175 object-contain lg:rounded-[60px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col items-center mt-25 md:mt-5 lg:mt-20 3xl:mt-50 gap-4">
      
          <img src={data?.religiousSign || assets.aum} alt="logo" width={250} height={300} className="w-7 h-10 md:w-14 md:h-20 lg:w-22 lg:h-29" />
          <h2 className="font-eb-garamond font-normal text-2xl md:text-3xl lg:text-[62px] text-center lg:pt-4 leading-tight text-[#E1B340]">
            {thingsToKnowTitle}
          </h2>
          <div className="flex gap-10 md:gap-12 lg:gap-20">
            <hr className="w-20 md:w-32 lg:w-62 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
            <hr className="w-20 md:w-32 lg:w-62 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
          </div>
          <h2 className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-[40px] mt-1 bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
           {data.brideName} & {data.groomName}
          </h2>
          <p className="font-eb-garamond font-medium text-center text-xs md:text-base lg:text-[22px] mt-1 md:leading-5 text-[#E1B340] md:w-200 w-80">
            {/* Our hearts are full of gratitude for your love, blessings, and
            presence. <br />
            Thank you for making our wedding celebration so memorable. */}
             {coupleMessageThingsToKnowDescription}
          </p>
          <img
            src={assets.couple_message_img}
            alt="couple_message_img"
            className="w-59 h-50 md:w-70 md:h-60 lg:w-117 lg:h-100 3xl:w-160 3xl:h-140 mt-15 md:mt-5 lg:mt-15"
          />
        </div>
      </div>
    </div>
  );
}
