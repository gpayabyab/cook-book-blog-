const express = require('express');
const {
  getAllRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipeController');
const router = express.Router();
// Route to get all recipes
router.get('/', getAllRecipes);
// Route to get a single recipe by id
router.get('/:id', getRecipe);
// Route to create a new recipe
router.post('/', createRecipe);
// Route to update a recipe by id
router.put('/:id', updateRecipe);
// Route to delete a recipe by id
router.delete('/:id', deleteRecipe);
module.exports = router;