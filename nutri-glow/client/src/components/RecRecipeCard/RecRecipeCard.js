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
    <a className="recipeCardAnchor" href={url}>
    <div className="recipeCard">
      <div className="recipeCardLeft">
        <img className="recipeCardImg"  src={image} alt="recipe"/>
      </div>
      <div className="recipeCardRight">
        <div className="recipeCardData">
          <h3 className="recipeCardTitle">{title}</h3>
        </div>
      </div>
    </div>
    </a>

  )





//     <div className="recipeData">
//       <img className="recipeImage" src={image} alt="recipe" />
//       <div className="itemResult">
//         <h1 className="recipeTitle">{title}</h1>
//         <a class="recipeLabel" href={url}>
//           View Full Recipe
//         </a>
//       </div>
//       <p> Calories: {calories}</p>
//       <ul>
//         Ingredients:
//         {ingredients.map((ingredient) => (
//           <li>{ingredient.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
}
