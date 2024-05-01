import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
function Login({ onLogin }) {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    try {
      const response = await axios.post(endpoint, { email, password });
      if (isRegister) {
        console.log('Registration successful:', response.data);
        setIsRegister(false); // Switch to login view after successful registration
      } else {
        console.log('Login successful:', response.data);
        onLogin(response.data); // handle login
      }
      setError('');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
    }
  };
  const toggleMode = () => {
    setIsRegister(!isRegister);
    setError('');
  };
  return (
    <div>
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
        {error && <p>{error}</p>}
      </form>
      <button onClick={toggleMode}>
        {isRegister
          ? 'Already have an account? Sign in'
          : "Don't have an account? Register"}
      </button>
    </div>
  );
}
export default Login;














