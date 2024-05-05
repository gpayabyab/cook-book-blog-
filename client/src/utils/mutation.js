import { gql } from '@apollo/client';
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;
export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      username
    }
  }
}
`;
export const SAVE_RECIPE = gql`
  mutation saveRecipeToUser($recipeId: String!) {
  saveRecipeToUser(recipeId: $recipeId) {
    username
    savedRecipes {
      _id
      image
      ingredients
      description
      name
    }
    email
    _id
  }
}
`;
export const REMOVE_RECIPE = gql`
mutation removeRecipe($recipeId: ID!) {
  removeRecipe(recipeId: $recipeId) {
    _id
    email
    username
    savedRecipes {
      _id
    }
  }
}
`;
