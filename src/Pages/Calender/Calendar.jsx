import React from "react";
import { useState, useEffect, useContext } from 'react'
import { getMonth } from '../../util'

import "./Calendar.css";
// import { getMonth } from "./util";
import CalendarHeader from "../../Components/CalendarHeader";
import Sidebar from "../../Components/Sidebar";
import Month from "../../Components/Month";
import GlobalContext from "../../context/GlobalContext";
import EventModal from "../../Components/EventModal";

function Calendar() {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);
  
    useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);
    
    return (
        <>
            <div className="cal">
                <React.Fragment>
                    {showEventModal && <EventModal />}

                    <div className="h-screen flex flex-col">
                        <CalendarHeader />
                        <div className="flex flex-1">
                            <Sidebar />
                            <Month month={currenMonth} />
                        </div>
                    </div>
                </React.Fragment>
            </div>
        </>
    )
}

export default Calendar

// Change this file