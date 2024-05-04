export const getSavedRecipeIds = () => {
    const savedRecipeIds = localStorage.getItem('saved_recipes')
      ? JSON.parse(localStorage.getItem('saved_recipes'))
      : [];
  
    return savedRecipeIds;
  };
  
  export const saveRecipeIds = (recipeIdArr) => {
    if (recipeIdArr.length) {
      localStorage.setItem('saved_recipes', JSON.stringify(recipeIdArr));
    } else {
      localStorage.removeItem('saved_recipes');
    }
  };
  
  export const removeRecipeId = (id) => {
    const savedRecipeIds = localStorage.getItem('saved_recipes')
      ? JSON.parse(localStorage.getItem('saved_recipes'))
      : null;
  
    if (!savedRecipeIds) {
      return false;
    }
  
    const updatedSavedRecipeIds = savedRecipeIds?.filter((savedId) => savedId !== id);

    localStorage.setItem('saved_recipes', JSON.stringify(updatedSavedRecipeIds));
  
    return true;
  };
  