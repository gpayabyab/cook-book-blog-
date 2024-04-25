import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
function EditRecipe() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    steps: ''
  });
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    fetchRecipe();
  }, []);
  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`/api/recipes/${id}`);
      const { title, description, ingredients, steps } = response.data;
      setFormData({
        title,
        description,
        ingredients: ingredients.join(', '),
        steps: steps.join('. ')
      });
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...formData,
      ingredients: formData.ingredients.split(',').map(ingredient => ingredient.trim()),
      steps: formData.steps.split('.').filter(step => step.trim() !== '')
    };
    try {
      await axios.put(`/api/recipes/${id}`, updatedRecipe);
      alert('Recipe updated successfully!');
      history.push('/recipes'); // Redirect to the list of recipes or the detail page
    } catch (error) {
      console.error('Error updating recipe:', error);
      alert('Failed to update recipe.');
    }
  };
  return (
    <div>
      <h1>Edit Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <br />
        <label>Description:
          <input type="text" name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <br />
        <label>Ingredients (comma separated):
          <input type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} required />
        </label>
        <br />
        <label>Steps (separate with a period):
          <textarea name="steps" value={formData.steps} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
}
export default EditRecipe;