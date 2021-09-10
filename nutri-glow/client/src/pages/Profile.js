import { React, useState, useEffect } from 'react';
// import { auth } from '../firebase';
// import ProfileMenu from '../components/ProfileMenu/ProfileMenu';
// import SignoutButton from '../components/SignoutButton/SignoutButton';
import ProfileIntro from '../components/ProfileIntro/ProfileIntro';

// import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import RecipesButton from '../components/RecipesButton/RecipesButton';
import RecRecipeCard from '../components/RecRecipeCard/RecRecipeCard';
import QuoteBlock from '../components/QuoteBlock/QuoteBlock';
import './Profile.scss';
import CravingsSlider from '../components/CravingsSlider/CravingsSlider';
import RecArticles from '../components/RecArticles/RecArticles';
import WaterTracker from '../components/WaterTracker/WaterTracker';
import VegTacker from '../components/VegTracker/VegTracker';

export default function Profile() {
  const [mealType, setMealType] = useState('Dinner');

  const query = 'tasty';

  const APP_ID = '143e5a61';
  const APP_KEY = '1aba1110ee2c42dcaaeccce62c1f3e22';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [mealType]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`
      // `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=6`
    );

    const recipeData = await response.json();
    // all data is saved in the state
    setRecipes(recipeData.hits);
  };

  return (
    <div>
      <div>
        <ProfileIntro />
      </div>
      <div className="trackerWrapper">
        <WaterTracker />
        <VegTacker />
      </div>
      <div className="wrapper">
        <div className="profileQuote">
          <QuoteBlock
            text='"In giving birth to our babies, we may find that we give birth to new possibilities within ourselves."'
            author="- Myla and Jon Kabat-Zinn"
          />
        </div>

        <div className="recRecipes">
          <h1 className="recRecipesTitle">
            Recommended <br /> recipes
          </h1>
          <div className="recRecipesCards">
            {recipes.slice(0, 3).map((recipe) => (
              <RecRecipeCard
                title={recipe.recipe.label}
                calories={recipe.recipe.calories.toFixed()}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                url={recipe.recipe.url}
              />
            ))}
          </div>
          <div className="recRecipesButton">
            <Link to="/recipes">
              <RecipesButton name="Discover all" />
            </Link>
          </div>
        </div>
      </div>
      <CravingsSlider />
      <RecArticles />
      <div className="recArticlesButton">
        <Link to="/articles">
          <RecipesButton name="Discover all" />
        </Link>
      </div>
    </div>
  );
}
