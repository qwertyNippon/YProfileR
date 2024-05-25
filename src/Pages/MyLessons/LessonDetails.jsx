// LessonDetails.js
import React from 'react';
// import './LessonDetails.css';

const LessonDetails = () => {
  return (
    <div className="lesson-details">
      <div className="upcoming-lesson">
        <div className="lesson-info">
          <h2>Claudia</h2>
          <p>Tuesday, May 21 Japanese, 01:00 PM - 01:50 PM</p>
        </div>
        <button className="enter-classroom">Enter classroom</button>
      </div>
      <div className="students-tabs">
        <button className="tab active">Current students</button>
        <button className="tab">Archived students</button>
      </div>
    </div>
  );
};

export default LessonDetails;
