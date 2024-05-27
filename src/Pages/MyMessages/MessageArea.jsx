import React from 'react';
// import './MessageArea.css';
import './MyMessages.css';

const MessageArea = () => {
  return (
    <div className="message-area">
      <div className="message-header">
        <h2>Liam</h2>
        <button>Teaching assistant</button>
      </div>
      <div className="messages">
        {/* Messages would be mapped here */}
        <div className="message">
          <div className="message-content">
            <p>You said Liam did great today. Keep on spreading good vibes!</p>
          </div>
        </div>
        <div className="message">
          <div className="message-content">
            <p>Hi Liam san, I hope you are doing well...</p>
          </div>
        </div>
      </div>
      <div className="subscription-update">
        <p>Hi Liam, if you'd like to plan more lessons...</p>
        <button>Update subscription</button>
      </div>
    </div>
  );
};

export default MessageArea;
