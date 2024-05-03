import React from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
const GET_RECIPES = gql`
  query {
    recipes {
      id
      name
      description
      ingredients
      instructions
    }
  }
`;
const SAVE_RECIPE = gql`
  mutation SaveRecipe($recipeId: ID!) {
    saveRecipe(recipeId: $recipeId) {
      id
    }
  }
`;
function RecipeList() {
  const { loading, error, data } = useQuery(GET_RECIPES);
  const [saveRecipe] = useMutation(SAVE_RECIPE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <ul>
      {data.recipes.map(({ id, name }) => (
        <li key={id}>
          {name} <button onClick={() => saveRecipe({ variables: { recipeId: id } })}>Save</button>
        </li>
      ))}
    </ul>
  );
}
export default RecipeList;