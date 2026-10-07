import { assets } from "../assets";

export default function Memories({ data }) {
  const rsvpMode = data?.rsvpMode || data?.customData?.rsvpMode || "whatsapp";

  const whatsappNumber =
    data?.whatsappNumber || data?.customData?.whatsappNumber || "919876543210";

  const whatsappHref = `https://wa.me/${String(whatsappNumber).replace(/\D/g, "")}`;

  const rsvpSectionHeading =
  data?.rsvpHeading ||
  data?.customData?.rsvpHeading ||
  "Need Assistance?";
  
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

    const rsvpSectionDetails = data?.rsvpSectionDetails || "We’re happy to help during your stay."

  return (
    <div className="3xl:py-20 lg:py-12 pt-15 pb-6">
      <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] text-center">
        {data.memoryText}
      </p>
      <h1 className="md:mt-4 mt-2 font-bona-nova text-[30px] 3xl:text-[55px] text-[#5E7C43] leading-16 text-center">
        {data.memoryTitle}
      </h1>
      <p className="text-[#667085] text-[14px] md:text-[16px] px-12 font-jost md:mt-6 mt-2 text-center">
        {data.memoryDesc}
      </p>

      <div className="relative mx-auto h-[420px] w-full md:max-w-[650px] max-w-[300px] mt-20 px-10">
        {/* Left Top */}
        <div className="absolute top-[10%] -left-[14%] md:left-[3%] lg:-left-[14%] z-10 lg:h-[360px] lg:w-[240px] md:h-[280px] md:w-[150px] h-[180px] w-[120px] overflow-hidden rounded-2xl shadow-md">
          <img
            src={data?.coupleMessageImages?.image1 || assets.couple_2}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Left Bottom */}
       
        <div className="absolute left-[-12%] md:left-[8%] lg:left-[-16%] 3xl:left-[19%] top-[60%] md:top-[80%] lg:top-[90%]  z-20 lg:h-[320px] lg:w-[240px] h-[180px] w-[120px] md:h-[200px] md:w-[160px] overflow-hidden rounded-2xl shadow-md rotate-3">
  <img
    src={data?.coupleMessageImages?.image2 || assets.couple_3}
    alt=""
    className="h-full w-full object-cover"
  />
