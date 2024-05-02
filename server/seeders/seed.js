const db = require('../config/connection');
const { Recipes } = require('../models');
const { recipesSeeds } = require('./recipesSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Recipes', 'recipes');

  await Recipes.create(recipesSeeds);

  console.log('all done!');
  process.exit(0);
});
