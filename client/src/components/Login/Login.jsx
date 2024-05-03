import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
function Login({ onLogin }) {
  const [formMode, setFormMode] = useState('login'); // Default to login
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setFormMode(searchParams.get('mode') || 'login');
  }, [location]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = formMode === 'signup' ? '/api/auth/register' : '/api/auth/login';
    const data = formMode === 'signup' ? { name, lastName, email, password } : { email, password };
    try {
      const response =await axios.post(endpoint, data);
      localStorage.setItem('token',response.data.token);
      console.log(`${formMode === 'signup' ? 'Registration' : 'Login'} successful`, response.data);
     
      onLogin(response.data); // Update authentication state
      navigate('/'); // Navigate to the recipe list page
      setError('');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
    }
  };
  return (
    <div className="login-container">
      <h2>{formMode === 'signup' ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {formMode === 'signup' && (
          <>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </>
        )}
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">{formMode === 'signup' ? 'Register' : 'Login'}</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
export default Login;
