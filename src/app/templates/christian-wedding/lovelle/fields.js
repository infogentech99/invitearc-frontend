import { SlNote, SlCalender } from "react-icons/sl";
import {
  FaRegEnvelopeOpen,
  FaRegCommentDots,
  FaStopwatch,
} from "react-icons/fa";
import { GiLoveSong } from "react-icons/gi";
import { AiOutlineShareAlt } from "react-icons/ai";

export const lovelleEditorFields = {
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
    { name: "groomName", label: "Groom name", type: "text" },
    { name: "brideName", label: "Bride name", type: "text" },
    { name: "welcomeTitle", label: "Welcome Title", type: "text" },
    { name: "welcomeSubTitle", label: "Welcome Sub-Title", type: "text" },
    { name: "welcomeDescription", label: "Welcome Description", type: "text" },

    { name: "togetherTitle", label: "Together Title", type: "text" },

    { name: "groomParentsTitle", label: "Groom Parents Title", type: "text" },
    { name: "groomFatherName", label: "Groom Father Name", type: "text" },
    { name: "groomMotherName", label: "Groom Mother Name", type: "text" },
    { name: "brideParentsTitle", label: "Bride Parents Title", type: "text" },
    { name: "brideFatherName", label: "Bride Father Name", type: "text" },
    { name: "brideMotherName", label: "Bride Mother Name", type: "text" },
    { name: "inviteText", label: "Invite Text", type: "text" },
    { name: "eventDay", label: "Event Day", type: "text" },
    { name: "eventDate", label: "Event Date", type: "text" },
    { name: "eventTime", label: "Event Time", type: "text" },
    { name: "eventVenue", label: "Event Venue", type: "text" },
    { name: "eventVenueAddress", label: "Event Venue Address", type: "text" },
    { name: "joinTitle", label: "Join Title", type: "text" },
    { name: "eventTitle", label: "Event Title", type: "text" },
    { name: "eventDescription", label: "Event Description", type: "text" },
  ],

  eventFields: [
    { name: "title_ceremony", label: "Title", type: "text" },
    { name: "time", label: "Time", type: "text" },
    { name: "venue", label: "Venue", type: "text" },
  ],

  coupleMessageFields: [
    { name: "attireguide", label: "Attire Guide", type: "text" },
    { name: "gardenFormal", label: "Garden Formal", type: "text" },
    { name: "storyTitle", label: "Story Title", type: "text" },
    { name: "storyDescription", label: "Story Description", type: "textarea" },
    { name: "momentTitle", label: "Moment Title", type: "text" },
    {
      name: "coupleMessageFunctionImage1",
      label: "Function Image 1",
      type: "image",
    },
    { name: "functionTime1", label: "Function Time 1", type: "text" },
    { name: "functionName1", label: "Function Name 1", type: "text" },
    {
      name: "coupleMessageFunctionImage2",
      label: "Function Image 2",
      type: "image",
    },
    { name: "functionTime2", label: "Function Time 2", type: "text" },
    { name: "functionName2", label: "Function Name 2", type: "text" },
    {
      name: "coupleMessageFunctionImage3",
      label: "Function Image 3",
      type: "image",
    },
    { name: "functionTime3", label: "Function Time 3", type: "text" },
    { name: "functionName3", label: "Function Name 3", type: "text" },
    {
      name: "coupleMessageFunctionImage4",
      label: "Function Image 4",
      type: "image",
    },
    { name: "functionTime4", label: "Function Time 4", type: "text" },
    { name: "functionName4", label: "Function Name 4", type: "text" },
    {
      name: "coupleMessageFunctionImage5",
      label: "Function Image 5",
      type: "image",
    },
    { name: "functionTime5", label: "Function Time 5", type: "text" },
    { name: "functionName5", label: "Function Name 5", type: "text" },
    { name: "weddingCeremony", label: "Wedding Ceremony", type: "textarea" },
    { name: "dayToUnwind", label: "Day to Unwind Text", type: "text" },
    { name: "quietDayTogether", label: "Quiet Day Together", type: "text" },
    { name: "venueLocationName", label: "Venue / Location Name", type: "text" },
    { name: "venueSubtitle", label: "Venue Subtitle", type: "text" },
    { name: "celebrationDate", label: "Celebration Date", type: "text" },
    { name: "celebrationTime", label: "Celebration Time", type: "text" },
    {
      name: "addressVenueDetails",
      label: "Address / Venue Details",
      type: "text",
    },
    {
      name: "addressVenueCountry",
      label: "Address / Venue Country",
      type: "text",
    },
    { name: "notetoOurGuests", label: "A Note to Our Guests", type: "text" },
    { name: "giftsGoodWishes", label: "Gifts & Good Wishes", type: "text" },
    { name: "giftMessage", label: "Gift Message", type: "textarea" },
  ],
};
