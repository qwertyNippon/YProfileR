import React, { useContext } from "react";
import plusImg from "../assets/plus.png";
import GlobalContext from "../context/GlobalContext";
import './CreateEventButton.css'

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="button"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className=" span "> Create</span>
    </button>
  );
}