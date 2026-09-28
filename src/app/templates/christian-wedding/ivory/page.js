'use client';
import Image from "next/image";
import OurStory from "./components/OurStory";
import Reception from "./components/Reception";
import Celebration from "./components/Celebration";
import {assets} from "./assets";
import "./ivory-globals.css";
export default function Home() {
  return (
   <>
      {/* <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button> */}

      {/* <audio
        ref={audioRef}
        src="/assets/song.mp3"
        loop
        preload="auto"
        playsInline
      /> */}

      {/* hero section */}

<div className="relative w-full overflow-hidden">

  <img
    src={assets.hero_image}
    alt="Wedding couple"
    className="block w-full h-auto"
  />

  <div className="absolute inset-x-0 top-10 md:top-20 lg:top-50 flex flex-col items-center text-center">
    
    <img
      src={assets.icon}
      alt="icon"
      className="md:w-60 md:h-10 w-30 object-contain mb-5"
    />

    <p className="text-[#685D4A] font-semibold tracking-widest text-[12px] md:text-[14px]">
      TOGETHER WITH THEIR FAMILIES
    </p>

    <h2 className="md:mt-12 mt-6 flex items-center gap-2 md:gap-6 text-[#685D4A] text-4xl md:text-5xl lg:text-[80px]">
      <span className="font-bonheur-royale italic">Aurelia</span>
      <span className="font-bodoni-moda text-base md:text-2xl lg:text-[38px] italic">&</span>
      <span className="font-bonheur-royale italic">Julian</span>
    </h2>

  </div>
</div>
<OurStory/>
<Reception/>
<Celebration/>
    </>
  );
}
