"use client";
import ScratchText from "./ScratchText";
import PhotoGallery from "./PhotoGallery";
import { assets } from "../assets";
export default function Reception({ data }) {
 
  return (
    <div
      className=" md:pt-50 pt-30"
      style={{ backgroundImage: `url(${assets.story_bg})` }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <img
          src={data?.coupleMessageImages1 || assets.couple_1}
          alt="icon"
          className="md:w-1/5 w-1/2 object-contain"
        />
        <div>
          <h2 className="parisienne-regular text-[26px] md:text-[30px] lg:text-[40px] 3xl:text-[40px] text-center text-[#6E5B53]">
            {data.welcometitle}
          </h2>
          <h2 className="playfair-display text-[20px] md:text-[30px] lg:text-[40px] 3xl:text-[40px] uppercase text-[#685D4A] text-center">
            {data.storyTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-[800px] md:text-[16px] text-[12px] leading-[1.5] text-[#817666] text-center md:px-0 px-5 md:w-90">
            {data.storyDescription}
          </p>
        </div>

        <img
          src={data?.coupleMessageImages2 || assets.couple_2}
          alt="icon"
          className="md:w-1/5 w-1/2 object-contain"
        />
      </div>
      <div className="mb-1 flex flex-col items-center justify-center gap-2 md:mt-60 mt-30">
        <h2 className="font-bona-nova text-[20px] 3xl:text-[18px] tracking-[0.2em] uppercase text-[#685D4A]">
          {data.littleSurpriseTitle}
        </h2>

        <h2 className="playfair-display text-[20px] md:text-[40px]  uppercase text-[#685D4A] text-center">
          {data.noteTitle}
        </h2>
        <p className="mx-auto max-w-[800px] md:text-[16px] text-[12px] leading-[1.5] text-[#817666] text-center md:px-0 px-5 md:w-120">
          {data.noteDescription}
        </p>
        <ScratchText data={data} />
      </div>

      <div className="mb-1 flex flex-col items-center justify-center gap-2 md:mt-60 mt-30">
        <h2 className="font-bona-nova text-[20px] 3xl:text-[18px] tracking-[0.2em] uppercase text-[#685D4A]">
          {data.celebrationTitle}
        </h2>

        <h2 className="playfair-display text-[20px] md:text-[40px] text-[#685D4A] text-center">
          {data.weddingTitle}
        </h2>
        <p className="mx-auto max-w-[800px] md:text-[16px] text-[12px] leading-[1.5] text-[#817666] text-center md:px-0 px-5 md:w-120">
          {data.weddingDescription}
        </p>

        <section className="relative overflow-hidden px-5 py-10 md:px-10 md:py-12">
          {/* Background floral image */}
          <div className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none" />

          <div className="relative mx-auto max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {data?.events?.map((event, index) => (
                <div
                  key={event.title_ceremony || index}
                  className={`
          relative flex min-h-[220px] flex-col items-center
          justify-center px-3 py-8 text-center
          ${index < 2 ? "border-b border-[#e8b58f]" : ""}
          ${index % 2 === 0 ? "md:border-r md:border-[#e8b58f]" : ""}
        `}
                >
                  {/* Event Number */}
                  <span className="mb-1 font-serif text-[19px] tracking-[4px] text-[#efa900]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon and Title */}
                  <div className="flex items-center justify-center gap-3">
                    <span className="shrink-0 text-[15px] text-[#efa900]">
                      <img
                        src={event.image}
                        alt={event.title_ceremony || "Event icon"}
                        className="mx-auto mb-1 h-7 w-7 object-contain"
                      />
                    </span>

                    <h2 className="font-serif text-[29px] leading-tight text-[#455044] sm:text-[34px]">
                      {event.title_ceremony}
                    </h2>
                  </div>

                  <div className="my-2 h-px w-7 bg-[#d9b99b]" />

                  {/* Date and Time */}
                  <p className="font-serif text-[16px] text-[#45483e]">
                    <span className="font-semibold">{event.date}</span>
                    <span className="mx-3">·</span>
                    <span className="font-semibold">{event.time}</span>
                  </p>

                  {/* Location */}
                  <p className="font-serif text-[17px] leading-snug text-[#806c5e]">
                    {event.venue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <p className="mx-auto max-w-[800px] md:text-[22px] text-[12px] leading-[1.5] text-[#FFB700] text-center md:px-0 px-5 playfair-display">
          {data.formalText}
        </p>

        <p className="mx-auto max-w-[800px] md:text-[20px] text-[12px] leading-[1.5] text-[#817666] text-center md:px-0 px-5 playfair-display">
          {data.guestAccomodations}
        </p>
      </div>

      <div className="mb-1 flex flex-col items-center justify-center gap-2 md:mt-60 mt-30">
        <h2 className="font-bona-nova text-[20px] 3xl:text-[18px] tracking-[0.2em] uppercase text-[#685D4A]">
          {data.momentTitle}
        </h2>

        <h2 className="playfair-display text-[20px] md:text-[40px] text-[#685D4A] text-center">
          {data.momentSubTitle}
        </h2>
        <p className="mx-auto max-w-[800px] md:text-[20px] text-[12px] leading-[1.5] text-[#817666] text-center md:px-0 px-5 playfair-display">
          {data.momentDescription}
        </p>

        <PhotoGallery data={data} />

        <a
          href="https://www.instagram.com/theinvitearc/"
          target="_blank"
          rel="noopener noreferrer"
          className="md:mt-30 mt-20 flex items-center gap-3 font-serif text-[16px] text-[#D49900]"
        >
          <img
            src={assets.instagram}
            alt="Instagram"
            className="object-contain h-4 w-5"
          />

          <span>Follow us on Instagram</span>
        </a>
      </div>

      <div className="flex justify-center items-center">
        <img
          src={assets.footer_image}
          alt="icon"
          className="md:mt-40 mt-20 object-contain"
        />
      </div>
    </div>
  );
}
