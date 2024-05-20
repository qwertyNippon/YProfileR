import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './Home.css';
import studyPic1 from '../../assets/studyPic1.jpg';
import studyPic2 from '../../assets/studyPic2.jpg';
import studyPic3 from '../../assets/studyPic3.jpg';

const images = [
    `url(${studyPic1})`,
    `url(${studyPic2})`,
    `url(${studyPic3})`
    // Add more images as needed
];

function Home() {

    const { t } = useTranslation();

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handleLoginClick = () => {
        window.location.href = '/SignUp';
    };

    return (
        <>
            <div className="home-container">
                <header 
                    className="hero-section"
                    style={{ backgroundImage: images[currentImageIndex] }}
                >
                    <div className="hero-content">
                        <h1>{t('LearnLanOnline')}</h1>
                        <p>Discover the joy of learning a new language from the comfort of your home.</p>
                        <button className="cta-button" onClick={handleLoginClick}>
                        {t('GetStart')}
                        </button>
                    </div>
                    <div className="dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            ></span>
                        ))}
                    </div>
                </header>
                <section className="features-section">
                    <h2>Why Learn with Us?</h2>
                    <div className="features">
                        <div className="feature">
                            <h3>{t('InterLessons')}</h3>
                            <p>Engage with interactive content designed to help you learn effectively.</p>
                        </div>
                        <div className="feature">
                            <h3>{t('ExpertTut')}</h3>
                            <p>Learn from experienced tutors who are passionate about teaching languages.</p>
                        </div>
                        <div className="feature">
                            <h3>{t('FlexSch')}</h3>
                            <p>Choose the best time to learn that fits your lifestyle and commitments.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Home;
