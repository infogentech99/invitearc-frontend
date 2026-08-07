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




};
