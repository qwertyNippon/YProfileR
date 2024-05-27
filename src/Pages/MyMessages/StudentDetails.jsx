import React from 'react';
// import './StudentDetails.css';
import './MyMessages.css';

const StudentDetails = () => {
  return (
    <div className="student-details">
      <img src="avatar.jpg" alt="Liam" />
      <h3>Liam</h3>
      <p>$15.00 per lesson</p>
      {/* <button>Archive</button> */}
      <button>Block</button>
      <div className="lesson-info">
        <p>Subject: Japanese</p>
        <p>Pre-paid lessons: 5 lessons</p>
      </div>
      <button>Enter classroom</button>
    </div>
  );
};

export default StudentDetails;
