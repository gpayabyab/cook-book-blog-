import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_USER } from "../../utils/queries";
import { REMOVE_RECIPE } from "../../utils/mutation";

import { removeRecipeId } from "../../utils/localStorage";
// Make sure these are correctly imported from your utils
function MySavedRecipes() {
  // Adjust according to your authentication method
  const { data, loading, error } = useQuery(GET_USER);

  const userData = data?.user || {};

  const [removeRecipe, { loading: removing }] = useMutation(REMOVE_RECIPE);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  const handleDelete = (recipeId) => {
    removeRecipe({ variables: { recipeId } });
    removeRecipeId(recipeId)
  };

  return (
    <div className="container">
      <h2>Welcome to your saved recipes,{userData.username}</h2>
      {userData.savedRecipes?.length ? (
        userData.savedRecipes.map(
          ({ _id, name, ingredients, image, description }) => (
            <div key={_id} className="saved-recipe-item">
              <h3>{name}</h3>
              <img
                src={image}
                alt={name}
                width={100}
              />
              <p>{Array.isArray(ingredients)? ingredients.join(', '): ''}</p>
              <p>{description}</p>
              <button onClick={() => handleDelete(_id)}>Delete</button>
            </div>
          )
        )
      ) : (
        <h1>No Recipes Saved</h1>
      )}
    </div>
  );
}
export default MySavedRecipes;
