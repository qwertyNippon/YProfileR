import React from 'react';

function ChangePassword() {
  return (
    <div>
      <h2 className='makeCenter settings-h2'>Change Password</h2>
      <form className='settings-form'>
        <div>
          <label className='settings-label'>Current password</label>
          <input className='text-input-pass' type="password" />
        </div>
        <div>
          <label className='settings-label'>New password</label>
          <input className='text-input-pass' type="password" />
        </div>
        <div>
          <label className='settings-label'>Verify password</label>
          <input className='text-input-pass' type="password" />
        </div>
        <button className='saveButton' type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default ChangePassword;
