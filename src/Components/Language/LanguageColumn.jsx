import React from 'react';

const LanguageColumn = ({ languages }) => {
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

export default LanguageColumn;