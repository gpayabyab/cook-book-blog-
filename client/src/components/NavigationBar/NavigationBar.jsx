import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
function NavigationBar({ isLoggedIn, onLogout }) {
  return (
    <nav>
      <div className="nav-wrapper">
        {/* Logo or Brand Name */}
        <Link to="/" className="brand-logo">Recipe Blog</Link>
        {/* Navigation Links */}
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/add-recipe">Add Recipe</Link></li>
              {/* Add more protected links here */}
              <li><button onClick={onLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default NavigationBar;