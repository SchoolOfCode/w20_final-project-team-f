import React, { useLayoutEffect } from 'react';
import { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import RecipesButton from '../components/RecipesButton/RecipesButton';
import RecRecipeCard from '../components/RecRecipeCard/RecRecipeCard';
import './Profile.scss';

export default function Profile() {

  // const [dietLabel, setDietLabel] = useState('balanced');
  const [mealType, setMealType] = useState('Dinner');
  // const [cuisines, setCuisines] = useState('Italian');
  // const [healthLabel, setHealthLabel] = useState('dairy-free')
  // const [dietType, setDietType] = useState('vegan');
  const query = "tasty";


  // function getDietLabel(label) {
  //   setDietLabel(label);
  // // }
  // // console.log(dietType);
  // function getMealType(meal) {
  //   setMealType(meal);
  // }

  // function getCuisine(cuisine) {
  //   setCuisines(cuisine);
  // }

  // function getHealthLabel(health) {
  //   setHealthLabel(health);
  // }
  // function getDietType(type) {
  //   setDietType(type);
  // }


//  const [recipe, setRecipe] = useState([]);

// useEffect(() => {


//   (async () => {
//     let recipeSample;
//     const response  = await fetch("https://api.edamam.com/search?q=chicken&app_id=9d4b0f07&app_key=9fd51e02682bd21403e0cb0ceca95fb8");
//     const recipe = await response.json();
//     console.log(recipe);
//     recipeSample = [];
//   })
// setRecipe(recipeSample)

// }, [])

const APP_ID = '143e5a61';
const APP_KEY = '1aba1110ee2c42dcaaeccce62c1f3e22';

 // state that holds the recipes fetched data
 const [recipes, setRecipes] = useState([]);
//  const [search, setSearch] = useState('');
//  //submit selection after clicking the button
//  const [query, setQuery] = useState('');

useEffect(() => {
  getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [mealType]);

const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
       // `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=6`
  );

  const recipeData = await response.json();
  // all data is saved in the state
  setRecipes(recipeData.hits);
};

// const updateSearch = (e) => {
//   setSearch(e.target.value);
// };

// const getSearch = (e) => {
//   e.preventDefault();
//   setQuery(search);
// };

  return (

  <div className="wrapper">
    <div className="profileQuote">
    
    </div>
    <div className="recRecipes">
      <h1 className="recRecipesTitle">Recommended <br/> recipes</h1>
      <div className="recRecipesCards">
        {recipes.slice(0, 3).map((recipe) => (
          <RecRecipeCard
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toFixed()}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
      <div className="recRecipesButton">
      <Link to="/recipes">
        <RecipesButton
          name="Discover all"
        />
      </Link>
      </div>
    </div>
  </div>
)
}