</div>

        {/* Center Main */}
        <div className="absolute left-1/2 md:top-[16%] top-[30%]  z-30 lg:h-[550px] lg:w-[410px] md:h-[380px] md:w-[240px]  h-[280px] w-[160px] -translate-x-1/2 overflow-hidden rounded-2xl shadow-lg">
          <img
            src={data?.coupleMessageImages?.image3 || assets.couple_1}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Top */}
        <div className="absolute -right-[10%] md:-right-[1%] lg:-right-[15%] top-[10%] z-20 lg:h-[180px] lg:w-[230px] md:h-[150px] md:w-[220px] h-[110px] w-[150px] overflow-hidden rounded-2xl shadow-md">
          <img
            src={data?.coupleMessageImages?.image4 || assets.couple_4}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Middle */}
        <div className="absolute -right-[10%] lg:-right-[25%] md:-right-[6%] md:top-[49%] top-[42%] md:z-30 lg:h-[215px] lg:w-[280px] md:h-[160px] md:w-[240px] h-[100px] w-[110px] overflow-hidden rounded-2xl shadow-md -rotate-2">
          <img
            src={data?.coupleMessageImages?.image5 || assets.couple_6}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Bottom */}
        <div className="absolute md:right-[0%] lg:-right-[27%] -right-[5%]  lg:top-[100%] top-[80%]  top-[94%] z-20 lg:h-[210px] lg:w-[310px] md:h-[140px] md:w-[260px] h-[110px] w-[160px] overflow-hidden rounded-2xl shadow-md">
          <img
            src={data?.coupleMessageImages?.image6 || assets.couple_5}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="lg:mt-100 md:mt-70 mt-40">
        <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] text-center">
          {data.destinationText}
        </p>
        <h1 className="md:mt-4 mt-2 font-bona-nova text-[30px] 3xl:text-[55px] text-[#5E7C43] leading-16 text-center">
          {data.destinationTitle}
        </h1>
        <p className="text-[#667085] text-[14px] md:text-[16px] px-12 font-jost md:mt-6 mt-2 text-center">
          {data.destinationDesc}
        </p>

        <img
          src={assets.destination_logo}
          alt="icon"
          className=" object-contain mb-5"
        />
      </div>

      <div className="mt-20">
        <p className="text-[#727272] font-semibold tracking-widest text-[12px] md:text-[14px] text-center">
          {data.guestText}
        </p>
        <h1 className="md:mt-4 mt-2 font-bona-nova text-[30px] 3xl:text-[55px] text-[#5E7C43] leading-16 text-center">
          {data.guestTitle}
        </h1>
        <p className="text-[#667085] text-[14px] md:text-[16px] px-12 font-jost md:mt-6 mt-2 text-center">
          {data.guestDesc}
        </p>

        <div className="mx-auto max-w-6xl px-6 py-10">
          {/* Top Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Dress Code */}
            <div className="flex min-h-[155px] rounded-2xl border border-[#d8dfd0] bg-white lg:p-8 p-6 md:p-4 shadow-md">
              <div className="mr-6 text-3xl text-[#5f7f43]">👕</div>

              <div>
                <h3 className="font-cormorant-garamond lg:text-3xl md:text-2xl text-2xl text-[#5f7f43]">
                  {data.dressTitle}
                </h3>

                <p className="mt-2 md:text-sm text-[12px] md:leading-6 leading-5 text-[#5c554e]">
                  {data.dressDetails}
                </p>
              </div>
            </div>

            {/* Accommodation */}
            <div className="flex min-h-[155px] rounded-2xl border border-[#d8dfd0] bg-white lg:p-8 p-6 md:p-4  shadow-md">
              <div className="mr-6 text-3xl text-[#5f7f43]">🛏</div>

              <div>
                <h3 className="font-cormorant-garamond md:text-3xl text-2xl text-[#5f7f43]">
                  {data.accommodationTitle}
                </h3>

                <p className="mt-2 md:text-sm text-[12px] md:leading-6 leading-5 text-[#5c554e]">
                  {data.accommodationDetails}
                </p>
              </div>
            </div>

            {/* Dining Experience */}
            <div className="flex min-h-[155px] rounded-2xl border border-[#d8dfd0] bg-white lg:p-8 p-6 md:p-4 shadow-md">
              <div className="mr-6 text-3xl text-[#5f7f43]">🍴</div>

              <div>
                <h3 className="font-cormorant-garamond md:text-3xl text-2xl text-[#5f7f43]">
                  {data.diningTitle}
                </h3>

                <p className="mt-2 md:text-sm text-[12px] md:leading-6 leading-5 text-[#5c554e]">
                  {data.diningDetails}
                </p>
              </div>
            </div>

            {/* Wedding Etiquette */}
            <div className="flex min-h-[155px] rounded-2xl border border-[#d8dfd0] bg-white lg:p-8 p-6 md:p-4 shadow-md">
              <div className="mr-6 text-3xl text-[#5f7f43]">♡</div>

              <div>
                <h3 className="font-cormorant-garamond md:text-3xl text-2xl text-[#5f7f43]">
                  {data.weddingTitle}
                </h3>

                <p className="mt-2 md:text-sm text-[12px] md:leading-6 leading-5 text-[#5c554e]">
                  {data.weddingDetails}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f0f0eb] 3xl:mx-20 lg:mx-10 mx-4 py-10 md:py-20 lg:mt-20 md:mt-12 mt-8 px-4">
          <div className="mx-auto max-w-2xl md:px-6 px-2 py-10 bg-white text-center rounded-xl">
            <h2 className="font-cormorant-garamond md:text-4xl text-3xl text-[#5f7f43]">
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
                  className="flex items-center gap-3 rounded-full border border-[#cbd8c1] px-6 py-3 text-sm font-medium text-[#5f7f43]"
                >
                  {rsvpButtonText}
                </a>
              ) : (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full border border-[#cbd8c1] px-6 py-3 text-sm font-medium text-[#5f7f43]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f5ed]">
                    ☎
                  </span>

                  {rsvpButtonText}
                </a>
              )}
            </div>
          </div>

          <h2 className="flex items-center justify-center gap-4 md:gap-6 text-[#727272] text-3xl md:text-5xl lg:text-[80px] md:mt-20 mt-8">
            <span className="font-playfair-display italic">Daniel</span>
            <span className="font-playfair-display text-base md:text-2xl lg:text-[38px] italic">
              &
            </span>
            <span className="font-playfair-display italic">Grace</span>
          </h2>

          <p className="mt-2 text-sm italic text-[#68738a] text-center">
            We can't wait to celebrate with you
          </p>
        </div>
      </div>
    </div>
  );
}
