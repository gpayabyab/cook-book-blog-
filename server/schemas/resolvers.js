const { User, Recipe } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (parent, args) => {
      if (context.user) {
        return User.find().populate("savedRecipes");
      }
      throw AuthenticationError;
    },
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate("savedRecipes");
      }
      throw AuthenticationError;
    },
    recipe: async (parent, { recipeId }) => {
      return Recipe.findOne({ _id: recipeId });
    },
    recipes: async () => {
      return Recipe.find();
    },
  },
  Mutation: {
    // Resolver to save a recipe for a user
    saveRecipeToUser: async (_, { recipeData }, context) => {
      if (context.user) {
        const userData = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedRecipes: recipeData } },
          { new: true }
        );
        return userData
      }
      throw AuthenticationError;
    },
    // Resolver to remove a recipe from saved recipes
    removeRecipe: async (_, { recipeId }, context) => {
      if (context.user) {
        const userData = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedRecipes: recipeId } },
          { new: true }
        );
        return userData
      }
      throw AuthenticationError;
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
