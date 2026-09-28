"use client";

import Image from "next/image";
import {assets} from "../assets"
export default function IntroducingCouple({data}) {
  return (
    <section className="relative lg:min-h-screen overflow-hidden  py-14 md:py-16 lg:py-20 mt-4 md:mt-32">

      <div className="relative z-10 mx-auto max-w-[850px] px-5">

        {/* ================= TITLE ================= */}
        <h2 className="text-center font-playfair-display font-medium italic text-[#98662e] text-[27px] md:text-[32px] lg:text-[50px]">
          {data.coupleMessageTitle}
        </h2>


        {/* ================= PHOTO COLLAGE ================= */}
        <div className="relative mx-auto mt-8 md:mt-10 h-[410px] md:h-[450px] lg:h-[560px] max-w-[800px]">


          {/* ================= IMAGE 1 - TOP LEFT ================= */}
          <div
            className="
              absolute
              left-[8%]
              top-[10%]
              w-[130px]
              md:w-[115px]
              lg:w-[200px]
              rotate-[3deg]
              bg-white
              p-[7px]
              pb-[20px]
              shadow-[0_3px_8px_rgba(80,60,40,0.18)]
            "
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={assets.couple1}
                alt="Couple"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>


          {/* ================= IMAGE 2 - TOP RIGHT ================= */}
          <div
            className="
              absolute
              right-[20%]
              top-[18%]
              w-[105px]
              md:w-[95px]
              lg:w-[155px]
              rotate-[6deg]
              bg-white
              p-[6px]
              pb-[18px]
              shadow-[0_3px_8px_rgba(80,60,40,0.18)]
            "
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={data?.coupleMessageImages?.image1 || assets.couple2}
                alt="Couple2"
                fill
                className="object-cover"
                sizes="155px"
              />
            </div>
          </div>


          {/* ================= IMAGE 3 - LEFT MIDDLE ================= */}
          <div
            className="
              absolute
              left-[2%]
              top-[60%]
              w-[115px]
              md:w-[105px]
              lg:w-[165px]
              rotate-[12deg]
              bg-white
              p-[6px]
              pb-[18px]
              shadow-[0_3px_8px_rgba(80,60,40,0.18)]
            "
          >
            <div className="relative aspect-[1.25] overflow-hidden">
              <Image
                src={data?.coupleMessageImages?.image2 || assets.couple3}
                alt="Couple3"
                fill
                className="object-cover"
                sizes="165px"
              />
            </div>
          </div>


          {/* ================= IMAGE 4 - LEFT BOTTOM ================= */}
          <div
            className="
              absolute
              left-[20%]
              md:top-[75%]
              top-[85%]
              w-[125px]
              md:w-[115px]
              lg:w-[180px]
              rotate-[-5deg]
              bg-white
              p-[7px]
              pb-[22px]
              shadow-[0_4px_10px_rgba(80,60,40,0.18)]
            "
          >
            <div className="relative aspect-[0.72] overflow-hidden">
              <Image
                src={data?.coupleMessageImages?.image3 || assets.couple4}
                alt="couple4"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </div>


          {/* ================= CENTER MAIN IMAGE ================= */}
          <div
            className="
              absolute
              left-1/2
              top-[47%]
              z-20
              w-[205px]
              md:w-[185px]
              lg:w-[320px]
              -translate-x-1/2
              rotate-[-1deg]
              bg-white
              p-[8px]
              pb-[32px]
              shadow-[0_5px_12px_rgba(80,60,40,0.18)]
            "
          >
            <div className="relative aspect-[1.45] overflow-hidden">
              <Image
                src={data?.coupleMessageImages?.image4 || assets.couple5}
                alt="couple5"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>

            {/* Center Caption */}
            <p className="absolute bottom-[8px] left-0 right-0 text-center font-serif italic text-[9px] md:text-[10px] lg:text-[15px] text-[#98662e]">
              {data.groomName} &  {data.brideName}
            </p>
          </div>


          {/* ================= IMAGE 5 - RIGHT BOTTOM ================= */}
          <div
            className="
              absolute
              right-[14%]
              md:top-[70%]
              top-[80%]
              w-[115px]
              md:w-[105px]
              lg:w-[165px]
              rotate-[-4deg]
              bg-white
              p-[7px]
              pb-[22px]
              shadow-[0_4px_10px_rgba(80,60,40,0.18)]
            "
          >
            <div className="relative aspect-[0.72] overflow-hidden">
              <Image
                src={data?.coupleMessageImages?.image5 || assets.couple6}
                alt="couple6"
                fill
                className="object-cover"
                sizes="165px"
              />
            </div>
          </div>


          {/* ================= IMAGE 6 - FAR RIGHT ================= */}
          <div
            className="
              absolute
              right-[1%]
              top-[58%]
              w-[75px]
              md:w-[70px]
              lg:w-[110px]
              rotate-[2deg]
              bg-white
              p-[5px]
              pb-[15px]
              shadow-[0_3px_8px_rgba(80,60,40,0.18)]
            "
          >
            <div className="relative aspect-[0.72] overflow-hidden">
              <Image
                src={data?.coupleMessageImages?.image6 || assets.couple7}
                alt="Wedding Memory"
                fill
                className="object-cover"
                sizes="110px"
              />
            </div>
          </div>

        </div>


        {/* ================= DESCRIPTION ================= */}
        <p className="mx-auto mt-50 max-w-[520px] text-center font-serif text-[12px] md:text-[12px] lg:text-[16px] leading-[1.7] text-[#8d7964]">
          {data.coupleMessageDescription}
        </p>

      </div>
    </section>
  );
}