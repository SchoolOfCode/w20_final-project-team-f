import React, { useState } from 'react';
import './RecipeCard.scss';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

export default function RecipeCard({ recipe }) {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipeData">
      <img className="recipeImage" src={image} alt="recipe" />
      <div className="itemResult">
        <h1 className="recipeTitle">{label}</h1>
        <a class="recipeLabel" href={url}>
          View Full Recipe
        </a>
      </div>
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
}
