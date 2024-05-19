import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    
    return (
        <>
            <div className="home-container">
                <header className="hero-section">
                    <div className="hero-content">
                        <h1>Learn Languages Online</h1>
                        <p>Discover the joy of learning a new language from the comfort of your home.</p>
                        <button className="cta-button">
                            <Link to='/SignUp'>Get Started</Link>
                        </button>
                    </div>
                </header>
                <section className="features-section">
                    <h2>Why Learn with Us?</h2>
                    <div className="features">
                        <div className="feature">
                            <h3>Interactive Lessons</h3>
                            <p>Engage with interactive content designed to help you learn effectively.</p>
                        </div>
                        <div className="feature">
                            <h3>Expert Tutors</h3>
                            <p>Learn from experienced tutors who are passionate about teaching languages.</p>
                        </div>
                        <div className="feature">
                            <h3>Flexible Schedule</h3>
                            <p>Choose the best time to learn that fits your lifestyle and commitments.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home