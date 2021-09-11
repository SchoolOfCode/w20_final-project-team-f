import React from 'react';
import { myths1 } from '../../data';
import ArticleCard from '../ArticleCard/ArticleCard';
import './MythsTrying.scss';

export default function MythsTrying() {
  return (
    <div className="mythsContainer">
      <div className="rightMyths">
        {myths1.map((data) => (
          <ArticleCard data={data} />
        ))}
      </div>
    </div>
  );
}
