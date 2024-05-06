import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import Auth from '../../utils/auth';
const NavigationBar = () => {
  return (
    <nav>
      <span className="cookbook-title"  style={{ fontSize: '25px', fontFamily: 'Cursive' }}>Recipe Cookbook</span>
      {Auth.loggedIn() ? (
        <div className="auth-links">
          <Link to="/">Home</Link>
          <Link to="/recipe-list">Recipes List</Link>
          <Link to="/my-recipes">My Recipes</Link>
          <button onClick={() => Auth.logout()}>Logout</button>
        </div>
      ) : (
        <div className="auth-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  );
};
export default NavigationBar;