"use client";
import Image from "next/image";
import Reception from "./components/Reception";
import MarriageCountdown from "./components/MarriageCountdown";
import { assets } from "./assets";
import { useEffect, useState, useRef, useMemo } from "react";
import "./agape-globals.css";
const slides = [
  {
    image: assets.hero_image,
    textColor: "#685D4A",
  },
  {
    image: assets.hero_image2,
    textColor: "#FFD363",
  },
];

const initialData = {
  groomName: "Daniel",
  brideName: "Grace",
  marriageCountdownTitle: " Until We Say I Do",
  welcometitle: "Welcome, Our Loved Ones",
  storyTitle: "Our Story Our Forever",
  storyDescription:
    "From our first coffee in Mumbai to sunset strolls along Marine Drive, every moment has brought us closer.What began as a simple connection turned into a love story filled with laughter, little adventures, and unforgettable memories. Now, we’re ready to begin our most beautiful chapter yet — together, forever.",
  littleSurpriseTitle: "A LITTLE SURPRISE",
  noteTitle: "A Note from Our Hearts",
  noteDescription:
    "There’s a little something special waiting for you. Scratch to uncover a heartfelt message from us.",
  scratchEventDate: " 4th December 2026",
  celebrationTitle: "THE CELEBRATIONS",
  weddingTitle: "Our Wedding Events",
  weddingDescription: "Three beautiful moments, one unforgettable story.",
  formalText: "Formal attire requested for all proceedings",
  guestAccomodations: "TRANSFERS & GUEST ACCOMMODATIONS PROVIDED",
  momentTitle: "THE MOMENTS WE KEEP",
  momentSubTitle: "Our Story in Frames",
  momentDescription:
    "A quiet celebration of love, captured across timeless chapters.",
  bookWeddingText: "Our Wedding Memories",
  artOfUsText: "The Art of Us",
  artOfUsDescription: "A lifetime in little moments",
  bookButtonText: "TAP TO EXPLORE",
  bookWeddingDateVenue: "SEPTEMBER 2027 • LAKE COMO",

 events: [
    {
     
      title_ceremony: "Welcome Dinner",
      date: "18 June 2027",
      time: "7:00 PM",
      venue: "The Orangery, London, England",
      image: assets.img4,
    },
    {
    
      title_ceremony: "Garden Ceremony",
      date: "19 June 2027",
      time: "11:00 AM",
      venue: "Cliveden House, Berkshire, England",
      image: assets.img1,
    },
    {
      
      title_ceremony: "Wedding Breakfast",
      date: "19 June 2027",
      time: "2:00 PM",
      venue: "Blenheim Palace, Oxfordshire, England",
      image: assets.img2,
    },
    {
     
      title_ceremony: "Evening Ball",
      date: "19 June 2027",
      time: "7:30 PM",
      venue: "The Savoy, London, England",
      image: assets.img3,
    },
  ],
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

  const [currentImage, setCurrentImage] = useState(0);

  // Only one-time automatic image change
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage(1);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Manual image change on button click
  const nextImage = () => {
    setCurrentImage((prev) => (prev === 0 ? 1 : 0));
  };

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

      {/* hero section */}

      <div className="relative w-full overflow-hidden">
        <img
          src={slides[currentImage].image}
          alt="Wedding couple"
          className="block w-full h-auto"
        />

        <div className="absolute inset-x-0 top-10 md:top-20 lg:top-70 flex flex-col items-center text-center">
          <h2
            style={{ color: slides[currentImage].textColor }}
            className="md:mt-0 mt-6 flex flex-col items-center md:gap-6 text-4xl md:text-5xl lg:text-[80px]"
          >
            <span className="parisienne-regular">{data.groomName}</span>

            <span className="font-bodoni-moda text-base md:text-2xl lg:text-[38px] italic">
              &
            </span>

            <span className="parisienne-regular">{data.brideName}</span>
          </h2>
        </div>

        <button
          onClick={nextImage}
          className="absolute top-5 right-1 md:top-8 md:right-10 z-10 cursor-pointer"
        >
          <img
            src={assets.button}
            alt="Next"
            className="md:w-full w-2/3 h-auto"
          />
        </button>
      </div>

      <div className="relative w-full overflow-hidden">
        <img
          src={assets.light_bg}
          alt="Wedding couple"
          className="hidden md:block w-full h-auto"
        />
        <img
          src={assets.light_bg_mobile}
          alt="Wedding couple"
          className="md:hidden block w-full h-auto"
        />
        <div className="absolute inset-x-0 top-30 md:top-20 lg:top-40 3xl:top-100  flex flex-col items-center text-center">
          <img
           
             src={data?.Logo || assets.logo}
            alt="icon" 
            className="md:w-45 lg:w-60 w-30 object-contain mb-5"
          />

          <MarriageCountdown
            data={data}
            isOwner={isOwner}
            updateField={updateField}
          />
        </div>
      </div>

      <Reception data={data} isOwner={isOwner} updateField={updateField} />
    </>
  );
}
