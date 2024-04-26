import SavedRecipes from "./models/SaveRecipes.js";

const { } = require('../models');

const resolvers = {
    Query: {
        // Resolver to get saved recipes by userId
        savedRecipes: async (_, { userId }) => {
          try {
            const savedRecipes = await SavedRecipes.findOne({ userId });
            return savedRecipes;
          } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch saved recipes");
          }
        },
      },
      Mutation: {
        // Resolver to save a recipe for a user
        saveRecipe: async (_, { userId, recipeId }) => {
          try {
            const savedRecipes = await SavedRecipes.findOne({ userId });
            if (savedRecipes) {
              savedRecipes.recipeId.push(recipeId);
              await savedRecipes.save();
              return savedRecipes;
            } else {
              const newSavedRecipes = new SavedRecipes({
                userId,
                recipeId: [recipeId],
              });
              await newSavedRecipes.save();
              return newSavedRecipes;
            }
          } catch (err) {
            console.log(err);
            throw new Error("Failed to save recipe");
          }
        },
        // Resolver to remove a recipe from saved recipes
        removeRecipe: async (_, { userId, recipeId }) => {
          try {
            const savedRecipes = await SavedRecipes.findOne({ userId });
            if (savedRecipes) {
              savedRecipes.recipeId = savedRecipes.recipeId.filter(
                (id) => id !== recipeId
              );
              await savedRecipes.save();
              return savedRecipes;
            } else {
              throw new Error("User not found");
            }
          } catch (err) {
            console.log(err);
            throw new Error("Failed to remove recipe");
          }
        },
      },
    };
    


module.exports = resolvers;