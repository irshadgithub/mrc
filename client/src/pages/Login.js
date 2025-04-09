import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css'; // Import the new CSS file

const Login = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold the error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      history.push('/reports');
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid email or password'); // Set error message on login failure
    }
  };

  return (
    <div>
    
      <main>
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
      
    </div>
  );
};

export default Login;