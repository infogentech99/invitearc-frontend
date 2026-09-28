"use client";

import Image from "next/image";
import { assets } from "../assets";

export default function WeddingEvents({ data }) {
  // =========================
  // DYNAMIC EVENTS
  // =========================

  const events = data?.events || [];

  const leftEvents = events.filter((_, index) => index % 2 === 0);
  const rightEvents = events.filter((_, index) => index % 2 !== 0);

  // =========================
  // DYNAMIC WEDDING DATA
  // =========================

  const wedding = data?.wedding || {};

  const weddingTitle =
    wedding?.title || data?.weddingTitle || "Wedding Ceremony";

  const weddingSubtitle =
    wedding?.subtitle || data?.weddingSubtitle || "SACRED UNION";

  const weddingDate =
    wedding?.date || data?.weddingDate || "Saturday, September 28, 2024";

  // const weddingTime =
  //   wedding?.time || data?.weddingTime || "Two O'Clock in the Afternoon";

  const weddingVenue =
    wedding?.venue || data?.weddingVenue || "Grace Cathedral";

  const weddingLocation =
    wedding?.location || data?.weddingLocation || "San Francisco, California";
   
    const weddingLocationLink =
   data?.weddingLocationLink || "https://maps.app.goo.gl/x2JiQwmJHPJUyJMB7";

  const weddingImage = wedding?.image || data?.weddingImage || assets.wedding;

  // =========================
  // COMMON EVENT CARD
  // =========================

  const renderEvent = (event, mobile = false, index = 0) => {
    const title =
      event?.title || event?.title_ceremony || event?.name || "Event";

    const date = event?.date || "";

    const venue = event?.venue || event?.location || "";
    const description = event?.description || "";
    const time = event?.time || "";

    const image =
      event?.image || event?.imageUrl || event?.photo || assets.wedding;

    const alt = event?.alt || title;

    return (
      <div
        key={`${title}-${date}-${event?.id || index}`}
        className="flex flex-col items-center text-center"
      >
        {/* Image */}
        <div
          className={
            mobile
              ? "relative w-[145px] h-[145px]"
              : "relative w-[185px] h-[185px] lg:w-[220px] lg:h-[270px]"
          }
        >
          <div
            className={
              mobile
                ? "absolute inset-0 border border-[#d8bb91] rounded-[7px] p-[4px]"
                : "absolute inset-0 p-[4px]"
            }
          >
            <div className="relative w-full h-full overflow-hidden rounded-[4px]">
              <Image
                src={image}
                alt={alt}
                fill
                className={mobile ? "object-cover" : "object-contain"}
                sizes={mobile ? "105px" : "220px"}
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3
          className={
            mobile
              ? "mt-3 font-serif italic text-[16px] text-[#9d6b32]"
              : "mt-1 font-playfair-display text-[13px] lg:text-[28px] text-[#9d6b32]"
          }
        >
          {title}
        </h3>

        {/* Date + Venue */}
        <p
          className={
            mobile
              ? "mt-1 font-serif text-[10px] leading-[1.5] text-[#8d7964]"
              : "mt-1 text-[8px] lg:text-[12px] leading-[1.5] text-[#4B4738]"
          }
        >
          {date}
          {time && (
            <>
              <br />
              {time}
            </>
          )}

          {mobile && venue && (
            <>
              <br />
              {venue}
            </>
          )}
        </p>

        {!mobile && venue && (
          <p className="mt-1 font-serif text-[8px] lg:text-[12px] leading-[1.5] text-[#4B4738]">
            {venue}
          </p>
        )}

        {description && (
          <p className="mt-1 font-serif text-[8px] lg:text-[12px] leading-[1.5] text-[#4B4738]">
            {description}
          </p>
        )}

        {/* Location */}
        <a
          href={event?.link || undefined}
          target={event?.link ? "_blank" : undefined}
          rel={event?.link ? "noreferrer" : undefined}
          className={
            mobile
              ? "mt-1 font-serif text-[10px] text-[#9d6b32]"
              : "mt-1 text-[7px] lg:text-[12px] tracking-widest text-[#9d6b32] font-bold"
          }
        >
          {event?.locationButtonText || "View Location"}
        </a>
      </div>
    );
  };

  return (
    <section
      id="events-section"
      className="relative lg:min-h-screen py-8 lg:py-10 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(
              circle at center,
              transparent 0 7px,
              #d9c4a7 7px 8px,
              transparent 8px
            ),
            linear-gradient(
              45deg,
              transparent 46%,
              #eadcca 47%,
              transparent 48%
            ),
            linear-gradient(
              -45deg,
              transparent 46%,
              #eadcca 47%,
              transparent 48%
            )
          `,
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative z-10 max-w-312.5 mx-auto px-5">
        {/* ================================================= */}
        {/* DESKTOP */}
        {/* ================================================= */}

        <div className="hidden md:grid md:grid-cols-[1fr_1.45fr_1fr] gap-6 lg:gap-8">
          {/* ================= LEFT EVENTS ================= */}

          <div
            className={`flex flex-col ${
              leftEvents.length === 1 ? "justify-center" : "justify-between"
            }`}
          >
            {leftEvents.map((event, index) => renderEvent(event, false, index))}
          </div>

          {/* ================= CENTER WEDDING ================= */}

          <div className="bg-white border border-[#eee7dc] px-4 py-5 lg:px-5 lg:py-6">
            {/* Main Image */}
            <div className="relative w-full aspect-[0.82] overflow-hidden">
              <Image
                src={weddingImage}
                alt={weddingTitle}
                fill
                priority
                className="object-contain"
                sizes="350px"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <h2 className="mt-3 font-serif italic text-[18px] lg:text-[28px] text-[#9d6b32]">
                {weddingTitle}
              </h2>

              <p className="mt-1 text-[6px] uppercase tracking-[0.18em] text-[#b89565]">
                {weddingSubtitle}
              </p>

              <div className="mt-3 font-serif text-[8px] lg:text-[12px] leading-[1.7] text-[#817464]">
                <p>{weddingDate}</p>

                <p className="mt-2">{weddingVenue}</p>

                <p>{weddingLocation}</p>
              </div>

              <a
                href={weddingLocationLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 font-serif text-[7px] lg:text-[12px] tracking-wide text-[#9d6b32]"
              >
                {wedding?.locationButtonText || "View Location"}
              </a>
            </div>
          </div>

          {/* ================= RIGHT EVENTS ================= */}

          <div
            className={`flex flex-col ${
              rightEvents.length === 1 ? "justify-center" : "justify-between"
            }`}
          >
            {rightEvents.map((event, index) =>
              renderEvent(event, false, index),
            )}
          </div>
        </div>

        {/* ================================================= */}
        {/* MOBILE */}
        {/* ================================================= */}

        <div className="md:hidden">
          {/* ================= CENTER WEDDING ================= */}

          <div className="max-w-[330px] mx-auto bg-white border border-[#eee7dc] px-4 py-5">
            <div className="relative w-full aspect-[0.82] overflow-hidden">
              <Image
                src={weddingImage}
                alt={weddingTitle}
                fill
                priority
                className="object-cover"
                sizes="330px"
              />
            </div>

            <div className="text-center">
              <h2 className="mt-3 font-serif italic text-[18px] text-[#9d6b32]">
                {weddingTitle}
              </h2>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#b89565]">
                {weddingSubtitle}
              </p>

              <div className="mt-3 font-serif text-[10px] leading-[1.7] text-[#817464]">
                <p>{weddingDate}</p>

                <p className="mt-2">{weddingVenue}</p>

                <p>{weddingLocation}</p>
              </div>

              <a
                href={weddingLocationLink}
                target="_blank"
                rel="noreferrer"
                className="mt-3 font-serif text-[12px] text-[#9d6b32]"
              >
                {wedding?.locationButtonText || "View Location"}
              </a>
            </div>
          </div>

          {/* ================= MOBILE EVENTS ================= */}

          <div className="grid grid-cols-2 gap-x-5 gap-y-9 mt-8">
            {events.map((event, index) => renderEvent(event, true, index))}
          </div>
        </div>
      </div>
    </section>
  );
}
