import React from 'react';

export default function RecipeCard({ title, calories, image, ingredients }) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories}</p>
      <img src={image} alt="recipe" />
    </div>
  );
}
