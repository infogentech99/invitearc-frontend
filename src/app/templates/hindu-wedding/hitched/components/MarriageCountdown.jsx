"use client";
import { useEffect, useState } from "react";
import { assets } from "../assets";


export default function MarriageCountdown({ data }) {
    const [coupleBg, setCoupleBg] = useState(assets.couple_bg);
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
                setTimeLeft({ days: 0, hours: 0, minutes: 0 });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown(); // first run
        const interval = setInterval(updateCountdown, 60000); // every minute

        return () => clearInterval(interval);
    }, [targetDate]);


       useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setCoupleBg(assets.countdown_desktop_bg);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setCoupleBg(assets.countdown_desktop_bg);
      } else {
        // Mobile
        setCoupleBg(assets.countdown_mobile_bg);
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);

    const title = data?.marriageCountdownTitle || "The Journey Begins"; 
    const description =
      data?.marriageCountdownDescription ||
      "Surrounded by family and friends, we can't wait to celebrate this beautiful moment with you.";




const rsvpText =
    data?.coupleMessageRsvpText || "Click on the Whatsapp icon to RSVP";
  const rsvpMode = data?.rsvpMode || data?.customData?.rsvpMode || "whatsapp";
  const whatsappNumber =
    data?.whatsappNumber || data?.customData?.whatsappNumber || "919876543210";
  const rsvpFields = Array.isArray(data?.rsvpFields)
    ? data.rsvpFields
    : Array.isArray(data?.customData?.rsvpFields)
      ? data.customData.rsvpFields
      : [];
  const whatsappHref = `https://wa.me/${String(whatsappNumber).replace(/\D/g, "")}`;
  const locationTitle = data?.coupleMessageLocationTitle || "Location";
  const rsvpSectionHeading =
    data?.rsvpSectionHeading ||
    data?.customData?.rsvpSectionHeading ||
    "Awaiting the Pleasure of Your Company";
  const rsvpButtonText =
    data?.rsvpButtonText ||
    data?.customData?.rsvpButtonText ||
    (rsvpMode === "form" ? "Fill RSVP Form" : "Share your RSVP");
  const rsvpGoogleFormLink =
    data?.rsvpGoogleFormLink || data?.customData?.rsvpGoogleFormLink || "";




    return (
        <>
            {/* <div className="`bg-[url('/assets/countdown_bg.jpg')]` bg-cover bg-no-repeat pb-12 md:pb-50 3xl:pb-40" style={{
          backgroundImage: `url(${coupleBg})`,
        }}> */}

        <div
  className="bg-cover bg-no-repeat pb-12 md:pb-50 3xl:pb-40"
  style={{
    backgroundImage: `url(${coupleBg})`,
  }}
>
                {/* <div className="lg:h-130 md:h-75 h-130"> */}
                 <div className="min-h-220 lg:min-h-375 pt-15 md:pt-0">
                    <h2 className="lg:text-[60px] text-4xl text-center text-[#FFF5B9] lg:pt-42 pt-12 font-parisienne">{title}</h2> 
                      
                    <p className="lg:text-[22px] text-[20px] text-[#FFF5B9] mt-8 text-center lg:px-100 md:px-25 px-10 font-garamond">
                        {description}
                    </p>
                    <h2 className="lg:text-[50px] text-4xl text-center text-[#FFF5B9] font-garamond mt-8"> {timeLeft.days}D {timeLeft.hours}H {timeLeft.minutes}M</h2>
                
                
                <div className="flex flex-col justify-center items-center 3xl:mt-0 lg:ml-140 ml-34 md:ml-50 lg:mt-40 md:mt-30 mt-40">
            {rsvpMode === "form" ? (
              <div className="w-full max-w-xl rounded-3xl px-1 py-4 md:mt-4 flex flex-col items-center text-center">
                <h3 className="lg:text-6xl text-[32px] md:text-[30px] text-[#FFF5B9] lg:pt-63 pt-1 font-Cormorant-upright md:leading-12 leading-8">
                  {rsvpSectionHeading}
                </h3>
                <a
                  href={rsvpGoogleFormLink || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4"
                >
                  <button
                    type="button"
                    className="rounded-xl bg-[#FFF5B9] md:px-8 py-1 px-4 text-[16px] md:text-[20px] font-bold text-[#861E1D] font-Cormorant-upright cursor-pointer"
                  >
                    {rsvpButtonText}
                  </button>
                </a>
              </div>
            ) : (
              <div className="flex justify-center items-center mt-4">
                <div className="flex flex-col items-center text-center">
                  <h3 className="lg:text-6xl text-[32px] md:text-[40px] text-[#FFF5B9] lg:pt-63 pt-1 font-Cormorant-upright md:leading-12 leading-8">
                    {rsvpSectionHeading}
                  </h3>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <img
                      src={assets.whatsapp}
                      alt="WhatsApp"
                      className="lg:h-10 lg:w-10 h-6 w-6"
                    />

                    <button className="rounded-full md:px-4 py-2 px-1 text-[20px] md:text-[30px] font-semibold text-[#FFF5B9] cursor-pointer font-Cormorant-upright">
                      {rsvpButtonText}
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
                </div>


                 
            </div>
        </>
    );
} 8