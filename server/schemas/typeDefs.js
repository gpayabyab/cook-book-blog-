const { gql } = require("apollo-server-express");
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    savedRecipes: [Recipe]
  }

  type Recipe {
    _id: ID
    name: String
    description: String
    ingredients: [String]
    image: String
  }

  type Query {
    users: [User]
    user: User
    recipes:[Recipe]
    recipe(recipeId: ID!): Recipe    
  }

  type Auth{
    token:ID!
    user:User
  }

  input RecipeInput {
    name: String
    description: String
    ingredients: [String]
    image: String
  }

  type Mutation {
    addUser(username:String!, email: String!, password: String!):Auth
    login (email: String!, password: String!): Auth
    saveRecipeToUser(recipeId: String!):User
    removeRecipe(recipeId: ID!):User
  },
`;

module.exports = typeDefs;
