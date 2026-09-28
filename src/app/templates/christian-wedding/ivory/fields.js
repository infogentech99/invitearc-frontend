import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";

export const ivoryEditorFields = {
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
    { name: "togetherName", label: "Together Title", type: "text" },
    { name: "groomName", label: "Groom name", type: "text" },
    { name: "brideName", label: "Bride name", type: "text" },
    { name: "ceremonyInfo", label: "Ceremony Info", type: "text" },
    { name: "groomParentTitle", label: "Groom Parent Title", type: "text" },
    { name: "groomParentSurname", label: "Groom Parent Surname", type: "text" },
    { name: "groomDetails", label: "Groom details", type: "textarea" },
    { name: "brideParentTitle", label: "Bride Parent Title", type: "text" },
    { name: "birdeParentSurname", label: "Bride Parent Surname", type: "text" },
    { name: "brideDetails", label: "Bride details", type: "textarea" },
    { name: "inviteLine", label: "Invitation line", type: "text" },

    { name: "venue", label: "Venue", type: "text" },
    { name: "venueLocation", label: "Venue Location", type: "textarea" },
    { name: "eventDay", label: "Event Day", type: "text" },
    { name: "eventTime", label: "Event Time", type: "text" },
    { name: "eventMonth", label: "Event Month", type: "text" },
    { name: "eventYear", label: "Event Year", type: "text" },
  ],

  coupleMessageFields: [
    { name: "storyTitle", label: "Story Title", type: "text" },

    { name: "storyDescription", label: "Story Description", type: "text" },

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
      { name: "loveQuote", label: "Love Quote", type: "text" },
      { name: "receptionInfo", label: "Reception Info", type: "text" },
      { name: "receptionMessage", label: "Reception Message", type: "text" },
      { name: "receptionTime", label: "Reception Time", type: "text" },
      { name: "receptionDay", label: "Reception Day", type: "text" },
      { name: "receptionDate", label: "Reception Date", type: "text" },
      { name: "receptionMonth", label: "Reception Month", type: "text" },
      { name: "receptionYear", label: "Reception Year", type: "text" },
       { name: "guestTitle", label: "Guest Title", type: "text" },
       { name: "guestTime", label: "Guest Time", type: "text" },
        { name: "receptionTitle", label: "Reception Title", type: "text" },
      
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
