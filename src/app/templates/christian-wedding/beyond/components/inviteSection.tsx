'use client';
import { motion } from "framer-motion";
import SvgIcon from "./SvgIcon";
import Image from "next/image";
import {assets} from "../assets";
const EASE_SOFT_OUT = [0.16, 1, 0.3, 1] as const;

interface InviteSectionProps {
  grandparents?: string;
  groomParents?: string;
  brideParents?: string;
  daughterOfText?: string;
  coupleName1?: string;
  coupleName2?: string;
  weddingDate?: string;
  weddingVenue?: string;
  religiousMantra?:string;
  blessingMessage?:string;
  inviteLine?:string;
}

const InviteSection = ({
  grandparents = 'Mrs. Sunita & Mr. Rajeev',
  groomParents = 'Mrs. Kavita & Mr. Rajesh Kumar',
  inviteLine = 'Warmly invite you to the wedding celebrations of ',
  daughterOfText = 'Daughter of',
  brideParents = 'Mrs. Lakshmi & Mr. Ram Kumar',
  coupleName1 = 'Gaurav',
  coupleName2 = 'Neha',
  weddingDate = 'Saturday, 21 June 2035',
  weddingVenue = '123 Anywhere St., Any City, ST 12345',
  religiousMantra = "ॐ श्री गणेशाय नम",
  blessingMessage = "With the godly blessings of",
}: InviteSectionProps) => {

  return (
    <section className="w-full relative text-[#7A5192]">
      <Image
        // src="/assets/bg_three.webp"
        src={assets.bg_three}
        alt="wedding-photo"
        width={1920}
        height={1080}
        className="object-cover h-200 md:h-456 lg:h-556"/>

      <Image
        // src="/assets/bg_three_design.webp"
         src={assets.bg_three_design}
        alt="wedding-photo"
        width={1920}
        height={1080}
        className="object-cover absolute md:-top-2 -top-2 mx-auto w-full"
      />
      <p className="font-eb-garamond font-normal text-sm md:text-[26px] leading-[150%] absolute top-6 md:top-20 left-1/2 -translate-x-1/2 
                    text-center text-[#BD8C1C]">
        
        {religiousMantra}
      </p>
      <SvgIcon
        name="LordGanesh"
        className="md:w-41 md:h-53 w-20 h-20 absolute top-16 md:top-40 left-1/2 -translate-x-1/2"/>
      <p className="font-eb-garamond font-medium text-sm md:text-3xl lg:text-[42px] leading-[150%] absolute top-4/18 md:top-105 
                    lg:top-110 left-1/2 -translate-x-1/2 w-full text-center text-[#7A5192]">
        {blessingMessage} <br />
        {grandparents} <br /> and <br /> 
       {groomParents}

        {/* {(groomParents ) && <> <br /> and <br /></>} */}
        {/* {groomParents && (groomParents )} */}
      </p>
      <p className="font-eb-garamond font-medium md:text-[80px] text-4xl leading-[120%] absolute top-7/20 md:top-152 lg:top-185 left-1/2 
                    -translate-x-1/2 text-center text-[#BD8C1C]">
        WE <br /> INVITE
      </p>
      <div className="font-eb-garamond font-medium text-sm md:text-3xl lg:text-[42px] leading-[150%] absolute top-10/20 md:top-8/18 left-1/2 
                      -translate-x-1/2 text-center w-full text-[#7A5192]">
         {/* Warmly invite you to the wedding celebrations of  */}
         {inviteLine}<br />
        <p className="font-eb-garamond font-medium md:mt-8 mt-4">
          {daughterOfText} <br />
          {brideParents}
        </p>
        
      </div>
      <p className="font-eb-garamond font-medium text-base md:text-3xl lg:text-6xl leading-[120%] text-center absolute top-12/18 
                    md:top-280 lg:top-340 left-2/8 md:left-2/8 -translate-x-1/2">
        {coupleName1} <br /> & <br /> {coupleName2}
      </p>
      <p className="font-eb-garamond font-medium text-sm md:text-2xl lg:text-[42px] leading-[150%] text-center absolute top-12/18
                    md:top-285 lg:top-350 left-6/8 -translate-x-1/2 w-full">
       {weddingDate} <br /> {weddingVenue}
      </p>

      <img
        src={assets.frame}
        alt="wedding-photo"
        className="object-cover absolute bottom-0 w-full h-auto z-20"/>
      <img
        src={assets.couple_img}
        alt="wedding-photo"
        className="object-cover absolute bottom-0 left-1/2 -translate-x-1/2 h-auto md:h-200 lg:h-240"/>

{[...Array(15)].map((_, i) => (
  <motion.div
    key={`heart-top-${i}`}
    className="
      absolute top-0 pointer-events-none z-30
      text-lg       
      md:text-3xl   
      lg:text-5xl"
    style={{
      left: `${i * 6.5}%`,
    }}
    animate={{
      opacity: [0, 0.6, 1, 0.6, 0],
      y: [0, 150, 300, 500],
      x: [0, Math.sin(i * 0.5) * 20, Math.sin(i * 0.5) * -20, 0],
      scale: [0.3, 0.8, 1.2, 0.6, 0.2],
      rotate: [0, 90, 180, 270, 360],
    }}
    transition={{
      duration: 6 + (i % 3),
      delay: i * 0.4,
      ease: EASE_SOFT_OUT,
      repeat: Infinity,
    }}
  >
    <img src={assets.petals} alt="petals"  className="h-16 w-16"/>
  </motion.div>
))}


  {[...Array(12)].map((_, i) => (
  <motion.div
    key={`heart-top-layer2-${i}`}
    className="
      absolute top-0 pointer-events-none z-30
      text-base     
      md:text-2xl   
      lg:text-4xl"
    style={{
      left: `${5 + i * 7.5}%`,
    }}
    animate={{
      opacity: [0, 0.8, 1, 0.5, 0],
      y: [0, 200, 400, 600],
      x: [0, Math.cos(i * 0.7) * -15, Math.cos(i * 0.7) * 15, 0],
      scale: [0.2, 1, 0.8, 0.4, 0.1],
      rotate: [0, -90, -180, -270, -360],
    }}
    transition={{
      duration: 7 + (i % 2),
      delay: 0.3 + i * 0.5,
      ease: EASE_SOFT_OUT,
      repeat: Infinity,
    }}>

    {/* ❤️ */}
     <img src={assets.petals} alt="petals" className="h-16 w-16"/>
  </motion.div>
))}

    </section>
  );
};
export default InviteSection;
