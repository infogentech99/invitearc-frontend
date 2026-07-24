"use client";

import Image from "next/image";

const cards = [
  [
    "/assets/hero_1.webp",
    "/assets/hero_2.webp",
    "/assets/hero_3.webp",
    
  ],
  [
    "/assets/hero_4.webp",
    "/assets/hero_5.webp",
    "/assets/hero_6.webp",
    
  ],
  [
     "/assets/hero_7.webp",
    "/assets/hero_8.webp",
    "/assets/hero_9.webp",
  ],
  [
      "/assets/hero_10.webp",
    "/assets/hero_12.webp",
    "/assets/hero_3.webp",
  ],
];

export default function HeroSection() {
  return (
    <section className="bg-[#8C1E1E] py-24 overflow-hidden">
      <div className="max-w-370 mx-auto px-6">
        {/* Heading */}

        {/* <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#F8E8C8] text-2xl font-semibold mb-5">
              Introducing
            </p>

            <h2 className="text-[#F8E8C8] text-5xl font-bold leading-tight">
              Modern Website Invites
              <br />
              for Weddings
            </h2>
          </div>

          <div className="flex flex-col justify-center text-white">
            <p className="text-lg leading-8">
              Stop sending invites. Start creating experiences.
              Turn your Wedding invite into a website with InviteArc –
              design, share & manage every detail from one powerful platform.
            </p>

            <h3 className="mt-8 text-[#F8E8C8] text-2xl font-semibold">
              Effortless to customise. Magical to experience.
            </h3>
          </div>
        </div> */}

          <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <p className="text-[#F8E8C8] font-semibold text-2xl mb-5 font-georgia">
              Introducing
            </p>

            <h2 className="text-[#F8E8C8] md:text-5xl text-4xl font-georgia leading-tight font-bold">
              Modern Website Invites
              <br />
              for Weddings
            </h2>
          </div>

          <div className="text-white flex flex-col justify-center">
            <p className="text-[18px] leading-relaxed max-w-xl">
              Stop sending invites. Start creating experiences.
              Turn your Wedding invite into a website with InviteArc –
              design, share & manage every detail from one powerful platform.
            </p>

            <h3 className="text-[#F8E8C8] text-2xl font-georgia font-semibold mt-8">
              Effortless to customise. Magical to experience.
            </h3>
          </div>

        </div>

        {/* Cards */}

        <div className="mt-20 flex justify-center gap-8 flex-wrap lg:flex-nowrap">

          {cards.map((images, index) => (

            <div
              key={index}
              className="md:w-75 md:h-120 h-85 w-40 rounded-full overflow-hidden border-[5px] border-[#F8E8C8] bg-[#5a1717]"
            >

              <div
                className={`flex flex-col ${
                  index % 2 === 0
                    ? "animate-marquee-up"
                    : "animate-marquee-down"
                }`}
              >
                {[...images, ...images].map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    alt=""
                    width={300}
                    height={250}
                    className="w-full h-full object-cover shrink-0"
                  />
                ))}
              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}