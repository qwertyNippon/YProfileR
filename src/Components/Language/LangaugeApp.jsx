import React from 'react';
import LanguageSelection from './LanguageSelection';
import LanguageDisplay from './LanguageDisplay';
import { LanguageProvider } from './LanguageContext';

const LanguageApp = () => {
    return (
        <LanguageProvider>
            <div>
                <LanguageSelection />
                <LanguageDisplay />
            </div>
        </LanguageProvider>
    );
};

export default LanguageApp;