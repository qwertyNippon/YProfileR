import React, { createContext, useContext, useState } from 'react';

// Create the context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguageContext = () => useContext(LanguageContext);

// Provider component to wrap around the app
export const LanguageProvider = ({ children }) => {
    // State to manage languages
    const [languages, setLanguages] = useState([]);

    // Add language function
    const addLanguage = (language, level) => {
        setLanguages([...languages, { language, level }]);
    };

    // Edit language function
    const editLanguage = (index, language, level) => {
        const updatedLanguages = [...languages];
        updatedLanguages[index] = { language, level };
        setLanguages(updatedLanguages);
    };

    // Delete language function
    const deleteLanguage = (index) => {
        const updatedLanguages = [...languages];
        updatedLanguages.splice(index, 1);
        setLanguages(updatedLanguages);
    };

    // Context value
    const value = {
        languages,
        addLanguage,
        editLanguage,
        deleteLanguage
    };

    // Provide the context value to the children
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};