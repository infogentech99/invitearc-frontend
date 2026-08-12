"use client";
import { useEffect, useState } from "react";
import {assets} from "../assets";

export default function MarriageCountdown() {
    const TARGET_DATE = new Date("2026-06-09").getTime();
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
                setTimeLeft({ days: 30, hours: 10, minutes: 30, seconds:40 });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateCountdown(); // first run
        const interval = setInterval(updateCountdown, 60000); // every minute

        return () => clearInterval(interval);
    }, []);

    return (
            <> 
                <div className="flex flex-col items-center h-80 md:h-100 lg:h-170 md:gap-3 lg::gap-8 3xl:gap-8">
                    <img src={assets.bg_three_design} alt="frame-design" className="w-16 h-5 md:w-26 md:h-8 lg:w-41 lg:h-10 mt-8 md:mt-15 lg:mt-30"/>
                    <p className="font-parisienne-regular font-normal text-3xl md:text-5xl lg:text-[82px] md:tracking-widest lg:tracking-normal mt-4 md:mt-4 lg:mt-10 text-center text-[#D99447]">
                        Countdown
                    </p> 
                    <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-8 md:gap-8 lg:gap-16 mt-6 md:mt-8 lg:mt-16">
                        <div className="flex justify-center items-center bg-[url('/assets/square_frame.webp')] bg-cover bg-no-repeat bg-center w-31 h-16 md:w-40 md:h-20 lg:w-75 lg:h-39" style={{ backgroundImage: `url(${assets.square_frame})`, }}>
                            <div className="flex flex-col leading-none"> 
                                <span className="font-eb-garamond font-normal text-xl md:text-3xl lg:text-[52px] text-center text-[#E1B340]"> {timeLeft.days} DAYS </span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-[url('/assets/square_frame.webp')] bg-cover bg-no-repeat bg-center w-31 h-16 md:w-40 md:h-20 lg:w-75 lg:h-39" style={{ backgroundImage: `url(${assets.square_frame})`, }}>
                            <div className="flex flex-col leading-none"> 
                                <span className="font-eb-garamond font-normal text-xl md:text-3xl lg:text-[52px] text-center text-[#E1B340]"> {timeLeft.hours} HRS </span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-[url('/assets/square_frame.webp')] bg-cover bg-no-repeat bg-center w-31 h-16 md:w-40 md:h-20 lg:w-75 lg:h-39" style={{ backgroundImage: `url(${assets.square_frame})`, }}>
                            <div className="flex flex-col leading-none"> 
                                <span className="font-eb-garamond font-normal text-xl md:text-3xl lg:text-[52px] text-center text-[#E1B340]"> {timeLeft.minutes} MINS </span>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-[url('/assets/square_frame.webp')] bg-cover bg-no-repeat bg-center w-31 h-16 md:w-40 md:h-20 lg:w-75 lg:h-39" style={{ backgroundImage: `url(${assets.square_frame})`, }}>
                            <div className="flex flex-col leading-none"> 
                                <span className="font-eb-garamond font-normal text-xl md:text-3xl lg:text-[52px] text-center text-[#E1B340]"> {timeLeft.seconds} SECS </span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    );
} 