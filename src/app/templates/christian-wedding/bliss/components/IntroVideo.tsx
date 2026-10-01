"use client";

import { useEffect, useRef, useState } from "react";
import { assets } from "../assets";

export default function IntroVideo({
  onFinish,
}: {
  onFinish?: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  const playVideo = async () => {
    if (!videoRef.current || started) return;

    try {
      setStarted(true);
      await videoRef.current.play();
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
        hide
          ? "opacity-0 pointer-events-none"
          : "opacity-100"
      }`}
      style={{
        width: "100vw",
        height: "100%",
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

      {/* VIDEO */}
      <video
        ref={videoRef}
        playsInline
        webkit-playsinline="true"
        muted
        preload="auto"
        onEnded={handleEnd}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          started ? "opacity-100" : "opacity-0"
        }`}
        style={{
          pointerEvents: "none",
        }}
      >
        <source src={assets.hero_video} type="video/mp4" />
      </video>
    </div>
  );
}