"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets";

export default function CoupleMessage({ data }) {
  const targetDate = data?.marriageCountdownDate || "2026-09-21";
  const TARGET_DATE = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;
      if (diff <= 0) {
        setTimeLeft({ days: 30, hours: 4, minutes: 10 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown(); // first run
    const interval = setInterval(updateCountdown, 60000); // every minute

    return () => clearInterval(interval);
  }, [targetDate]);

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
          assets.four,
          assets.five,
          assets.six,
          assets.seven,
        ];

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
  const title = data?.marriageCountdownTitle || "The Journey Begins";
  const description =
    data?.marriageCountdownDescription ||
    "Surrounded by family and friends, we can't wait to celebrate this beautiful moment with you.";

  return (
    <div
      className="bg-[url('/assets/respo_bg_two.webp')] md:bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${assets.bg_two})` }}
    >
      <div className="h-650 md:h-650 lg:h-1050 3xl:h-1007">
        <h1 className="eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center text-[#FFD74B] lg:pt-40 pt-20">
          {coupleTitle}
        </h1>
        <h2 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFD74B] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-24 leading-5 md:leading-tight">
          {coupleDescription}
        </h2>


  <div className="md:mt-32 mt-26 lg:mt-44 flex justify-center items-center overflow-visible">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="w-full py-12 max-w-screen-3xl overflow-visible"
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1536: {
                slidesPerView: 3.5,
                spaceBetween: 50,
              },
            }}
          >
            {carouselImages.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={extractImageSrc(item)}
                  alt={`Carousel ${index + 1}`}
                  className="w-full h-120 md:h-90 lg:h-135 3xl:h-175 object-cover rounded-[60px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" h-100 lg:h-180 flex justify-center gap-0 items-center md:mt-40 lg:mt-80 3xl:mt-40 md:pr-5 lg:pr-10 3xl:pr-0">
          <div
            className="bg-[url('/assets/RSVP_Symbol.webp')] w-65 h-65 md:w-100 md:h-100 lg:w-150 lg:h-150 bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${assets.rsvp_symbol})` }}
          >
            {rsvpMode === "form" ? (
              <div className="flex flex-col items-center text-center">
                <h2 className="eb-garamond font-medium text-center text-xl md:text-3xl lg:text-[46px] text-[#8B4302] pt-15 md:pt-25 lg:pt-40 3xl:pt-40 leading-5 md:leading-8 lg:leading-12 w-40 md:w-40 lg:w-100 md:mt-2 mt-5">
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
                <h2 className="eb-garamond font-medium text-center text-xl md:text-3xl lg:text-[46px] text-[#8B4302] pt-15 md:pt-25 lg:pt-40 3xl:pt-40 leading-5 md:leading-8 lg:leading-12 w-40  md:w-40 lg:w-100 md:mt-2 mt-5">
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

      

        <h1 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFD74B] pt-10 md:pt-35 lg:pt-65 3xl:pt-70 leading-tight">
          {thingsToKnowTitle}
        </h1>

        <div className="flex justify-center mt-10 md:mt-20 pb-10 md:pb-0 md:px-10 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-20 lg:gap-0 3xl:gap-0">
            <div className=" flex flex-col items-center justify-center text-center">
              <img
                src={data?.coupleMessageWeatherImage || assets.weather}
                alt="weather"
                className="w-31 h-25 md:w-24 md:h-22 lg:w-33 lg:h-26"
              />
              <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                {weatherTitle}
              </h2>
              <p className="eb-garamond font-normal text-sm lg:text-xl text-[#FFD74B] mt-1 md:leading-5">
                {weatherDetails}
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFD74B] lg:my-28" />
            <div className=" flex flex-col items-center justify-center text-center">
              <img
                src={data?.coupleMessageStaffImage || assets.staff}
                alt="drive"
                className="w-28 h-35 md:w-17 md:h-23 lg:w-21 lg:h-27"
              />
              <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                {StaffTitle}
              </h2>
              <p className="eb-garamond font-normal text-sm lg:text-xl md:leading-5 text-[#FFD74B] mt-1">
                {StaffDetails}
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFD74B] lg:my-28" />
            <div className=" flex flex-col items-center justify-center text-center">
              <img
                src={data?.coupleMessageParkingImage || assets.parking}
                alt="car"
                className="w-31 h-25 md:w-26 md:h-23 lg:w-30 lg:h-27"
              />
              <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                {parkingTitle}
              </h2>
              <p className="eb-garamond font-normal text-sm lg:text-xl md:leading-5 text-[#FFD74B] mt-1">
                {parkingDetails}
              </p>
            </div>
          </div>
        </div>

        <h2 className="eb-garamond font-medium text-xl md:text-xl lg:text-[28px] text-center text-[#FFD74B] px-4 md:px-20 lg:px-56 3xl:px-107 pt-0 md:pt-22 lg:pt-40 3xl:pt-46 mt-2 lg:mt-4 lg:leading-tight">
          {coupleMessageThingsToKnowDescription}
        </h2>

        <div className="flex flex-col h-50 md:h-89 lg:h-200 3xl:h-210 md:gap-3 lg:gap-8 3xl:gap-8 items-center text-center">
          <h2 className="parisienne-regular font-normal text-2xl md:text-4xl lg:text-6xl text-center text-[#FFD74B] pt-40 md:pt-60 lg:pt-75 3xl:pt-55">
            {title}
          </h2>
          <p className="eb-garamond font-medium text-xs md:text-xl lg:text-[28px] text-[#FFD74B] mt-4 text-center px-6 md:px-25 lg:px-65 3xl:px-120">
            {description}
          </p>
          <hr className="w-42 md:w-66 lg:w-94 border lg:border-2 border-[#FFD74B] my-2 md:my-4 lg:my-4" />
          <h2 className="eb-garamond font-normal text-2xl md:text-5xl lg:text-[80px] text-center text-[#FFD74B]">
           
            {timeLeft.days}D - {timeLeft.hours}H - {timeLeft.minutes}M
          </h2>

          <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:mt-0">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img
                src={assets.instagram}
                alt="icon"
                className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </a>
          </div>
          <p className="eb-garamond font-normal text-xs md:text-sm lg:text-base text-[#FFD74B] mt-2 md:mt-0 text-center">
            ©
            <a href="https://invitearc.com/" target="_blank">
              InviteArc
            </a>
            2026
          </p>
        </div>
      </div>
    </div>
  );
}
