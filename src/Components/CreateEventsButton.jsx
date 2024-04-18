import React, { useContext } from "react";
import plusImg from "../assets/plus.png";
import GlobalContext from "../context/GlobalContext";
import './CreateEventButton.css'
import { useTranslation } from "react-i18next";


export default function CreateEventButton() {

  const { t} = useTranslation()

  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="button"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className=" span "> {t('Create')}</span>
    </button>
  );
}