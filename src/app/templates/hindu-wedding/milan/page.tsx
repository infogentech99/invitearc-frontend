"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "./components/RoseHeroTemp";
import CelebrateUs from "./components/CelebrateUs";
import MarriageCountdown from "./components/MarriageCountdown";
import CoupleEvents from "./components/CoupleEvents";
import CoupleMessage from "./components/CoupleMessage";
import CoupleFooter from "./components/CoupleFooter";
import "./milan-globals.css";
import {assets} from "./assets";


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
      src="/flower_petals.webp"
      alt="petal"
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

export default function Home() {

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

  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl">
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song.mp3" loop preload="auto" playsInline />

      {/* hero section */}
      <div className="bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] bg-size-[100%_auto] 
                      md:bg-cover bg-top bg-no-repeat w-full relative overflow-hidden md:min-h-screen" style={{ backgroundImage: `url(${assets.background})`, }}>
        <RoseHeroTemp />

        <div className="relative flex flex-col items-center pt-15 md:pt-22 lg:pt-50 3xl:pt-90 pb-5 z-10 h-145 md:h-100 lg:h-510 3xl:h-650">
          <h2 className="flex flex-col text-[#69301B] text-center justify-center items-center">
            <span className="font-eb-garamond font-semibold text-sm md:text-xl lg:text-[36px] text-[#1051A5]">
              JOIN US AS WE CELEBRATE <br /> A BEAUTIFUL JOURNEY OF LOVE <br /> THAT LASTS FOREVER
            </span>
            <br className="hidden md:block" />
          <div className="flex gap-2 md:gap-3 mt-5 md:mt-0"> 
            <span className="font-eb-garamond font-medium text-3xl md:text-5xl lg:text-[82px] bg-linear-to-r from-[#1051A5] via-[#1C6ACE] to-[#1051A5] bg-clip-text text-transparent">TANVI</span>
            <span className="font-eb-garamond font-medium text-xl md:text-3xl lg:text-[62px] pt-2 md:pt-3 bg-linear-to-r from-[#1051A5] via-[#1C6ACE] to-[#1051A5] bg-clip-text text-transparent">Weds</span>
            <span className="font-eb-garamond font-medium text-3xl md:text-5xl lg:text-[82px] bg-linear-to-r from-[#1051A5] via-[#1C6ACE] to-[#1051A5] bg-clip-text text-transparent">ROSHAN</span>
          </div>
            <br className="hidden md:block" />
          </h2>          
        </div>
      </div>

      <CelebrateUs />
      
      <MarriageCountdown />

      <CoupleEvents /> 

      <CoupleMessage />

      <CoupleFooter />

    </>
  );
}
