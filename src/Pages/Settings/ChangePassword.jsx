import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Settings.css'; 

function ChangePassword() {
  const { t } = useTranslation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);

  const toggleShowPassword = (setShowPassword, showPassword) => {
      setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Handle password change logic
  };

  return (
    <div>
      <h2 className='makeCenter settings-h2'>{t('ChangePassword')}</h2>
      <form className='settings-form' onSubmit={handlePasswordChange}>
        <div className="password-input">
          <label className='settings-label'>{t('CurrentPassword')}</label>
          <div className="input-container">
            <input
              className='text-input-pass' 
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <span
              onClick={() => toggleShowPassword(setShowCurrentPassword, showCurrentPassword)}
              className="eye-icon"
            >
              <FontAwesomeIcon icon={showCurrentPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>

        <div className="password-input">
          <label className='settings-label'>{t('NewPassword')}</label>
          <div className="input-container">
            <input
              className='text-input-pass' 
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <span
              onClick={() => toggleShowPassword(setShowNewPassword, showNewPassword)}
              className="eye-icon"
            >
              <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>

        <div className="password-input">
          <label className='settings-label'>{t('VerifyPassword')}</label>
          <div className="input-container">
            <input
              className='text-input-pass' 
              type={showVerifyPassword ? "text" : "password"}
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
            />
            <span
              onClick={() => toggleShowPassword(setShowVerifyPassword, showVerifyPassword)}
              className="eye-icon"
            >
              <FontAwesomeIcon icon={showVerifyPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>

        <button className='saveButton' type="submit">{t('SaveChanges')}</button>
      </form>
    </div>
  );
}

export default ChangePassword;

