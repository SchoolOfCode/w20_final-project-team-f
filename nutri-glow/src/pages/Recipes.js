import React, { useState, useEffect } from 'react';
import CuisineDropdown from '../components/CuisineDropdown/CuisineDropdown';
import RecipeDropdown from '../components/RecipeDropdown/RecipeDropdown';
import RecipeFormButton from '../components/RecipeFormButton/RecipeFormButton';
import './Recipes.scss';
import RecipeCard from '../components/RecipeCard/RecipeCard';

let MealType = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
let DietLabel = [
  'balanced',
  'high-fiber',
  'high-protein',
  'low-carb',
  'low-fat',
  'low-sodium',
];

let DietType = ['vegan', 'vegetarian', 'pescatarian', 'paleo', 'kosher'];

export default function Recipes(props) {
  const APP_ID = '143e5a61';
  const APP_KEY = '1aba1110ee2c42dcaaeccce62c1f3e22';

  // state that holds the recipes fetched data
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  //submit selection after clicking the button
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // async function to get API data
  const getRecipes = async () => {
    const response = await fetch(
      // `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=${props.label}&health=${props.health}&health=${props.type}&cuisineType=${props.cuisines}&mealType=${props.meal}`
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&&from=0&to=6`
    );

    const recipeData = await response.json();
    // all data is saved in the state
    setRecipes(recipeData.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div>
      Recipes
      <div>
        <form onSubmit={getSearch} className="searchForm">
          <input
            className="searchBar"
            type="text"
            placeholder="type ingredient"
            value={search}
            onChange={updateSearch}
          ></input>
          <button className="searchButton" type="submit">
            Get recipes
          </button>
        </form>
      </div>
      <div>
        {MealType.map((type, index) => (
          <RecipeFormButton
            text={type}
            value={type}
            getValue={props.updateMealType}
            key={index}
          />
        ))}
      </div>
      <div>
        {DietLabel.map((label, index) => (
          <RecipeFormButton
            text={label}
            value={label}
            getValue={props.updateDietLabel}
            key={index}
          />
        ))}
      </div>
      <div>
        {DietType.map((diet, index) => (
          <RecipeFormButton
            text={diet}
            value={diet}
            getValue={props.updateDietType}
            key={index}
          />
        ))}
      </div>
      <div>
        <RecipeDropdown handleChange={props.updateHealthLabel} />
        <CuisineDropdown handleChange={props.updateCuisine} />
      </div>
      {/* //map over the recipes generated */}
      {recipes.map((recipe) => (
        <RecipeCard
          title={recipe.recipe.label}
          calories={recipe.recipe.calories.toFixed()}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}
