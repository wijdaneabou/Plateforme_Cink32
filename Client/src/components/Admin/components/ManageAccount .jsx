import { useState } from 'react';
import '../styles/_ManageAccount.scss'; // Update the stylesheet path as necessary
import Header from './Header';

const ManageAccount = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = () => {
    if (!username || !firstname || !lastname || !email) {
      setError('Please fill in all fields');
    } else {
      setError('');
      setMessage('Account details have been updated successfully.');
      // handle update logic here
      console.log('Account details updated', { username, firstname, lastname, email });
    }
  };

  return (
    <div className='app-manage'>
      <Header />
      <main>
        <div className="manage-account">
          <h3>Manage Account</h3>
          

          <div className="input-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter your first name"
            />
          </div>

          <div className="input-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Enter your last name"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          
          {error && <span className="error">{error}</span>}
          {message && <span className="message">{message}</span>}
          
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

export default ManageAccount;
