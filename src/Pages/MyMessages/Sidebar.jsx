import React, { useEffect, useState } from 'react';
import SearchGlassIcons from '../../Components/Icons/SearchGlass_icons'; // Ensure this path is correct
import './Sidebar.css';
import './MyMessages.css';

const Sidebar = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the student data from the backend
    fetch('http://localhost:5000/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching student data:', error));
  }, []);

  const handleStudentClick = (studentId) => {
    fetch(`http://localhost:5000/students/${studentId}/select`, {
      method: 'POST',
    })
      .then(response => response.json())
      .then(updatedStudent => {
        // Update the students state with the new selection state
        setStudents(students.map(student =>
          student.id === updatedStudent.id ? updatedStudent : { ...student, isSelected: false }
        ));
      })
      .catch(error => console.error('Error updating student selection:', error));
  };

  return (
    <div className="sidebar">
      <div className="search-bar">
        <div className="search-input-container">
          <input className='text' type="text" placeholder="Search students" />
          <button className="search-icon">
            <SearchGlassIcons />
          </button>
        </div>
      </div>
      <div className="student-list">
        {students.map((student) => (
          <div
            key={student.id}
            className={`student-item ${student.isSelected ? 'selected' : ''}`}
            onClick={() => handleStudentClick(student.id)}
          >
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
