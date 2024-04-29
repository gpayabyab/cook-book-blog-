const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  },
  type Recipe {
    _id:ID 
    recipeName:
    recipeDescription:
    recipeImage:
  },
  type Query {

  type Mutation {
    addUser
    login 
    saveRecipe 
    removeRecipe
  },
`;

module.exports = typeDefs;