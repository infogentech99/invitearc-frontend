import Image from "next/image";
import {assets} from "../assets";
export default function GuideForGuests({data}) {
  return (
    <section className="relative overflow-hidden bg-[url('/assets/guest_bg.webp')] bg-cover bg-no-repeat px-5 py-16 md:px-8 md:py-20 lg:min-h-[620px] lg:px-10 lg:py-24" style={{
          backgroundImage: `url(${assets.guest_bg})`,
        }}>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto max-w-[900px]">

        {/* TITLE */}
        <div className="text-center">

          <h2 className="font-playfair-display italic text-[27px] font-medium text-[#96652e] md:text-[32px] lg:text-[50px]">
            {data.coupleMessageThingsToKnowTitle}
          </h2>

          <p className="mt-2 font-serif text-[8px] tracking-wide text-[#9a9387] md:text-[9px] lg:text-[12px]">
            {data.coupleMessageThingsToKnowDescription}
          </p>

          {/* Divider */}
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#e5d5b6]" />
            {/* <span className="text-[8px] text-[#d5bd91]">✦</span> */}
             <img
                src={assets.ico}
                alt="couple5"
               
                className="object-contain h-3 w-4"
              
              />
            <span className="h-[2px] w-10 bg-[#e5d5b6]" />
          </div>

        </div>


        {/* ================= GUIDE CARDS ================= */}
        <div className="mx-auto mt-8 grid max-w-[900px] grid-cols-2 gap-4 md:mt-9 md:grid-cols-3 md:gap-5 lg:mt-10 lg:gap-5">

          {/* WEATHER */}
          <div className="flex min-h-[125px] flex-col items-center justify-center bg-[#fffefd] px-4 py-5 text-center shadow-[0_1px_4px_rgba(130,100,60,0.04)] md:min-h-[280px]">
            
            {/* <GiSunCloud className="text-[42px] font-light text-[#d6b878] md:text-[48px]" /> */}
 <img
                src={data?.coupleMessageWeatherImage || assets.weather}
                alt="couple5"
               
                className="object-contain h-30 w-40"
              
              />
            <h3 className="mt-1 font-serif text-[16px] text-[#95642d] md:text-[20px]">
              {data.coupleMessageWeatherTitle}
            </h3>

            <p className="mt-2 font-serif text-[10px] leading-[1.5] text-[#8f897f] md:text-[12px] px-3">
              {data.coupleMessageWeatherDetails}
            </p>

          </div>


          {/* ACCOMMODATION */}
          <div className="flex min-h-[125px] flex-col items-center justify-center bg-[#fffefd] px-4 py-5 text-center shadow-[0_1px_4px_rgba(130,100,60,0.04)] md:min-h-[140px]">

       <img
                src={data?.coupleMessageStaffImage || assets.accom}
                alt="couple5"
               
                className="object-contain h-30 w-40"
              
              />
            <h3 className="mt-1 font-serif text-[12px] text-[#95642d] md:text-[20px]">
              {data.coupleMessageAccommodationTitle}
            </h3>

            <p className="mt-2 font-serif text-[10px] leading-[1.5] text-[#8f897f] md:text-[12px] px-3">
              {data.coupleMessageAccommodationDetails}
            </p>

          </div>


          {/* PARKING */}
          <div className="flex min-h-[125px] flex-col items-center justify-center bg-[#fffefd] px-4 py-5 text-center shadow-[0_1px_4px_rgba(130,100,60,0.04)] md:min-h-[140px]">

            <img
                src={data?.coupleMessageParkingImage || assets.parking}
                alt="couple5"
               
                className="object-contain h-30 w-40"
              
              />
            <h3 className="mt-1 font-serif text-[12px] text-[#95642d] md:text-[20px]">
              {data.coupleMessageParkingTitle}
            </h3>

            <p className="mt-2 font-serif text-[10px] leading-[1.5] text-[#8f897f] md:text-[12px] px-3">
              {data.coupleMessageParkingDetails}
            </p>

          </div>


          {/* DRESS CODE */}
          <div className="flex min-h-[125px] flex-col items-center justify-center bg-[#fffefd] px-4 py-5 text-center shadow-[0_1px_4px_rgba(130,100,60,0.04)] md:min-h-[140px]">

                 <img
                src={data?.coupleMessageDressImage || assets.dress}
                alt="couple5"
               
                className="object-contain h-30 w-40"
              
              />
            <h3 className="mt-1 font-serif text-[12px] text-[#95642d] md:text-[20px]">
              {data.coupleMessageDressTitle}
            </h3>

            <p className="mt-2 font-serif text-[10px] leading-[1.5] text-[#8f897f] md:text-[12px] px-3">
              {data.coupleMessageDressDetails}
            </p>

          </div>


          {/* CEREMONY */}
          <div className="flex min-h-[125px] flex-col items-center justify-center bg-[#fffefd] px-4 py-5 text-center shadow-[0_1px_4px_rgba(130,100,60,0.04)] md:min-h-[140px]">
       <img
                src={data?.coupleMessageCeremonyImage || assets.ceremony}
                alt="couple5"
               
                className="object-contain h-30 w-40"
              
              />
            <h3 className="mt-1 font-serif text-[12px] text-[#95642d] md:text-[20px]">
              {data.coupleMessageCeremonyTitle}
            </h3>

            <p className="mt-2 font-serif text-[10px] leading-[1.5] text-[#8f897f] md:text-[12px] px-3">
              {data.coupleMessageCeremonyDetails}
            </p>

          </div>


          {/* CONTACT */}
          <div className="flex min-h-[125px] flex-col items-center justify-center bg-[#fffefd] px-4 py-5 text-center shadow-[0_1px_4px_rgba(130,100,60,0.04)] md:min-h-[140px]">

                 <img
                src={data?.coupleMessageContactImage || assets.contact}
                alt="couple5"
               
                className="object-contain h-30 w-40"
              
              />
            <h3 className="mt-1 font-serif text-[12px] text-[#95642d] md:text-[20px]">
              {data.coupleMessageContactTitle}
            </h3>

            <p className="mt-2 font-serif text-[10px] leading-[1.5] text-[#8f897f] md:text-[12px] px-3">
              {data.coupleMessageContactDetails}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}