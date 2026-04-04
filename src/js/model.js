import axios from "axios";
import { API_URL } from "./config";

export const state = {
    recipe:{},
};

export const loadRecipe = async function(id)
{
    try{
        const response = await axios.get(`${API_URL}/${id}`,{timeout:5000});
            //const data = await response.json();
            const {recipe} = response.data.data;
            state.recipe={
            id:recipe.id,
            title:recipe.title,
            publisher:recipe.publisher,
            sourceUrl:recipe.source_url,
            image:recipe.image_url,
            servings:recipe.servings,
            cookingTime:recipe.cooking_time,
            ingredients:recipe.ingredients,
            }
    }
    catch(err)
    {
        throw err;
    }
    
}