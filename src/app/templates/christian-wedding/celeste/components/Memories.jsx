import { assets } from "../assets";

export default function Memories({ data }) {
  const rsvpMode = data?.rsvpMode || data?.customData?.rsvpMode || "whatsapp";

  const whatsappNumber =
    data?.whatsappNumber || data?.customData?.whatsappNumber || "919876543210";

  const whatsappHref = `https://wa.me/${String(whatsappNumber).replace(/\D/g, "")}`;

  const rsvpSectionHeading =
    data?.rsvpHeading || data?.customData?.rsvpHeading || "Need Assistance?";

  const rsvpButtonText =
    rsvpMode === "form"
      ? data?.rsvpFormButtonText ||
        data?.customData?.rsvpFormButtonText ||
        "Fill RSVP Form"
      : data?.rsvpWhatsappButtonText ||
        data?.customData?.rsvpWhatsappButtonText ||
        "Click the link to RSVP";

  const rsvpGoogleFormLink =
    data?.rsvpGoogleFormLink || data?.customData?.rsvpGoogleFormLink || "";

  const rsvpSectionDetails =
    data?.rsvpSectionDetails || "We’re happy to help during your stay.";

  return (
    <div className="pt-20">
      <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] text-center">
        {data.chaptersText}
      </p>
      <h1 className="mt-4 font-bona-nova text-[30px] 3xl:text-[55px] text-[#172319] leading-16 text-center">
        {data.chaptersTitle}
      </h1>
      <p className="text-[#172319] text-[14px] md:text-[16px] px-12 md:mt-6  mt-4 text-center italic font-playfair-display">
        {data.chaptersDesc}
      </p>

      <section className="relative min-h-screen overflow-hidden px-6 py-16">
        <div className="relative mx-auto max-w-4xl min-h-[750px]">
          {/* Top Left Heart */}
          <div className="absolute left-[8%] top-0 z-10 text-5xl text-[#4d4942]">
            ♡
          </div>

          {/* Top Left Image */}
          <div className="absolute left-[4%] top-12 z-20 md:w-[260px] w-[160px] rotate-[-5deg] bg-white p-3 pb-7 shadow-[0_12px_25px_rgba(0,0,0,0.15)]">
            <img
              src={data?.coupleMessageImages?.image1 || assets.wedding_1}
              alt="Wedding"
              className="md:h-[300px] h-[170px] w-full object-cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="absolute right-[5%] top-10 z-20 md:w-[260px] w-[160px] rotate-[5deg] bg-white p-3 pb-7 shadow-[0_12px_25px_rgba(0,0,0,0.15)]">
            <img
              src={data?.coupleMessageImages?.image2 || assets.wedding_2}
              alt="Wedding"
              className="md:h-[300px] h-[170px] w-full object-cover"
            />
          </div>

          {/* Center Image */}
          <div className="absolute left-1/2 top-[190px] z-30 md:w-[260px] w-[150px] -translate-x-1/2 rotate-[-1deg] bg-white p-3 pb-8 shadow-[0_15px_30px_rgba(0,0,0,0.18)]">
            <img
              src={data?.coupleMessageImages?.image3 || assets.wedding_3}
              alt="Wedding"
              className="md:h-[300px] h-[180px] w-full object-cover"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="absolute md:bottom-[10px] top-[380px] left-[10%] z-20 md:w-[240px] w-[170px] rotate-[-6deg] bg-white p-3 pb-7 shadow-[0_12px_25px_rgba(0,0,0,0.15)]">
            <img
              src={data?.coupleMessageImages?.image4 || assets.wedding_4}
              alt="Wedding"
              className="md:h-[300px] h-[170px] w-full object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute md:bottom-[5px] top-[350px] md:right-[10%] right-[0%] z-20 md:w-[240px] w-[150px] rotate-[6deg] bg-white p-3 pb-7 shadow-[0_12px_25px_rgba(0,0,0,0.15)]">
            <img
              src={data?.coupleMessageImages?.image5 || assets.wedding_5}
              alt="Wedding"
              className="md:h-[300px] h-[170px] w-full object-cover"
            />
          </div>

          {/* Bottom Center Image */}
          <div className="absolute top-144 left-1/2 z-30 md:w-[255px] w-[180px] -translate-x-1/2 rotate-[-2deg] bg-white p-3 pb-7 shadow-[0_12px_25px_rgba(0,0,0,0.18)]">
            <img
              src={data?.coupleMessageImages?.image6 || assets.wedding_6}
              alt="Wedding"
              className="md:h-[185px] h-[110px] w-full object-cover"
            />
          </div>

          {/* Decorative Hearts */}
          <div className="absolute right-[2%] top-[43%] z-40 text-4xl text-[#4d4942]">
            ♡<span className="text-3xl">♡</span>
          </div>

          <div className="absolute bottom-[4%] right-[1%] z-10 text-6xl text-[#4d4942]">
            ♡
          </div>

          <div className="absolute bottom-[1%] left-[3%] z-10 text-3xl text-[#4d4942]">
            ♡
          </div>
        </div>
      </section>

      <div className="mt-20">
        <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] text-center">
          {data.guestText}
        </p>
        <h1 className="mt-4 font-bona-nova text-[30px] 3xl:text-[55px] text-[#172319] leading-16 text-center">
          {data.guestTitle}
        </h1>
        <p className="text-[#172319] text-[14px] md:text-[16px] px-12 mt-2 text-center italic font-playfair-display">
          {data.guestDesc}
        </p>

        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Top Cards */}
          <section className="relative bg-[#fdf9f1] py-16 overflow-hidden">
            {/* Top Decoration */}
            <div className="flex justify-center mb-8 text-[#b89d62] text-xs tracking-[4px]">
              — ◇ ◇ ◇ —
            </div>

            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* Card 1 */}
                <div className="group overflow-hidden rounded-lg bg-[#fffdf8] border border-[#eee6d8] shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                  <div className="relative h-[170px] overflow-hidden">
                    <img
                      // src={assets.guest_1}
                       src={data?.coupleMessageWeatherImage || assets.guest_1}
                      alt="Dress Code"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105  rounded-t-full"
                    />

                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#fffdf8] border border-[#d8c49a] flex items-center justify-center text-xs">
                      ♧
                    </div>
                  </div>

                  <div className="px-5 pt-5 pb-6 text-center">
                    <p className="text-[9px] tracking-[2px] text-[#8d806c]">
                      {data.dressText}
                    </p>

                    <h3 className="mt-2 font-cormorant-garamond text-xl text-[#403a32]">
                      {data.dressTitle}
                    </h3>

                    <p className="mt-2 text-[11px] leading-5 text-[#777066]">
                      {data.dressDesc}
                    </p>

                    <div className="mt-4 border-t border-[#eee5d8] pt-4">
                      <p className="text-[8px] tracking-[1.5px] text-[#999083]">
                        {data.dressNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group overflow-hidden rounded-lg bg-[#fffdf8] border border-[#eee6d8] shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                  <div className="relative h-[170px] overflow-hidden">
                    <img
                      // src={assets.guest_2}
                       src={data?.coupleMessageLocationImage || assets.guest_2}
                      alt="Stay With Us"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105  rounded-t-full"
                    />

                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#fffdf8] border border-[#d8c49a] flex items-center justify-center text-xs">
                      🛏
                    </div>
                  </div>

                  <div className="px-5 pt-5 pb-6 text-center">
                    <p className="text-[9px] tracking-[2px] text-[#8d806c]">
                      {data.stayText}
                    </p>

                    <h3 className="mt-2 font-cormorant-garamond text-xl text-[#403a32]">
                      {data.stayTitle}
                    </h3>

                    <p className="mt-2 text-[11px] leading-5 text-[#777066]">
                      {data.stayDesc}
                    </p>

                    <div className="mt-4 border-t border-[#eee5d8] pt-4">
                      <p className="text-[8px] tracking-[1.5px] text-[#999083]">
                        {data.stayNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group overflow-hidden rounded-lg bg-[#fffdf8] border border-[#eee6d8] shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                  <div className="relative h-[170px] overflow-hidden  rounded-t-full">
                    <img
                      // src={assets.guest_3}
                      src={data?.coupleMessageParkingImage || assets.guest_3}
                      alt="Food and Drinks"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#fffdf8] border border-[#d8c49a] flex items-center justify-center text-xs">
                      🍷
                    </div>
                  </div>

                  <div className="px-5 pt-5 pb-6 text-center">
                    <p className="text-[9px] tracking-[2px] text-[#8d806c]">
                      {data.foodText}
                    </p>

                    <h3 className="mt-2 font-cormorant-garamond text-xl text-[#403a32]">
                      {data.foodTitle}
                    </h3>

                    <p className="mt-2 text-[11px] leading-5 text-[#777066]">
                      {data.foodDesc}
                    </p>

                    <div className="mt-4 border-t border-[#eee5d8] pt-4">
                      <p className="text-[8px] tracking-[1.5px] text-[#999083]">
                        {data.foodNote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="group overflow-hidden rounded-lg bg-[#fffdf8] border border-[#eee6d8] shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-xl">
                  <div className="relative h-[170px] overflow-hidden">
                    <img
                      // src={assets.guest_4}
                       src={data?.coupleMessageRequestImage || assets.guest_4}
                      alt="A Few Requests"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-full"
                    />

                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#fffdf8] border border-[#d8c49a] flex items-center justify-center text-xs">
                      ♡
                    </div>
                  </div>

                  <div className="px-5 pt-5 pb-6 text-center">
                    <p className="text-[9px] tracking-[2px] text-[#8d806c]">
                      {data.requestText}
                    </p>

                    <h3 className="mt-2 font-cormorant-garamond text-xl text-[#403a32]">
                      {data.requestTitle}
                    </h3>

                    <p className="mt-2 text-[11px] leading-5 text-[#777066]">
                      {data.requestDesc}
                    </p>

                    <div className="mt-4 border-t border-[#eee5d8] pt-4">
                      <p className="text-[8px] tracking-[1.5px] text-[#999083]">
                        {data.requestNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Decoration */}
            <div className="flex justify-center mt-10 text-[#b89d62] text-xs tracking-[4px]">
              — ◇ —
            </div>

            {/* Decorative Hearts */}
            <div className="absolute top-14 left-12 text-2xl text-[#4d4941]">
              ♡
            </div>

            <div className="absolute bottom-8 right-10 text-3xl text-[#4d4941]">
              ♡
            </div>

            <div className="absolute bottom-4 left-8 text-xl text-[#4d4941]">
              ♡
            </div>
          </section>


          <div className="mx-auto max-w-2xl md:px-6 px-2 py-10 text-center rounded-xl">
            <h2 className="font-cormorant-garamond md:text-4xl text-3xl text-black">
              {rsvpSectionHeading}
            </h2>

            <p className="mt-2 text-sm italic text-[#68738a]">
              {rsvpSectionDetails}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-5">
              {rsvpMode === "form" ? (
                <a
                  href={rsvpGoogleFormLink || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-[#cbd8c1] px-6 py-3 text-sm font-medium text-black"
                >
                  {rsvpButtonText}
                </a>
              ) : (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-[#cbd8c1] px-6 py-3 text-sm font-medium text-black"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f5ed]">
                    ☎
                  </span>

                  {rsvpButtonText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="md:mt-30 mt-20 flex flex-col items-center ">
        <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] text-center">
          {data.thankyouText}
        </p>
        <h2 className="mt-4 font-bona-nova text-[30px] 3xl:text-[55px] text-[#172319] leading-16 text-center">
          {data.thankyouTitle}
        </h2>
        <h2 className="mt-4 font-parisienne-regular text-[30px] 3xl:text-[45px] text-[#9E824A] leading-16 text-center">
          {data.thankyouSubTitle}
        </h2>
        <p className="text-[#172319] text-[14px] md:text-[16px] px-12  italic font-playfair-display mt-6 text-center max-w-150">
          {data.thankyouDesc}
        </p>

        <section className="w-full bg-[#fdf9f1] py-16">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-14 px-6 md:grid-cols-3 md:gap-4">
            {/* Prayer */}
            <div className="text-center">
              {/* <div className="mx-auto flex h-[45px] w-[45px] md:h-[74px] md:w-[74px] items-center justify-center rounded-full border-2 border-[#ead9b8]">
                <span className="text-4xl font-light text-[#c5a15a]">♡</span>
              </div> */}
 <img
                      // src={assets.guest_4}
                       src={data?.coupleMessagePrayerImage || assets.prayer}
                      alt="Prayer"
                      className="mx-auto object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-full"
                    />
              <h2 className="mt-5 text-[18px] md:text-2xl font-light tracking-[5px] text-[#26352b]">
                {data.prayerTitle}
              </h2>

              <p className="mt-2 text-[14px] font-light text-[#77736d]">
                {data.prayerDesc}
              </p>
            </div>

            {/* Presence */}
            <div className="text-center">
               <img
                      // src={assets.guest_4}
                       src={data?.coupleMessagePresenceImage || assets.presence}
                      alt="Prayer"
                      className="mx-auto object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-full"
                    />

              <h2 className="mx-auto mt-5 text-[18px] md:text-2xl font-light leading-[1.15] tracking-[5px] text-[#26352b]">
                {data.presenceTitle}
              </h2>

              <p className="mt-2 text-[14px] font-light text-[#77736d]">
                {data.presenceDesc}
              </p>
            </div>

            {/* Love */}
            <div className="text-center">
               <img
                      // src={assets.guest_4}
                       src={data?.coupleMessageLoveImage || assets.love}
                      alt="Prayer"
                      className="mx-auto object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-full"
                    />

              <h2 className="mt-5 text-[18px] md:text-2xl font-light tracking-[5px] text-[#26352b]">
                {data.loveTitle}
              </h2>

              <p className="mt-2 text-[14px] font-light text-[#77736d]">
                {data.loveDesc}
              </p>
            </div>
          </div>
        </section>

        <h2 className=" font-parisienne-regular text-[30px] 3xl:text-[35px] text-[#9E824A] leading-16 text-center">
          With Love
        </h2>

        <h2 className="mt-4 font-bona-nova text-[25px] md:text-[40px] 3xl:text-[50px] text-[#172319] tracking-widest text-center">
          {data.groomName} & {data.brideName}
        </h2>
        <img
          src={assets.memories_bottom}
          alt="icon"
          className=" object-contain md:mt-30 mt-20"
        />
      </div>
    </div>
  );
}
