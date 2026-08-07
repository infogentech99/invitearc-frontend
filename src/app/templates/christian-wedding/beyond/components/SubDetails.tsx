import Image from "next/image";
import {assets} from "../assets";

interface SubDetailsProps {
  socialLinks?: { platform: string; url: string }[];
  temprature?: string;
  staffDetails?: string;
  parkingDetails?: string;
}

const SubDetails = ({ socialLinks, temprature, staffDetails, parkingDetails }: SubDetailsProps) => {
  const instagramLink = socialLinks?.find(link => link.platform.toLowerCase() === 'instagram');
  const instagramHashtag = instagramLink?.url ? `Please use ${instagramLink.url}` : "#abkan";

  const items = [
    {
      img: assets.instagram,
      title: "Instagram",
      className: "w-10 h-10 md:w-10 md:h-12 lg:w-20 lg:h-20",
      desc: `Please include the hashtag #abkan when posting photos on social media - ${instagramHashtag}`,
    },
    {
      img: assets.weather,
      title: "Weather",
      className: "w-10 h-12 md:w-15 md:h-12 lg:w-24 lg:h-21",
      desc: temprature || "A delighful day awaits with pleasant weather and mild temperatures.",
    },
    {
      img: assets.staff,
      title: "Staff",
      className: "w-10 h-12 md:w-15 md:h-12 lg:w-20 lg:h-20",
      desc: staffDetails || "For those traveling from afar, Royal Orchid Suites offers a comfortable stay nearby.",
    },
    {
      img: assets.parking,
      title: "Parking",
      className: "w-10 h-12 md:w-15 md:h-12 lg:w-24 lg:h-21",
      desc: parkingDetails || "Guests can enjoy hassle free parking facilities available at the venue.",
    },
  ];
  
  return (
    <section className="w-full relative text-[#5B78A6] font-Jacques-plain overflow-hidden">
      <Image
        src={assets.bg_six}
        alt="wedding-photo"
        width={1920}
        height={1080}
        className="object-cover w-full h-220 lg:h-full"/>

      <img
        src={assets.flower_set}
        alt="flower set"
        className="w-full absolute -bottom-10 md:-bottom-15 lg:-bottom-40 z-50 object-cover"/>

      <div className="maxcontainer mx-auto bg-white h-250 absolute top-10 left-5 right-5 md:top-30 md:left-30 md:right-30 lg:top-50 lg:left-40 lg:right-40"></div>
      <Image
        src={assets.flower}
        alt="wedding-photo"
        width={1920}
        height={1080}
        className="object-cover absolute w-60 h-35 md:w-40 md:h-80 lg:w-80 lg:h-120 top-0 md:top-10 lg:top-15 md:right-10 -right-17 scale-x-[-1]"/>

        <Image
        src={assets.flower}
        alt="wedding-photo"
        width={1920}
        height={1080}
        className="object-cover absolute w-60 h-35 md:w-80 md:h-80 lg:w-80 lg:h-120 top-0 md:top-10 lg:top-15 md:right-10 -left-17 scale-x-[-1]"/>

      <p className="font-parisienne-regular text-4xl md:text-6xl lg:text-[100px] leading-[120%] absolute left-1/2 
                    -translate-x-1/2 text-center top-1/20 md:top-32 lg:top-50">
        A Guide For <br /> Guests
      </p>
      
      <div className="absolute left-1/2 -translate-x-1/2 text-xs md:text-xl text-center top-0 md:top-45 lg:top-90 leading-[120%]
                      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-20 w-full lg:px-60 px-15 md:px-40 mt-35 md:mt-30 lg:mt-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 md:max-w-xs mx-auto">
            <Image src={item.img} alt={item.title} width={80} height={80} className={item.className} />
            <h2 className="font-eb-garamond font-normal text-2xl md:text-3xl lg:text-[42px]">{item.title}</h2>
            <p className="font-eb-garamond font-medium text-sm md:text-sm lg:text-base">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="font-eb-garamond font-normal text-sm md:text-lg lg:text-[32px] text-center absolute left-1/2 -translate-x-1/2
                    top-175 md:top-152 lg:top-170 leading-[120%] w-full md:max-w-2xl lg:max-w-6xl">
        Your presence means the world to us. To make your experience <br /> effortless and enjoyable, we've gathered a few useful
        details below.
      </p>
    </section>
  );
};

export default SubDetails;
