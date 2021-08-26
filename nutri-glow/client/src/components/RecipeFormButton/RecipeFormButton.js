import React from 'react';
import './RecipeFormButton.scss';

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
