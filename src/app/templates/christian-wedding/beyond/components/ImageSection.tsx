"use client";
import { motion } from "framer-motion";
import SvgIcon from "./SvgIcon";
import { useState, useEffect } from "react";
import {assets} from "../assets";
const EASE_BOUNCE = [0.68, -0.55, 0.265, 1.55] as const;

interface ImageSectionProps {
  whatsappLink?: { platform: string; url: string }[];
  images?: string[];
  thankyoutitle?: string;
  thankyoumessage?: string;
  coupleTitle?: string;
}

const ImageSection = ({
  whatsappLink,
  images,
  coupleTitle = "INTRODUCTION",
  thankyoutitle = "With Love From Us",
  thankyoumessage =
    "Thank you for being part our journey. Your presence makes this celebration truly meaningful, and we look forward to sharing these cherished moments with you.",
}: ImageSectionProps) => {
  const staticImages = ["/assets/1.webp", "/assets/2.webp", "/assets/3.webp", "/assets/4.webp",];
  const carouselImages = images && images.length > 0 ? images : staticImages;
  const whatsappUrl = whatsappLink?.find(link => link.platform.toLowerCase() === 'whatsapp')?.url || "https://wa.me/1234567890";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % carouselImages.length
    );
  };

  return (
    <section className="w-full relative text-[#F2CD93]">
      <img
        src={assets.bg_five}
        alt="wedding-photo"
        className="object-cover lg:h-full h-200 w-full md:h-340"/>

      <img
        src={assets.meetheader2}
        alt="wedding-photo1"
        className="object-cover absolute lg:top-9 md:top-4 lg:right-9 top-2 right-2 w-auto md:right-4 lg:h-106 h-30 md:h-50"/>
    
      <img
        src={assets.meetheader2}
        alt="wedding-photo2"
        className="object-cover absolute lg:top-9 md:top-4 lg:left-9 top-2 left-2 w-auto md:left-4 lg:h-106 h-30 scale-x-[-1] md:h-50"
      />
      <h2 className="font-parisienne-regular text-3xl md:text-5xl lg:text-7xl text-center absolute left-1/2 -translate-x-1/2 top-10 md:top-16 lg:top-23.5 leading-[120%]">
        {/* With <br /> Love From Us  */}
        {thankyoutitle}
      </h2>
      <p className="font-eb-garamond font-normal text-xs md:text-xl lg:text-3xl text-center top-30 md:top-50 lg:top-76 absolute left-1/2 -translate-x-1/2 leading-[150%] w-full px-5 md:max-w-6xl">
        {/* Thank you for being part our journey. <br />
        Your presence makes this celebration truly <br />
        meaningful, and we look forward to sharing <br />
        these cherished moments with you. */}
        {thankyoumessage}
      </p>
      <p className="font-eb-garamond font-normal text-base md:text-2xl lg:text-[38px] text-center top-52 md:top-88 
      lg:top-140 absolute left-1/2 -translate-x-1/2">{coupleTitle}</p>

      <div className="absolute top-64 md:top-105 lg:top-165 left-1/2 -translate-x-1/2 cursor-pointer" onClick={handleNextImage}>
        <div className="relative inline-block">
          <img
            src={assets.imageFrame}
            alt="frame"
            className="relative z-20 w-full lg:h-130 3xl:h-auto h-auto object-contain pointer-events-none select-none"/>
          <motion.img
            key={currentImageIndex}
            src={carouselImages[currentImageIndex]}
            alt="photo"
            className="absolute top-[14%] left-[14%] w-[72%] h-[72%] object-cover z-10 rounded-full overflow-hidden"
            style={{
              clipPath: "circle(50% at 50% 50%)",
            }}
            initial={{ opacity: 0, x: "10%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-10%" }}/>
        </div>
      </div> 
      <p className="font-eb-garamond font-normal text-xl md:text-3xl lg:text-[56px] text-center absolute left-1/2 -translate-x-1/2 top-124 md:top-220 lg:top-11/18">
        Awaiting the Pleasure <br/> of Your Company
        <br />
        <span className="font-eb-garamond font-normal text-xs md:text-sm lg:text-[22px] leading-6">
          Share Your RSVP
        </span>
        <br />
      </p>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-1/2 -translate-x-1/2 mt-10 top-137 md:top-230 lg:top-420">

      <SvgIcon name="Location" className="w-15 h-10 lg:w-18 lg:h-18 md:h-35 text-[#F2CD93]"/> </motion.a>

      <motion.img
        src={assets.horse1}
        alt="wedding-photo"
        className="object-cover absolute -bottom-8 md:-bottom-12 lg:-bottom-15 left-1/2 -translate-x-1/2 h-48 md:h-82 lg:h-160 z-100"/>
    </section>
  );
};

export default ImageSection;
