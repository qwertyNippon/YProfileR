import React from 'react';

function DeleteAccount() {
  return (
    <div>
      <h2 className='makeCenter settings-h2'>Delete Account</h2>
      <p>Warning: This action is irreversible!</p>
      <button className='delButton' type="button">Delete Account</button>
    </div>
  );
}

export default DeleteAccount;
