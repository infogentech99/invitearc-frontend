"use client";

import { useEffect, useRef, useState } from "react";
import { assets } from "../assets";

export default function IntroVideo({
  onFinish,
}: {
  onFinish?: () => void;
}) {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  const [started, setStarted] = useState(false);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (show) {
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "auto";
    };
  }, [show]);

  useEffect(() => {
    desktopVideoRef.current?.load();
    mobileVideoRef.current?.load();
  }, []);

  const playVideo = async () => {
    if (started) return;

    const isMobile = window.innerWidth < 768;

    const video = isMobile
      ? mobileVideoRef.current
      : desktopVideoRef.current;

    if (!video) return;

    try {
      setStarted(true);
      await video.play();
    } catch (e) {
      setStarted(false);
      console.log(e);
    }
  };

  const handleEnd = () => {
    setHide(true);

    setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 700);
  };

  if (!show) return null;

  return (
    <div
      onClick={playVideo}
      className={`fixed inset-0 z-[999999] cursor-pointer transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        width: "100vw",
        height: "100dvh",
      }}
    >
      {/* DESKTOP IMAGE */}
      {!started && (
        <img
          src={assets.hero_video_img_desktop}
          alt=""
          className="absolute inset-0 hidden md:block w-full h-full object-cover"
        />
      )}

      {/* MOBILE IMAGE */}
      {!started && (
        <img
          src={assets.hero_video_img}
          alt=""
          className="absolute inset-0 block md:hidden w-full h-full object-cover"
        />
      )}

      {/* DESKTOP VIDEO */}
      <video
        ref={desktopVideoRef}
        playsInline
        muted
        preload="auto"
        onEnded={handleEnd}
        className={`absolute inset-0 hidden md:block w-full h-full object-cover transition-opacity duration-300 ${
          started ? "opacity-100" : "opacity-0"
        }`}
        style={{
          pointerEvents: "none",
        }}
      >
        <source
          src={assets.hero_video_desktop}
          type="video/mp4"
        />
      </video>

      {/* MOBILE VIDEO */}
      <video
        ref={mobileVideoRef}
        playsInline
        muted
        preload="auto"
        onEnded={handleEnd}
        className={`absolute inset-0 block md:hidden w-full h-full object-cover transition-opacity duration-300 ${
          started ? "opacity-100" : "opacity-0"
        }`}
        style={{
          pointerEvents: "none",
        }}
      >
        <source
          src={assets.hero_video}
          type="video/mp4"
        />
      </video>
    </div>
  );
}