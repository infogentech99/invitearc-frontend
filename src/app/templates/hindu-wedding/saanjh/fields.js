import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";

export const saanjhEditorFields = {
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
    { name: "welcomeTitle", label: "Welcome Title", type: "text" },
    { name: "groomName", label: "Groom name", type: "text" },
    { name: "brideName", label: "Bride name", type: "text" },
    { name: "weddingDate", label: "Wedding Date", type: "text" },
    { name: "blessingMessage", label: "Blessing message", type: "textarea" },
    { name: "brideParentsTitle", label: "Bride Parents Title", type: "text" },
    {
      name: "brideParentsDetails",
      label: "Bride Parents details",
      type: "text",
    },
    { name: "groomParentsTitle", label: "Groom Parents Title", type: "text" },
    {
      name: "groomParentsDetails",
      label: "Groom Parents details",
      type: "text",
    },
    { name: "eventTitle", label: "Event Title", type: "text" },
    { name: "eventIntro", label: "Event intro", type: "text" },
  ],


 eventFields: [
    { name: "title_ceremony", label: "Title", type: "text" },
    { name: "date", label: "Date", type: "text" },
    { name: "time", label: "Time", type: "text" },
    
  ],

  coupleMessageFields: [
    { name: "coupleMessageTitle", label: "Couple message title", type: "text" },
    { name: "coupleMessageDescription", label: "Couple message description", type: "textarea" },
    {
      name: "coupleMessageCarouselImages",
      label: "Upload Couple Images",
    },
    {
      name: "coupleMessageThingsToKnowTitle",
      label: "Thank you title",
      type: "text",
    },
    {
      name: "coupleMessageThingsToKnowDescription",
      label: "Thank you Message",
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
