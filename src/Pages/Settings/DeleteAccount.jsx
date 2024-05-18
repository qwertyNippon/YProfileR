import React from 'react';
import { useTranslation } from "react-i18next";

function DeleteAccount() {
  const { t } = useTranslation();

  const {line1} = t('Warning');


  return (
    <div>
      <h2 className='makeCenter settings-h2'>{t('DeleteAccount')}</h2>
      <p>{line1}</p>
      <button className='delButton' type="button">{t('DeleteAccount')}</button>
    </div>
  );
}

export default DeleteAccount;
