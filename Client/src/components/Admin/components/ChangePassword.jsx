import  { useState } from 'react';
import '../styles/_ChangePassword.scss';
import Header from './Header';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      // handle password update logic
      console.log('Password updated');
    }
  };

  return (
    <div className='app-password'>
      <Header />
      <main>
        <div className="change-password">
          <h3>Change Password</h3>
          <div className="input-group">
            <label htmlFor="current-password">Current Password</label>
            <input
              type="password"
              id="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your current password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a new password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
            />
          </div>
          {error && <span className="error">{error}</span>}
          <div className="button-container">
            <button className="update-button" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
