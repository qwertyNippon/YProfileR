import React from 'react';
// import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-bar">
        <input type="text" placeholder="Search students or messages" />
      </div>
      <div className="student-list">
        <div className="student-item selected">
          <img src="avatar.jpg" alt="Liam" />
          <div className="student-info">
            <p>Liam</p>
            <span>Balance: 0 lessons</span>
          </div>
        </div>
        {/* Repeat for other students */}
      </div>
    </div>
  );
};

export default Sidebar;
