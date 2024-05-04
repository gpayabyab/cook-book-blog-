import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavigationBar.css';
import Auth from '../../utils/auth';
const NavigationBar = () => {
  return (
    <nav>
      <span className="cookbook-title">Recipe Cookbook</span>
      {Auth.loggedIn() ? (
        <div className="auth-links">
          <Link to="/">Home</Link>
          <button onClick={() => Auth.logout()}>Logout</button>
          <Link to="/my-recipes">My Recipes</Link>
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