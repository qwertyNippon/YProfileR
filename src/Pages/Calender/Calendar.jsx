import React from "react";
// import { getMonth } from '../../util'

function Calendar() {
    
    return (
        <>
            <div>
                <div className="flex fleax-columns">
                    <calendarHeader></calendarHeader>
                    <div className="flex flex-1"></div>
                </div>
            </div>
        </>
    )
}

export default Calendar