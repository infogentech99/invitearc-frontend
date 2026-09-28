import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { assets } from "./assets";

export const blissDefaultEvents = [
  {
    title_ceremony: "Engagement",
    date: "June 15, 2025",
    time: "",
    venue: "The Conservatory Garden",
    description: "",
    link: "",
    image: assets.engagement,
  },
  {
    title_ceremony: "Bachelor Party",
    date: "April 20, 2024",
    time: "",
    venue: "The Oak Room",
    description: "",
    link: "",
    image: assets.bachelor,
  },
  {
    title_ceremony: "Bridal Shower",
    date: "April 12, 2024",
    time: "",
    venue: "The Rosewood Tearoom",
    description: "",
    link: "",
    image: assets.bridal,
  },
  {
    title_ceremony: "Rehearsal Dinner",
    date: "September 27, 2024",
    time: "",
    venue: "Estate Winery",
    description: "",
    link: "",
    image: assets.rehearsal,
  },
];

export const blissEditorFields = {
  defaultEvents: blissDefaultEvents,
  tabs: [
    {
      id: "details",
      label: "Details",
      icon: SlNote,
    },
    {
      id: "events",
      label: "Events",
      icon: SlCalender,
    },
    {
      id: "coupleMessage",
      label: "Couple",
      icon: FaRegCommentDots,
    },
    {
      id: "rsvp",
      label: "RSVP",
      icon: FaRegEnvelopeOpen,
    },
    {
      id: "countdown",
      label: "Countdown",
      icon: FaStopwatch,
    },
    {
      id: "music",
      label: "Music",
      icon: GiLoveSong,
    },
    {
      id: "publish",
      label: "Publish",
      icon: AiOutlineShareAlt,
    },
  ],

  detailFields: [
    { name: "groomName", label: "Groom name", type: "text" },
    { name: "brideName", label: "Bride name", type: "text" },
    { name: "religiousMantra", label: "Religious Mantra", type: "text" },
    { name: "religiousSign", label: "Religious Sign", type: "religiousSign" },
    { name: "blessingMessage", label: "Blessing message", type: "text" },
    {
      name: "groomGrandParentsName",
      label: "GrandParents Name",
      type: "textarea",
    },
    { name: "headline", label: "Headline", type: "text" },
    { name: "inviteLine", label: "Invitation line", type: "text" },
    { name: "groomDetails", label: "Groom details", type: "textarea" },
    { name: "brideDetails", label: "Bride details", type: "textarea" },
    { name: "eventIntro", label: "Event intro", type: "text" },
    { name: "celebrationintro", label: "Celebration intro", type: "text" },
    { name: "celebrationDesc", label: "Celebration desc", type: "textarea" },
    {
      name: "weddingImage",
      label: "Wedding Ceremony Image",
      type: "image",
      chooseLabel: "Choose image",
      changeLabel: "Change image",
      defaultValue: assets.wedding,
    },
    { name: "weddingTitle", label: "Wedding Title", type: "text" },
    { name: "weddingSubtitle", label: "Wedding Subtitle", type: "text" },
    { name: "weddingDate", label: "Wedding Date", type: "text" },
    { name: "weddingVenue", label: "Wedding Venue", type: "text" },
    { name: "weddingLocation", label: "Wedding Location", type: "text" },
    { name: "weddingLocationLink", label: "Wedding Location Link", type: "text" },

  ],

  coupleMessageFields: [
    { name: "thankyoutitle", label: "Thank you title", type: "text" },
    { name: "thankyoumessage", label: "Thank you Message", type: "textarea" },
    { name: "coupleMessageTitle", label: "Couple message title", type: "text" },

    {
      name: "coupleMessageImages.image1",
      label: "Couple Image 1",
      type: "image",
    },
    {
      name: "coupleMessageImages.image2",
      label: "Couple Image 2",
      type: "image",
    },
    {
      name: "coupleMessageImages.image3",
      label: "Couple Image 3",
      type: "image",
    },
    {
      name: "coupleMessageImages.image4",
      label: "Couple Image 4",
      type: "image",
    },
    {
      name: "coupleMessageImages.image5",
      label: "Couple Image 5",
      type: "image",
    },
    {
      name: "coupleMessageImages.image6",
      label: "Couple Image 6",
      type: "image",
    },
    {
      name: "coupleMessageDescription",
      label: "Couple message description",
      type: "textarea",
    },

    {
      name: "coupleMessageThingsToKnowTitle",
      label: "Guide title",
      type: "text",
    },
    {
      name: "coupleMessageThingsToKnowDescription",
      label: "Guide description",
      type: "textarea",
    },

    {
      name: "coupleMessageWeatherImage",
      label: "Weather Image",
      type: "image",
    },
    { name: "coupleMessageWeatherTitle", label: "Weather title", type: "text" },
    {
      name: "coupleMessageWeatherDetails",
      label: "Weather details",
      type: "textarea",
    },

    {
      name: "coupleMessageStaffImage",
      label: "Accommodation Image",
      type: "image",
    },
    {
      name: "coupleMessageAccommodationTitle",
      label: "Accommodation title",
      type: "text",
    },
    {
      name: "coupleMessageAccommodationDetails",
      label: "Accommodation details",
      type: "textarea",
    },
    {
      name: "coupleMessageParkingImage",
      label: "Parking Image",
      type: "image",
    },
    { name: "coupleMessageParkingTitle", label: "Parking title", type: "text" },

    {
      name: "coupleMessageParkingDetails",
      label: "Parking details",
      type: "textarea",
    },

    {
      name: "coupleMessageDressImage",
      label: "Dress Image",
      type: "image",
    },
    { name: "coupleMessageDressTitle", label: "Dress title", type: "text" },

    {
      name: "coupleMessageDressDetails",
      label: "Dress details",
      type: "textarea",
    },

    {
      name: "coupleMessageCeremonyImage",
      label: "Ceremony Image",
      type: "image",
    },
    {
      name: "coupleMessageCeremonyTitle",
      label: "Ceremony title",
      type: "text",
    },

    {
      name: "coupleMessageCeremonyDetails",
      label: "Ceremony details",
      type: "textarea",
    },

    {
      name: "coupleMessageContactImage",
      label: "Contact Image",
      type: "image",
    },
    { name: "coupleMessageContactTitle", label: "Contact title", type: "text" },

    {
      name: "coupleMessageContactDetails",
      label: "Contact details",
      type: "textarea",
    },
  ],

  eventFields: [
    { name: "title_ceremony", label: "Title", type: "text" },
    { name: "date", label: "Date", type: "text" },
    { name: "venue", label: "Venue", type: "text" },
    { name: "link", label: "Location link", type: "text" },
  ],

  publishFields: [
    {
      name: "sharePreviewImage",
      label: "Preview Image",
      type: "image",
    },
    {
      name: "sharePreviewTitle",
      label: "Preview Title",
      type: "text",
    },
    {
      name: "sharePreviewDescription",
      label: "Preview Description",
      type: "textarea",
    },
  ],
};
