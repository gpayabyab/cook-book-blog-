import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecipeList.css'
import { Link } from 'react-router-dom';
function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    try {
      const response = await axios.get('/api/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <Link to={`/recipes/${recipe._id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RecipeList;