import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function LogoutIcon() {
  return (
    <div>
      <FontAwesomeIcon icon={faSignOutAlt} />
    </div>
  );
}

export default LogoutIcon;