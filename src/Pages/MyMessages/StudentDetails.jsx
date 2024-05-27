import React, { useEffect, useState } from 'react';
// import './StudentDetails.css';
import './MyMessages.css';

const StudentDetails = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    // Fetch the selected student data from the backend
    fetch('http://localhost:5000/students/selected')
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.error(data.error);
        } else {
          setSelectedStudent(data);
        }
      })
      .catch(error => console.error('Error fetching selected student data:', error));
  }, []);

  // if (!selectedStudent) {
  //   return <div>Loading...</div>;
  // }Same as messages

  return (
    <div className="student-details">
      {/* <img src={selectedStudent.avatarUrl} alt={selectedStudent.name} /> */}
      {/* <h3>{selectedStudent.firstname}</h3> */}
      <p>$
        {/* {selectedStudent.lessonBalance.toFixed(2)} */}
         per lesson</p>
      {/* <button>Archive</button> */}
      <button>Block</button>
      <div className="lesson-info">
        <p>Subject: 
          {/* {selectedStudent.subject} */}
          </p>
        <p>Pre-paid lessons: 
          {/* {selectedStudent.lessonBalance}  */}
          lessons</p>
      </div>
      <button>Enter classroom</button>
    </div>
  );
};

export default StudentDetails;
