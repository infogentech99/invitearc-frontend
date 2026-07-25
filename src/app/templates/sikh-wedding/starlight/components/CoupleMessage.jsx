"use client";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {assets} from "../assets";

export default function CoupleMessage() {
    const TARGET_DATE = new Date("2026-10-12").getTime();
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
                setTimeLeft({ days: 30, hours: 10, minutes: 30 });
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (diff % (1000 * 60 * 60)) / (1000 * 60)
            );

            setTimeLeft({ days, hours, minutes });
        };

        updateCountdown(); // first run
        const interval = setInterval(updateCountdown, 60000); // every minute

        return () => clearInterval(interval);
    }, []);


    const testimonial = [
        {
            img: '/assets/one.webp',
        },

        {
            img: '/assets/two.webp',
        },

        {
            img: '/assets/three.webp',
        },

        {
            img: '/assets/four.webp',
        },

        {
            img: '/assets/five.webp',
        }, 
        
        {
            img: '/assets/one.webp',
        },

        {
            img: '/assets/two.webp',
        },

        {
            img: '/assets/three.webp',
        },
    ]


    return (

        <div className="bg-[url('/assets/respo_bg_two.webp')] md:bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${assets.bg_two})` }}>
             <div className="h-689 md:h-685 lg:h-1050 3xl:h-1067">
                <h1 className="eb-garamond font-medium text-base md:text-2xl lg:text-[38px] text-center text-[#FFD74B] lg:pt-40 pt-20">INTRODUCING</h1>
                <h2 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFD74B] px-3 md:px-17 lg:px-51 3xl:px-103 mt-12 lg:mt-24 leading-5 md:leading-tight">
                    The Couple
                </h2>

                <div className="md:mt-32 mt-26 lg:mt-44 flex justify-center items-center overflow-visible">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        loop
                        centeredSlides={true}
                        
                        pagination={{ clickable: true }}
                        className="w-full py-12 max-w-screen-3xl overflow-visible"
                        breakpoints={{
                            0: {
                                slidesPerView: 1.50,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2.2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1536: {
                                slidesPerView: 3.5,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {testimonial.map((item, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <img
                                    src={item.img}
                                    alt=""
                                    className="w-full h-120 md:h-90 lg:h-135 3xl:h-175 object-cover rounded-[60px]"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                 

              <div className=" h-100 lg:h-180 flex justify-center gap-0 items-center md:mt-40 lg:mt-80 3xl:mt-40 md:pr-5 lg:pr-10 3xl:pr-30">
                <div className="bg-[url('/assets/RSVP_Symbol.webp')] w-65 h-65 md:w-100 md:h-100 lg:w-150 lg:h-150 bg-contain bg-no-repeat" style={{ backgroundImage: `url(${assets.rsvp_symbol})` }}>
                <h2 className="eb-garamond font-medium text-center text-xl md:text-3xl lg:text-[46px] text-[#8B4302] pt-15 md:pt-25 lg:pt-40 3xl:pt-40 leading-5 md:leading-8 lg:leading-12">
                  Awaiting the <br /> Pleasure of <br/> Your Company
                </h2>
                <div className="flex flex-col justify-center items-center mt-2 md:not-first:mt-4">
                <h2 className="eb-garamond font-semibold text-xs md:text-sm lg:text-[20px] text-[#8B4302]">
                  Click the link to RSVP
                </h2>
                <br />
                <a href="#" target="_blank">
                  <img src={assets.whatsapp} alt="icon" className=" w-8 h-8 md:w-10 md:h-10 lg:w-15 lg:h-15 3xl:w-20 3xl:h-20" />
                </a>
                </div>
              </div>
            </div>

          <h1 className="parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFD74B] pt-10 md:pt-35 lg:pt-65 3xl:pt-70 leading-tight">
            A Guide For <br /> Guests
          </h1>
          
          <div className="flex justify-center mt-10 md:mt-20 pb-10 md:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-20 lg:gap-0 3xl:gap-0">
              <div className=" flex flex-col items-center justify-center text-center">
                <img
                  src={assets.weather}
                  alt="weather"
                  className="w-31 h-25 md:w-24 md:h-22 lg:w-33 lg:h-26"
                />
                <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                  Weather
                </h2>
                <p className="eb-garamond font-normal text-sm lg:text-xl text-[#FFD74B] mt-1 md:leading-5">
                  A delighful day awaits <br /> with pleasant weather <br /> and mild temperatures.
                </p>
              </div>
              <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFD74B] lg:my-28" />
              <div className=" flex flex-col items-center justify-center text-center">
                <img
                  src={assets.staff}
                  alt="drive"
                  className="w-28 h-35 md:w-17 md:h-23 lg:w-21 lg:h-27"
                />
                <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                  Staff
                </h2>
                <p className="eb-garamond font-normal text-sm lg:text-xl md:leading-5 text-[#FFD74B] mt-1">
                  For those traveling from afar, <br /> Royal Orchid Suites offers a <br /> comfortable stay nearby.
                </p>
              </div>
              <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFD74B] lg:my-28" />
              <div className=" flex flex-col items-center justify-center text-center">
                <img
                  src={assets.parking}
                  alt="car"
                  className="w-31 h-25 md:w-26 md:h-23 lg:w-30 lg:h-27"
                />
                <h2 className="eb-garamond font-normal text-[40px] md:text-3xl lg:text-[42px] text-[#FFD74B] mt-1">
                  Parking
                </h2>
                <p className="eb-garamond font-normal text-sm lg:text-xl md:leading-5 text-[#FFD74B] mt-1">
                  Guests can enjoy hassle <br /> free parking facilities <br /> available at the venue.
                </p>
              </div>
            </div>
          </div>

          <h2 className="eb-garamond font-medium text-xl md:text-xl lg:text-[28px] text-center text-[#FFD74B] px-4 md:px-20 lg:px-56 3xl:px-107 pt-0 md:pt-22 lg:pt-40 3xl:pt-46 mt-2 lg:mt-4 lg:leading-tight">
            Your presence means the world to us. To make your experience <br className="hidden md:block" />
            effortless and enjoyable, we've gathered a few useful details below.
          </h2>             

            <div className="flex flex-col h-50 md:h-89 lg:h-200 3xl:h-210 md:gap-3 lg:gap-8 3xl:gap-8 items-center text-center">
              <h2 className="parisienne-regular font-normal text-2xl md:text-4xl lg:text-6xl text-center text-[#FFD74B] pt-40 md:pt-60 lg:pt-75 3xl:pt-55">The Journey Begins</h2>
              <p className="eb-garamond font-medium text-xs md:text-xl lg:text-[28px] text-[#FFD74B] mt-4 text-center px-6 md:px-25 lg:px-65 3xl:px-120">
                Surrounded by family and friends, we can't wait to celebrate <br /> this beautiful moment with you.
              </p> 
              <hr className="w-42 md:w-66 lg:w-94 border lg:border-2 border-[#FFD74B] my-2 md:my-4 lg:my-4" />
              <h2 className="eb-garamond font-normal text-2xl md:text-5xl lg:text-[80px] text-center text-[#FFD74B]"> {timeLeft.days}D - {timeLeft.hours}H - {timeLeft.minutes}M</h2>
                    
              <div className="flex flex-col-1 gap-4 justify-center items-center mt-2 md:mt-0">
                  <a href="https://www.instagram.com/theinvitearc/" target="_blank"><img src={assets.instagram} alt="icon" className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12"/></a>
                       
              </div>
              <p className="eb-garamond font-normal text-xs md:text-sm lg:text-base text-[#FFD74B] mt-2 md:mt-0 text-center">
                  © <a href="https://invitearc.com/" target="_blank">InviteArc</a> 2026 </p>
            </div>

            </div>
        </div>

    );
}