import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";

export const celesteEditorFields = {
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
    { name: "welcomeTitle", label: "Welcome Title", type: "text" },
    { name: "welcomeDes", label: "Welcome Description", type: "text" },
    { name: "welcomeSubTitle", label: "Welcome Sub-Title", type: "text" },

    { name: "storyTitle", label: "Story Title", type: "text" },
    { name: "storySubTitle", label: "Story Sub-Title", type: "textarea" },
    { name: "storyDes", label: "Story Description", type: "text" },
    { name: "storyDes2", label: "Story Description2", type: "textarea" },

    { name: "beginningTitle", label: "Beginning Title", type: "text" },
    { name: "beginningSubTitle", label: "Beginning Sub-Title", type: "text" },
    { name: "beginningDes", label: "Beginning Description", type: "textarea" },
    { name: "beginningDes2", label: "Beginning Description2", type: "text" },
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
    { name: "momentText", label: "Moment Text", type: "text" },
    { name: "momentTitle", label: "Moment Title", type: "text" },

    { name: "chaptersText", label: "Chapters Text", type: "text" },
    { name: "chaptersTitle", label: "Chapters Title", type: "text" },
    { name: "chaptersDesc", label: "Chapters Description", type: "text" },

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

    { name: "guestText", label: "Guest Text", type: "text" },
    { name: "guestTitle", label: "Guest Title", type: "text" },
    { name: "guestDesc", label: "Guest Description", type: "text" },

    {
      name: "coupleMessageWeatherImage",
      label: "Dress Code Image",
      type: "image",
    },
    { name: "dressText", label: "Dress Text", type: "text" },
    { name: "dressTitle", label: "Dress Title", type: "text" },
    { name: "dressDesc", label: "Dress Description", type: "text" },
    { name: "dressNote", label: "Dress Note", type: "text" },

    {
      name: "coupleMessageLocationImage",
      label: "Stay Image",
      type: "image",
    },
    { name: "stayText", label: "Stay Text", type: "text" },
    { name: "stayTitle", label: "Stay Title", type: "text" },
    { name: "stayDesc", label: "Stay Description", type: "text" },
    { name: "stayNote", label: "Stay Note", type: "text" },

    {
      name: "coupleMessageParkingImage",
      label: "Food Image",
      type: "image",
    },
    { name: "foodText", label: "Food Text", type: "text" },
    { name: "foodTitle", label: "Food Title", type: "text" },
    { name: "foodDesc", label: "Food Description", type: "text" },
    { name: "foodNote", label: "Food Note", type: "text" },

    {
      name: "coupleMessageRequestImage",
      label: "Request Image",
      type: "image",
    },
    { name: "requestText", label: "Request Text", type: "text" },
    { name: "requestTitle", label: "Request Title", type: "text" },
    { name: "requestDesc", label: "Request Description", type: "text" },
    { name: "requestNote", label: "Request Note", type: "text" },

    { name: "thankyouText", label: "Thankyou Text", type: "text" },
    { name: "thankyouTitle", label: "Thankyou Title", type: "text" },
    { name: "thankyouSubTitle", label: "Thankyou Sub Title", type: "text" },
    { name: "thankyouDesc", label: "Thankyou Description", type: "text" },

    {
      name: "coupleMessagePrayerImage",
      label: "Prayer Image",
      type: "image",
    },
    { name: "prayerTitle", label: "Prayer Title", type: "text" },
    { name: "prayerDesc", label: "Prayer Description", type: "text" },

    {
      name: "coupleMessagePresenceImage",
      label: "Presence Image",
      type: "image",
    },
    { name: "presenceTitle", label: "Presence Title", type: "text" },
    { name: "presenceDesc", label: "Presence Description", type: "text" },

    {
      name: "coupleMessageLoveImage",
      label: "Love Image",
      type: "image",
    },
    { name: "loveTitle", label: "Love Title", type: "text" },
    { name: "loveDesc", label: "Love Description", type: "text" },
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
