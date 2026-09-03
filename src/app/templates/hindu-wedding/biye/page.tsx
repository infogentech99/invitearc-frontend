"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "./components/RoseHeroTemp";
import CoupleMessage from "./components/CoupleMessage";
import MarriageCountdown from "./components/MarriageCountdown";
import "./biye-globals.css";
import { assets } from "./assets";

const initialData = {
  groomName: "SAYAN",
  brideName: "MOUMITA",
  religiousMantra: "ॐ श्री गणेशाय नम",
  groomDetails: "(Son of Shri Anirban Chatterjee & Smt. Madhumita Chatterjee)",
  blessingMessage: "With the heavenly blessings of",
  brideGrandParentsName: "Shri Anurag Chatterjee & Smt. Kiranwati Chatterjee",
  brideDetails: "Shri Subhashis Mukherjee & Smt. Indrani Mukherjee",
  eventIntro: "On the following events",
  headline: "INVITES",
  inviteLine: "you to join us in the wedding celebrations of",
  thankyoutitle: "With Love From Us",
  thankyoumessage:
    "Thank you for being part our journey. Your presence makes this celebration truly meaningful, and we look forward to sharing these cherished moments with you.",
  coupleMessageClosingTitle: "Awaiting the Pleasure of Your Company",
  coupleMessageRsvpText: "Click the link to RSVP",
  rsvpMode: "whatsapp",
  rsvpWhatsappButtonText: "Click the link to RSVP",
  rsvpFormButtonText: "Fill RSVP Form",
  whatsappNumber: "919876543210",
  rsvpGoogleFormLink: "",

  events: [
    {
      title_ceremony: "Mehendi",
      image: assets.mehandi,
      date: "Saturday, 20th June 2026",
      venue: "THE ASHOK HOTEL",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      time: "4pm Onwards",
      theme: "Pretty in Pink: Florals, Pastels & Pink Hues",
      link: "https://maps.app.goo.gl/TVyrP9mLFCpr4VXA9",
    },

    {
      title_ceremony: "Shaadi",
      image: assets.shaadi,
      date: "Saturday, 20th June 2026",
      venue: "The Central Park Hotel",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      time: "8pm Onwards",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/fKxi3eDGsTSd5Aaz6?g_st=ic",
    },

    {
      title_ceremony: "Reception",
      image: assets.reception,
      date: "Sunday, 21st June 2026",
      venue: "The Central Park Hotel",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      time: "5pm Onwards",
      theme: "Timeless Royalty: Elegant Ethnic & Royal Silhouettes",
      link: "https://maps.app.goo.gl/fKxi3eDGsTSd5Aaz6?g_st=ic",
    },


  ],
}


