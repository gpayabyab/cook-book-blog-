import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList/RecipeList.jsx'; // Handles listing recipes, and modals for Add, Edit, Details
import Login from './components/Login/Login.jsx'; // Handles user login and registration
import NavigationBar from './components/NavigationBar/NavigationBar.jsx'; // Provides navigation links
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (userData) => {
    // Process userData as needed, here simply log in
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Router>
      <NavigationBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="app-container">
        <Routes>
          <Route path="/" element={isLoggedIn ? <RecipeList /> : <Login onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* No direct routes for modals, they are part of the RecipeList component */}
        </Routes>
      </div>
    </Router>
  );
}
export default App;