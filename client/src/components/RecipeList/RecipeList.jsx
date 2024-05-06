import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_RECIPES, GET_USER } from "../../utils/queries";
import { SAVE_RECIPE } from "../../utils/mutation";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { MdOutlineSaveAlt } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import { saveRecipeIds, getSavedRecipeIds } from "../../utils/localStorage";

import "./RecipeList.css";

function RecipeList() {
  const { data, loading, error } = useQuery(GET_ALL_RECIPES, {
    pollInterval: 100,
  });
  const user = useQuery(GET_USER);

  const userData = user.data?.user || {};

  const recipeData = data?.recipes || [];

  const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());
  const [saveRecipeToUser] = useMutation(SAVE_RECIPE);

  useEffect(() => {
    return () => saveRecipeIds(savedRecipeIds);
  });

  useEffect(() => {
    const userSavedRecipes = userData?.savedRecipes.map((item) => item._id);
    setSavedRecipeIds(userSavedRecipes);
  }, []);

  const handleSave = async (recipeId) => {
    try {
      const { data } = await saveRecipeToUser({ variables: { recipeId } });

      setSavedRecipeIds([...savedRecipeIds, recipeId]);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="flex">
      {recipeData.map(({ _id, name, ingredients, description, image }) => (
        <div className="recipe-container" key={_id} style={{ marginBottom: '2%'}}>
          <h3>{name}</h3>
          <img src={image} alt={name} width={200} height={250} style={{borderRadius: '30px'}} />
          <div >
            <p><strong>Ingredients:</strong> </p>
            <ul style={{ color: "purple", display: 'flex', flexDirection: 'column', flexWrap:'wrap', height: '200px', width: '150px' }}>
              {/* {Array.isArray(ingredients) ? ingredients.join(", ") : ""} */}
              {ingredients?.map((ingredient) => (
                <li style={{marginLeft: '5px', marginRight: '25px'}}>{ingredient}</li>
              ))}
            </ul>
            <p style={{padding: '20px', height: '100px'}}><strong>Instructions:</strong> {description}</p>
          </div>
            <button
              className="saveButton"
              type="button"
              disabled={savedRecipeIds?.some((savedId) => savedId === _id)}
              onClick={() => handleSave(_id)}
            >
              {savedRecipeIds?.some((savedId) => savedId === _id)
                ? <FaCheck />
                :<MdOutlineSaveAlt/>}
            </button>
        </div>
      ))}
    </div>
  );
}
export default RecipeList;
