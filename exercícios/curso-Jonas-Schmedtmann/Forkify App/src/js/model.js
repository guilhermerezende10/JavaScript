import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
    try {
        const res = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=f8251148-daea-4b0e-81c7-76d43fcdb979`
          );
          const data = await res.json();
        
          if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        
          let recipe = data.data.recipe;
        
          state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
          };
        
          console.log(state.recipe);
    } catch (err) {
        alert(err)
    }
};
