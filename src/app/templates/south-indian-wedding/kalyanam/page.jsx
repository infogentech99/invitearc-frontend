"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "./components/RoseHeroTemp";
import CoupleMessage from "./components/CoupleMessage";
import MarriageCountdown from "./components/MarriageCountdown";
import "./kalyanam-globals.css";
import { assets } from "./assets";

const initialData = {
  groomName: "AARAV",
  brideName: "ANANYA",
  religiousMantra: "ॐ श्री गणेशाय नम",
  blessingMessage: "With the heavenly blessings of",
  groomGrandParentsName: "Shri Chand Pillai & Shrimati Shanti Pillai",
  groomDetails: "(Son of Shri Rajesh & Shrimati Sunita)",
  headline: "INVITES",
  inviteLine: "Celebrate our special day with your love and blessings",
  brideDetails: "(Daughter of Shri Mohan Shetty & Shrimati Kavita Shetty)",
  eventIntro: "On the following events",
  thankyoutitle: "With Love From Us",
  thankyoumessage:
    "Thank you for being part our journey. Your presence makes this celebration truly meaningful, and we look forward to sharing these cherished moments with you.",

  events: [
    {
      title_ceremony: "Mehendi",
      image: assets.mehandi,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace, Udaipur",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },

    {
      title_ceremony: "Muhurtham",
      image: assets.muhurtham,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace, Udaipur",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },

    {
      title_ceremony: "Reception",
      image: assets.reception,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace, Udaipur",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },
  ],
};

export default function Home({ data: initialTemplateData, isOwner = false }) {
  const [bgImage, setBgImage] = useState(assets.bg_one);

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
  // const audioRef = (useRef < HTMLAudioElement) | (null > null);
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

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setBgImage(assets.bg_one);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setBgImage(assets.bg_one);
      } else {
        // Mobile
        setBgImage(assets.bg_respo);
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);

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
        className=" bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <RoseHeroTemp />
        {/* <FallingLamps /> */}
        <div className="pt-6 md:pt-34 lg:pt-54 3xl:pt-90 relative z-10">
          <h2
            className="text-[#C47E39] text-center leading-tight text-3xl md:text-5xl lg:text-[64px]  
                           flex flex-col items-center gap-y-0 lg:gap-y-5 pb-170 md:pb-780 lg:pb-780 3xl:pb-950"
          >
            <span className="eb-garamond font-medium">{data.groomName}</span>

            <span className="jacques-francois text-xl md:text-3xl lg:text-5xl tracking-widest">
              WEDS
            </span>

            <span className="eb-garamond font-medium">{data.brideName}</span>
          </h2>

          <div className="flex flex-col items-center text-center gap-6 pt-20 md:pt-35 lg:pt-80 3xl:pt-100">
            <p className="eb-garamond font-medium text-base md:text-2xl lg:text-3xl text-[#FFF5B9] text-center">
              {data.religiousMantra}
            </p>
            <img
              src={assets.ganesh}
              alt="ganesh"
              className="w-25 h-29 md:w-34 md:h-38 lg:w-41 lg:h-53"
            />

            <h2 className="eb-garamond font-medium text-[#FFF5B9] text-sm md:text-xl lg:text-3xl">
              {data.blessingMessage} <br /> {data.groomGrandParentsName}
            </h2>

            <hr className="lg:w-24 w-16 border-[#FFF5B9] md:my-4" />
            <h2 className="eb-garamond font-medium text-[#FFF5B9] text-sm md:text-xl lg:text-3xl">
              {data.groomDetails}
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="eb-garamond font-medium text-[#FFF5B9] text-3xl sm:text-5xl lg:text-[64px] leading-tight lg:tracking-wide tracking-wider">
              {data.headline}
            </h2>

            <p className="eb-garamond font-medium text-[#FFF5B9] text-sm md:text-xl lg:text-3xl mt-6">
              {data.inviteLine}
            </p>

            <h2 className="eb-garamond font-medium text-[#FFF097] text-center mt-4 lg:mt-14 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              {data.groomName}
            </h2>

            <h2 className="eb-garamond font-medium text-[#FFF097] text-center text-3xl md:text-5xl lg:text-[64px] leading-tight">
              <span className="eb-garamond font-medium text-[#FFF097] text-center lg:mt-10 text-xl md:text-3xl lg:text-5xl leading-tight">
                &
              </span>
              <br /> {data.brideName}
            </h2>

            <p className="eb-garamond font-medium text-[#FFF5B9] text-sm md:text-xl lg:text-3xl mt-4 lg:mt-6 3xl:mt-12">
              {data.brideDetails}
            </p>

            <p className="eb-garamond font-medium text-[#FFF5B9] text-sm md:text-xl lg:text-3xl mt-8 lg:mt-16">
              {data.eventIntro}
            </p>
          </div>

          {/* <div className="flex justify-center mt-15 md:mt-25 lg:mt-40">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 3xl:gap-40 pb-40">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center"> */}
          <div className="flex justify-center mt-20 lg:mt-40 pb-40">
            <div
              className={`grid gap-16 lg:gap-26 lg:px-18 3xl:px-0 ${
                data?.events?.length === 1
                  ? "grid-cols-1 justify-items-center"
                  : data?.events?.length === 2
                    ? "grid-cols-2 justify-items-center"
                    : "grid-cols-1 sm:grid-cols-3"
              }`}
            >
              {(data?.events || []).map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={event.image}
                    className="w-75 h-auto md:w-76 lg:w-80 3xl:w-95"
                  />

                  <h2 className="eb-garamond font-medium text-[#FFF5B9] text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>

                  {/* <p className="eb-garamond font-medium text-[#FFF5B9] text-[14px] sm:text-base mt-2">
                    <span className="text-base">{event.venue_address}</span> <br />
                  </p> */}
                  <p className="eb-garamond font-medium text-[#FFF5B9] mt-2">
                    <span className="text-base md:text-base lg:text-[15px]">
                      {event.date}
                    </span>{" "}
                    <br />
                    <span className="text-base md:text-base lg:text-[15px]">
                      {" "}
                      {event.time}{" "}
                    </span>{" "}
                    <br />
                    <span className="text-base md:text-base lg:text-[15px] uppercase">
                      {event.venue}
                    </span>
                    <br />
                    <span className="text-base md:text-base lg:text-[15px] ">
                      {event.venue_address}
                    </span>
                    <br />
                    <span className="text-base md:text-base lg:text-[15px] ">
                      {event.theme}
                    </span>
                  </p>

                  <a
                    href={event.link}
                    className="eb-garamond font-medium text-[#FFF5B9] underline text-[18px] md:text-sm mt-2"
                    target="_blank"
                  >
                    View Directions
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div
            className="bg-cover bg-no-repeat w-full h-96 md:h-181 lg:h-335 3xl:h-422
                          overflow-hidden relative"
            style={{
              backgroundImage: `url(${assets.bg_second})`,
            }}
          >
            {/* Center Text */}
            <div className="flex flex-col justify-center items-center text-center pt-30 pl-58 md:pt-56 md:pl-110 lg:pt-107 lg:pl-210 3xl:pt-145 3xl:pl-240">
              <p className="parisienne-regular text-center text-2xl md:text-[40px] lg:text-7xl lg:leading-22 text-[#C47E39]">
                {data.thankyoutitle}
              </p>
              <h2 className="text-[10px] md:text-base lg:text-3xl text-center pt-0 md:pt-2 md:leading-6 lg:leading-10 lg:w-170 md:w-80">
                <span className="eb-garamond font-normal text-[#54A4A1] ">
                  {data.thankyoumessage}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <CoupleMessage data={data} isOwner={isOwner} updateField={updateField} />

      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${assets.bg_fourth})` }}
      >
        <div className="h-132 md:h-251 lg:h-467 3xl:h-589 flex flex-col items-center">
          <img
            src={data?.Logo || assets.logo}
            alt="logo"
            width={250}
            height={300}
            className="w-25 h-23 md:w-43 md:h-42 lg:w-75 lg:h-73 mt-16 md:mt-33 lg:mt-65 3xl:mt-82"
          />
        </div>
      </div>

      <MarriageCountdown
        data={data}
        isOwner={isOwner}
        updateField={updateField}
      />
    </>
  );
}
