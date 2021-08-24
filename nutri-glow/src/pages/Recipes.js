import React from 'react';
import RecipeDropdown from '../components/RecipeDropdown/RecipeDropdown';
import RecipeFormButton from '../components/RecipeFormButton/RecipeFormButton';
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

const APP_ID = '143e5a61';
const APP_KEY = '1aba1110ee2c42dcaaeccce62c1f3e22';

const exampleReq =
  'https://api.edamam.com/api/recipes/v2?type=public&q=egg&app_id=143e5a61&app_key=1aba1110ee2c42dcaaeccce62c1f3e22&diet=high-fiber&health=vegan&health=vegetarian&cuisineType=Asian&mealType=Lunch';

export default function Recipes() {
  return (
    <div>
      Recipes
      <div>
        {MealType.map((diet, index) => (
          <RecipeFormButton
            text={diet}
            value={diet}
            // getValue={props.updateDiet}
            key={index}
          />
        ))}
      </div>
      <div>
        {DietLabel.map((diet, index) => (
          <RecipeFormButton
            text={diet}
            value={diet}
            // getValue={props.updateDiet}
            key={index}
          />
        ))}
      </div>
      <div>
        {DietType.map((diet, index) => (
          <RecipeFormButton
            text={diet}
            value={diet}
            // getValue={props.updateDiet}
            key={index}
          />
        ))}
      </div>
      <RecipeDropdown />
    </div>
  );
}
