import React from 'react';
import './RecipeFormButton.scss';

// recipe filters selection button component
export default function RecipeForm({ getValue, value, text }) {
  return (
    <div className="recipeButton">
      <button
        className="formButton"
        value={value}
        onClick={(event) => getValue(event.target.value)}
      >
        {text}
      </button>
    </div>
  );
}
