import *  as model from './model'
import recipeView  from './views/recipeView';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipes = async function()
{
  try{
    const id = window.location.hash.slice(1);
    if(!id)return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);    
    recipeView.render(model.state.recipe);    
  }catch(err)
  {
    alert(err);
  }
}
controlRecipes();

['haschange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));