import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";

export const milanEditorFields = {
  tabs: [
    {
      id: "details",
      label: "Details",
      icon: SlNote,
    },
    
    {
      id: "countdown",
      label: "Countdown",
      icon: FaStopwatch,
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
    { name: "mainHeading", label: "Main Heading", type: "text" },
    // { name: "title", label: "Title", type: "text" },
    // { name: "subTitle", label: "Subtitle", type: "text" },
     
    { name: "brideName", label: "Bride name", type: "text" },
     { name: "groomName", label: "Groom name", type: "text" },
    { name: "blessingTitle", label: "Blessing Title", type: "text" },
    { name: "blessingMessage", label: "Blessing message", type: "textarea" },
    { name: "brideParentsTitle", label: "Bride Parents Title", type: "text" },
    {
      name: "brideParentsDetails",
      label: "Bride Parents details",
      type: "text",
    },
     { name: "eventDate", label: "Event Date", type: "text" },
    { name: "groomParentsTitle", label: "Groom Parents Title", type: "text" },
    {
      name: "groomParentsDetails",
      label: "Groom Parents details",
      type: "text",
    },
    { name: "venue", label: "Venue", type: "text" },
  ],

  coupleMessageFields: [
    { name: "coupleTitle", label: "Couple Title", type: "text" },
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

    { name: "thankyoutitle", label: "Thank you title", type: "text" },
    { name: "thankyoumessage", label: "Thank you Message", type: "textarea" },
    
  ],


  eventFields:[
//  { name: "eventTitle", label: "Event Title", type: "text" },
  ],

   rsvpFields: [
    { name: "attendingTitle", label: "Attending Title", type: "text" },
    { name: "celebrateTitle", label: "Celebrate Title", type: "text" },
    { name: "weatherTitle", label: "Weather Forecast Title", type: "text" },
    { name: "weatherTitleDescription", label: "Weather Forecast Description", type: "text" },
    // { name: "rsvpSectionHeading", label: "RSVP Section Heading", type: "text" },
    // { name: "rsvpMode", label: "RSVP Mode (handled in editor)", type: "text" },
    // { name: "whatsappNumber", label: "WhatsApp Number", type: "text" },
    // { name: "rsvpWhatsappButtonText", label: "WhatsApp Button Text", type: "text" },
    // { name: "rsvpFormButtonText", label: "Form Button Text", type: "text" },
    // { name: "rsvpGoogleFormLink", label: "Google Form Link", type: "text" },
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
