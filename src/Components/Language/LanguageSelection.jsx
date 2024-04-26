import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import Trash_icons from '../Icons/Trash_icons';
import Edit_icons from '../Icons/Edit_icons';
import Plus_icons from '../Icons/Plus_icons';
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
            <table className='makeCenter'>
                {/* <thead>
                    <tr>
                        <th>Language</th>
                        <th>Level</th>
                        <th>Actions</th>
                    </tr>
                </thead> */}
                <tbody>
                    {languages.map((lang, index) => (
                        <tr key={index}>
                            <td>{lang.language === "en" ? t('Language') : lang.language}&nbsp;&nbsp;</td>
                            <td>{lang.level}</td>
                            <td>
                                <button onClick={() => deleteLanguage(index)}><Trash_icons /></button>
                                <button onClick={() => editLanguage(index, prompt('Enter new language:'), prompt('Enter new level:'))}><Edit_icons /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className=''>
                <input className='text-inputLan'
                    type="text"
                    placeholder={t('Lang')}
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                />
                <input className='text-inputLan '
                    type="text"
                    placeholder={t('Level')}
                    value={newLevel}
                    onChange={(e) => setNewLevel(e.target.value)}
                />
                <button className='plusBut' onClick={addLanguage}><Plus_icons /></button>
            </div>
        </div>
    );
};

export default LanguageSelection;

