"use client";
import Image from "next/image";
import { useEffect, useState, useRef, useMemo } from "react";
import RoseHeroTemp from "./components/RoseHeroTemp";
import CoupleMessage from "./components/CoupleMessage";
import "./starlight-globals.css";
import { assets } from "./assets";


const initialData = {
  groomName: "Harpreet",
  brideName: "Ritika",
  blessingMessage: "With the heavenly blessings of Our late grandparents,",
  brideGrandParentsName: "Sdn. Parkash Kapoor and Sd. Avtar Singh.",
  familyName: "The Kapoor Family",
  headline: "INVITES",
  religiousMantra: "ਪ੍ਰੀਤ ਸਹਿਤ ਆਪ ਸਭਦਾ ਜੀ ਆਇਆਂ ਨੂੰ...",
  inviteLine: "you to join us in the wedding celebrations of",
  groomDetails: "(Son of Dharmender Singh and Jaya Kaur)",
  brideDetails: "(D/O Virneder Kapoor and Jassi Kapoor)",
  eventIntro: "On the following events",
  thankyoutitle: "With Love From Us",
  thankyoumessage:
    "Thank you for being part our journey. Your presence makes this celebration truly meaningful, and we look forward to sharing these cherished moments with you.",
  coupleMessageTitle: "Introducing",
  coupleMessageDescription: "The Couple",
  coupleMessageThingsToKnowTitle: "A Guide for Guests",
  coupleMessageWeatherTitle: "Weather",
  coupleMessageWeatherDetails:
    "Clouds may drop by uninvited, but so will great vibes and better dance moves. A little rain never stopped a good celebration anyway.",
  coupleMessageStaffTitle: "Staff",
  coupleMessageStaffDetails:
    "The Central Park Hotel\nBund Garden Road,\nAgarkar Nagar, Pune,\nMaharashtra, 411001",
  coupleMessageParkingTitle: "Parking",
  coupleMessageParkingDetails:
    "Valet parking for all our guests will be available at the venue.",
  coupleMessageThingsToKnowDescription:
    "Your presence means the world to us. To make your experience effortless and enjoyable, we've gathered a few useful details below.",
  coupleMessageClosingTitle: "Awaiting the Pleasure of Your Company",
  coupleMessageRsvpText: "Click the link to RSVP",
  rsvpMode: "whatsapp",
  rsvpWhatsappButtonText: "Click the link to RSVP",
  rsvpFormButtonText: "Fill RSVP Form",
  whatsappNumber: "919876543210",
  Logo: "",
  religiousSign: "",


  events: [
    {
      title_ceremony: "Mehendi",
      image: assets.mehendi,
       date: "Saturday, April 18th 2026",
      venue: "The Central Park Hotel",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      time: "8pm Onwards",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/53z68ksx4cYgoNm59",
    },


    {
      title_ceremony: "Anand Karaj",
      image: assets.anand_karaj,
       date: "Saturday, April 20th 2026",
      venue: "The Central Park Hotel",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      time: "8pm Onwards",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/mxcwCxWhH1TXBC8c9",
    },

    {
      title_ceremony: "Reception",
      image: assets.reception,
       date: "Saturday, April 22nd 2026",
      venue: "The Central Park Hotel",
      venue_address:
        "Bund Garden Road, Agarkar Nagar\nPune, Maharashtra, 411001",
      time: "8pm Onwards",
      theme: "Glitz & Glam: Shimmer, sequins & Statement Fits",
      link: "https://maps.app.goo.gl/f599YkTSEYKDEK5L7",
    },


  ],

}

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once


  return (
    <img
      src="/flower_petals.webp"
      alt="petal"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home({
  data: initialTemplateData,
}) {
  const [bgImage, setBgImage] = useState(assets.background);
  const [coupleImage, setCoupleImage] = useState(assets.bg_three);


  const [data, setData] = useState({
    ...initialData,
    ...(initialTemplateData || {}),
    events: (initialTemplateData?.events || []).map((event, index) => ({
      ...initialData.events?.[index],
      ...event,
    })).length > 0 ? (initialTemplateData?.events || []).map((event, index) => ({
      ...initialData.events?.[index],
      ...event,
    })) : initialData.events,
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      ...initialTemplateData,
      events: (initialTemplateData?.events || []).length > 0
        ? (initialTemplateData?.events || []).map((event, index) => ({
          ...initialData.events?.[index],
          ...event,
        }))
        : prev.events || initialData.events,
    }));
  }, [initialTemplateData]);




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


  useEffect(() => {
    const coupleBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setCoupleImage(assets.bg_three);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setCoupleImage(assets.bg_three);
      } else {
        // Mobile
        setCoupleImage(assets.respo_three);
      }
    };

    coupleBg();
    window.addEventListener("resize", coupleBg);

    return () => window.removeEventListener("resize", coupleBg);
  }, []);



  const backgroundMusicUrl = data?.backgroundMusicUrl || assets.background_song;


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

      {/* <audio ref={audioRef} src="/assets/background_song.mp3" loop preload="auto" playsInline /> */}

      
      <audio
        key={backgroundMusicUrl}
        ref={audioRef}
        src={backgroundMusicUrl}
        loop
        preload="auto"
        playsInline
      />

      {/* hero section */}
      <div className=" bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')] 3xl:bg-[url('/assets/background.webp')]
                       bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>

        <RoseHeroTemp />

        <div className="pt-15 md:pt-53 lg:pt-60 3xl:pt-80 relative z-10">
          <h2 className="text-[#69301B] text-center leading-tight text-xl md:text-5xl lg:text-6xl pb-150
                          md:pb-350 lg:pb-470 3xl:pb-550 flex flex-col items-center gap-y-0 lg:gap-y-5">

            <span className="parisienne-regular">{data.groomName}</span>

            <span className="jacques-francois text-xs md:text-2xl lg:text-3xl tracking-widest">WEDS</span>

            <span className="parisienne-regular">{data.brideName}</span>

          </h2>

          <div className="flex flex-col items-center text-center gap-6 mt-0 lg:pt-50 pt-0">

            <h2 className="text-[#FFD74B] text-sm md:text-xl lg:text-2xl md:pt-8 eb-garamond font-medium w-70">
              {data.religiousMantra}
            </h2>
            <Image
              src={data?.religiousSign || assets.symbol}
              alt="idol" width={100} height={100}
              className="w-20 h-15 md:w-40 md:h-30 lg:w-59 lg:h-45 object-cover" />

            <h2 className="text-[#FFD74B] text-sm md:text-xl lg:text-3xl md:pt-8 eb-garamond font-medium">
              {data.blessingMessage} <br /> {data.brideGrandParentsName}
            </h2>

            <hr className="w-16 lg:w-24 border-[#FFD74B] my-2 md:my-4" />
            <h2 className="text-[#FFD74B] text-xs md:text-lg lg:text-[26px] eb-garamond font-medium">
              {data.familyName}
            </h2>
          </div>

          <div className="mt-8 text-center">
            <h2 className="text-[#FFD74B] eb-garamond font-medium text-3xl md:text-5xl lg:text-6xl leading-tight lg:tracking-wide tracking-wider">
              {data.headline}
            </h2>

            <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-xl lg:text-3xl mt-6">
              {data.inviteLine}
            </p>

            <h2 className="text-[#FFD74B] eb-garamond font-medium text-center mt-6 md:mt-14 text-4xl md:text-6xl lg:text-[100px] leading-tight uppercase">
              {data.groomName}
            </h2>

            <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-xl lg:text-3xl mt-4">
              {data.groomDetails}
            </p>

            <h2 className="text-[#FFD74B] eb-garamond font-medium text-center mt-4 text-4xl md:text-6xl lg:text-[100px] leading-tight">
              <span className="text-[#FFD74B] eb-garamond font-medium text-center lg:mt-10 mt-0 text-4xl md:text-6xl lg:text-[100px] leading-tight uppercase">
                & </span>   <br />{data.brideName}
            </h2>

            <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-xl lg:text-3xl mt-4">
              {data.brideDetails}
            </p>

            <p className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-xl lg:text-3xl mt-8">
              {data.eventIntro}
            </p>
          </div>

          <div className="flex justify-center mt-20 lg:mt-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32 3xl:gap-50 px-15">
              {(data.events || []).map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {event.image && (
                    <img
                      src={event.image}
                      alt={event.title_ceremony ? `${event.title_ceremony} image` : `Event ${i + 1} image`}
                      className="w-75 md:w-76 lg:w-80 3xl:w-100 h-auto"
                    />
                  )}


                  <h2 className="text-[#FFD74B] eb-garamond font-medium text-3xl md:text-2xl lg:text-[42px] mt-4">
                    {event.title_ceremony}
                  </h2>

                  <h2 className="text-[#FFD74B] eb-garamond font-medium text-sm md:text-base mt-2">
                    <p className="text-sm md:text-base lg:text-xl">
                      {event.date}
                    </p>
                    <p className="text-sm md:text-base lg:text-xl">
                      {event.time}
                    </p>
                    <p className="text-sm md:text-base lg:text-xl">
                      {event.venue}
                    </p>
                    <p className="text-sm md:text-base lg:text-xl">
                      {event.venue_address}
                    </p>
                     <p className="text-sm md:text-base lg:text-xl">
                      {event.theme}
                    </p>
                  </h2>
                  <a
                    href={event.link}
                    className="text-[#FFD74B] underline md:text-sm text-lg mt-2 eb-garamond font-medium"
                    target="_blank">
                    View Directions
                  </a>
                </div>
              ))}
            </div>
          </div>


          <div className="relative flex flex-col items-center pt-40 lg:pt-80 3xl:pt-140 3xl:gap-60">
            {/* Center Text */}
            <div className="absolute flex flex-col justify-center items-center text-center md:mb-0 top-28 md:top-31 lg:top-60 3xl:top-152 3xl:px-130 px-20 lg:px-80 md:px-50">
              <p className="parisienne-regular text-3xl md:text-5xl lg:text-7xl lg:leading-22 text-[#FFD74B]">
                {data.thankyoutitle}
              </p>

              <h2 className="text-xs md:text-xl lg:text-3xl text-center pt-2 md:pt-6 lg:leading-10 md:leading-7 leading-4">
                <span className="eb-garamond font-medium text-[#FFD74B]">
                  {data.thankyoumessage}
                </span>
              </h2>
            </div>
            <Image
              src={assets.couple}
              alt="couple" width={900} height={1200}
              className="w-full h-104 md:w-full md:h-198 lg:w-full lg:h-264 3xl:w-480 3xl:h-463 object-cover" />
          </div>
        </div>
      </div>

      <CoupleMessage  data={data} />

      <div className="bg-[url('/assets/respo_three.webp')] md:bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${coupleImage})` }} >
        <div className="h-253 md:h-179 lg:h-330 3xl:h-421 flex flex-col items-center relative">
          <img src={data?.Logo || assets.logo} alt="logo" width={250} height={300} className="absolute top-50 w-30 h-25 md:top-41 md:w-41 md:h-40 lg:top-84 lg:w-72 lg:h-58 3xl:top-118" />
        </div>
      </div>

    
    </>
  );
}
