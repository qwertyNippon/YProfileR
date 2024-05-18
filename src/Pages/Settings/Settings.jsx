import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import ChangePassword from './ChangePassword.jsx';
import DeleteAccount from './DeleteAccount.jsx';
import axios from 'axios';
import './Settings.css';

function Settings() {
    const [selectedOption, setSelectedOption] = useState('change-password');
    const { t } = useTranslation();

    return (
        <>
            <div className="settings-container">
                <div className="sidebar">
                    <div
                        className={`option ${selectedOption === 'change-password' ? 'active' : ''}`}
                        onClick={() => setSelectedOption('change-password')}
                    >
                        {t('Password')}
                    </div>
                    <div
                        className={`option ${selectedOption === 'delete-account' ? 'active' : ''}`}
                        onClick={() => setSelectedOption('delete-account')}
                    >
                        {t('DeleteAccount')}
                    </div>
                </div>
                <div className="content">
                    {selectedOption === 'change-password' && <ChangePassword />}
                    {selectedOption === 'delete-account' && <DeleteAccount />}
                </div>
            </div>
        </>
    )
}

export default Settings