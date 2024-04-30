import React from 'react';
import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList/RecipeList.jsx';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import RecipeDetails from './components/RecipeDetail/RecipeDetails.jsx';
import AddRecipe from './components/AddRecipe/AddRecipe.jsx';
import EditRecipe from './components/EditRecipe/EditRecipe.jsx';
import Login from './components/Login/Login.jsx';
import Footer from './components/Footer/Footer.jsx'; // Make sure to import the Footer component
import './App.css';
import store from './utils/store/index.js'; // Update this path as necessary
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <div className="container">
          <Routes>
            <Route path="/" element={RecipeList} />
            <Route path="/login" element={Login} />
            <Route path="/add-recipe" element={AddRecipe} />
            <Route path="/edit-recipe/:id" element={EditRecipe} />
            <Route path="/recipes/:id" element={RecipeDetails} />
            {/* Additional routes can be added here */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}
export default App;