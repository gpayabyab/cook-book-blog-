import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import AddRecipe from './components/AddRecipe';
import EditRecipe from './components/EditRecipe';
import Login from './components/Login';
import Footer from './components/Footer'; // Make sure to import the Footer component
import './App.css';
import store from './utils/store'; // Update this path as necessary
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={RecipeList} />
            <Route path="/login" component={Login} />
            <Route path="/add-recipe" component={AddRecipe} />
            <Route path="/edit-recipe/:id" component={EditRecipe} />
            <Route path="/recipes/:id" component={RecipeDetail} />
            {/* Additional routes can be added here */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}
export default App;