import { SlNote, SlCalender  } from "react-icons/sl";
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
      id: "coupleMessage",
      label: "Couple",
      icon: FaRegCommentDots,
    },
     {
      id: "IvoryTab",
      label: "Events",
      icon: SlCalender,
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


  IvoryTabFields: [
    { name: "eventDayJourney", label: "Event Day Journey", type: "text" },

    { name: "eventTime1", label: "Event Time 1", type: "text" },
    { name: "eventName1", label: "Event Name 1", type: "text" },
    { name: "eventDetails1", label: "Event Details 1", type: "text" },

    { name: "eventTime2", label: "Event Time 2", type: "text" },
    { name: "eventName2", label: "Event Name 2", type: "text" },
    { name: "eventDetails2", label: "Event Details 2", type: "text" },

     { name: "eventTime3", label: "Event Time 3", type: "text" },
    { name: "eventName3", label: "Event Name 3", type: "text" },
    { name: "eventDetails3", label: "Event Details 3", type: "text" },

     { name: "eventTime4", label: "Event Time 4", type: "text" },
    { name: "eventName4", label: "Event Name 4", type: "text" },
    { name: "eventDetails4", label: "Event Details 4", type: "text" },

     { name: "eventTime5", label: "Event Time 5", type: "text" },
    { name: "eventName5", label: "Event Name 5", type: "text" },
    { name: "eventDetails5", label: "Event Details 5", type: "text" },

      { name: "guestwishestitle", label: "Guest Wishes Title", type: "text" },
    { name: "guestwishesdesc", label: "Guest Wishes Desc", type: "text" },
    { name: "giftmessage", label: "Gift Message", type: "text" },
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
    { name: "eventCountdown", label: "Event Countdown Date", type: "date" },
    { name: "venueName", label: "Venue Name", type: "text" },
    { name: "venueLocation", label: "Venue Location", type: "textarea" },
    { name: "locationTitle", label: "Location Title", type: "text" },
    { name: "location", label: "Location", type: "text" },
    { name: "ceremonyTitle", label: "Ceremony Title", type: "text" },
    { name: "ceremony", label: "Ceremony", type: "text" },
    { name: "dressTitle", label: "Dress Title", type: "text" },
    { name: "dress", label: "Dress", type: "text" },
    { name: "parkingTitle", label: "Parking Title", type: "text" },
    { name: "parking", label: "Parking", type: "text" },
    
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
