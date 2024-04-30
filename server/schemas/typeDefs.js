const { gql } = require('apollo-server-express');
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedRecipes: [Recipe]
  },
  type Recipe {
    _id: ID
    recipeName: String
    recipeDescription: String
    recipeImage: String
  },
  type Query {
    users: [User]
    user(username: String!): User
    recipes:[Recipe]
    recipe(recipeId: ID!): Recipe
    savedRecipes(username: String!): [Recipe]
  },
  type Auth{
    token:ID!
    user:User
  }
  type Mutation {
    addUser( username:String!, email: String!, password: String!):Auth
    login (email: String!, password: String!): Auth
    saveRecipe (userId: ID!,  recipeName: String, recipeDescription: String, recipeImage: String):User
    removeRecipe(userId:ID!, recipeID: ID!):User
  },
`;

module.exports = typeDefs;