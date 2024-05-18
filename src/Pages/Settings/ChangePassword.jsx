import React from 'react';
import { useTranslation } from "react-i18next";

function ChangePassword() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className='makeCenter settings-h2'>{t('ChangePassword')}</h2>
      <form className='settings-form'>
        <div>
          <label className='settings-label'>{t('CurrentPassword')}</label>
          <input className='text-input-pass' type="password" />
        </div>
        <div>
          <label className='settings-label'>{t('NewPassword')}</label>
          <input className='text-input-pass' type="password" />
        </div>
        <div>
          <label className='settings-label'>{t('VerifyPassword')}</label>
          <input className='text-input-pass' type="password" />
        </div>
        <button className='saveButton' type="submit">{t('SaveChanges')}</button>
      </form>
    </div>
  );
}

export default ChangePassword;
