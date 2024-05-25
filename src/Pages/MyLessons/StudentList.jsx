// StudentList.js
import React from 'react';
// import './StudentList.css';

const StudentList = () => {
  return (
    <div className="student-list">
      <div className="student-list-header">
        <span>Students</span>
        <span>Price per lesson</span>
        <span>Prepaid balance</span>
      </div>
      <div className="student-item">
        <div className="student-info">
          <img src="avatar.jpg" alt="Josiah" />
          <span>Josiah</span>
        </div>
        <span>$13</span>
        <span>19 lessons</span>
        <div className="student-actions">
          <button className="calendar-btn">📅</button>
          <button className="message-btn">💬</button>
        </div>
      </div>
      {/* Repeat for other students */}
    </div>
  );
};

export default StudentList;
