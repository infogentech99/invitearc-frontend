"use client";

import Image from "next/image";

const cards = [
  ["/assets/hero_1.webp", "/assets/hero_2.webp", "/assets/hero_3.webp"],
  ["/assets/hero_4.webp", "/assets/hero_5.webp", "/assets/hero_6.webp"],
  ["/assets/hero_7.webp", "/assets/hero_8.webp", "/assets/hero_9.webp"],
  ["/assets/hero_10.webp", "/assets/hero_12.webp", "/assets/hero_3.webp"],
];

export default function HeroSection() {
  return (
    <section className="bg-[#8C1E1E] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-[#F8E8C8] font-semibold text-2xl mb-5 font-georgia">
              Introducing
            </p>

            <h2 className="text-[#F8E8C8] text-4xl md:text-5xl font-georgia font-bold leading-tight">
              Modern Website Invites
              <br />
              for Weddings
            </h2>
          </div>

          <div className="flex flex-col justify-center text-white">
            <p className="text-lg leading-relaxed max-w-xl">
              Stop sending invites. Start creating experiences. Turn your
              Wedding invite into a website with InviteArc – design, share &
              manage every detail from one powerful platform.
            </p>

            <h3 className="text-[#F8E8C8] text-2xl font-georgia font-semibold mt-8">
              Effortless to customise. Magical to experience.
            </h3>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto px-5 lg:px-8">
        <div className="mt-20 overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 md:gap-6 lg:gap-8 min-w-max lg:min-w-0 justify-center">
            {cards.map((images, index) => (
              <div
                key={index}
                className="
                  w-[43vw] sm:w-[44vw] md:w-[29.5vw] lg:w-75 h-85 md:h-107.5 lg:h-120
                  rounded-full
                  overflow-hidden
                  border-[5px]
                  border-[#F8E8C8]
                  bg-[#5a1717]
                  shrink-0
                "
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
                      width={400}
                      height={300}
                      className="
                        w-full
                        h-42.5
                        md:h-53.75
                        lg:h-62.5
                        object-cover
                        shrink-0
                      "
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
