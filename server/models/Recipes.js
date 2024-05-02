const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  ingredients: {
    type: [String]
  },
  image: {
    type: String
  },
});

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;