"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown({ data }) {
  const targetDate = data?.marriageCountdownDate || "2026-12-21";
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
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown(); // first run
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      <h2 className="md:mt-8 lg:mt-12 flex flex-col items-center gap-2 md:gap-6 text-[#FFB700] text-3xl md:text-5xl lg:text-[60px] 3xl:text-[80px] playfair-display">
        {data.marriageCountdownTitle}
      </h2>
      <div className="text-[32px] md:text-4xl lg:text-7xl text-center text-[#FFB700] playfair-display flex flex-col-1 gap-2 md:mt-10 lg:mt-20 mt-14">
        <div className="border-r lg:px-12 md:px-8 px-5">
          {timeLeft.days} <br />
          <h2 className="md:text-2xl text-[16px]">Days </h2>
        </div>

        <div className="border-r lg:px-12 md:px-8 px-5">
          {timeLeft.hours}
          <br />
          <h2 className="md:text-2xl text-[16px]">Hours </h2>
        </div>
        <div className="border-r lg:px-12 md:px-8 px-5">
          {timeLeft.minutes} <br />
          <h2 className="md:text-2xl text-[16px]">Minutes </h2>
        </div>
        <div className="lg:px-12 md:px-8 px-5">
          {timeLeft.seconds} <br />
          <h2 className="md:text-2xl text-[16px]">Seconds</h2>
        </div>
      </div>
    </>
  );
}
