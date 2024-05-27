import React, { useEffect, useState } from 'react';
import SearchGlassIcons from '../../Components/Icons/SearchGlass_icons'; // Ensure this path is correct
import './Sidebar.css';
import './MyMessages.css';

const Sidebar = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the student data from the backend
    fetch('http://localhost:5000/api/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  return (
    <div className="sidebar">
      <div className="search-bar">
        <div className="search-input-container">
          <input type="text" placeholder="Search students" />
          <button className="search-icon">
            <SearchGlassIcons />
          </button>
        </div>
      </div>
      <div className="student-list">
        {students.map((student, index) => (
          <div key={index} className={`student-item ${student.isSelected ? 'selected' : ''}`}>
            <img src={student.avatarUrl} alt={student.name} />
            <div className="student-info">
              <p>{student.name}</p>
              <span>Balance: {student.lessonBalance} lessons</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
