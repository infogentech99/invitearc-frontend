"use client";

import { motion } from "framer-motion";
import {assets} from "../assets";
import SvgIcon from "./SvgIcon";

const EASE_SOFT_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_BOUNCE = [0.68, -0.55, 0.265, 1.55] as const;

// interface EventSectionProps {
//   id?: number;
//   eventName: string;
//   date: string; 
//   venue?: string;
//   time?: string;
//   img?: string;
//   location?: string;
//   locationLink?: string;
//   eventIntro?:string;
// }

// interface EventItem {
//   id?: number;
//   eventName: string;
//   date: string;
//   venue?: string;
//   time?: string;
//   img?: string;
//   location?: string;
//   locationLink?: string;
//   eventIntro?: string;
// }

interface EventShowProps {
  events?: Array<Record<string, any>>;
  mapLink?: string;
  eventIntro?: string;
}

const defaultEvents = [
  {
    id: 1,
    eventName: "Mehandi",
    date: "Saturday, April 18th 2026",
    time: "Join Us at 11 am",
    venue: "The Leela Palace, Udaipur",
    img: assets.mehandi,
  },
  // {
  //   id: 2,
  //   eventName: "Haldi",
  //   date: "Saturday, April 18th 2026",
  //   time: "Join Us at 11 am",
  //   venue: "The Leela Palace, Udaipur",
  //   img: "/assets/haldi.webp",
  // },
  // {
  //   id: 3,
  //   eventName: "Cocktail",
  //   date: "Saturday, April 18th 2026",
  //   time: "Join Us at 11 am",
  //   venue: "The Leela Palace, Udaipur",
  //   img: "/assets/cocktails.webp",
  // },
  // {
  //   id: 4,
  //   eventName: "Pre-wedding",
  //   date: "Saturday, April 18th 2026",
  //   time: "Join Us at 11 am",
  //   venue: "The Leela Palace, Udaipur",
  //   img: "/assets/Pre_wedding.webp",
  // },
  {
    id: 5,
    eventName: "Marriage",
    date: "Saturday, April 18th 2026",
    time: "Join Us at 11 am",
    venue: "The Leela Palace, Udaipur",
    img: assets.shaadi,
  },
  {
    id: 6,
    eventName: "Reception",
    date: "Saturday, April 18th 2026",
    time: "Join Us at 11 am",
    venue: "The Leela Palace, Udaipur",
    img: assets.reception,
  },
];

const EventShow = ({
  events = defaultEvents,
  // mapLink = '#',
  eventIntro = 'On the following events',
//   Eventsname = [
//   {
//     id: 1,
//     eventName: "Mehandi",
//     date: "Saturday, April 18th 2026",
//     time: "Join Us at 11 am",
//     venue: "The Leela Palace, Udaipur",
//     img: assets.mehandi,
//   },
//   {
//     id: 2,
//     eventName: "Marriage",
//     date: "Saturday, April 18th 2026",
//     time: "Join Us at 11 am",
//     venue: "The Leela Palace, Udaipur",
//     img: assets.shaadi,
//   },
//   {
//     id: 3,
//     eventName: "Reception",
//     date: "Saturday, April 18th 2026",
//     time: "Join Us at 11 am",
//     venue: "The Leela Palace, Udaipur",
//     img: assets.reception,
//   },
// ],
  

}: EventShowProps) => {
const displayEvents = events.length > 0 && events[0].eventName ? events : defaultEvents;

  return (
    <section className="w-full relative text-[#7A5192]">
      <img
        src={assets.bg_four}
        alt="background"
        className="w-full contain-content h-570 lg:h-auto md:h-500 "
      />
      <motion.img
        src={assets.birds}
        alt="bird couple"
        className="absolute lg:top-10 top-5 right-0 md:top-5 lg:w-70 md:w-35 lg:h-60 w-20 h-15 md:h-30"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 4,
          ease: EASE_SOFT_OUT,
          repeat: Infinity,
          repeatDelay: 0,
        }}/>

      <p className="font-eb-garamond font-medium text-base lg:text-[56px] text-[#BD8C1C] text-center absolute left-1/2 
                    -translate-x-1/2 md:text-3xl lg:top-50 top-17.5 md:top-45">
        {eventIntro}
      </p>
      <div className="absolute left-3/6 -translate-x-1/2 lg:top-90 top-30 grid grid-cols-1 md:top-75 
                      md:grid-cols-2 lg:grid-cols-3 md:gap-20 gap-6 place-items-center">
        {displayEvents.map((ev, index) => (
          <motion.section
            key={ev.id || index}
            className="text-center"
            whileHover={{
              scale: 1.08,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.4, ease: EASE_SOFT_OUT },
            }}
          >
            <motion.img
              src={ev.img || '/assets/mehandi.png'}
              alt={ev.eventName}
              className="w-80 object-contain"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3 + index * 0.3,
                ease: EASE_SOFT_OUT,
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
            <h4 className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-[42px] lg:mt-4 mt-0 md:mt-1">{ev.eventName}</h4>
            <div className="font-eb-garamond font-medium text-sm lg:text-lg leading-[120%] mt-2 md:mt-1 md:text-[15px]">
              {ev.date} <br />
              {ev.time} <br />
              {ev.venue} 
            </div>
          </motion.section>
        ))}
      </div>
      
      <motion.img
        src={assets.fountainleft}
        alt="fountain"
        className="absolute -bottom-2 left-0 w-40 h-70 md:w-60 md:h-150 lg:w-xl lg:h-206"/>

      <motion.img
        src={assets.fountainRight}
        alt="fountain"
        className="absolute -bottom-2.5 right-0 w-40 md:w-60 md:h-80 lg:w-xl lg:h-115"/>
        
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`water-right-${i}`}
          className="absolute w-1.5 h-1.5 md:w-3 md:h-3 rounded-full pointer-events-none"
        />
      ))}
      <motion.img
        src={assets.horse}
        alt="wedding-photo"
        className="object-cover absolute -bottom-10 md:-bottom-16 lg:-bottom-20 left-1/2 -translate-x-1/2 h-60 md:h-135 lg:h-182 z-50"/>
    </section>
  );
};

export default EventShow;
