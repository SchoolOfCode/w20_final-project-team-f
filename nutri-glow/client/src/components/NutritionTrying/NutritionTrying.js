import React from 'react';
import { nutrition1 } from '../../data';
import ArticleCard from '../ArticleCard/ArticleCard';
import './NutritionTrying.scss';

export default function NutritionTying() {
  return (
    <div className="nutritionContainer">
      <div className="rightNutrition">
        {nutrition1.map((data) => (
          <ArticleCard data={data} />
        ))}
      </div>
    </div>
  );
}
