import React from 'react';
import { foods1 } from '../../data';
import './FoodsTrying.scss';
import ArticleCard from '../ArticleCard/ArticleCard';

export default function FoodsTrying() {
  return (
    <div className="foodsContainer">
      <div className="rightFoods">
        {foods1.map((data) => (
          <ArticleCard data={data} />
        ))}
      </div>
    </div>
  );
}
