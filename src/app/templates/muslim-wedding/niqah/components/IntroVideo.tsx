"use client";

import { useEffect, useRef, useState } from "react";
import { assets } from "../assets";

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
      onClick={!started ? playVideo : undefined}
      className={`fixed inset-0 z-[999999] h-dvh w-full cursor-pointer transition-opacity duration-700 ${
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
    </div>
  );
}