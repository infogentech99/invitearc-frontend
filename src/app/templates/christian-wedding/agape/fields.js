import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { assets } from "./assets";

export const agapeEditorFields = {
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
      id: "coupleMessage",
      label: "Couple",
      icon: FaRegCommentDots,
    },
    {
      id: "events",
      label: "Events",
      icon: SlCalender,
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
    {
      name: "Logo",
      label: "Wedding Logo",
      type: "logo",
    },
  ],

  eventFields: [
    { name: "title_ceremony", label: "Title", type: "text" },
     { name: "date", label: "Date", type: "text" },
    { name: "time", label: "Date & Time", type: "text" },
    { name: "venue", label: "Venue", type: "text" },
  ],


  coupleMessageFields: [
    {
      name: "coupleMessageImages1",
      label: "Couple Image 1",
      type: "image",
    },
    { name: "welcometitle", label: "Welcome Title", type: "text" },
    { name: "storyTitle", label: "Story Title", type: "text" },
    { name: "storyDescription", label: "Story Description", type: "textarea" },
    {
      name: "coupleMessageImages2",
      label: "Couple Image 2",
      type: "image",
    },
    {
      name: "littleSurpriseTitle",
      label: "Little Surprise Title",
      type: "text",
    },
    { name: "noteTitle", label: "Note Title", type: "text" },
    { name: "noteDescription", label: "Note Description", type: "textarea" },
    { name: "scratchEventDate", label: "Scratch Event Date", type: "text" },

    {
      name: "celebrationTitle",
      label: "Celebration Title",
      type: "text",
    },
    { name: "weddingTitle", label: "Wedding Title", type: "text" },
    {
      name: "weddingDescription",
      label: "Wedding Description",
      type: "textarea",
    },
    { name: "formalText", label: "Formal Text", type: "text" },
    {
      name: "guestAccomodations",
      label: "Guest Accomodations Text",
      type: "textarea",
    },

    { name: "momentTitle", label: "Moment Title", type: "text" },
    { name: "momentSubTitle", label: "Moment Sub-Title", type: "text" },
    {
      name: "momentDescription",
      label: "Moment Description",
      type: "textarea",
    },

    { name: "bookWeddingText", label: "Book Wedding Text", type: "text" },
    { name: "artOfUsText", label: "Art of Us Text", type: "text" },
    {
      name: "artOfUsDescription",
      label: "Art of Us Description",
      type: "text",
    },
    { name: "bookButtonText", label: "Book Button Text", type: "text" },
    {
      name: "bookWeddingDateVenue",
      label: "Book Wedding Date & Venue",
      type: "text",
    },
    {
      name: "coupleBookImage1",
      label: "Couple Book Image 1",
      type: "image",
    },
    {
      name: "coupleBookImage2",
      label: "Couple Book Image 2",
      type: "image",
    },
    {
      name: "coupleBookImage3",
      label: "Couple Book Image 3",
      type: "image",
    },
    {
      name: "coupleBookImage4",
      label: "Couple Book Image 4",
      type: "image",
    },
    {
      name: "coupleBookImage5",
      label: "Couple Book Image 5",
      type: "image",
    },
  ],
};
