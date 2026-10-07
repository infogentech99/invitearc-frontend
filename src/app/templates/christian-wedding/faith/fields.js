import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";

export const faithEditorFields = {
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
    { name: "groomName", label: "Groom name", type: "text" },
    { name: "brideName", label: "Bride name", type: "text" },
    { name: "noteText", label: "Note text", type: "text" },
    { name: "noteTitle", label: "Note Title", type: "textarea" },
    { name: "noteDes", label: "Note Details", type: "textarea" },

    { name: "storyText", label: "Story text", type: "text" },
    { name: "storyTitle", label: "Story Title", type: "textarea" },
    { name: "storyDes", label: "Story Details", type: "textarea" },
    { name: "storyDes2", label: "Story Details2", type: "textarea" },
    { name: "coupleLetter", label: "Couple First Letter", type: "text" },

    { name: "journeyTitle1", label: "Journey Title1", type: "text" },
    { name: "journeyDes1", label: "Journey Details1", type: "textarea" },
    { name: "journeyTitle2", label: "Journey Title2", type: "text" },
    { name: "journeyDes2", label: "Journey Details2", type: "textarea" },
    { name: "journeyTitle3", label: "Journey Title3", type: "text" },
    { name: "journeyDes3", label: "Journey Details3", type: "textarea" },
  ],

  eventFields: [
    { name: "title_ceremony", label: "Title", type: "text" },
    { name: "date", label: "Date", type: "text" },
    { name: "time", label: "Time", type: "text" },
    { name: "venue", label: "Venue", type: "text" },
    { name: "theme", label: "Theme", type: "text" },
    { name: "link", label: "Location link", type: "text" },
  ],

  coupleMessageFields: [
    { name: "memoryText", label: "Memory Text", type: "text" },
    { name: "memoryTitle", label: "Memory Title", type: "text" },
    { name: "memoryDesc", label: "Memory Details", type: "text" },

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

    { name: "destinationText", label: "Destination Text", type: "text" },
    { name: "destinationTitle", label: "Destination Title", type: "text" },
    { name: "destinationDesc", label: "Destination Details", type: "text" },

    { name: "guestText", label: "Guest Text", type: "text" },
    { name: "guestTitle", label: "Guest Title", type: "text" },
    { name: "guestDesc", label: "Guest Details", type: "text" },

    // { name: "dressImage", label: "Dress Image", type: "image" },
    { name: "dressTitle", label: "Dress Title", type: "text" },
    { name: "dressDetails", label: "Dress Details", type: "textarea" },

    // { name: "accommodationImage", label: "Accommodation Image", type: "image" },
    { name: "accommodationTitle", label: "Accommodation Title", type: "text" },
    {
      name: "accommodationDetails",
      label: "Accommodation Details",
      type: "textarea",
    },

    // { name: "diningImage", label: "Dining Image", type: "image" },
    { name: "diningTitle", label: "Dining Title", type: "text" },
    { name: "diningDetails", label: "Dining Details", type: "textarea" },

    // { name: "weddingImage", label: "Wedding Image", type: "image" },
    { name: "weddingTitle", label: "Wedding Title", type: "text" },
    { name: "weddingDetails", label: "Wedding Details", type: "textarea" },

  ],

rsvpFields: [
   { name: "rsvpSectionDetails", label: "RSVP Section Details", type: "text" },
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
