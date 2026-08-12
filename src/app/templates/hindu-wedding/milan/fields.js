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
}