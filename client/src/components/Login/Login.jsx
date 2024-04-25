import React, { useState } from 'react';
import axios from 'axios';
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      onLogin(response.data);  // Pass the logged in user's data up to the parent component or handle it however you see fit
      // Redirect or further actions after successful login
      console.log('Login successful:', response.data);
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
      console.error('Login error:', err);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
export default Login;







