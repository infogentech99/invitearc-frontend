"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import FallingLamps from "./components/FallingLamps";
import CoupleMessage from "./components/CoupleMessage";
import "./aura-globals.css";
import { assets } from "./assets";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src={assets.lamp}
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

const initialData = {
  groomName: "Dhiraj",
  brideName: "Ritika",
  religiousMantra: "ॐ श्री गणेशाय नम",
  blessingMessage: "With the heavenly blessings of",
  groomDetails: "S/O Savita Kapoor and Sunil Kapoor",
  brideGrandParentsName: "Shri Rajesh Kapoor  & Shrimati Sunita Kapoor ",
  brideDetails: "D/O Mrs. Shalini & Mr. Aakash Mittal,",
  eventIntro: "On the following events",
  headline: "INVITES",
  inviteLine: "you to join us in the wedding celebrations of",
  thankyoutitle: "With Love From Us",
  thankyoumessage:
    "Thank you for being part our journey. Your presence makes this celebration truly meaningful, and we look forward to sharing these cherished moments with you.",


  events: [
    {
      title_ceremony: "Mehendi",
      image: assets.mehandi,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace",
      venue_address: "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Pretty in Pink: Florals, Pastels & Pink Hues",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Shaadi",
      image: assets.Shaadi,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace",
      venue_address: "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Pretty in Pink: Florals, Pastels & Pink Hues",
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },


    {
      title_ceremony: "Reception",
      image: assets.Reception,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace",
      venue_address: "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Pretty in Pink: Florals, Pastels & Pink Hues",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },


  ],
}

