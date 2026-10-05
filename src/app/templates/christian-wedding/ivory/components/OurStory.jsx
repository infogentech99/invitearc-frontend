"use client";
import { assets } from "../assets";
import "../ivory-globals.css";
export default function OurStory({ data }) {
  return (
    <div className=" top-10 md:top-20 lg:top-50 flex flex-col items-center text-center md:mt-20 mt-10">
      <img
        src={assets.icon}
        alt="icon"
        className="md:w-60 md:h-10 w-30 object-contain mb-5"
      />

      <p className="text-[#685D4A] font-semibold tracking-widest text-[12px] md:text-[14px]">
        {data.ceremonyInfo}
      </p>

      <div className="w-full px-6 py-6 text-[#685D4A] mt-16">
      <div
    className="absolute inset-x-0 top-0 -z-10 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${assets.story_bg})`,
      bottom: "50px",
    }}
  />
        {/* Parents Section */}
        <div className="flex w-full justify-center px-4">
          <div className="grid w-full max-w-[1000px] grid-cols-2 gap-4 text-center">
            {/* Groom */}
            <div className="flex flex-col items-center">
              <p className="text-[#685D4A] font-semibold tracking-widest text-[10px] md:text-[14px] uppercase">
                {data.groomParentTitle}
              </p>

              <p className="font-bona-nova text-[18px] md:text-[30px] 3xl:text-[34px] leading-tight mt-2">
                {data.groomParentSurname}
              </p>

              <p className="font-bona-nova text-[18px] md:text-[30px] 3xl:text-[34px] leading-tight">
                {data.groomDetails}
              </p>
            </div>

            {/* Bride */}
            <div className="flex flex-col items-center">
              <p className="text-[#685D4A] font-semibold tracking-widest text-[10px] md:text-[14px] uppercase">
                {data.brideParentTitle}
              </p>

              <p className="font-bona-nova text-[18px] md:text-[30px] 3xl:text-[34px] leading-tight mt-2">
                {data.birdeParentSurname}
              </p>

              <p className="font-bona-nova text-[18px] md:text-[30px] 3xl:text-[34px] leading-tight">
                {data.brideDetails}
              </p>
            </div>
          </div>
        </div>

        {/* Couple Intro */}
        <div className="mt-8 text-center">
          <p className="font-cormorant text-[16px] tracking-wide">
            {data.inviteLine}
          </p>

          <h1 className="mt-10 font-bona-nova text-[40px] 3xl:text-[60px] text-[#685D4A]">
            {data.groomName}{" "}
            <span className="font-bona-nova text-[28px] md:text-[50px]">&</span>{" "}
            {data.brideName}
          </h1>

          <div className="mx-auto mt-2 h-px w-16 bg-[#b9a98d]" />
        </div>

        {/* Venue */}
        <div className="mt-20 text-center">
          <p className="text-[#685D4A] font-semibold tracking-widest text-[10px] md:text-[14px] uppercase">
            THE VENUE
          </p>

          <h2 className="mt-3 font-bona-nova text-[20px] 3xl:text-[40px] text-[#685D4A]">
            {data.venue}
          </h2>

          <p className="mt-1 font-bona-nova text-[20px] 3xl:text-[16px] text-[#685D4A]">
            {data.venueLocation}
          </p>
        </div>

        {/* Date */}
        <div className="mt-12 text-center">
          <p className="text-[#685D4A] font-semibold tracking-widest text-[10px] md:text-[14px] uppercase ">
            DATE & TIME
          </p>

          <div className="mt-3 flex items-center justify-center gap-5">
            <div>
              <p className="font-bona-nova text-[18px] md:text-[32px]">
                {data.eventDay}
              </p>
              <p className="text-[12px]">{data.eventTime}</p>
            </div>

            <div className="h-8 w-px bg-[#c5b9a5]" />

            <div>
              <p className="font-bona-nova text-[18px] md:text-[32px]">
                {data.eventMonth}
              </p>
              <p className="text-[12px]">{data.eventYear}</p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="mt-24 text-center">
          <div className="mb-1 flex items-center justify-center gap-2">
            <img
              src={assets.icon}
              alt="icon"
              className="md:w-60 md:h-10 w-30 object-contain mb-5"
            />
          </div>

          <h2 className="font-bona-nova text-[20px] 3xl:text-[30px] tracking-[0.2em]">
            {data.storyTitle}
          </h2>

          <p className="mx-auto mt-3 max-w-[800px] md:text-[16px] text-[12px] leading-[1.5] text-[#817666]">
            {data.storyDescription}
          </p>
        </section>
      </div>

      <div className="w-full  px-6 py-6 text-[#685D4A]">
        {/* Image Collage */}
        <section className="mt-5 md:mt-20  grid w-full max-w-[800px] grid-cols-2 grid-rows-3 gap-2 mx-auto">
          {/* Large Left Image */}
          <div className="row-span-2 overflow-hidden rounded-lg">
            <img
              src={data?.coupleMessageImages?.image1 || assets.couple5}
              alt="Couple"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Top Right */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={data?.coupleMessageImages?.image2 || assets.couple3}
              alt="Couple"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Middle Right */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={data?.coupleMessageImages?.image3 || assets.couple2}
              alt="Couple"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom Left */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={data?.coupleMessageImages?.image4 || assets.couple1}
              alt="Couple"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom Right */}
          <div className="overflow-hidden rounded-lg">
            <img
              src={data?.coupleMessageImages?.image5 || assets.couple4}
              alt="Couple"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Bottom Quote */}
        <p className="mt-4 md:mt-6 text-center font-cormorant text-[16px] md:text-[20px] italic text-[#685D4A]">
          {data.loveQuote}
        </p>
      </div>
    </div>
  );
}
