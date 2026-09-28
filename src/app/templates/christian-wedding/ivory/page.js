"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import OurStory from "./components/OurStory";
import Reception from "./components/Reception";
import Celebration from "./components/Celebration";
import { assets } from "./assets";
import "./ivory-globals.css";
import IntroVideo from "./components/IntroVideo";

const initialData = {
  togetherName: "TOGETHER WITH THEIR FAMILIES",
  groomName: "Aurelia",
  brideName: "Julian",
  ceremonyInfo: "CEREMONY INFO",
  groomParentTitle: "Parents of the Groom",
  groomParentSurname: "Mr. & Mrs.",
  groomDetails: "Edward Julian",
  brideParentTitle: "Parents of the Bride",
  birdeParentSurname: "Mr. & Mrs.",
  brideDetails: "Arthur Aurelia",
  inviteLine:
    "together with their families, request the honor of your presence at the marriage of",
  venue: "Villa Ephrussi de Rothschild",
  venueLocation: "Saint-Jean-Cap-Ferrat, France",
  eventDay: "Saturday",
  eventTime: "at five o'clock",
  eventMonth: "July 12th",
  eventYear: "Twenty Twenty-Five",
  storyTitle: "OUR STORY",
  storyDescription:
    "From the sun-drenched cobblestones of Florence to the quiet countryside surrounding the Côte d'Azur, our journey has been defined by shared discovery and timeless romance. What began as a chance meeting at a small independent bookstore in Paris blossomed into a lifetime of wandering together.",
  loveQuote: "In all the world, there is no heart for me like yours.",
  receptionInfo: "Reception Info",
  receptionMessage:
    "Please join us for an evening of dinner and dancing as we celebrate our new life together.",
  receptionTime: "18:30",
  receptionDay: "SATURDAY",
  receptionDate: "10",
  receptionMonth: "OCTOBER",
  receptionYear: "2026",
  guestTitle: "Guests Arrive",
  guestTime: "18:00 PM",
  receptionTitle: "Reception Begins",
  venueName: "Schloss Elaria ",
  venueLocation: "Retreat Kamin-Terrasse, Bavaria ",
  locationTitle:"Location",
  location:"France",
  ceremonyTitle:"Ceremony",
  ceremony:"18:00 PM",
  dressTitle:"Dress Code",
  dress:"Formal",
  parkingTitle:"Parking",
  parking:"Available",
  eventDayJourney:"Wedding Day Journey",
};

export default function Home({ data: initialTemplateData, isOwner = false }) {
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
    } catch {}
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
      } catch {}
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
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio
        key={backgroundMusicUrl}
        ref={audioRef}
        src={backgroundMusicUrl}
        loop
        preload="auto"
        playsInline
      />
<IntroVideo onFinish={() => setIntroDone(true)} />
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
            {data.togetherName}
          </p>

          <h2 className="md:mt-12 mt-6 flex items-center gap-2 md:gap-6 text-[#685D4A] text-4xl md:text-5xl lg:text-[80px]">
            <span className="font-bonheur-royale italic">{data.groomName}</span>
            <span className="font-bodoni-moda text-base md:text-2xl lg:text-[38px] italic">
              &
            </span>
            <span className="font-bonheur-royale italic">{data.brideName}</span>
          </h2>
        </div>
      </div>
      <OurStory data={data} isOwner={isOwner} updateField={updateField} />
      <Reception data={data} isOwner={isOwner} updateField={updateField} />
      <Celebration data={data} isOwner={isOwner} updateField={updateField} />
    </>
  );
}
