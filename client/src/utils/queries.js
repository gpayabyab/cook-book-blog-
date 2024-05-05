import { gql, useQuery } from "@apollo/client";
export const GET_ALL_RECIPES = gql`
  query {
    recipes {
      name
      ingredients
      image
      description
      _id
    }
  }
`;
export const GET_RECIPE = gql`
  query GetRecipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
      name
      ingredients
      image
      description
      _id
    }
  }
`;
export const GET_USER = gql`
  query user {
  user {
    _id
    email
    username
    savedRecipes {
      _id
      name
      description
      ingredients
      image
    }
  }
}
`;
export const GET_USERS = gql`
 query users {
  users {
    _id
    email
    savedRecipes {
      _id
    }
    username
  }
}
`;
