import React, { useState, useEffect } from 'react';
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
            // Get a random subset of teachers (5 in this case)
            const randomTeachers = data.teachers.sort(() => 0.5 - Math.random()).slice(0, 5);
            setTeachers(randomTeachers);
        } catch (error) {
            console.error(error);
        }
    };
  
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        fetchTeachers();
    };

    useEffect(() => {
        fetchTeachers(); // Fetch random teachers when component mounts
    }, []); // Empty dependency array ensures this effect runs only once on mount
    
    return (
        <div className="teacher-search-container">
            <input
                type="text"
                placeholder="Search teachers by language or first name"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input" 
            />
            <div className="teacher-cards-container">
                {teachers.map((teacher, index) => (
                    <div key={index} className="teacher-card">
                        <div className="teacher-image">
                            {/* Placeholder for image */}
                        </div>
                        <div className="teacher-details">
                            <div className="teacher-name">{teacher.firstName}</div>
                            <div className="teacher-info">
                                <div>
                                    <span className="info-label">Language:</span>
                                    <span className="info-value">{teacher.language}</span>
                                </div>
                                <div>
                                    <span className="info-label">Level:</span>
                                    <span className="info-value">{teacher.level}</span>
                                </div>
                            </div>
                            <div className="teacher-bio">{teacher.bio}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FindTeacher;

