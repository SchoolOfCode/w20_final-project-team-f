import React, { useState } from 'react';
import './RecipeCard.scss';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

export default function RecipeCard({ recipe }) {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="displayRecipe">
      <div className="recipeData">
        <div className="detailsLeft">
          <img className="recipeImage" src={image} alt="recipe" />
        </div>
        <div className="detailsRight">
          <div className="itemResult">
            <h3 className="recipeTitle">{label}</h3>
            <a class="recipeLabel" href={url}>
              View Full Recipe
            </a>
          </div>
          <div className="ingredientButton">
            <button className="buttonRecipe" onClick={() => setShow(!show)}>
              Ingredients
            </button>
          </div>
        </div>
      </div>

      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
}
