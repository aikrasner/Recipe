import React, {useState, useEffect} from "react"
import RecipeList from "./RecipeList"
import "./app.css"
import axios from "axios"

function App() {
const [recipecards, setRecipes]=useState([]);
  

useEffect (()=>{
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: {number: '10', tags: 'vegetarian,dessert'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setRecipes(response.data.recipes.map((recipeItem, index)=>{
      const title= recipeItem.title
      const image=recipeItem.image
      const instructions=recipeItem.instructions
      return {
        id:`${index}-${Date.now()}`,  
        title:title,
        image:image,
        instructions:instructions
      }
  }))

  }).catch(function (error) {
    console.error(error);
  });
}, [])

    return (
     <div className="container">
     <RecipeList recipecards={recipecards} />
     </div>
    );
  };


export default App;
