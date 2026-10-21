"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import OurStory from "./components/OurStory";
import Countdown from "./components/Countdown";
import Memories from "./components/Memories";
import { assets } from "./assets";
import "./celeste-globals.css";

const initialData = {
  groomName: "Daniel",
  brideName: "Grace",
  welcomeTitle: "Two hearts, one beautiful beginning.",
  welcomeDes:
    "Together with our families, we invite you to celebrate our beginning.",
  welcomeSubTitle: "EXPLORE OUR STORY",
  storyTitle: "OUR STORY",
  storySubTitle: "AND THEN, WE FOUND FOREVER",
  storyDes: "Every chapter led us here.",
  storyDes2:
    "From the quiet cobblestones of Bellagio to the serene waters at dusk, our promise unfolds where time stands still.",
  beginningTitle: "THE BEGINNING",
  beginningSubTitle: "Autumn, Two Thousand Twenty",
  beginningDes:
    "A chance encounter on the terrace of an old Florentine library, rain softening the terracotta roofs below. An unhurried espresso turned into hours of shared wanderlust, forgotten maps, and a quiet realization that home was no longer a place, but a person.",
  beginningDes2: "L’inizio di tutto",
  marriageCountdownTitle: "Until We Say I Do",
  marriageCountdownDescription: "OUR FOREVER BEGINS SOON.",

  events: [
    {
      image: assets.engagement,
      title_ceremony: "Engagement Celebration",
      subtitle: "PROLOGUE",
      date: "OCTOBER 12TH, 2024",
      time: "11:00 AM — 3:00 PM",
      venue: "The Rose Garden, Fairmont Palace",
      theme:
        "An afternoon of henna, folk music, and vibrant colors amidst the blooming roses.",
      link: "https://maps.google.com/?q=The+Rose+Garden+Fairmont+Palace",
      calendarUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE",
    },
    {
      image: assets.engagement,
      title_ceremony: "Rehearsal Dinner",
      subtitle: "TWILIGHT TOAST",
      date: "OCTOBER 12TH, 2024",
      time: "7:00 PM — Late",
      venue: "Grand Ballroom, Fairmont Palace",
      theme:
        "A night of dazzling performances, laughter, and dance as we celebrate the union of two families.",
      link: "https://maps.google.com/?q=Grand+Ballroom+Fairmont+Palace",
      calendarUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE",
    },
    {
      image: assets.wedding,
      title_ceremony: "Wedding Ceremony",
      subtitle: "THE SACRED UNION",
      date: "OCTOBER 13TH, 2024",
      time: "4:00 PM — 5:30 PM",
      venue: "The Lakeside Pavilion",
      theme:
        "Join us by the serene waters as we exchange our vows and begin our forever journey together.",
      link: "https://maps.google.com/?q=The+Lakeside+Pavilion",
      calendarUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE",
    },
    {
      image: assets.evening,
      title_ceremony: "Evening Reception",
      subtitle: "THE GRAND FINALE",
      date: "OCTOBER 13TH, 2024",
      time: "7:30 PM — Midnight",
      venue: "Imperial Banquet Hall",
      theme:
        "A formal gala dinner to toast to our love, accompanied by fine dining and exquisite jazz.",
      link: "https://maps.google.com/?q=Imperial+Banquet+Hall",
      calendarUrl:
        "https://calendar.google.com/calendar/render?action=TEMPLATE",
    },
  ],
  momentText: "Four moments. One beautiful beginning.",
  momentTitle: "CONFIRM YOUR ATTENDANCE WITH CONCIERGE",

  chaptersText: "CHAPTERS OF US",
  chaptersTitle: "Our Love Story",
  chaptersDesc: "Some stories are written. Ours is lived, one beautiful moment at a time.",
  guestText:"BEFORE YOU ARRIVE",
  guestTitle:"Guest Information",
  guestDesc:"Everything you need for a seamless and memorable celebration.",

  dressText:" 01 • ATTIRE & PALETTE",
  dressTitle:"Dress Code",
  dressDesc:" We’d love to see you in your festive best. Traditional or semi-formal attire in soft, pastel or earthy tones is perfect for our celebration.",
  dressNote:"GARDEN FORMAL FOOTWEAR ADVISED",

  stayText:"02 • LODGING & VILLA",
  stayTitle:"Stay With Us",
  stayDesc:"We have arranged comfortable accommodation at the venue for all our guests. Room details and check-in instructions will be shared via email.",
  stayNote:"LAKESIDE CHECK-IN • 15:00",

  foodText:"03 • CULINARY & TASTINGS",
  foodTitle:"Food & Drinks",
  foodDesc:"Enjoy a delicious spread of local and international cuisine, handcrafted desserts, and refreshing beverages across all our wedding events.",
  foodNote:"CUCINA REGIONALE • FINE WINES",

  requestText:"04 • PRESENCE & CEREMONY",
  requestTitle:"A Few Requests",
  requestDesc:"Please arrive on time, keep your phones on silent during the ceremony, and be fully present with us as we begin this beautiful new chapter.",
  requestNote:" UNPLUGGED VOWS • ARRIVE 20M PRIOR",

  thankyouText:"WITH GRATEFUL HEARTS",
  thankyouTitle:"Thank You",
  thankyouSubTitle:"For Being Part of Our Journey",
  thankyouDesc:"“Your love, prayers, and presence have made our celebration truly special. As we begin this new chapter together, we are deeply grateful to have shared this beautiful day with you.”",

  prayerTitle:"YOUR PRAYERS",
  prayerDesc:"Vows & Grace",

  presenceTitle:" YOUR PRESENCE",
  presenceDesc:"Near & Far",

  loveTitle:"YOUR LOVE",
  loveDesc:"Enduring Bond",

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

      <div className="bg-[#FFFAF2]">
        <div className="top-10 md:top-20 lg:top-50 flex flex-col items-center text-center bg-[#FFFAF2]">
          <h2 className="md:mt-50 mt-16 flex items-center justify-center gap-4 md:gap-6 text-[#727272] text-4xl md:text-5xl lg:text-[80px]">
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

          <img
            src={assets.hero_image}
            alt="Wedding couple"
            className="block w-full h-auto mt-30"
          />
        </div>
        <OurStory data={data} isOwner={isOwner} updateField={updateField} />
        <div className="px-20">
          <Countdown data={data} isOwner={isOwner} updateField={updateField} />
        </div>
        <Memories data={data} isOwner={isOwner} updateField={updateField} />
      </div>
    </>
  );
}
