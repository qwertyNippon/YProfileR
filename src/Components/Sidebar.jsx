import React from "react";
import CreateEventButton from "./CreateEventsButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import './SideBar.css'
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
    </aside>
  );
}