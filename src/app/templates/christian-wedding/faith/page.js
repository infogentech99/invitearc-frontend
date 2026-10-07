"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import OurStory from "./components/OurStory";
import Countdown from "./components/Countdown";
import Memories from "./components/Memories";
import {assets} from "./assets";
import "./faith-globals.css";


const initialData = {
   groomName: "Daniel",
  brideName: "Grace",
  noteText: " A NOTE FOR YOU",
  noteTitle:" Your love, prayers, and presence mean more to us than words can express. Join us as we stand before God, exchange our vows, and begin our lifelong journey together in faith and love.",
  noteDes:"With grateful hearts and God's abundant grace, we warmly invite you to witness our Holy Matrimony and celebrate this joyful beginning with our families.",
storyText:"OUR STORY",
storyTitle:"Every Love Story Begins With A Beautiful Hello",
storyDes:"It began in the quiet corners of a bustling city, where two paths unexpectedly crossed. What started as a simple conversation over coffee blossomed into a journey of shared dreams, laughter, and an unbreakable bond that grew stronger with every sunset.",
storyDes2:"From traveling across continents to finding comfort in the smallest everyday moments, we discovered that home wasn't a place, but a person. Our journey has been defined by a deep respect for our heritage and an excitement for the future we are building together.",
coupleLetter:"D & G",
journeyTitle1:"First Met (2018)",
journeyDes1:"A chance encounter that changed everything, sparking a flame that never dimmed.",
journeyTitle2:"Fell in Love (2019)",
journeyDes2:"Discovering a lifetime in a single moment, realizing we were meant to be.",
journeyTitle3:"Forever Begins (2027)",
journeyDes3:"Two souls, one journey. Hand in hand, we step into our beautiful forever.",
marriageCountdownTitle:"Counting Down To Forever",
marriageCountdownDescription:"Every second brings us closer to the moment we begin our forever together.",


events : [
    {
      image: assets.enagement_icon,
      title_ceremony: "Engagement Celebration",
      date: "October 12th, 2027",
      time: "11:00 AM — 3:00 PM",
      venue: "The Rose Garden, Fairmont Palace",
      description:
        "An afternoon of henna, folk music, and vibrant colors amidst the blooming roses.",
          link: "https://maps.app.goo.gl/TVyrP9mLFCpr4VXA9",
    },
    {
      image: assets.container,
      title_ceremony: "Rehearsal Dinner",
      date: "October 14th, 2027",
      time: "11:00 AM — 3:00 PM",
      venue: "Grand Ballroom, Fairmont Palace",
      description:
        "A night of dazzling performances, laughter, and dance as we celebrate the union of two families.",
          link: "https://maps.app.goo.gl/TVyrP9mLFCpr4VXA9",
    },

    {
      image: assets.container2,
      title_ceremony: "Wedding Ceremony",
      date: "October 16th, 2027",
      time: "11:00 AM — 3:00 PM",
      venue: "The Rose Garden, Fairmont Palace",
      description:
        "Join us by the serene waters as we exchange our vows and begin our forever journey together.",
          link: "https://maps.app.goo.gl/TVyrP9mLFCpr4VXA9",
    },

    {
      image: assets.container3,
      title_ceremony: "Evening Reception",
      date: "October 17th, 2027",
      time: "11:00 AM — 3:00 PM",
      venue: "Grand Ballroom, Fairmont Palace",
      description:
        "A formal gala dinner to toast to our love, accompanied by fine dining and exquisite jazz.",
          link: "https://maps.app.goo.gl/TVyrP9mLFCpr4VXA9",
    },
  ],

  memoryText:"OUR MEMORIES",
  memoryTitle:"Captured Moments",
  memoryDesc:"A collection of moments that quietly tell the story of our journey together.",
  destinationText:"OUR DESTINATION",
  destinationTitle:"Lake Como, Italy",
  destinationDesc:"Where our forever begins among timeless beauty and tranquil waters.",
  guestText:"BEFORE YOU ARRIVE",
  guestTitle:"Guest Information",
  guestDesc:"Everything you need for a seamless and memorable celebration.",
  dressTitle:"Dress Code",
  dressDetails:"Traditional garden formal attire in soft neutral and pastel tones. We recommend comfortable footwear for garden pathways.",
  accommodationTitle:"Accommodation",
  accommodationDetails:"Luxury accommodation has been arranged for all guests near the venue. Detailed room assignments and check-in instructions will be sent via email.",
  diningTitle:"Dining Experience",
  diningDetails:"Enjoy a carefully curated dining experience featuring local cuisine, fine wines, and handcrafted desserts. Please inform us of any dietary restrictions.",
  weddingTitle:"Wedding Etiquette",
  weddingDetails:"Please arrive 20 minutes before the ceremony and kindly keep your phones on silent during the vows. Let us be fully present in this moment together.",


  
}


export default function Home({ data: initialTemplateData, isOwner = false }) {
   const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
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
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button> 

 <audio key={backgroundMusicUrl} ref={audioRef} src={backgroundMusicUrl} loop preload="auto" playsInline />

      {/* hero section */}

      <div className="relative w-full overflow-hidden">
        <img
          src={assets.hero_image}
          alt="Wedding couple"
          className="block w-full h-auto"
        />

        <div className="absolute inset-x-0 top-10 md:top-20 lg:top-50 flex flex-col items-center text-center">
          <h2 className="md:mt-30 lg:mt-50 3xl:mt-100 mt-16 flex items-center justify-center gap-4 md:gap-6 text-[#727272] text-4xl md:text-5xl lg:text-[80px]">
            <span className="font-parisienne-regular italic">{data.groomName}</span>
            <span className="font-bodoni-moda text-base md:text-2xl lg:text-[38px] italic">
              Weds
            </span>
            <span className="font-parisienne-regular italic">{data.brideName}</span>
          </h2>
        </div>
      </div>
      <OurStory data={data} isOwner={isOwner} updateField={updateField}/>
      <div className="3xl:px-20 md:px-10 px-4">
        <Countdown data={data} isOwner={isOwner} updateField={updateField}/>
      </div>
      <Memories data={data} isOwner={isOwner} updateField={updateField}/>
     
    
    </>
  );
}
