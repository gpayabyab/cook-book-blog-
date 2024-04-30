import React, { useState } from 'react';
import axios from 'axios';
import './AddRecipe.css'
function AddRecipe() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    steps: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = {
      ...formData,
      ingredients: formData.ingredients.split(','),
      steps: formData.steps.split('.')
    };
    try {
      await axios.post('/api/recipes', submission);
      alert('Recipe added successfully!');
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>Ingredients (comma separated):
        <input type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} />
      </label>
      <label>Steps (separate with a period):
        <textarea name="steps" value={formData.steps} onChange={handleChange} />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
export default AddRecipe;







