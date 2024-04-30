const Recipe = require('../models/Recipes');
// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
};
// Get a single recipe
exports.getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
};
// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    const result = await recipe.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
// Update a recipe
exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
};
// Delete a recipe
exports.deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndRemove(req.params.id);
    res.status(200).send({ message: 'Recipe deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};