export default function Home({
  data: initialTemplateData,
}) {
  const [bgImage, setBgImage] = useState(assets.background);
  const [data, setData] = useState({
    ...initialData,
    ...(initialTemplateData || {}),
    events:
      initialTemplateData?.events ||
      initialData.events,
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      ...initialTemplateData,
      events: initialTemplateData?.events || prev.events || initialData.events,
    }));
  }, [initialTemplateData]);


  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const backgroundMusicUrl = data?.backgroundMusicUrl || assets.background_song;

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
        setBgImage(assets.background);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setBgImage(assets.background);
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
      <button onClick={() => { started ? toggleMusic() : startMusic(); }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl">
        {playing ? "⏸" : "▶"}
      </button>

      {/* <audio ref={audioRef} src="/assets/background_song_inter.mp3" loop preload="auto" playsInline /> */}
      <audio
        key={backgroundMusicUrl}
        ref={audioRef}
        src={backgroundMusicUrl}
        loop
        preload="auto"
        playsInline
      />
      {/* hero section */}
      <div className="bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] bg-cover bg-top bg-no-repeat 
                      min-h-screen w-full relative overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>

        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="absolute top-10 left-8 w-40 h-40 transform rotate-12 opacity-90" />
        <FloatingLamp className="absolute top-30 left-20 w-36 h-36 transform rotate-45 opacity-80" />
        <FloatingLamp className="absolute top-50 left-40 w-32 h-32 transform rotate-30 opacity-85" />
        <FloatingLamp className="absolute top-70 left-60 w-38 h-38 transform rotate-15 opacity-80" />
        <FloatingLamp className="absolute top-90 left-80 w-34 h-34 transform rotate-25 opacity-75" />
        <FloatingLamp className="absolute top-110 left-100 w-28 h-28 transform rotate-10 opacity-85" />
        <FloatingLamp className="absolute top-130 left-120 w-36 h-36 transform rotate-35 opacity-75" />
        <FloatingLamp className="absolute top-150 left-140 w-30 h-30 transform rotate-22 opacity-85" />
        <FloatingLamp className="absolute top-170 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="absolute top-190 left-180 w-40 h-40 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-40 h-40 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-32 h-32 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-40 h-40 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-40 h-40 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />

        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="absolute top-20 right-12 w-32 h-32 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-40 right-32 w-28 h-28 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-60 right-52 w-36 h-36 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-80 right-72 w-30 h-30 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-100 right-92 w-34 h-34 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-120 right-112 w-38 h-38 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-140 right-132 w-26 h-26 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-160 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-180 right-172 w-36 h-36 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-200 right-192 w-30 h-30 transform -rotate-35 opacity-85" reverse={true} />

        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-40 h-40 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-40 h-40 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-40 h-40 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-40 h-40 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-32 h-32 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-40 h-40 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />

        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-40 h-40 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />

        {/* <FallingLamps /> */}
        <div className="pt-12 md:pt-24 3xl:pt-30 pb-24 md:pb-20 relative z-10">
          <h2 className="text-center leading-tight text-2xl md:text-6xl lg:text-[80px] pb-80 md:pb-280 lg:pb-300 3xl:pb-420 flex flex-col 
                         items-center md:gap-y-2 text-[#FFB700]" id="details-section">
            <span className="font-parisienne-regular font-normal">{data.groomName}</span>
            <span className="font-jacques-francois font-normal text-xl md:text-2xl lg:text-[38px] tracking-widest">WEDS</span>
            <span className="font-parisienne-regular font-normal">{data.brideName}</span>
          </h2>
          <div className="flex flex-col items-center text-center gap-6 mt-0 pt-150 lg:pt-150">
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl text-center text-[#FFB700]">
              {data.religiousMantra}
            </h2>
            {/* <img src={assets.ganesha} alt="ganesh-image" className="w-28 h-auto md:w-40 lg:w-41 lg:h-53"/> */}
            <img
              src={data?.religiousSign || assets.ganesha}
              alt="idol" width={100} height={100}
              className="w-30 h-39 md:w-40 md:h-50 lg:w-50 lg:h-65 object-cover" />


            <h2 className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl text-[#FFB700]">
              {data.blessingMessage} <br /> {data.brideGrandParentsName}
            </h2>

          </div>

          <div className="mt-8 lg:mt-12 text-center">
            <h2 className="font-eb-garamond font-medium text-xl md:text-3xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider text-[#FFB700]">
              {data.headline}
            </h2>
            <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl mt-6 text-[#FFB700]">
              {data.inviteLine}
            </p>
            <h2 className="font-eb-garamond font-medium text-center mt-4 lg:mt-14 text-5xl md:text-6xl lg:text-[100px] leading-tight text-[#FFB700]">
              {data.groomName}
            </h2>
            <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl mt-2 text-[#FFB700]">
              {data.groomDetails}
            </p>
            <h2 className="font-eb-garamond font-medium text-center mt-4 text-5xl md:text-6xl lg:text-[100px] leading-tight text-[#FFB700]">
              <span className="font-eb-garamond font-medium text-center mt-4 lg:mt-10 text-5xl md:text-6xl lg:text-[100px] leading-tight text-[#FFB700]">
                &
              </span> <br />
              {data.brideName}
            </h2>
            <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl mt-2 text-[#FFB700]">
              {data.brideDetails}
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-3xl mt-8 text-[#FFB700]">
              {data.eventIntro}
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:mt-40 mb-30" id="events-section">
            <div
              className={`grid gap-16 lg:gap-26 lg:px-18 3xl:px-0 ${data?.events?.length === 1
                ? "grid-cols-1 justify-items-center"
                : data?.events?.length === 2
                  ? "grid-cols-2 justify-items-center"
                  : "grid-cols-1 sm:grid-cols-3"
                }`}
            >
              {(data?.events || []).map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img src={event.image} alt={event.venue} className="w-70 md:w-76 lg:w-80 h-auto" />
                  <h2 className="font-jacques-francois font-normal text-3xl md:text-2xl lg:text-[42px] mt-4 text-[#FFB700]">
                    {event.title_ceremony}
                  </h2>
                  <p className="font-jacques-francois font-normal mt-2 text-[#FFB700]">
                    <span className="text-base md:text-base lg:text-[15px]">{event.date}</span>  <br />
                    <span className="text-base md:text-base lg:text-[15px]">  {event.time} </span> <br />
                    <span className="text-base md:text-base lg:text-[15px] uppercase"> {event.venue}</span>
                    <span className="text-sm md:text-base lg:text-[20px]">{event.venue_address}</span> <br />
                  </p>
                  <a href={event.link} className="font-jacques-francois font-normal underline text-lg md:text-sm mt-2 text-[#FFB700]" target="_blank">
                    View Directions
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat flex flex-col items-center md:pt-30 pt-10" style={{ backgroundImage: `url(${assets.bg_two})` }} id="couple-section">
        <div className="h-84 md:h-160 lg:h-285 3xl:h-360  md:w-200 w-80">
          <h2 className="font-parisienne-regular font-normal text-[26px] md:text-4xl lg:text-7xl text-center pt-4 md:pt-12 lg:pt-30 text-[#FFB700]">
            {data.thankyoutitle}
          </h2>
          <h2 className="font-eb-garamond font-medium text-xs md:text-base lg:text-3xl text-center pt-0 md:pt-2 lg:pt-4 leading-4 md:leading-6 lg:leading-10 text-[#FFB700]">
            {data.thankyoumessage}
          </h2>
        </div>
      </div>
      <CoupleMessage data={data} />


      <div
        className="hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.bg_four})` }}
      >
        <div className="relative flex justify-center md:h-175 lg:h-237.5 xl:h-275 2xl:h-325 3xl:h-[1600px] md:pt-48 lg:pt-72 3xl:pt-96">
          
      
       <img
                  src={data?.Logo || assets.couple_logo}
                  alt="logo"
                  width={250}
                  height={300}
                  className="absolute w-34 h-30 top-40 md:w-34 md:h-30 md:top-42 lg:w-50 lg:h-44 lg:top-86"
                />
                 </div>
      </div>


      <div className="md:hidden relative flex items-start justify-center">
        <img
          src={assets.respo_four}
          alt="background"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-[25svh] left-0 right-0 flex justify-center">
          <img src={data?.Logo || assets.couple_logo} alt="logo" width={250} height={300} className="absolute w-32 h-26 top-4" />
        </div>
      </div>
    </>
  );
}
