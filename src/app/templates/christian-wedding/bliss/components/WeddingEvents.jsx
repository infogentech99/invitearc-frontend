"use client";

import Image from "next/image";
import {assets} from "../assets";

const events = [
  {
    title: "Engagement",
    date: "June 15, 2025",
    venue: "The Conservatory Garden",
    image: assets.engagement,
  },
  {
    title: "Bachelor Party",
    date: "April 20, 2024",
    venue: "The Oak Room",
    image: assets.bachelor,
  },
  {
    title: "Bridal Shower",
    date: "April 12, 2024",
    venue: "The Rosewood Tearoom",
    image: assets.bridal,
  },
  {
    title: "Rehearsal Dinner",
    date: "September 27, 2024",
    venue: "Estate Winery",
    image: assets.rehearsal,
  },
];

const reception = {
  title: "The Reception",
  image: assets.reception,
  description:
    "Following the ceremony at Five O'Clock Dinner, dancing, and celebration will immediately follow the ceremony. Formal attire requested.",
  venue: "The Grand Ballroom at The Palace Hotel",
};

export default function WeddingEvents() {
  const leftEvents = events.filter((_, index) => index % 2 === 0);
  const rightEvents = events.filter((_, index) => index % 2 !== 0);

  return (
    <section className="relative min-h-screen py-8 lg:py-10 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, transparent 0 7px, #d9c4a7 7px 8px, transparent 8px),
            linear-gradient(45deg, transparent 46%, #eadcca 47%, transparent 48%),
            linear-gradient(-45deg, transparent 46%, #eadcca 47%, transparent 48%)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 max-w-312.5 mx-auto px-5">
        {/* ================= EVENTS ================= */}
        <div className="hidden md:grid md:grid-cols-[1fr_1.45fr_1fr] gap-6 lg:gap-8">
          {/* ================= LEFT EVENTS ================= */}
          <div
            className={`flex flex-col ${
              leftEvents.length === 1 ? "justify-center" : "justify-between"
            }`}
          >
            {leftEvents.map((event) => (
              <div
                key={event.title}
                className="flex flex-col items-center text-center"
              >
                {/* Image */}
                <div className="relative w-[185px] h-[185px] lg:w-[220px] lg:h-[270px]">
                  <div className="absolute inset-0 p-[4px]">
                    <div className="relative w-full h-full overflow-hidden rounded-[4px]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-contain"
                        sizes="115px"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-1 font-playfair-display text-[13px] lg:text-[28px] text-[#9d6b32]">
                  {event.title}
                </h3>

                {/* Date + Venue */}
                <p className="mt-1 text-[8px] lg:text-[12px] leading-[1.5] text-[#4B4738]">
                  {event.date}
                </p>

                <p className="mt-1 font-serif text-[8px] lg:text-[12px] leading-[1.5] text-[#4B4738]">
                  {event.venue}
                </p>
                {/* Location */}
                <button className="mt-1 text-[7px] lg:text-[12px] tracking-widest text-[#9d6b32] font-bold">
                  View Location
                </button>
              </div>
            ))}
          </div>

          {/* ================= CENTER WEDDING ================= */}
          <div className="bg-white border border-[#eee7dc] px-4 py-5 lg:px-5 lg:py-6">
            {/* Main Image */}
            <div className="relative w-full aspect-[0.82]  overflow-hidden">
              <Image
                src={assets.wedding}
                alt="Wedding Ceremony"
                fill
                priority
                className="object-contain"
                sizes="350px"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h2 className="mt-3 font-serif italic text-[18px] lg:text-[28px] text-[#9d6b32]">
                Wedding Ceremony
              </h2>

              <p className="mt-1 text-[6px] uppercase tracking-[0.18em] text-[#b89565]">
                SACRED UNION
              </p>

              <div className="mt-3 font-serif text-[8px] lg:text-[12px] leading-[1.7] text-[#817464]">
                <p>Saturday, September 28, 2024</p>
                <p>Two O'Clock in the Afternoon</p>

                <p className="mt-2">Grace Cathedral</p>

                <p>San Francisco, California</p>
              </div>

              <button className="mt-3 font-serif text-[7px] lg:text-[12px] tracking-wide text-[#9d6b32]">
                View Location
              </button>
            </div>
          </div>

          {/* ================= RIGHT EVENTS ================= */}
          <div
            className={`flex flex-col ${
              rightEvents.length === 1 ? "justify-center" : "justify-between"
            }`}
          >
            {rightEvents.map((event) => (
                 <div
                key={event.title}
                className="flex flex-col items-center text-center"
              >
                {/* Image */}
                <div className="relative w-[185px] h-[185px] lg:w-[220px] lg:h-[270px]">
                  <div className="absolute inset-0 p-[4px]">
                    <div className="relative w-full h-full overflow-hidden rounded-[4px]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-contain"
                        sizes="115px"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mt-1 font-playfair-display text-[13px] lg:text-[28px] text-[#9d6b32]">
                  {event.title}
                </h3>

                {/* Date + Venue */}
                <p className="mt-1 text-[8px] lg:text-[12px] leading-[1.5] text-[#4B4738]">
                  {event.date}
                </p>

                <p className="mt-1 font-serif text-[8px] lg:text-[12px] leading-[1.5] text-[#4B4738]">
                  {event.venue}
                </p>
                {/* Location */}
                <button className="mt-1 text-[7px] lg:text-[12px] tracking-widest text-[#9d6b32] font-bold">
                  View Location
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE EVENTS ================= */}
        <div className="md:hidden">
          {/* Center Wedding */}
          <div className="max-w-[330px] mx-auto bg-white border border-[#eee7dc] px-4 py-5">
            <div className="relative w-full aspect-[0.82] overflow-hidden">
              <Image
                src={assets.wedding}
                alt="Wedding Ceremony"
                fill
                priority
                className="object-cover"
                sizes="330px"
              />
            </div>

            <div className="text-center">
              <h2 className="mt-3 font-serif italic text-[18px] text-[#9d6b32]">
                Wedding Ceremony
              </h2>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#b89565]">
                SACRED UNION
              </p>

              <div className="mt-3 font-serif text-[10px] leading-[1.7] text-[#817464]">
                <p>Saturday, September 28, 2024</p>
                <p>Two O'Clock in the Afternoon</p>
                <p className="mt-2">Grace Cathedral</p>
                <p>San Francisco, California</p>
              </div>

              <button className="mt-3 font-serif text-[12px] text-[#9d6b32]">
                View Location
              </button>
            </div>
          </div>

          {/* Mobile Event Cards */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-9 mt-8">
            {events.map((event) => (
              <div
                key={event.title}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-[145px] h-[145px]">
                  <div className="absolute inset-0 border border-[#d8bb91] rounded-[7px] p-[4px]">
                    <div className="relative w-full h-full overflow-hidden rounded-[4px]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        sizes="105px"
                      />
                    </div>
                  </div>
                </div>

                <h3 className="mt-3 font-serif italic text-[16px] text-[#9d6b32]">
                  {event.title}
                </h3>

                <p className="mt-1 font-serif text-[10px] leading-[1.5] text-[#8d7964]">
                  {event.date}
                  <br />
                  {event.venue}
                </p>

                <button className="mt-1 font-serif text-[10px] text-[#9d6b32]">
                  View Location
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RECEPTION ================= */}
        <div className="w-full max-w-[700px] mx-auto mt-8 md:mt-12 lg:mt-10 bg-white border border-[#eee7dc] p-3 lg:p-4">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            {/* Image */}
            <div className="relative w-full sm:w-[55%] aspect-[1.45] shrink-0 overflow-hidden">
              <Image
                src={reception.image}
                alt={reception.title}
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-left">
              <h2 className="font-playfair-display italic text-[18px] lg:text-[28px] text-[#9d6b32]">
                {reception.title}
              </h2>

              <p className="mt-1 font-serif text-[12px] lg:text-[12px] leading-[1.6] text-[#817464]">
                {reception.description}
              </p>

              <p className="mt-3 font-serif text-[12px] lg:text-[12px] text-[#817464]">
                {reception.venue}
              </p>

              <button className="mt-2 font-serif text-[12px] lg:text-[12px] tracking-widest font-bold text-[#9d6b32]">
                View Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
