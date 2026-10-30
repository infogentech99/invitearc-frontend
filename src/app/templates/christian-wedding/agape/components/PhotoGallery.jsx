"use client";

import { useState } from "react";
import { assets } from "../assets";

export default function PhotoGallery({ data }) {
  const images = [
    assets.main_book,
    data?.coupleBookImage1 || assets.book_1,
    data?.coupleBookImage2 || assets.book_2,
    data?.coupleBookImage3 || assets.book_3,
    data?.coupleBookImage4 || assets.book_4,
    data?.coupleBookImage5 || assets.book_5,
  ];
  const N = images.length;
  const FLIP_MS = 1000;
  const [flipped, setFlipped] = useState(0);
  const [dir, setDir] = useState(1);
  const [last, setLast] = useState(1);

  const handleClick = () => {
    const nextFlipped = flipped + dir;
    setLast(dir);
    setFlipped(nextFlipped);

    if (nextFlipped === N - 1) setDir(-1);
    if (nextFlipped === 0) setDir(1);
  };

  return (
    <section id="photos" className="w-full scroll-mt-6 overflow-x-clip">
      {/* Book */}
      <div className="flex flex-col items-center mt-16 pb-32">
        <div
          onClick={handleClick}
          className="relative w-[300px] h-[420px] md:w-[380px] md:h-[520px] cursor-pointer"
          style={{ perspective: "1800px" }}
        >
          {images.map((src, index) => {
            const isFlipped = index < flipped;

            // Forward: z-index flip ke end me badle. Reverse: turant top pe aaye.
            const zDelay = last === 1 ? FLIP_MS : 0;

            return (
              <div
                key={src}
                className="absolute inset-0 pointer-events-none"
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                  transition: `transform ${FLIP_MS}ms cubic-bezier(0.645, 0.045, 0.355, 1), z-index 0s linear ${zDelay}ms`,
                  zIndex: isFlipped ? index : 2 * N - index,
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  draggable={false}
                  className="w-full h-full object-contain rounded-r-2xl rounded-l-sm"
                  style={{ backfaceVisibility: "hidden" }}
                />
                {/* Main Book Cover Text */}
                {index === 0 && (
                  <div
                    className="absolute inset-0 z-10 flex flex-col items-center  text-center pointer-events-none"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <div className="mt-12">
                      <h2 className="text-[12px] md:text-[14px] text-[#E2C382E5] manrope uppercase">
                        {data.bookWeddingText}
                      </h2>
                      <h2 className="playfair-display italic text-[38px] 3xl:text-[48px] text-[#FBF9F6] text-center md:mt-30 mt-20">
                        {data.artOfUsText}
                      </h2>
                      <h2 className="text-[12px] md:text-[14px] text-[#E2C382E5] manrope italic">
                        {data.artOfUsDescription}
                      </h2>
                      <p className="border border-[#E2C382] py-1.5 rounded-full text-[#E2C382] font-cormorant-garamond text-[11px] mt-17 md:mt-30 w-40 mx-auto text-center">
                        {data.bookButtonText}
                      </p>
                      <h2 className="text-[12px] md:text-[12px] text-[#f1f1f1] manrope mt-3">
                        {data.bookWeddingDateVenue}
                      </h2>
                    </div>
                  </div>
                )}
                {/* Spine shadow */}
                <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-black/30 to-transparent rounded-l-sm pointer-events-none" />
              </div>
            );
          })}

          {/* Cover hint */}
          {flipped === 0 && (
            <div className="absolute inset-0 z-[100] flex items-center justify-center rounded-2xl bg-black/10 opacity-0 hover:opacity-100 transition-opacity">
              {/* <span className="bg-white/90 px-5 py-2 rounded-full text-[#B35800] font-cormorant-garamond text-xl">
                Click to open
              </span> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
