// MainSection.js
import React from 'react';
import LessonDetails from './LessonDetails';
import StudentList from './StudentList';
// import './MainSection.css';

const MainSection = () => {
  return (
    <div className="main-section">
      <LessonDetails />
      <StudentList />
    </div>
  );
};

export default MainSection;
