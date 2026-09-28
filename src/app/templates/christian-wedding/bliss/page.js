"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import WeddingEvents from "./components/WeddingEvents";
import IntroducingCouple from "./components/IntroducingCouple";
import GuideForGuests from "./components/GuideForGuests";
import Countdown from "./components/Countdown";
import { assets } from "./assets";
import "./bliss-globals.css";
// const FloatingLamp = ({ classNam/e, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
//   // Memoize random values to prevent recalculation on re-renders
//   const lampValues = useMemo(() => {
//     // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
//     // const duration = 40 + Math.random() * 10; // 40–50s
//     const duration = 60 + Math.random() * 10; // 60–70s
//     const delay = Math.random() * 15;

//     // depth feel - dramatic size variety
//     const scale = Math.random() < 0.5
//       ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
//       : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
//     const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

//     return { duration, delay, scale, blur };
//   }, []); // Empty dependency array means these values are calculated only once

//   return (
//     <img
//       src="/flower_petals.webp"
//       alt="petal"
//       className={`floating-lamp ${className}`}
//       style={{
//         animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
//         animationDuration: `${lampValues.duration}s`,
//         animationDelay: `${lampValues.delay}s`,
//         transform: `scale(${lampValues.scale})`,
//         filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
//         '--scale': lampValues.scale,
//         ...style,
//       } as React.CSSProperties}
//     />
//   );
// };

const initialData = {
  groomName: "Elias",
  brideName: "Seraphina",
  religiousMantra: "Praise the Lord",
  blessingMessage: "With the heavenly blessings of",
  groomGrandParentsName: "Mr. Joseph D'Souza & Mrs. Maria D'Souza",
  headline: "INVITES",
  inviteLine: "you to join us in the wedding celebrations of",
  groomDetails: "(Son of Mr. Joseph D’Souza & Mrs. Maria D’Souza)",
  brideDetails: "(Daughter of Mr. Thomas Fernandes & Mrs. Angela Fernandes)",
  eventIntro: "On the following blessed occasion.",
  celebrationintro: "The Celebration",
  celebrationDesc:
    "We invite you to join us in these moments of joy as we prepare to unite our lives in faith and love.",
  thankyoutitle: "With Love From Us",
  thankyoumessage:
    "Thank you for being part of our journey. Your presence makes this celebration truly meaningful, and we look forward to sharing these cherished moments with you.",
  coupleMessageTitle: "Introducing The Couple",
  coupleMessageDescription:
    "A collection of moments that brought us to this beautiful beginning. Each memory a thread in the tapestry of our shared life.",
  coupleMessageThingsToKnowTitle: "A Guide for Guests",
  coupleMessageThingsToKnowDescription:
    "Everything you need for a comfortable and memorable celebration.",
  coupleMessageWeatherTitle: "Weather",
  coupleMessageWeatherDetails: "Warm and sunny with a gentle evening breeze.",
  coupleMessageAccommodationTitle: "Accommodation",
  coupleMessageAccommodationDetails:
    "Luxury suites reserved at the Grand Heritage.",
  coupleMessageParkingTitle: "Parking",
  coupleMessageParkingDetails: "Valet parking available at the main entrance.",
  coupleMessageDressTitle: "Dress Code",
  coupleMessageDressDetails: "Formal Black Tie attire requested.",
  coupleMessageCeremonyTitle: "Ceremony",
  coupleMessageCeremonyDetails:
    "The union begins at 4:00 PM at St. Jude Cathedral.",
  coupleMessageContactTitle: "Contact",
  coupleMessageContactDetails: "Concierge support available at +1 234 567 890.",
  marriageCountdownTitle: "THE COUNTDOWN BEGINS",
  marriageCountdownDescription:
    "Our families are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.",
};

