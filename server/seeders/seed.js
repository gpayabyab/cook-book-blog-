const db = require('../config/connection');
const { Recipe } = require('../models');
const { recipesSeeds } = require('./recipesSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  //await cleanDB('Recipe', 'recipe');

  await Recipe.create(recipesSeeds);

  console.log('all done!');
  process.exit(0);
});
