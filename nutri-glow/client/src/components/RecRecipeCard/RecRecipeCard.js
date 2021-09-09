import React from 'react';
import './RecRecipeCard.scss';

export default function RecipeCard({ title, image, url }) {
  return (
    <a className="recipeCardAnchor" href={url}>
      <div className="recipeCard">
        <div className="recipeCardLeft">
          <img className="recipeCardImg" src={image} alt="recipe" />
        </div>
        <div className="recipeCardRight">
          <div className="recipeCardData">
            <h3 className="recipeCardTitle">{title}</h3>
          </div>
        </div>
      </div>
    </a>
  );
}
