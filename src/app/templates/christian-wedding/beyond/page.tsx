'use client';
import { useEffect, useState } from "react";
import EventShow from "./components/EventShow";
import InviteSection from "./components/inviteSection";
import EndDetails from "./components/EndDetails";
import ImageSection from "./components/ImageSection";
import TempHero from "./components/tempHero";
import SubDetails from "./components/SubDetails";

type BeyondTemplateData = {
  groomName?: string;
  brideName?: string;
  blessingMessage?: string;
  grandparents?: string;
  religiousMantra?: string;
  groomParents?: string;
  inviteLine?: string;
  eventIntro?: string;
  brideParents?: string;
  weddingDate?: string;

  groomGrandParentsName?: string;
  brideDetails?: string;
  // weddingDate?: string;
  weddingVenue?: string;
  events?: Array<Record<string, any>>;
  coupleMessageCarouselImages?: Array<{ image?: string }>;
  socialLinks?: Array<{ platform: string; url: string }>;
  temperature?: string;
  staffDetails?: string;
  parkingDetails?: string;
  marriageCountdownDate?: string;
  locationLink?: string;

};

export default function Home({ data: initialTemplateData = {} }: { data?: BeyondTemplateData }) {
  const [data, setData] = useState<BeyondTemplateData>(initialTemplateData);

  useEffect(() => {
    setData(initialTemplateData || {});
  }, [initialTemplateData]);

  return (
    <div>
      <div className="min-h-screen bg-[#f2e5d9] overflow-hidden">
        <TempHero data={data} />
        <InviteSection
          religiousMantra={data?.religiousMantra}
          brideParents={data?.brideParents}
          coupleName1={data?.groomName}
          coupleName2={data?.brideName}
          weddingDate={data?.weddingDate}
          weddingVenue={data?.weddingVenue}
          blessingMessage={data?.blessingMessage}
          grandparents={data?.grandparents}
          groomParents={data?.groomParents}
          inviteLine={data?.inviteLine}
        />
        <EventShow events={data?.events} eventIntro={data?.eventIntro} />
        <ImageSection images={data?.coupleMessageCarouselImages?.map((item) => item.image)} />
        <SubDetails
          socialLinks={data?.socialLinks}
          temprature={data?.temperature}
          staffDetails={data?.staffDetails}
          parkingDetails={data?.parkingDetails}
        />
        <EndDetails
          counterDate={data?.marriageCountdownDate}
          locationLink={data?.locationLink}
          socialLinks={data?.socialLinks}
        />
      </div>
    </div>
  );
}
