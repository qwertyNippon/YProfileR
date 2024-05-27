import React, { useEffect, useState } from 'react';
// import './MessageArea.css';
import './MyMessages.css';

const MessageArea = () => {
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
  // } commented out to pop up on screen, 
  // will comment back in later.

  return (
    <div className="message-area">
      <div className="message-header">
        {/* <h2>{selectedStudent.firstname}</h2> */}
        {/* <button>Teaching assistant</button> */}
      </div>
      <div className="messages">
        {/* Messages would be mapped here */}
        <div className="message">
          <div className="message-content">
            <p>You said 
              {/* {selectedStudent.firstname}  */}
              did great today. Keep on spreading good vibes!</p>
          </div>
        </div>
        <div className="message">
          <div className="message-content">
            <p>Hi 
              {/* {selectedStudent.firstname}  */}
              , I hope you are doing well...</p>
          </div>
        </div>
      </div>
      <div className="subscription-update">
        <p>Hi 
          {/* {selectedStudent.firstname},  */}
          if you'd like to plan more lessons...</p>
        <button>Update subscription</button>
      </div>
    </div>
  );
};

export default MessageArea;
