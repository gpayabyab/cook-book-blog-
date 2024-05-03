import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
function NavigationBar({ isLoggedIn, onLogout }) {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Recipe Blog</Link>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/add-recipe">Add Recipe</Link></li>
              <li><button onClick={onLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login?mode=signup">Signup</Link></li>
              <li><Link to="/login?mode=login">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default NavigationBar;














