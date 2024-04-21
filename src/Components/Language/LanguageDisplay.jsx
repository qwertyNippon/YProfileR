import React from 'react';
import { useLanguageContext } from './LanguageContext';

const LanguageDisplay = () => {
    const { languages } = useLanguageContext();

    return (
        <div>
            <h2>Languages</h2>
            <ul>
                {languages.map((lang, index) => (
                    <li key={index}>
                        {lang.language} - {lang.level}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageDisplay;