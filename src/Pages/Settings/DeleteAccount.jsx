import React from 'react';
import { useTranslation } from "react-i18next";

function DeleteAccount() {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className='makeCenter settings-h2'>{t('DeleteAccount')}</h2>
      <p>Warning: This action is irreversible!</p>
      <button className='delButton' type="button">{t('DeleteAccount')}</button>
    </div>
  );
}

export default DeleteAccount;
