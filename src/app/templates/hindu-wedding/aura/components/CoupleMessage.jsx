import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { assets } from "../assets";

export default function CoupleMessage({ data }) {
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
          // assets.image6,
        ];

  const coupleTitle = data?.coupleMessageTitle || "INTRODUCTION";
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

  const targetDate = data?.marriageCountdownDate || "2026-12-21";
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
        setTimeLeft({ days: 30, hours: 10, minutes: 30 });
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

  // const testimonial = [
  //   {
  //     img: assets.one,
  //   },

  //   {
  //     img: assets.two,
  //   },

  //   {
  //     img: assets.three,
  //   },

  //   {
  //     img: assets.four,
  //   },

  //   {
  //     img: assets.five,
  //   },
  // ];

  return (
    <div
      className="bg-[url('/assets/respo_three.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${assets.bg_three})` }}
    >
      <div className="h-640 md:h-620 lg:h-810 3xl:h-850">
        <h2 className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-[38px] text-center text-[#FFB700] lg:pt-32 pt-12">
          {coupleTitle}
        </h2>
        <h2 className="font-parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFB700] lg:px-60 px-6 mt-12 lg:mt-28 leading-7 md:leading-8 lg:leading-8">
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
                  className="w-full h-90 md:h-90 lg:h-135 3xl:h-175 object-cover rounded-[60px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col-1 justify-center items-center mt-16">
          <div
            className="bg-[url('/assets/rsvp.webp')] bg-cover bg-no-repeat w-80 h-80 md:w-100 md:h-100 lg:w-150 lg:h-150"
            style={{ backgroundImage: `url(${assets.rsvp})` }} id="rsvp-section"
          >
            {rsvpMode === "form" ? (
              <div className="flex flex-col items-center text-center W-70">
                <h2 className="font-eb-garamond font-medium text-3xl md:text-4xl lg:text-[46px] leading-8 lg:leading-12 text-center pt-22 md:pt-28 lg:pt-40 text-[#8B4302]  w-50 md:w-80">
                  {rsvpSectionHeading}
                </h2>

                <a
                  href={rsvpGoogleFormLink || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 md:mt-6 pr-0 md:pr-70 lg:mr-90"
                >
                  <button
                    type="button"
                    className="rounded-xl bg-[#FFF097] text-black px-4 md:px-6 py-2 text-sm md:text-lg font-semibold cursor-pointer"
                  >
                    {rsvpButtonText}
                  </button>
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center text-center ">
                <h2 className="font-eb-garamond font-medium text-3xl md:text-4xl lg:text-[46px] leading-8 lg:leading-12 text-center pt-22 md:pt-28 lg:pt-40 text-[#8B4302]  w-50 md:w-80">
                  {rsvpSectionHeading}
                </h2>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 mt-2 md:mt-4 md:w-70 w-55 justify-center"
                >
                  <img
                    src={assets.whatsapp}
                    alt="WhatsApp"
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-15 lg:h-15 mt-2 lg:mt-0"
                  />

                  <span className="font-eb-garamond font-semibold text-xs md:text-sm lg:text-xl mt-1 md:mt-3 lg:mt-6 text-center text-[#8B4302]">
                    {rsvpButtonText}
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:mt-15 mt-18">
          <h2 className="font-parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center lg:pt-6 text-[#FFB700]">
            {thingsToKnowTitle}
          </h2> 
        </div>

        <div className="flex justify-center mt-10 md:mt-20 pb-10 md:pb-0 md:px-20 3xl:60 px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-20 lg:gap-0 3xl:gap-0 lg:w-300 3xl:w-250">
            <div className=" flex flex-col items-center justify-center text-center">
              <img
                src={data?.coupleMessageWeatherImage || assets.weather}
                alt="weather"
                className="w-31 h-25 md:w-24 md:h-22 lg:w-33 lg:h-26"
              />
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-4xl lg:text-[42px] text-[#FFB700] mt-1">
                {weatherTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm md:text-base lg:text-xl text-[#FFB700] mt-1 md:leading-5">
                {weatherDetails}
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFB700] lg:my-28" />
            <div className=" flex flex-col items-center justify-center text-center">
              <img
                src={data?.coupleMessageStaffImage || assets.staff}
                alt="drive"
                className="w-28 h-35 md:w-17 md:h-23 lg:w-21 lg:h-27"
              />
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-4xl lg:text-[42px] text-[#FFB700] mt-1">
                {StaffTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm md:text-base lg:text-xl md:leading-5 text-[#FFB700] mt-1">
                {StaffDetails}
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFB700] lg:my-28" />
            <div className=" flex flex-col items-center justify-center text-center">
              <img
                src={data?.coupleMessageParkingImage || assets.parking}
                alt="car"
                className="w-31 h-25 md:w-26 md:h-23 lg:w-30 lg:h-27"
              />
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-4xl lg:text-[42px] text-[#FFB700] mt-1">
                {parkingTitle}
              </h2>
              <p className="font-eb-garamond font-normal text-sm md:text-base lg:text-xl md:leading-5 text-[#FFB700] mt-1">
                {parkingDetails}
              </p>
            </div>
          </div>
        </div>

        <h2
          className="font-eb-garamond font-medium text-xl md:text-xl lg:text-[28px] text-center text-[#FFB700] 
                         px-4 md:px-20 lg:px-56 3xl:px-107 pt-0 md:pt-18 lg:pt-40 mt-8 lg:mt-4 lg:leading-tight"
        >
          {coupleMessageThingsToKnowDescription}
        </h2>

        <div className="flex flex-col lg:h-110 md:h-100 h-80 items-center gap-1 md:gap-2" id="countdown-section">
          <h2 className="font-parisienne-regular font-normal text-3xl md:text-4xl lg:text-6xl text-center pt-28 md:pt-32 lg:pt-42 text-[#FFB700]">
            {title}
          </h2>
          <p className="font-eb-garamond font-medium text-base md:text-lg lg:text-[28px] mt-2 lg:mt-4 text-center text-[#FFB700] px-10">
            {description}
          </p>
          <hr className="w-54 md:w-62 lg:w-94 border lg:border-2 border-[#FFB700] my-2 md:my-2 lg:my-4" />
          <h2 className="font-eb-garamond font-normal text-3xl md:text-4xl lg:text-6xl text-center text-[#FFB700]">
            {timeLeft.days}D - {timeLeft.hours}H - {timeLeft.minutes}M
          </h2>
          <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:mt-4">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img
                src={assets.instagram}
                alt="instagram"
                className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-12 lg:h-12 "
              />
            </a>
          </div>
          <p className="font-eb-garamond font-normal text-xs md:text-sm lg:text-base mt-2 md:mt-4 text-center text-[#FFB700]">
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
