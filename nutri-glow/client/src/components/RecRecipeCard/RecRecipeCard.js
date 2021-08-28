import React from 'react';
import './RecRecipeCard.scss';

export default function RecipeCard({
  title,
  calories,
  image,
  ingredients,
  url,
}) {
  return (
    <div className="recipeData">
      <img className="recipeImage" src={image} alt="recipe" />
      <div className="itemResult">
        <h1 className="recipeTitle">{title}</h1>
        <a class="recipeLabel" href={url}>
          View Full Recipe
        </a>
      </div>
      <p> Calories: {calories}</p>
      <ul>
        Ingredients:
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}
