import React, { useState } from 'react';
import './FindTeacher.css';

function FindTeacher() {
    const [searchTerm, setSearchTerm] = useState('');
    const [teachers, setTeachers] = useState([]);
  
    const fetchTeachers = async () => {
      try {
        const response = await fetch(`http://your-flask-backend-url/search?term=${searchTerm}`);
        if (!response.ok) {
          throw new Error('Failed to fetch teachers');
        }
        const data = await response.json();
        setTeachers(data.teachers);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
      fetchTeachers();
    };
    
    return (
        <>
            <div className="teacher-search-container"> {/* Apply container class */}
                <input
                    type="text"
                    placeholder="Search teachers by language or first name"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input" 
                />
                <ul className="teacher-list"> {/* Apply list class */}
                    {teachers.map((teacher, index) => (
                        <li key={index} className="teacher-item"> {/* Apply list item class */}
                            {teacher.firstName} - {teacher.language}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default FindTeacher