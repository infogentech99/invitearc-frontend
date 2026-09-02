"use client";
import { useEffect, useState } from "react";
import { assets } from "../assets";

export default function MarriageCountdown({ data }) {
   const [coupleBg, setCoupleBg] = useState(assets.bg_two);
  const targetDate = data?.marriageCountdownDate || "2026-10-21";
const TARGET_DATE = new Date(targetDate).getTime();

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60),
    );

    const seconds = Math.floor(
      (diff % (1000 * 60)) / 1000,
    );

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  updateCountdown();

  const interval = setInterval(updateCountdown, 1000); // every second

  return () => clearInterval(interval);
}, [targetDate]);




      useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 1536) {
        // Desktop Large
        setCoupleBg(assets.bg_two);
      } else if (window.innerWidth >= 768) {
        // Tablet/Desktop
        setCoupleBg(assets.bg_two);
      } else {
        // Mobile
        setCoupleBg(assets.respo_two);
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);


  const title = data?.marriageCountdownTitle || "COUNTDOWN TO OUR";
  const description = data?.marriageCountdownDescription || "BIG DAY";
  const blessingMessage = data?.blessingMessage || "With the blessings of the Almighty and the love of our beloved families";
  const blessingMessage2 = data?.blessingMessage2 || "WE CORDIALLY INVITE YOU TO CELEBRATE THE WEDDING OF";
  const brideParentsTitle = data?.brideParentsTitle || "Beloved Daughter of";
  const brideParentsDetails = data?.brideParentsDetails || "Mr. & Mrs. Sharma";
  const groomParentsTitle = data?.groomParentsTitle || "Beloved Son of";
  const groomParentsDetails = data?.groomParentsDetails  || "Mr. & Mrs. Kapoor";
  const jointext = data?.jointext || "Join us as we celebrate this beautiful union with love, laughter, and cherished memories.";
  const Logo = data?.Logo;
  
  return (
    <>
      <div
        className="bg-[url('/assets/respo_two.png')] md:bg-[url('/assets/bg_two.webp')] md:bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${coupleBg})`}}
      >
        <div className="flex flex-col items-center h-180 md:h-210 lg:h-400 3xl:h-400 md:gap-3 lg::gap-8 3xl:gap-8">
          <p className="font-eb-garamond font-normal text-xs md:text-lg md:tracking-widest lg:tracking-normal lg:text-[26px] mt-20 md:mt-24 lg:mt-60 text-center bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
            {title}
          </p>
          <p className="font-eb-garamond font-medium text-3xl md:text-5xl lg:text-[82px] mt-5 md:mt-0 text-center bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
            {description}
          </p>
          <div className="flex justify-center gap-4 md:gap-10 lg:gap-20 p-0">
            <hr className="w-15 md:w-20 lg:w-40 my-2 md:my-0 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
            <hr className="w-15 md:w-20 lg:w-40 my-2 md:my-0 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-6 md:gap-20 lg:gap-24 md:mt-4 lg:mt-0">
            <div
              className="flex justify-center items-center bg-[url('/assets/square_frame.webp')] bg-cover bg-no-repeat bg-center w-18 h-18 md:w-25 md:h-25 lg:w-40 lg:h-40 "
              style={{backgroundImage: `url(${assets.square_frame})` }}
            >
              <div className="flex flex-col leading-none">
                <span className="font-eb-garamond font-normal text-xl md:text-5xl lg:text-[50px] text-center text-[#E1B340]">
              {timeLeft.days}
                </span>
                <span className="font-eb-garamond font-normal text-[12px] md:text-base lg:text-[22px] text-center text-[#E1B340]">
                 DAYS  </span>
              </div>
            </div>
            <div
              className="flex justify-center items-center bg-[url('/assets/square_frame.webp')] bg-cover bg-no-repeat bg-center w-18 h-18 md:w-25 md:h-25 lg:w-40 lg:h-40 "
              style={{backgroundImage: `url(${assets.square_frame})`}}
            >
              <div className="flex flex-col leading-none">
                <span className="font-eb-garamond font-normal text-xl md:text-5xl lg:text-[50px] text-center text-[#E1B340]">
                   {timeLeft.hours}
                </span>
                <span className="font-eb-garamond font-normal text-[12px] md:text-base lg:text-[22px] text-center text-[#E1B340]">
                    HRS
                </span>
              </div>
            </div>
            <div
              className="flex justify-center items-center bg-[url('/assets/square_frame.webp')] bg-cover bg-no-repeat bg-center w-18 h-18 md:w-25 md:h-25 lg:w-40 lg:h-40"
              style={{backgroundImage:`url(${assets.square_frame})`}}
            >
              <div className="flex flex-col leading-none">
                <span className="font-eb-garamond font-normal text-xl md:text-5xl lg:text-[50px] text-center text-[#E1B340]">
                {timeLeft.minutes}
                </span>
                <span className="font-eb-garamond font-normal text-[12px] md:text-base lg:text-[22px] text-center text-[#E1B340]">
                    MINS
                </span>
              </div>
            </div>
            <div
              className="flex justify-center items-center bg-[url('/assets/square_frame.webp')] bg-cover bg-no-repeat bg-center w-18 h-18 md:w-25 md:h-25 lg:w-40 lg:h-40"
              style={{ backgroundImage:`url(${assets.square_frame})` }}
            >
              <div className="flex flex-col leading-none">
                <span className="font-eb-garamond font-normal text-xl md:text-5xl lg:text-[50px] text-center text-[#E1B340]">
                   {timeLeft.seconds}
                </span>
                <span className="font-eb-garamond font-normal text-[12px] md:text-base lg:text-[22px] text-center text-[#E1B340]">
                 SECS
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center bg-[url('/assets/countdown_frame.webp')] bg-cover bg-no-repeat bg-center w-93 h-73 md:w-162 md:h-126 lg:w-230 lg:h-178 mt-10 md:mt-0 lg:mt-20 mx-22"
            style={{ backgroundImage: `url(${assets.countdown_frame})` }}
          >
            <div className="flex flex-col justify-center items-center mt-2 lg:mt-4">
              {/* <img
                src={assets.aum}
                alt="aum"
                className="w-7 h-10 md:w-14 md:h-20 lg:w-22 lg:h-29"
              /> */}
              <img src={data?.religiousSign || assets.aum} alt="logo" width={250} height={300} className="w-7 h-10 md:w-14 md:h-20 lg:w-22 lg:h-29" />
              <p className="font-eb-garamond font-normal text-xs md:text-base lg:text-[22px] mt-1 lg:mt-2 text-center text-[#E1B340]">
                 {blessingMessage}
              </p>
              <p className="font-eb-garamond font-normal text-[10px] md:text-base lg:text-[26px] mt-1 md:mt-2 lg:mt-4 text-center text-[#E1B340]">
                {blessingMessage2}
              </p>
              <p className="font-eb-garamond font-normal text-[26px] md:text-3xl lg:text-[32px] 3xl:text-[42px] mt-1 md:mt-2 lg:mt-4 text-center tracking-widest bg-linear-to-r from-[#D99447] via-[#F5C691] to-[#D99447] bg-clip-text text-transparent">
                {data.brideName} & {data.groomName}
              </p>
              <div className="flex justify-center gap-14 lg:gap-20 ">
                <hr className="w-22 my-1 lg:my-0 md:w-30 lg:w-30 3xl:w-42 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
                <hr className="w-22 my-1 lg:my-0 md:w-30 lg:w-30 3xl:w-42 bg-linear-to-r from-[#D99447] via-[#D99447] to-[#D99447] p-px rounded-xl" />
              </div>
              <div className="flex gap-10">
                <p className="font-eb-garamond font-medium text-xs md:text-base lg:text-[22px] text-[#E1B340] mt-1 md:mt-4 text-center">
                  {brideParentsTitle} <br /> {brideParentsDetails}
                </p>
                <p className="font-eb-garamond font-medium text-xs md:text-base lg:text-[22px] text-[#E1B340] mt-1 md:mt-4 text-center">
                 {groomParentsTitle} <br /> {groomParentsDetails}
                </p>
              </div>
              <p className="font-eb-garamond font-medium text-xs md:text-base lg:text-[22px] mt-2 md:mt-8 text-center text-[#E1B340] md:px-30 px-8">
                {/* Join us as we celebrate this beautiful union <br /> with love,
                laughter, and cherished memories. */}
                {jointext}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
