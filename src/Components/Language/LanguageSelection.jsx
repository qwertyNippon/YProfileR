import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import NavPass from '../Nav/NavPass';
import './Language.css';


const LanguageSelection = () => {
    // Default language and level based on browser language
    var fallbackLanguage = i18next.options.fallbackLng[0]; // Extract language code
    const [languages, setLanguages] = useState([{ language: fallbackLanguage, level: 'Native' }]);
    const [newLanguage, setNewLanguage] = useState('');
    const [newLevel, setNewLevel] = useState('');
    
    const { t} = useTranslation()

    useEffect(() => {
        // Set default language and level
        setLanguages([{ language: fallbackLanguage, level: 'Native' }]);
    }, [fallbackLanguage]);

    const addLanguage = () => {
        if (newLanguage && newLevel) {
            setLanguages([...languages, { language: newLanguage, level: newLevel }]);
            setNewLanguage('');
            setNewLevel('');
        }
    };

    const editLanguage = (index, newLanguage, newLevel) => {
        const updatedLanguages = [...languages];
        updatedLanguages[index] = { language: newLanguage, level: newLevel };
        setLanguages(updatedLanguages);
    };

    const deleteLanguage = (index) => {
        const updatedLanguages = [...languages];
        updatedLanguages.splice(index, 1);
        setLanguages(updatedLanguages);
    };

    return (
        <div>
            <h2 className='makeCenter'>Language Selection</h2>
            <ul className='listLan makeCenter'>
                {languages.map((lang, index) => (
                    <li key={index}>
                        {lang.language} - {lang.level}
                        <button onClick={() => deleteLanguage(index)}>{t('Delete')}</button>
                        <button onClick={() => editLanguage(index, prompt('Enter new language:'), prompt('Enter new level:'))}>Edit</button>
                    </li>
                ))}
            </ul>
            <div className=''>
                <input className='text-inputLan'
                    type="text"
                    placeholder="Language"
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                />
                <input className='text-inputLan'
                    type="text"
                    placeholder="Level"
                    value={newLevel}
                    onChange={(e) => setNewLevel(e.target.value)}
                />
                <button onClick={addLanguage}>{t('addAnLan')}</button>
            </div>
        </div>
    );
};

export default LanguageSelection;
