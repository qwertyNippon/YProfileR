import React, { useState } from 'react';
import ChangePassword from './ChangePassword.jsx';
import DeleteAccount from './DeleteAccount.jsx';
import './Settings.css';

function Settings() {
    const [selectedOption, setSelectedOption] = useState('change-password');
    
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <div
                        className={`option ${selectedOption === 'change-password' ? 'active' : ''}`}
                        onClick={() => setSelectedOption('change-password')}
                    >
                        Password
                    </div>
                    <div
                        className={`option ${selectedOption === 'delete-account' ? 'active' : ''}`}
                        onClick={() => setSelectedOption('delete-account')}
                    >
                        Delete account
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