"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "./components/RoseHeroTemp";
import MarriageCountdown from "./components/MarriageCountdown";
import CoupleEvents from "./components/CoupleEvents";
import CoupleMessage from "./components/CoupleMessage";
import { assets } from "./assets"



const initialData = {
  welcomeTitle: "WELCOME TO THE WEDDING OF",
  groomName: "ROSHAN",
  brideName: "TANVI",
  weddingDate: "19 NOVEMBER 2026",
  countdownTitle: "COUNTDOWN TO OUR",

  events: [
    {
      title_ceremony: "TILAK",
      description: (
        <>
          BLESSING HAPPINESS <br />
          TO THE GROOM.
        </>
      ),
      date: "17",
      month: "NOV",
      time: "4 PM Onwards",
      image: assets.tilak,
      alt: "tilak",
      imageClass: "w-30 h-32 md:w-42 md:h-44 lg:w-61 lg:h-65",
    },
    {
      title_ceremony: "SANGEET",
      description: (
        <>
          DANCE TO THE BEAT <br />
          OF YOUR DREAMS.
        </>
      ),
      date: "18",
      month: "NOV",
      time: "6 PM Onwards",
      image: assets.sangeet,
      alt: "sangeet",
      imageClass: "w-35 h-33 md:w-46 md:h-44 lg:w-69 lg:h-65",
    },
   
    {
      title_ceremony: "WEDDING",
      description: (
        <>
          READY TO TIE <br />
          THE KNOT.
        </>
      ),
      date: "21",
      month: "NOV",
      time: "7:15 PM Onwards",
      image: assets.wedding,
      alt: "wedding",
      imageClass: "w-32 h-33 md:w-42 md:h-44 lg:w-63 lg:h-65",
    },
    {
      title_ceremony: "RECEPTION",
      description: (
        <>
          CELEBRATING LOVE, LAUGHTER <br />
          & NEW BEGINNINGS.
        </>
      ),
      date: "22",
      month: "NOV",
      time: "8:00 PM Onwards",
      image: assets.reception,
      alt: "reception",
      imageClass: "w-27 h-33 md:w-34 md:h-44 lg:w-53 lg:h-65",
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

  const backgroundMusicUrl = data?.backgroundMusicUrl || assets.background_song;
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
          setBgImage(assets.background);
        } else if (window.innerWidth >= 768) {
          // Tablet/Desktop
          setBgImage(assets.respo_bg);
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
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl">
        {playing ? "⏸" : "▶"}
      </button>

      {/* <audio ref={audioRef} src="/assets/background_song.mp3" loop preload="auto" playsInline /> */}
      <audio
        key={backgroundMusicUrl}
        ref={audioRef}
        src={backgroundMusicUrl}
        loop
        preload="auto"
        playsInline
      />
      <div
        className="
    bg-[url('/assets/respo_bg.png')] md:bg-[url('/assets/background.webp')] bg-[length:100%_auto]  md:bg-cover bg-top bg-no-repeat w-full relative 
     overflow-hidden md:min-h-screen" style={{ backgroundImage: `url(${bgImage})`, }} >
        <RoseHeroTemp />

        <div className=" flex flex-col items-center pt-15 md:pt-22 lg:pt-24 3xl:pt-20  relative z-10" id="details-section">
          <h2 className="flex flex-col text-[#69301B] text-center leading-tight justify-center items-center">
            <span className="font-eb-garamond font-normal text-xs md:text-base lg:text-[22px] bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
              {data.welcomeTitle}
            </span>
            <br className="hidden md:block" />
            <div className="flex gap-2 md:gap-3 mt-5 md:mt-0">
              <span className="font-eb-garamond font-medium text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">{data.brideName}</span>
              <span className="font-eb-garamond font-medium text-base md:text-lg lg:text-2xl pt-3 lg:pt-4 bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">Weds</span>
              <span className="font-eb-garamond font-medium text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">{data.groomName}</span>
            </div>
            <br className="hidden md:block" />
            <div className="flex gap-20">
              <hr className="w-25 lg:w-50 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
              <hr className="w-25 lg:w-50 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
            </div>
            <br />
            <span className="font-eb-garamond font-normal text-xs md:text-base lg:text-[22px] bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">{data.weddingDate}</span>
          </h2>
          <img src={assets.one_img} alt="weather" className="w-66 h-49 md:w-132 md:h-98 lg:w-197 lg:h-148 mt-10 md:mt-70 lg:mt-10 3xl:mt-50" />

        </div>
      </div>

      <MarriageCountdown data={data} />
      <CoupleEvents data={data} />
      <CoupleMessage data={data} />
    </>
  );
}
