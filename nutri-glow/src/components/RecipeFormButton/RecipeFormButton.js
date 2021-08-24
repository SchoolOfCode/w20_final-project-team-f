import React from 'react';
import './RecipeFormButton.scss';

export default function RecipeForm(props) {
  return (
    <div className="recipeButton">
      <button
        className="formButton"
        value={props.value}
        onClick={(event) => props.getValue(event.target.value)}
      >
        {props.text}
      </button>
    </div>
  );
}
