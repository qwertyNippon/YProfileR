import React from 'react';

function ChangePassword() {
  return (
    <div>
      <h2>Change Password</h2>
      <form>
        <div>
          <label>Current password</label>
          <input type="password" />
        </div>
        <div>
          <label>New password</label>
          <input type="password" />
        </div>
        <div>
          <label>Verify password</label>
          <input type="password" />
        </div>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default ChangePassword;