export default function Home({
  data: initialTemplateData,
}) {

  const [data, setData] = useState({
    ...initialData,
    ...(initialTemplateData || {}),
    events:
      initialTemplateData?.events ||
      initialData.events,
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      ...initialTemplateData,
      events: initialTemplateData?.events || prev.events || initialData.events,
    }));
  }, [initialTemplateData]);

  const [bgImage, setBgImage] = useState(assets.desktop_bg);
  const [coupleImage, setCoupleImage] = useState(assets.bg_four);

  const audioRef = useRef<HTMLAudioElement | null>(null);
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


  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setBgImage(assets.desktop_bg);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setBgImage(assets.respo_bg);
      } else {
        // Mobile
        setBgImage(assets.respo_bg);
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);


  useEffect(() => {
    const coupleBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setCoupleImage(assets.bg_four);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setCoupleImage(assets.bg_four);
      } else {
        // Mobile
        setCoupleImage(assets.respo_four);
      }
    };

    coupleBg();
    window.addEventListener("resize", coupleBg);

    return () => window.removeEventListener("resize", coupleBg);
  }, []);


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
      <div className="bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')]
                      bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden" style={{
          backgroundImage: `url(${bgImage})`,
        }}>

        <RoseHeroTemp />

        {/* <FallingLamps /> */}
        <div className="pt-36 md:pt-50 lg:pt-54 relative z-10">

          <h2 className="flex flex-col items-center text-center leading-tight text-3xl md:text-5xl lg:text-[64px]  
                         gap-y-0 lg:gap-y-5 pb-200 md:pb-560 lg:pb-500 text-[#D90305]" id="details-section">
            <span className="font-eb-garamond font-medium">{data.groomName}</span>
            <span className="font-eb-garamond font-medium text-xl md:text-3xl lg:text-5xl tracking-widest">WEDS</span>
            <span className="font-eb-garamond font-medium">{data.brideName}</span>
          </h2>

          <div className="flex flex-col items-center text-center gap-6 pt-20 md:pt-35 lg:pt-80 3xl:pt-100">
            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl text-[#D90305] text-center">{data.religiousMantra}</p>
            <img
              src={data?.religiousSign || assets.ganesha}
              alt="idol" width={100} height={100}
              className="w-25 h-29 md:w-34 md:h-38 lg:w-41 lg:h-53" />


            <h2 className="font-eb-garamond font-medium text-[#D90305] text-sm md:text-xl lg:text-3xl">
              {data.blessingMessage} <br /> {data.brideGrandParentsName}
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="font-eb-garamond font-medium text-[#D90305] text-3xl sm:text-5xl lg:text-[64px] leading-tight lg:tracking-wide tracking-wider">
              {data.headline}
            </h2>

            <p className="font-eb-garamond font-medium text-[#D90305] text-sm md:text-xl lg:text-3xl mt-6">
              {data.inviteLine}
            </p>

            <h2 className="font-eb-garamond font-medium text-[#D90305] text-center mt-4 lg:mt-14 text-3xl md:text-5xl lg:text-[64px] leading-tight">
              {data.groomName}
            </h2>

            <h2 className="font-eb-garamond font-medium text-[#D90305] text-center text-3xl md:text-5xl lg:text-[64px] leading-tight">
              <span className="font-eb-garamond font-medium text-[#D90305] text-center lg:mt-10 text-xl md:text-3xl lg:text-5xl leading-tight">&</span>
              <br /> {data.brideName}
            </h2>

            <p className="font-eb-garamond font-medium text-[#D90305] text-sm md:text-xl lg:text-3xl mt-4 lg:mt-6 3xl:mt-12">
              {data.groomDetails}
            </p>
            <p className="font-eb-garamond font-medium text-[#D90305] text-sm md:text-xl lg:text-3xl mt-4 lg:mt-6 3xl:mt-12">
              and
            </p>
            <p className="font-eb-garamond font-medium text-[#D90305] text-sm md:text-xl lg:text-3xl mt-4 lg:mt-6 3xl:mt-12">
              Daughter of Shri Subhashis Mukherjee & Smt. Indrani Mukherjee
            </p>
            <p className="font-eb-garamond font-medium text-[#D90305] text-sm md:text-xl lg:text-3xl mt-8 lg:mt-16">
              {data.eventIntro}
            </p>
          </div>

          <div className="flex justify-center mt-15 md:mt-25 lg:mt-40 mb-20" id="events-section">
            <div
              className={`grid gap-16 lg:gap-26 lg:px-18 3xl:px-0 ${data?.events?.length === 1
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

                  <h2 className="font-eb-garamond font-medium text-[#D90305] text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>

                  <p className="font-eb-garamond font-medium text-[#D90305] mt-2">
                    <span className="text-base md:text-base lg:text-[15px]">{event.date}</span>  <br />
                    <span className="text-base md:text-base lg:text-[15px]">  {event.time} </span> <br />
                    <span className="text-base md:text-base lg:text-[15px] uppercase"> {event.venue}</span> <br />
                    <span className="text-sm md:text-base lg:text-[20px] px-4">{event.venue_address}</span>
                  </p>

                  <a href={event.link} className="font-eb-garamond font-medium text-[#D90305] underline text-base md:text-sm mt-2"
                    target="_blank">
                    View Directions
                  </a>

                </div>
              ))}
            </div>
          </div>

          <div className="bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat w-full h-110 md:h-210 lg:h-395 3xl:h-480
                          overflow-hidden relative" style={{
              backgroundImage: `url(${assets.bg_two})`,
            }}>
            {/* Center Text */}
            <div className="flex flex-col justify-center items-center text-center pt-8 md:pt-10 lg:pt-20" id="couple-section">
              <p className="font-parisienne-regular font-normal text-center text-2xl md:text-[40px] lg:text-7xl lg:leading-22 text-[#FFFFFF]">
                {data.thankyoutitle}
              </p>
              <h2 className="font-eb-garamond font-medium text-xs md:text-base lg:text-3xl text-center pt-0 md:pt-2 md:leading-5 lg:leading-10 text-[#0039A2] lg:w-150 w-50 ">
                {data.thankyoumessage}
              </h2>
            </div>
          </div>

        </div>
      </div>

      <CoupleMessage data={data} />




      <div
        className="hidden md:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${coupleImage})` }}
      >
        <div className="relative flex justify-center md:h-175 lg:h-237.5 xl:h-275 2xl:h-325 3xl:h-[1600px] md:pt-48 lg:pt-72 3xl:pt-96">


          <img
            src={data?.Logo || assets.logo}
            alt="logo"
            width={250}
            height={300}
            className="absolute w-34 h-30 top-40 md:w-34 md:h-30 md:top-42 lg:w-50 lg:h-44 lg:top-86"
          />
        </div>
      </div>


      <div className="md:hidden relative flex items-start justify-center">
        <img
          src={coupleImage}
          alt="background"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-[25svh] left-0 right-0 flex justify-center">
          <img src={data?.Logo || assets.logo} alt="logo" width={250} height={300} className="absolute w-32 h-26" />
        </div>
      </div>



      <MarriageCountdown data={data} />
    </>
  );
}