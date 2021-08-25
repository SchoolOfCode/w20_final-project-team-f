import React from 'react';

export default function RecipeCard({ title, calories, image }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="recipe" />
    </div>
  );
}
