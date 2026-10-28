import {assets} from "../assets";


export default function Memories({data}) {
  return (
    <div className="md:pt-20 pt-15 bg-[#fdf0e3] flex flex-col justify-center items-center">
      <div className="relative md:w-[412px] md:h-[640px] w-[280px] h-[450px] bg-no-repeat bg-cover bg-center 
      flex flex-col items-center justify-center"  style={{ backgroundImage: `url(${assets.gift_bg})` }}>
        <h1 className="font-bona-nova text-[30px] md:text-[36px] 3xl:text-[36px] text-[#7D4E4E] leading-tight text-center px-20">
          {data.giftsGoodWishes}
        </h1>

        <p className="mt-5 text-[#667085] text-[14px] md:text-[16px] px-20 font-jost text-center leading-relaxed ">
          {data.giftMessage}
        </p>
      </div>


        <a
            href="https://www.instagram.com/theinvitearc/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-30 flex items-center gap-3 font-serif text-[16px] text-[#D49900]"
          >
            <img
              src={assets.instagram}
              alt="Instagram"
              className="object-contain h-4 w-5"
            />

            <span>Follow us on Instagram</span>
          </a>
      <img
        src={assets.gift_bottom}
        alt="icon"
        className=" object-contain"
      />

    </div>
  );
}
