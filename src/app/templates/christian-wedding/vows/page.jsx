"use client";
import { useEffect, useState, useRef, useMemo } from "react";
// import FallingLamps from "@/app/components/FallingLamps";
import CoupleMessage from "./components/CoupleMessage";
import ThingsToKnow from "./components/ThingsToKnow";
import MarriageCountdown from "./components/MarriageCountdown";
import "./vows-globals.css";
import {assets} from "./assets";

const FloatingLamp = ({ className, style, reverse = false }) => {  
  const lampValues = useMemo(() => {
   
    const duration = 60 + Math.random() * 10; 
    const delay = Math.random() * 15;

    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  
      : 1.2 + Math.random() * 0.8;
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); 

  return (
    <img
      src={assets.lamp}
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
      animationName: reverse ? "lampFlowReverse" : "lampFlow",
      animationDuration: `${lampValues.duration}s`,
      animationDelay: `${lampValues.delay}s`,
      transform: `scale(${lampValues.scale})`,
      filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
      "--scale": lampValues.scale,
      ...style,
    }}
    />
  );
};




const initialData = {
  groomName: "DANIEL",
  brideName: "GRACE",
  religiousMantra: "Praise the Lord",
  blessingMessage: "With the heavenly blessings of",
  groomGrandParentsName: "Mr. Joseph D'Souza & Mrs. Maria D'Souza",
  groomDetails: "(Son of Mr. Joseph D'Souza & Mrs. Maria D'Souza)",
  headline: "INVITES",
  inviteLine: "You to join us in the joyful wedding celebrations of",
  brideDetails: "(Daughter of Mr. Thomas Fernandes & Mrs. Angela Fernandes)",
  eventIntro: "On the following blessed occasion.",
  thankyoutitle: "With Love From Us",
  thankyoumessage:
    "Thank you for being part our journey. Your presence makes this celebration truly meaningful, and we look forward to sharing these cherished moments with you.",

  events: [
     {
      title_ceremony: "Prayer Service",
      image: assets.prayer,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace, Udaipur",
       venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },

    {
      title_ceremony: "Wedding Ceremony",
      image: assets.wedding,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace, Udaipur",
       venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Reception",
      image: assets.reception,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace, Udaipur",
       venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },

  ],
};




