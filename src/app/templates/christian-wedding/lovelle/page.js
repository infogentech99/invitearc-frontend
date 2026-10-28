"use client";

import { useEffect, useState, useRef, useMemo } from "react";

import Celebration from "./components/Celebration";
import Memories from "./components/Memories";
import { assets } from "./assets";
import "./lovelle-globals.css";

const initialData = {
  groomName: "Daniel",
  brideName: "Grace",
  welcomeTitle: "Welcome",
  welcomeSubTitle: "TO OUR WEDDING",
  welcomeDescription:
    " We have been looking forward to celebrating our marriage with you, surrounded by those we love.",
  marriageCountdownTitle: "Countdown",
  marriageCountdownDescription:
    "Soon, the wait will turn into memories as we gather together to celebrate the beginning of our forever.",
  togetherTitle: "Together With Their Families",
  groomParentsTitle: "Son Of",
  groomFatherName: "Mr. Michael Anderson",
  groomMotherName: "Mrs. Elizabeth Anderson",
  brideParentsTitle: "Daughter Of",
  brideFatherName: "Mr. William Carter",
  brideMotherName: "Mrs. Sophia Carter",
  inviteText: "invite you to celebrate their marriage",
  eventDay: "Saturday",
  eventDate: "12 June 2027",
  eventTime: "At 6:00 PM Onwards",
  eventVenue: "VILLA D’ESTE",
  eventVenueAddress: "Lake Como, Italy",
  joinTitle: "JOIN US FOR OUR",
  eventTitle: "Wedding Celebration",
  eventDescription: "A DAY FILLED WITH LOVE, LAUGHTER AND TOGETHERNESS",

  attireguide: "Attire Guide",
  gardenFormal: "GARDEN FORMAL",
  storyTitle: "Our Story",
  storyDescription:
    "Somewhere between a simple hello and countless moments shared together, we found a love that felt like home. From cherished conversations and quiet walks to laughter, dreams, and memories we never want to forget, every moment has brought us closer. Now, with grateful hearts and endless excitement, we’re ready to begin our most beautiful chapter yet together.",
  momentTitle: "Moments of the Day",

  functionTime1: "4:45 PM",
  functionName1: "ARRIVAL OF GUESTS AT THE ORANGERY",
  functionTime2: "5:00 PM",
  functionName2: "THE CEREMONY BEGINS",
  functionTime3: "6:00 PM",
  functionName3: "CHEERS & CELEBRATIONS",
  functionTime4: "7:00 PM",
  functionName4: "CELEBRATION & DANCE",

  functionTime5: "8:00 PM",
  functionName5: "A Fond Farewell",
  weddingCeremony: "Our wedding ceremony will be held in the beautiful Orangery of Château de Belvent, followed by an intimate apéritif in the rose garden. As the evening unfolds, we’ll gather for dinner and dancing in the charming old wine cellar, celebrating love, laughter, and the beginning of a beautiful new chapter together.",
  dayToUnwind: "A Day to Unwind",
  quietDayTogether: "A QUIET DAY TOGETHER",
  venueLocationName: "Le Comptoir des Halles",
  venueSubtitle: "Garden Terrace",
  celebrationDate: "SUNDAY · 13 JUNE 2027",
  celebrationTime: "From Twelve in the Afternoon",
  addressVenueDetails: "4 Rue Monge, Beaune",
  addressVenueCountry: "Bourgogne, France",
  notetoOurGuests: "We’ll be gathering on the garden terrace of Le Comptoir des Halles in Beaune from 12 PM on Sunday, 13 June 2027. Join us for a relaxed afternoon of delicious food, fine wine, warm conversations, and fond memories of the celebration. We’d be delighted to have you with us, and children are warmly welcome.",
  giftsGoodWishes: "Gifts & Good Wishes",
  giftMessage: "A collection of moments that quietly tell the story of our journey together.",


    events : [
    {
      image: assets.vector,
      title_ceremony: "CEREMONY",
      time: "5:00 PM",
      venue: "The Orangery Gardens",
    },

    {
      image: assets.vector2,
      title_ceremony: "RECEPTION",
      time: "7:00 PM",
      venue: "The Historic Wine Cellar & Terrace",
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

  const targetDate = data?.marriageCountdownDate || "2026-12-21";
  const TARGET_DATE = new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft({ days, hours, minutes });
    };

    updateCountdown(); // first run
    const interval = setInterval(updateCountdown, 60000); // every minute

    return () => clearInterval(interval);
  }, [targetDate]);




  const audioRef = useRef(null);
    const [started, setStarted] = useState(false);
    const [playing, setPlaying] = useState(false);
  
  
      const backgroundMusicUrl = data?.backgroundMusicUrl || assets.background_song;
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


      {/* hero section */}

      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundImage: `url(${assets.main_bg})` }}
      >
        <img
          src={assets.hero_image}
          alt="Wedding couple"
          className="block w-full h-auto"
        />

        <div className="absolute inset-x-0 top-0 md:top-10 lg:top-30 3xl:top-50 flex flex-col items-center text-center">
          <h2 className=" mt-6 lg:mt-16 flex flex-col items-center justify-center text-[#7D4E4E] text-2xl md:text-5xl lg:text-[80px]">
            <span className="font-parisienne-regular italic">
              {data.groomName}
            </span>

            <span className="font-bodoni-moda text-base md:text-2xl lg:text-[38px] italic">
              Weds
            </span>

            <span className="font-parisienne-regular italic">
              {data.brideName}
            </span>
          </h2>
        </div>

        <div className=" top-10 md:top-20  flex flex-col items-center text-center md:mt-40 lg:mt-70 3xl:mt-90 mt-30">
          <p className="text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond">
            {data.welcomeTitle}
          </p>

          <p className="text-[#7D4E4EE5] text-xl md:text-2xl lg:text-3xl 3xl:text-5xl px-12 max-w-200 font-cormorant-garamond mt-2 md:mt-6">
            {data.welcomeSubTitle}
          </p>

          <img
            src={assets.icon}
            alt="icon"
            className="md:w-1/8 w-1/4 md:mt-8 mt-4"
          />

          <p className="text-[#2E382E] text-[14px] md:text-[20px] lg:text-[24px] 3xl:text-2xl px-12 max-w-200 mt-7 font-cormorant-garamond ">
            {data.welcomeDescription}
          </p>

          <img
            src={assets.story_image}
            alt="icon"
            className=" object-contain mb-5 mt-12"
          />

          <div className="flex flex-col items-center justify-center lg:mt-50 3xl:mt-60 md:mt-40 md:mb-20 mb-12 mt-18">
            <img src={assets.icon2} alt="icon" className="md:w-1/8 w-1/6" />
            <p className="text-[#7D4E4E] tracking-wider text-4xl md:text-5xl 3xl:text-7xl font-cormorant-garamond md:mt-6 mt-3">
              {data.marriageCountdownTitle}
            </p>
          </div>

          <div
            className="bg-cover bg-no-repeat md:w-180 md:h-70 lg:w-230 lg:h-88 w-90  h-35 md:mb-30 mb-16 object-contain "
            style={{ backgroundImage: `url(${assets.countdown_bg})` }}
          >
            <div className="flex md:gap-45 lg:gap-58 3xl:gap-54 gap-19 justify-center items-center mt-10 md:mt-24 lg:mt-32 3xl:mt-32 md:ml-5 lg:ml-0">
              <div className="">
                <h2 className="text-[28px] md:text-5xl lg:text-[60px] 3xl:text-7xl text-center text-[#2E382E] font-cormorant-garamond">
                  {timeLeft.days}
                </h2>
                <h2 className="text-[10px] md:text-[15px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
                  Days
                </h2>
              </div>
              <div className="">
                <h2 className="text-[28px] md:text-5xl lg:text-[60px] 3xl:text-7xl text-center text-[#2E382E] font-cormorant-garamond">
                  {timeLeft.hours}
                </h2>
                <h2 className="text-[10px] md:text-[15px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
                  Hours
                </h2>
              </div>
              <div className="">
                <h2 className="text-[28px] md:text-5xl lg:text-[60px] 3xl:text-7xl text-center text-[#2E382E] font-cormorant-garamond">
                  {timeLeft.minutes}
                </h2>
                <h2 className="text-[10px] md:text-[15px] lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
                  Minutes
                </h2>
              </div>
              {/* <div className="">
                <h2 className="text-[20px] md:text-4xl lg:text-[52px] text-center text-[#2E382E] font-cormorant-garamond">
                  {timeLeft.seconds}
                </h2>
                <h2 className="text-[10px] md:text-2xl lg:text-[15px] text-center text-black font-cormorant-garamond uppercase">
                  Seconds
                </h2>
              </div> */}
            </div>
          </div>
          <img
            src={assets.icon2}
            alt="icon"
            className="lg:w-1/14 md:w-1/8 w-1/6"
          />
          <p className="text-[#2E382E] text-[14px] md:text-[20px] lg:text-[24px] 3xl:text-2xl px-12 max-w-200 mt-6 font-cormorant-garamond ">
            {data.marriageCountdownDescription}
          </p>
          <img
            src={assets.icon2}
            alt="icon"
            className="lg:w-1/14 md:w-1/8 w-1/6 lg:mt-8 mt-6"
          />
          <img
            src={assets.coutdown_bg_bottom}
            alt="icon"
            className=" object-contain mb-5"
          />

          <section className="w-full min-h-[620px] flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-5xl mx-auto text-center text-[#4d4039]">
              {/* Top Heading */}
              <p className="text-[11px] md:text-[18px] lg:text-[20px] 3xl:text-[34px] tracking-[2px] uppercase  font-cormorant-garamond">
                {data.togetherTitle}
              </p>

              <div className="mt-3 flex flex-col items-center">
                <img
                  src={assets.element2}
                  alt="icon"
                  className="lg:w-1/3 md:w-1/6 w-1/6"
                />
              </div>
              {/* Parents + Couple */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12">
                {/* Groom Parents */}
                <div className="text-center">
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.5px] uppercase text-[#725B25] font-cormorant-garamond">
                    {data.groomParentsTitle}
                  </p>

                  <p className="mt-1 text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.3px] uppercase  font-cormorant-garamond">
                    {data.groomFatherName}
                  </p>

                  <p className="my-1 text-[12px]  font-cormorant-garamond">&</p>

                  <p className="text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.3px] uppercase  font-cormorant-garamond">
                    {data.groomMotherName}
                  </p>
                </div>

                {/* Couple */}
                <div className="flex flex-col items-center">
                  <h1 className="text-[45px] md:text-[58px] leading-none text-[#805b50] font-parisienne-regular">
                    Daniel
                  </h1>

                  <p className="mt-4 text-[12px] md:text-[14px] tracking-[4px] uppercase  font-cormorant-garamond">
                    Weds
                  </p>

                  <h1 className="mt-3 text-[45px] md:text-[58px] leading-none text-[#805b50] font-parisienne-regular">
                    Grace
                  </h1>
                </div>

                {/* Bride Parents */}
                <div className="text-center">
                  <p className="text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.5px] uppercase  text-[#725B25] font-cormorant-garamond">
                    {data.brideParentsTitle}
                  </p>

                  <p className="mt-1 text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.3px] uppercase  font-cormorant-garamond">
                    {data.brideFatherName}
                  </p>

                  <p className="my-1 text-[12px]  font-cormorant-garamond">&</p>

                  <p className="text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] tracking-[1.3px] uppercase  font-cormorant-garamond">
                    {data.brideMotherName}
                  </p>
                </div>
              </div>

              {/* Invitation Text */}
              <p className="mt-10 text-[13px] md:text-[16px] lg:text-[18px] 3xl:text-[20px] italic text-[#76655d]  font-cormorant-garamond">
                {data.inviteText}
              </p>

              {/* Date */}
              <div className="mt-10">
                <p className="text-[12px] md:text-[14px] lg:text-[15px] 3xl:text-[17px] tracking-[2px] text-[#725B25] uppercase  font-cormorant-garamond">
                  {data.eventDay}
                </p>

                <p className="mt-2 text-[18px] md:text-[21px] tracking-[1px]  font-cormorant-garamond text-[#302a27]">
                  {data.eventDate}
                </p>

                <p className="mt-1 text-[9px] md:text-[12px] tracking-[2px] uppercase  font-cormorant-garamond">
                  {data.eventTime}
                </p>
              </div>

              {/* Venue */}
              <div className="mt-8">
                <p className="text-[14px] md:text-[16px] lg:text-[17px] 3xl:text-[19px] tracking-[2px] uppercase  font-cormorant-garamond">
                  {data.eventVenue}
                </p>

                <p className="mt-1 text-[12px] text-[#725B25] md:text-[14px] lg:text-[15px] 3xl:text-[17px] tracking-[1.8px] uppercase  font-cormorant-garamond">
                  {data.eventVenueAddress}
                </p>
              </div>
            </div>
          </section>

          <img src={assets.ornate} alt="icon" className=" object-contain" />
        </div>
      </div>
      <Celebration data={data} isOwner={isOwner} updateField={updateField} />

      <Memories data={data} isOwner={isOwner} updateField={updateField} />
    </>
  );
}
