import *  as model from './model'
import recipeView  from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
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
    console.log(id);
    recipeView.renderSpinner();

    await model.loadRecipe(id);    
    recipeView.render(model.state.recipe);    
  }catch(err)
  {
    recipeView.renderError();
  }
}
const controlSearchResults = async function()
{
  try{
    resultsView.renderSpinner();
    const query = searchView.getQuery();
    if(!query)return;
    await model.loadSearchResults(query);
    resultsView.render(model.state.search.results);
  }catch(err)
  {
    recipeView.renderError(err);
  }
}


const init = function()
{
  recipeView.addHandlerMethod(controlRecipes);
  searchView.addhanlderSearch(controlSearchResults);
}
init();