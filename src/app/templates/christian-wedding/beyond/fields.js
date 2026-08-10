import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";

export const beyondEditorFields = {
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
    { name: "blessingMessage", label: "Blessing message", type: "text" },
    { name: "grandparents", label: "Grand Parents", type: "textarea" },
    { name: "groomParents", label: "Groom Parents Name", type: "textarea" },
    { name: "inviteLine", label: "Invitation line", type: "text" },
    { name: "brideParents", label: "Bride Parents", type: "textarea" },
    { name: "weddingDate", label: "Wedding Date", type: "text" },
    { name: "weddingVenue", label: "Wedding Venue", type: "textarea" },
    { name: "eventIntro", label: "Event intro", type: "text" },
  ],

  eventFields: [
    { name: "title_ceremony", label: "Title", type: "text" },
    { name: "date", label: "Date", type: "text" },
    { name: "time", label: "Time", type: "text" },
    { name: "venue", label: "Venue", type: "text" },
    { name: "venue_address", label: "Address", type: "textarea" },
    { name: "theme", label: "Theme", type: "textarea" },
    { name: "link", label: "Route link", type: "text" },
  ],

 coupleMessageFields: [ 
    {name: "thankyoutitle", label:"Thank you title", type: "text"},
    {name: "thankyoumessage", label:"Thank you Message", type: "textarea"},
    { name: "coupleTitle", label: "Couple message title", type: "text" }, 
    
{
  name: "coupleMessageCarouselImages",
  label: "Upload Couple Images",
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

 { name: "coupleMessageInstagramTitle", label: "Instagram title", type: "text" },
    {
      name: "coupleMessageInstagramDetails",
      label: "Instagram details",
      type: "textarea",
    },

    { name: "coupleMessageWeatherTitle", label: "Weather title", type: "text" },
    {
      name: "coupleMessageWeatherDetails",
      label: "Weather details",
      type: "textarea",
    },
    { name: "coupleMessageStaffTitle", label: "Staff title", type: "text" },
    {
      name: "coupleMessageStaffDetails",
      label: "Staff details",
      type: "textarea",
    },
    { name: "coupleMessageParkingTitle", label: "Parking title", type: "text" },

    {
      name: "coupleMessageParkingDetails",
      label: "Parking details",
      type: "textarea",
    },
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
