"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {assets} from "../assets";
interface EndDetailsProps {
counterDate?: string;
  title?: string;
  description?: string;
  locationLink?: string;
  socialLinks?: { platform: string; url: string }[];
}

const EndDetails = ({
  counterDate,
  title = "The Journey Begins",
  description = "Surrounded by family and friends, we can't wait to celebrate this beautiful moment with you.",
  locationLink,
  socialLinks,
}: EndDetailsProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    if (!counterDate) return;

    const calculateTimeLeft = () => {
      const difference = +new Date(counterDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [counterDate]);

  const instagramLink = socialLinks?.find(link => link.platform.toLowerCase() === 'instagram')?.url;
  const whatsappLink = socialLinks?.find(link => link.platform.toLowerCase() === 'whatsapp')?.url;

  return (
    <div className="bg-[url('/assets/bg_seven.webp')] bg-cover bg-center bg-no-repeat w-full relative overflow-hidden
                     text-[#280F56] font-Jacques-plain h-76 md:h-145 lg:h-270" style={{ backgroundImage: `url(${assets.bg_seven})`, }}>
      <div className="flex justify-between w-full">

      </div>
      <p className="font-parisienne-regular font-normal text-2xl md:text-4xl lg:text-6xl text-center leading-[120%] absolute 
                    top-3 md:top-13 lg:top-28 left-1/2 -translate-x-1/2">
        {title} <br />
      </p>
      <p className="font-eb-garamond font-medium text-xs md:text-xl lg:text-[28px] text-center absolute left-1/2 -translate-x-1/2 
                    leading-[120%] w-full top-11 md:top-28 lg:top-48">
        {description}
      </p>
      <hr className="w-42 md:w-66 lg:w-94 border lg:border-2 border-[#280F56] my-1 md:my-1 lg:my-2 absolute left-1/2 
                     -translate-x-1/2 leading-[120%] top-19 md:top-45 lg:top-72" />
      <p className="font-eb-garamond font-normal text-2xl md:text-4xl lg:text-6xl text-center absolute left-1/2 -translate-x-1/2 
                    top-21 md:top-51 lg:top-80 leading-[120%] w-full"> 
        {counterDate ? `${timeLeft.days}D ${timeLeft.hours}H ${timeLeft.minutes}M` : "18D 11H 47M"}
      </p>
      <div className="flex justify-between w-full max-w-3xl top-29 md:top-65 lg:top-103 absolute left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 md:max-w-xs mx-auto">
          <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src={assets.instagram_be} alt="instagram" 
           className="w-7.5 h-7.5 md:w-9 md:h-9 lg:w-12 lg:h-12" /></a>
          <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-base text-center mt-0 lg:mt-2">
            © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026</p>
        </div>
      </div>

    </div>
  );
};

export default EndDetails;
