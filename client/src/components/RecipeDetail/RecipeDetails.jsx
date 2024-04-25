import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function RecipeDetails() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchRecipe();
  }, []);
  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`/api/recipes/${id}`);
      setRecipe(response.data);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };
  if (!recipe) return <div>Loading...</div>;
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Preparation Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
export default RecipeDetails;









