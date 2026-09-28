"use client";

import { useEffect, useRef, useState } from "react";
import {assets} from "../assets";
export default function IntroVideo({ onFinish }: { onFinish?: () => void }) {
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
    // silently preload video in background so click-to-play feels instant
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
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ width: "100vw", height: "100%" }}
    >
      <video
        ref={videoRef}
        poster={assets.hero_video_img}
        playsInline
        webkit-playsinline="true"
        muted
        preload="auto"
        onEnded={handleEnd}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          pointerEvents: "none",
        }}
      >
        <source src={assets.hero_video} type="video/mp4" />
      </video>
    </div>
  );
}