const { gql } = require('apollo-server-express');
const typeDefs = gql `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedRecipes: [Recipe]
  },
  type RecipeInput {
    authors:[String]
    description: String
    title: String
    Image: String
  }
  type Recipe {
    recipeId: String
    recipeName: String
    recipeDescription: String
    recipeImage: String
  },
  type Query {

  },
  type Auth{
    token:ID!
    user:User
  }
  type Mutation {
    addUser( username:String!, email: String!, password: String!):Auth
    login login(email: String!, password: String!): Auth
    saveRecipe (input: RecipeInput):User
    removeRecipe(recipeId:String):User
  },
`;

module.exports = typeDefs;