import React, { useState, useEffect } from 'react';
import CuisineDropdown from '../components/CuisineDropdown/CuisineDropdown';
import RecipeDropdown from '../components/RecipeDropdown/RecipeDropdown';
import RecipeFormButton from '../components/RecipeFormButton/RecipeFormButton';
import './Recipes.scss';
import RecipeCard from '../components/RecipeCard/RecipeCard';
import { v4 as uuidv4 } from 'uuid';

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

export default function Recipes() {
  //state that stores user selection from recipe filters
  const [dietLabel, setDietLabel] = useState('balanced');
  const [mealType, setMealType] = useState('Dinner');
  const [cuisines, setCuisines] = useState('British');
  const [healthLabel, setHealthLabel] = useState('alcohol-free');
  const [dietType, setDietType] = useState('vegetarian');

  function getDietLabel(label) {
    setDietLabel(label);
  }
  console.log(dietType);
  function getMealType(meal) {
    setMealType(meal);
  }

  function getCuisine(cuisine) {
    setCuisines(cuisine);
  }

  function getHealthLabel(health) {
    setHealthLabel(health);
  }
  function getDietType(type) {
    setDietType(type);
  }
  const APP_ID = '143e5a61';
  const APP_KEY = '1aba1110ee2c42dcaaeccce62c1f3e22';

  // state that holds the recipes fetched data
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  //submit selection after clicking the button
  const [query, setQuery] = useState('');

  const [show, setShow] = useState(false);

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, dietLabel, mealType, cuisines, healthLabel, dietType]);

  // async function to get API data
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=${dietLabel}&health=${healthLabel}&health=${dietType}&cuisineType=${cuisines}&mealType=${mealType}&to=6`
      // `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=6`
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
    <div className="wrapper">
      <div className="top">
        <div className="recipeFilters">
          <div className="filtersWrapper">
            <div className="recipeIntro">
              <h2>Find the perfect recipe</h2>
              <h3>Tell Us what ingredient you need to use up</h3>
              <h4>
                Type the first ingredient you want to use up in the search box
                and pick the best match from the drop down.
              </h4>
            </div>
            <div className="searchRecipes">
              <form onSubmit={getSearch} className="searchForm">
                <input
                  className="searchBar"
                  type="text"
                  placeholder="Enter ingredient"
                  value={search}
                  onChange={updateSearch}
                ></input>
                <button className="searchButton" type="submit">
                  Get recipes
                </button>
              </form>
            </div>

            <button className="filterButton" onClick={() => setShow(!show)}>
              Display Filters
            </button>
            {show && (
              <div className="selection">
                <div className="buttonFilters">
                  <div className="selectMeal">
                    <p> Meal Type</p>
                    {MealType.map((type, index) => (
                      <RecipeFormButton
                        text={type}
                        value={type}
                        getValue={getMealType}
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="selectLabel">
                    <p>Diet Label</p>
                    {DietLabel.map((label, index) => (
                      <RecipeFormButton
                        text={label}
                        value={label}
                        getValue={getDietLabel}
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="selectDiet">
                    <p>Diet type</p>
                    {DietType.map((diet, index) => (
                      <RecipeFormButton
                        text={diet}
                        value={diet}
                        getValue={getDietType}
                        key={index}
                      />
                    ))}
                  </div>
                </div>
                <div className="selectDropdown">
                  <div className="health">
                    <p>Allergies</p>
                    <RecipeDropdown handleChange={getHealthLabel} />
                  </div>
                  <div className="cuisine">
                    <p>Favourite Cuisine</p>
                    <CuisineDropdown handleChange={getCuisine} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="rightFilters">
          <div className="rimgContainer">
            <img
              className="imgFilters"
              src="/assets/recipe.png"
              alt="cooking-baby"
            ></img>
          </div>
        </div>
      </div>
      {/* //map over the recipes generated */}
      <div className="bottom">
        {recipes !== [] &&
          recipes
            .slice(0, 12)
            .map((recipe) => <RecipeCard key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}
