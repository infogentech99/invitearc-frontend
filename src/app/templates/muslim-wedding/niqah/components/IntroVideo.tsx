"use client";

import { useEffect, useRef, useState } from "react";
import {assets} from "../assets";

export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [started, setStarted] = useState(false);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  const playVideo = async () => {
    if (!videoRef.current) return;

    try {
      setStarted(true);
      await videoRef.current.play();
    } catch (e) {
      console.log(e);
    }
  };

  const handleEnd = () => {
    setHide(true);

    setTimeout(() => {
      setShow(false);
    }, 700);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] h-dvh w-full transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
         poster={assets.hero_videoimg}
        playsInline
        preload="auto"
        onEnded={handleEnd}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={assets.hero_video} type="video/mp4" />
      </video>

      {!started && (
        <button
          onClick={playVideo}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-20 h-20 md:w-24 md:h-24 rounded-full  backdrop-blur
          text-black text-4xl hover:scale-110 transition cursor-pointer"
        >
          
          <img
                    src={assets.icon2}
                    alt="icon2"
                    className="w-[300px] lg:w-[320px] h-auto mx-auto"
                  />
        </button>
      )}
    </div>
  );
}