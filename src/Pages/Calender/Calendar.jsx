import React from "react";
import { getMonth } from '../../util'

// import "./App.css";
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
            {/* <div>
                <div className="flex fleax-columns">
                    <calendarHeader></calendarHeader>
                    <div className="flex flex-1"></div>
                </div>
            </div> */}
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
        </>
    )
}

export default Calendar