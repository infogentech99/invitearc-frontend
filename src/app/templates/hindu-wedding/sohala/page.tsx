"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import MarriageCountdown from "./components/MarriageCountdown";
import RoseHeroTemp from "./components/RoseHeroTemp";
import CoupleMessage from "./components/CoupleMessage";
import "./sohala-globals.css";
import { assets } from "./assets";



const initialData = {
  groomName: "SAMPATH",
  brideName: "SAYALI",
  religiousMantra: "ॐ श्री गणेशाय नम",
  groomDetails: "(Son of Shri Amit Kulkarni & Shrimati Vaishali Kulkarni)",
  blessingMessage: "With the heavenly blessings of",
  brideGrandParentsName: "Shri Rajesh Kulkarni & Shrimati Sunita Kulkarni",
  brideDetails: "(Daughter of Shri Mahesh Joshi & Shrimati Asha Joshi)",
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
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace",
      venue_address: "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Pretty in Pink: Florals, Pastels & Pink Hues",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    }, 

    {
      title_ceremony: "Shaadi",
      image: assets.shaadi,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace",
      venue_address: "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Pretty in Pink: Florals, Pastels & Pink Hues",
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },


    {
      title_ceremony: "Reception",
      image: assets.reception,
      date: "Saturday, April 18th 2026",
      time: "Join Us at 11 am",
      venue: "The Leela Palace",
      venue_address: "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      theme: "Pretty in Pink: Florals, Pastels & Pink Hues",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },


  ],
}

export default function Home({
  data: initialTemplateData,
}) {
  const [bgImage, setBgImage] = useState(assets.background);
  const [coupleBg, setCoupleBgImage] = useState(assets.background_third);

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

  
  const backgroundMusicUrl = data?.backgroundMusicUrl || assets.background_song;
  const audioRef = useRef<HTMLAudioElement | null>(null);
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
        setBgImage(assets.background);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setBgImage(assets.background);
      } else {
        // Mobile
        setBgImage(assets.respo_bg);
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
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

      {/* Hero section */}
      <div className="bg-[url('/assets/respo_bg.webp')] lg:bg-[url('/assets/background.webp')]
                      bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden " style={{ backgroundImage: `url(${bgImage})` }}>

        <RoseHeroTemp />
        <div className="pt-12 md:pt-34 lg:pt-64 3xl:pt-90 relative z-10">

          <h2 className="text-[#FFFFFF] text-center leading-tight text-3xl md:text-5xl lg:text-[64px] pb-130 md:pb-220 lg:pb-400
                           3xl:pb-600 flex flex-col items-center gap-y-2 lg:gap-y-5" id="details-section">

            <span className="eb-garamond font-medium">{data.groomName}</span>

            <span className="jacques-francois font-normal text-xl md:text-3xl lg:text-5xl tracking-widest">WEDS</span>

            <span className="eb-garamond font-medium">{data.brideName}</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 pt-0 md:pt-30 lg:pt-50">
            <p className="eb-garamond font-normal text-[#FFFFFF] text-xl md:text-2xl lg:text-3xl text-center">{data.religiousMantra}</p>
            {/* <img src={assets.ganesh} alt="ganesh" className="w-30 h-39 md:w-40 md:h-50 lg:w-50 lg:h-65 object-cover" /> */}
  <img
                          src={data?.religiousSign || assets.ganesh}
                          alt="idol" width={100} height={100}
                          className="w-30 h-39 md:w-40 md:h-50 lg:w-50 lg:h-65 object-cover" />
            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl">
              {data.blessingMessage} <br /> {data.brideGrandParentsName}
            </h2>

            <hr className="w-16 lg:w-24 border-[#FFFFFF] lg:my-6" />
            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl">
              {data.groomDetails}
            </h2>
          </div>


          <div className="mt-8 text-center">
            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-3xl md:text-5xl lg:text-[64px] leading-tight lg:tracking-wide
                           tracking-wider">
              {data.headline}
            </h2>

            <p className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl mt-6">
              {data.inviteLine}
            </p>

            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-center mt-6 lg:mt-14 text-3xl md:text-5xl lg:text-[82px] leading-tight">
              {data.groomName}
            </h2>

            <h2 className="eb-garamond font-medium text-[#FFFFFF] text-center mt-0 text-3xl md:text-5xl lg:text-[82px] leading-tight">
              <span className="eb-garamond font-medium text-[#FFFFFF] text-center lg:mt-10 mt-0 text-xl md:text-3xl lg:text-5xl leading-tight">
                &
              </span>   <br />
              {data.brideName}
            </h2>

            <p className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl mt-6">
              {data.brideDetails}
            </p>

            <p className="eb-garamond font-medium text-[#FFFFFF] text-sm md:text-xl lg:text-3xl mt-8">
              {data.eventIntro}
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:mt-40 mb-30" id="events-section">
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
                    alt={event.venue}
                    className="lg:w-80 w-60 md:w-70 h-auto"
                  />

                  <h2 className="eb-garamond font-medium text-[#FFFFFF] text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>

                  <p className="eb-garamond font-medium text-[#FFFFFF] mt-2">
                    <span className="text-base md:text-base lg:text-[15px]">{event.date}</span>  <br />
                    <span className="text-base md:text-base lg:text-[15px]">  {event.time} </span> <br />

                    <span className="text-[20px]">{event.theme}</span>

                    <span className="text-base md:text-base lg:text-[15px] uppercase"> {event.venue}</span>
                    <span className="text-sm md:text-base lg:text-[20px]">{event.venue_address}</span> <br />
                  </p>

                  <a
                    href={event.link}
                    className="eb-garamond font-medium text-[#FFFFFF] underline text-[18px] md:text-sm mt-2"
                    target="_blank">
                    View Directions
                  </a>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Second section */}
      <section className="bg-[url('/assets/background_second.webp')] bg-cover bg-no-repeat " style={{ backgroundImage: `url(${assets.background_second})` }}  id="couple-section">
        <div className="h-95 md:h-181 lg:h-335 3xl:h-424 flex flex-col items-center pt-6 md:pt-16 lg:pt-30 3xl:pt-56 lg:w-160 md:w-80 w-50 mx-auto">
          <p className="parisienne-regular text-center text-2xl md:text-[40px] lg:text-7xl lg:leading-22 text-[#FFE323]">
            {data.thankyoutitle}
          </p>
          <h2 className="text-[10px] md:text-base lg:text-3xl text-center pt-0 md:pt-2 md:leading-6 lg:leading-10">
            <span className="eb-garamond font-normal text-[#F2AD15]">
              {data.thankyoumessage}
            </span>
          </h2>
        </div>
      </section>

      {/* Third section */}

      <CoupleMessage data={data} />

      {/* Fourth section */}
      <section className="bg-[url('/assets/background_fourth.webp')] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.background_fourth})` }}>
        <div className="h-96 md:h-181 lg:h-338 3xl:h-426 flex justify-center">
          <img src={assets.couple_name} alt="couple_name" className="mt-8 w-24 h-12 md:mt-15 md:w-50 md:h-25 lg:mt-30 lg:w-80 lg:h-40 3xl:mt-40 3xl:w-105 3xl:h-60" />
        </div>
      </section>

      {/* Fifth section */}
      <MarriageCountdown data={data} />
    </>
  );
}