export default function Home({ data: initialTemplateData, isOwner = false }) {
  const [bgImage, setBgImage] = useState(assets.bg);

  const [data, setData] = useState({
    ...initialData,
    ...(initialTemplateData || {}),
    events:
      (initialTemplateData?.events || []).map((event, index) => ({
        ...initialData.events?.[index],
        ...event,
      })).length > 0
        ? (initialTemplateData?.events || []).map((event, index) => ({
            ...initialData.events?.[index],
            ...event,
          }))
        : initialData.events,
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      ...initialTemplateData,
      events:
        (initialTemplateData?.events || []).length > 0
          ? (initialTemplateData?.events || []).map((event, index) => ({
              ...initialData.events?.[index],
              ...event,
            }))
          : prev.events || initialData.events,
    }));
  }, [initialTemplateData]);

  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch {}
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {}
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setBgImage(assets.bg);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setBgImage(assets.bg);
      } else {
        // Mobile
        setBgImage(assets.respo_bg);
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
        preload="auto"
        playsInline
      />

      {/* hero section */}
      <div
        className=" 
    bg-[url('/assets/respo_bg.webp')]
    md:bg-[url('/assets/bg.webp')]
    3xl:bg-[url('/assets/bg.webp')]
    bg-cover
    bg-no-repeat
    bg-top
    w-full
    overflow-hidden
    relative
  "
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="pt-30 md:pt-88 lg:pt-90 3xl:pt-100 relative z-10 ">
          <h2
            className="
        text-[#AE633A]
        text-center
        leading-tight
        text-4xl
        md:text-5xl
        lg:text-[80px]
        pb-0
        md:pb-300
        lg:pb-470
        3xl:pb-550
        flex justify-center
        items-center
        gap-2
        lg:gap-6 
      "
          >
            <span className="font-playfair-display italic">
              {data.groomName}
            </span>

            <span className="font-playfair-display text-base md:text-2xl lg:text-[38px] tracking-widest font-cormorant italic">
              WEDS
            </span>

            <span className="font-playfair-display italic">
              {data.brideName}
            </span>
          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0 pt-120 md:pt-0">
            <h2 className="text-[#906220] text-[12px] md:text-xl lg:text-2xl md:pt-8 font-playfair-display">
              {data.religiousMantra}
            </h2>

            <Image
              src={data?.religiousSign || assets.symbol}
              alt="idol"
              width={100}
              height={100}
              className="w-10 h-15 md:w-12 md:h-16 lg:w-14.5 lg:h-20 object-cover"
            />

            <h2 className="text-[#906220] text-sm md:text-xl lg:text-3xl md:pt-8 font-playfair-display">
              {data.blessingMessage}
              <br /> {data.groomGrandParentsName}
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-[#906220] font-playfair-display text-3xl md:text-5xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider">
              {data.headline}
            </h2>

            <p className="text-[#906220] font-playfair-display text-sm md:text-xl lg:text-3xl mt-6">
              {data.inviteLine}
            </p>

            <h2 className="text-[#906220] font-playfair-display text-center mt-14 text-4xl md:text-6xl lg:text-[100px] leading-tight font-medium">
              {data.groomName}
            </h2>

            <p className="text-[#906220] font-playfair-display text-sm md:text-xl lg:text-3xl mt-4">
              {data.groomDetails}
            </p>

            <h2 className="text-[#906220] font-playfair-display text-center mt-4 text-4xl md:text-6xl lg:text-[100px] leading-tight font-medium">
              <span className="text-[#906220] font-playfair-display text-center lg:mt-10 mt-0 text-4xl md:text-6xl lg:text-[100px] leading-tight">
                &
              </span>
              <br /> {data.brideName}
            </h2>

            <p className="text-[#906220] font-playfair-display text-sm md:text-xl lg:text-3xl mt-4">
              {data.brideDetails}
            </p>

            <p className="text-[#906220] font-playfair-display text-sm md:text-xl lg:text-3xl mt-8">
              {data.eventIntro}
            </p>
          </div>

          <p className="text-[#906220] font-playfair-display text-2xl md:text-2xl lg:text-4xl md:mt-40 mt-20 text-center">
            {data.celebrationintro}
          </p>
          <p className="text-[#4B4738] font-playfair-display text-sm md:text-xl lg:text-xl mt-4 text-center 3xl:px-170 lg:px-80 md:px-30 px-10">
            {data.celebrationDesc}
          </p>

          <WeddingEvents />
          <div className="relative flex flex-col items-center pt-0 lg:pt-50 3xl:pt-40 3xl:gap-60 ">
            <div className="absolute left-0 right-0 w-full flex flex-col items-center justify-center text-center md:mb-0 lg:mb-0 md:top-0 lg:top-84 3xl:top-60 mt-25">
              <p className="font-playfair-display font-medium text-2xl md:text-4xl lg:text-[50px] text-[#906220] italic">
                {data.thankyoutitle}
              </p>

              <p className="text-black font-eb-garamond text-sm md:text-xl lg:text-[20px] mt-4 lg:px-100 3xl:px-160 px-20 md:px-30">
                {data.thankyoumessage}
              </p>
            </div>
            <Image
              src={assets.love}
              alt="couple"
              width={900}
              height={1200}
              className="w-86 h-135 md:w-205 md:h-198 lg:w-440 lg:h-374 3xl:w-300 3xl:h-253 object-contain"
            />
          </div>

          <IntroducingCouple
            data={data}
            isOwner={isOwner}
            updateField={updateField}
          />
        </div>
      </div>

      <GuideForGuests data={data} isOwner={isOwner} updateField={updateField} />
      <Countdown data={data} isOwner={isOwner} updateField={updateField} />
    </>
  );
}
