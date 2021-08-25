import React, { useEffect } from 'react';
import RecipeDropdown from '../components/RecipeDropdown/RecipeDropdown';
import RecipeFormButton from '../components/RecipeFormButton/RecipeFormButton';
import RecipeSearch from '../components/RecipeSearch/RecipeSearch';
import './Recipes.scss';

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

  const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=${APP_ID}&app_key=${APP_KEY}&diet=${props.label}&health=${props.type}&health=${props.health}&cuisineType=${props.cuisines}&mealType=${props.meal}`;

  return (
    <div>
      Recipes
      <div>
        <RecipeSearch />
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
      <RecipeDropdown
        handleChange={props.updateHealthLabel}
        handleValue={props.updateCuisine}
      />
      <div>
        <button className="searchButton" type="submit">
          Get recipes
        </button>
      </div>
    </div>
  );
}
