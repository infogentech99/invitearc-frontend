"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets";
export default function Countdown({ data }) {
   const targetDate = data?.marriageCountdownDate || "2026-12-21";
 const TARGET_DATE = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 28,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const rsvpMode = data?.rsvpMode || data?.customData?.rsvpMode || "whatsapp";

  const whatsappNumber =
    data?.whatsappNumber || data?.customData?.whatsappNumber || "919876543210";

  const whatsappHref = `https://wa.me/${String(whatsappNumber).replace(/\D/g, "")}`;
  const rsvpSectionHeading =
    data?.rsvpSectionHeading ||
    data?.coupleMessageClosingTitle ||
    data?.customData?.coupleMessageClosingTitle ||
    "Looking forward to seeing you";

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
    <section
      className="relative overflow-hidden bg-[url('/assets/countdown.webp')] bg-cover bg-no-repeat md:pt-40 pt-20"
      style={{
        backgroundImage: `url(${assets.countdown})`,
      }}
    >
      <div className="flex justify-center">
        <img
          src={assets.icon2}
          alt="couple5"
          className="object-contain h-4 w-5"
        />
      </div>

      <div className="mt-2 flex flex-col items-center">
        {rsvpMode === "form" ? (
          <div className="flex flex-col items-center text-center">
            <h2 className="text-center font-playfair-display italic text-[27px] font-medium text-[#80601e] md:text-[21px] lg:text-[50px]">
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
            <h2 className="text-center font-playfair-display italic text-[27px] font-medium text-[#80601e] md:text-[21px] lg:text-[50px]">
              {rsvpSectionHeading}
            </h2>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 mt-4 md:gap-3"
            >
              <img
                src={assets.whatsapp}
                alt="WhatsApp"
                className="h-8 w-8 md:h-8 md:w-8 lg:h-13 lg:w-14"
              />

              <span className="font-serif text-[10px] tracking-[0.18em] text-[#876d37] md:text-[16px]">
                {rsvpButtonText}
              </span>
            </a>
          </div>
        )}
      </div>

      <div className="relative z-20 -mt-1 flex flex-col items-center px-5 pb-8 pt-8 md:pt-10 lg:pb-10">
        <Image
          src={assets.countdown_couple}
          alt="couple"
          width={900}
          height={1200}
          className="w-108 h-50 md:w-205 md:h-102 lg:w-440 lg:h-254 3xl:w-300 3xl:h-170 object-contain mt-6"
        />
      </div>

      <div className="relative md:mt-40 mt-45 w-full">
        <img
          src={assets.countdown_venue}
          alt="Wedding Venue"
          className="block h-full w-full object-cover object-center"
        />

        {/* <div className="absolute inset-0 z-20 flex flex-col items-center px-5 pb-100 md:pt-[18%] lg:pt-[5%]"> */}
        <div className="absolute inset-x-0 -top-35 z-20 flex flex-col items-center px-5 md:top-[0%] lg:top-[10%]">
          <div className="mb-2 text-[12px] text-[#96752d] md:text-[18px]">
            ✦
          </div>

          <h2 className="text-center font-playfair-display italic text-[22px] font-medium text-[#80601e] md:text-[21px] lg:text-[50px]">

          {data.marriageCountdownTitle}
      
          </h2>

          <div className="mt-5 flex items-start justify-center gap-8 md:gap-10 lg:gap-12">
            <div className="text-center">
              <p className="font-serif text-[22px] text-[#806525] md:text-[32px]">
                {timeLeft.days}
              </p>
              <p className="mt-1 font-serif text-[5px] tracking-wide text-[#998d73] md:text-[12px]">
                DAYS
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-[22px] text-[#806525] md:text-[32px]">
                {timeLeft.hours}
              </p>
              <p className="mt-1 font-serif text-[5px] tracking-wide text-[#998d73] md:text-[12px]">
                HOURS
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-[22px] text-[#806525] md:text-[32px]">
                {timeLeft.minutes}
              </p>
              <p className="mt-1 font-serif text-[5px] tracking-wide text-[#998d73] md:text-[12px]">
                MINUTES
              </p>
            </div>

            <div className="text-center">
              <p className="font-serif text-[22px] text-[#806525] md:text-[32px]">
                {timeLeft.seconds}
              </p>
              <p className="mt-1 font-serif text-[5px] tracking-wide text-[#998d73] md:text-[12px]">
                SECONDS
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-[180px] text-center font-serif text-[10px] leading-[1.7] text-[#958b78] md:max-w-[450px] md:text-[14px]">
            {data.marriageCountdownDescription}
          </p>

          <div className="mt-3 flex items-center gap-3 font-serif text-[12px] text-[#8e7b4f]">
            <img
              src={assets.icon3}
              alt="couple5"
              className="object-contain h-4 w-5"
            />
            <span>Follow us on Instagram</span>
          </div>
        </div>
      </div>
    </section>
  );
}