export default function Home({ data: initialTemplateData, isOwner = false }) {
const [bgImage, setBgImage] = useState(assets.desktop_background);


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

 const backgroundMusicUrl = data?.backgroundMusicUrl || assets.background_song;
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
    } catch { }
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
      } catch { }
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
        setBgImage(assets.desktop_background);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setBgImage(assets.desktop_background);
      } else {
        // Mobile
        setBgImage(assets.responsive_mobile);
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
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl">
        {playing ? "⏸" : "▶"}
      </button>
      {/* <audio ref={audioRef} src="/assets/background_song_christian.mp3" loop preload="auto" playsInline /> */}
<audio
        key={backgroundMusicUrl}
        ref={audioRef}
        src={backgroundMusicUrl}
        loop
        preload="auto"
        playsInline
      />
      {/* hero section */}
      <div className="bg-[url('/assets/responsive.webp')] md:bg-[url('/assets/christian_bg.webp')]
                      bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden" style={{
          backgroundImage: `url(${bgImage})`,
        }}>
                    
        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="hidden lg:block absolute top-10 left-8 w-18 h-18 transform rotate-12 opacity-90" />
        <FloatingLamp className="hidden lg:block absolute top-30 left-20 w-16 h-16 transform rotate-45 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-70 left-60 w-14 h-14 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-90 left-80 w-20 h-20 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-110 left-100 w-18 h-18 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-130 left-120 w-20 h-20 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-150 left-140 w-16 h-16 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-170 left-160 w-20 h-20 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-190 left-180 w-18 h-18 transform rotate-28 opacity-85" />


        <FloatingLamp className="lg:hidden absolute top-10 left-8 w-12 h-12 transform rotate-12 opacity-90" />
        <FloatingLamp className="lg:hidden absolute top-30 left-20 w-12 h-12 transform rotate-45 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-50 left-40 w-10 h-10 transform rotate-30 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-70 left-60 w-10 h-10 transform rotate-15 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-90 left-80 w-12 h-12 transform rotate-25 opacity-75" />
        <FloatingLamp className="lg:hidden absolute top-110 left-100 w-12 h-12 transform rotate-10 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-130 left-120 w-12 h-12 transform rotate-35 opacity-75" />
        <FloatingLamp className="lg:hidden absolute top-150 left-140 w-12 h-12 transform rotate-22 opacity-85" />
        <FloatingLamp className="lg:hidden absolute top-170 left-160 w-12 h-12 transform rotate-18 opacity-80" />
        <FloatingLamp className="lg:hidden absolute top-190 left-180 w-12 h-12 transform rotate-28 opacity-85" />


        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-20 h-20 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-20 h-20 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-20 h-20 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-28 h-28 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-20 h-20 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-28 h-28 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-20 h-20 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-20 h-20 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-20 h-20 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-20 h-20 transform rotate-25 opacity-75" />


        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="hidden lg:block absolute top-20 right-12 w-18 h-19 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-40 right-32 w-20 h-20 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-60 right-52 w-18 h-18 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-80 right-72 w-16 h-16 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-100 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-120 right-112 w-18 h-18 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-140 right-132 w-16 h-16 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-160 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-180 right-172 w-16 h-16 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-200 right-192 w-18 h-18 transform -rotate-35 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-20 h-20 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-20 h-20 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-20 h-20 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-20 h-20 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-18 h-18 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-20 h-20 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-20 h-20 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-18 h-18 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-20 h-20 transform -rotate-22 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-20 h-20 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-20 h-20 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-20 h-20 transform -rotate-22 opacity-85" reverse={true} />

        <FloatingLamp className="lg:hidden absolute top-20 right-12 w-12 h-12 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-40 right-32 w-12 h-12 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-60 right-52 w-12 h-14 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-80 right-72 w-10 h-10 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-100 right-92 w-12 h-12 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-120 right-112 w-10 h-10 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-140 right-132 w-12 h-12 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-160 right-152 w-12 h-12 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-180 right-172 w-12 h-12 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="lg:hidden absolute top-200 right-192 w-10 h-10 transform -rotate-35 opacity-85" reverse={true} />

        {/* <FallingLamps /> */}

        <div className="pt-12 md:pt-24 md:pb-20 relative z-10 pb-24">
          <h2 className="flex flex-col justify-center items-center text-[#15528A] text-center leading-tight text-2xl md:text-5xl 
                         lg:text-[64px] lg:pb-500 md:pb-370 pb-0 md:gap-y-2 gap-y-1 md:pt-10">
            <span className="font-eb-garamond font-medium">{data.groomName}</span>
            <span className="font-Jacques-Francois text-xl md:text-3xl lg:text-5xl">WEDS</span>
            <span className="font-eb-garamond font-medium">{data.brideName}</span>
          </h2>

          <div className="flex flex-col items-center text-center gap-6 pt-150 lg:pt-120">
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl text-center text-[#FFF097]">
              {data.religiousMantra}
            </h2>
            <img src={assets.cross} alt="symbol" className="md:w-30 w-20 h-auto lg:pt-6"/>
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl text-center text-[#FFF097] lg:mt-4">
             {data.blessingMessage} <br /> {data.groomGrandParentsName}
            </h2>
            <hr className="lg:w-24 w-16 border-[#FFF097] lg:my-4" />
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl text-[#FFF097]">
              {data.brideDetails}
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="font-eb-garamond font-medium text-3xl md:text-5xl lg:text-[64px] leading-tight lg:tracking-wide tracking-wider text-[#FFF097]">
              {data.headline}
            </h2>
            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-6 text-[#FFF097]">
              {data.inviteLine}
            </p>
            <h2 className="font-eb-garamond font-medium text-center mt-4 lg:mt-14 text-3xl md:text-5xl lg:text-[64px] leading-tight text-[#FFF097]">
              {data.groomName}
            </h2>
            <h2 className="font-eb-garamond font-medium text-[#FFF097] text-center mt-4 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              <span className="font-eb-garamond font-medium text-[#FFF097] text-center lg:mt-10 mt-4 text-xl md:text-3xl lg:text-5xl leading-tight">&</span>   <br />
              {data.brideName}
            </h2>
            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-2 lg:mt-4 text-[#FFF097]">
              {data.groomDetails}
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-2 lg:mt-4 text-[#FFF097]">and</p>
            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-2 lg:mt-4 text-[#FFF097]">
             {data.brideDetails}
            </p>

            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-8 lg:mt-16 text-[#FFF097]">
              {data.eventIntro}
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:mt-40 pb-40">
            <div
              className={`grid gap-16 lg:gap-26 lg:px-18 3xl:px-0 ${
                data?.events?.length === 1
                  ? "grid-cols-1 justify-items-center"
                  : data?.events?.length === 2
                    ? "grid-cols-2 justify-items-center"
                    : "grid-cols-1 sm:grid-cols-3"
              }`}
            >
              {(data?.events || []).map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    alt={event.venue}
                    className="lg:w-80 w-70 sm:w-76 h-auto"/>

                  <h2 className="font-eb-garamond font-medium text-[36px] md:text-3xl lg:text-[42px] mt-4 text-[#FFF097]">
                    {event.title_ceremony}
                  </h2>
                  <p className="font-eb-garamond font-medium mt-2 text-[#FFF097]">
                    
                    <span className="text-base md:text-base lg:text-[15px]">
                      {event.date}
                    </span>
                    <br />
                    <span className="text-base md:text-base lg:text-[15px]">
                     
                      {event.time}
                    </span>
                    <br />
                    <span className="text-base md:text-base lg:text-[15px] uppercase">
                      {event.venue}
                    </span>
                    <br />
                    <span className="text-base md:text-base lg:text-[15px] ">
                      {event.venue_address}
                    </span>
                    <br />
                    <span className="text-base md:text-base lg:text-[15px] ">
                      {event.theme}
                    </span>
                  </p>
                  <a href={event.link}
                    className="font-eb-garamond font-medium underline text-lg md:text-sm mt-2 text-[#FFF097]"
                    target="_blank">
                    View Directions
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.meet_christian})` }}>
        <div className="h-100 md:h-180 lg:h-325 flex md:flex-col items-start pl-2 md:pl-4 lg:pl-20 pt-18 md:pt-57 lg:pt-48">
          <div>
            <h1 className="font-parisienne-regular text-3xl md:text-5xl lg:text-7xl pt-12 md:pt-0 lg:pt-54 text-center text-[#FFFFFF]">
              {data.thankyoutitle}
            </h1>
            <h2 className="text-xs md:text-xl lg:text-3xl text-center pt-2 md:pt-4 lg:pt-8 leading-3 md:leading-6 lg:leading-10 lg:w-150 md:w-80">
              <span className="font-eb-garamond font-medium text-[#FFFFFF]">
                  {data.thankyoumessage}
              </span>
            </h2>
          </div>
        </div>
      </div>

      <CoupleMessage data={data} isOwner={isOwner} updateField={updateField}/>
      <ThingsToKnow />

      <div className="hidden md:block bg-cover bg-no-repeat" style={{backgroundImage:`url(${assets.background_couple})` }}>
        <div className="flex md:h-180 lg:h-335 3xl:h-408 lg:pt-90 md:pt-50 3xl:pt-110 justify-center">
          <img src={assets.logo} alt="logo" className="w-32 h-48 md:w-44 md:h-34 lg:w-65 lg:h-52" />
        </div>
      </div>


      <div className="md:hidden relative flex items-start justify-center">
        <img src={assets.responsive_couple} alt="background" className="w-108 h-260 object-cover"/>
      <div className="flex absolute top-[25svh] left-0 right-0 justify-center">
        <img src={assets.logo} alt="logo" className="w-32 h-26"/>
      </div>
      </div>


      <MarriageCountdown data={data} isOwner={isOwner} updateField={updateField} />
      
    </>
  );
}
