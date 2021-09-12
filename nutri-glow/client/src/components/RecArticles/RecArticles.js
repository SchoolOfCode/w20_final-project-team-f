import React from 'react';
import './RecArticles.scss';
import { recArticles } from '../../data';

export default function RecArticles() {
  return (
    <div className="symptomsContainer">
      <div className="symptomsTitle">
        <h1>Recommended articles</h1>
      </div>
      <div className="symptomsCardContainer">
        {recArticles.map((data) => (
          <div className="itemSymptomsContainer">
            <div className="symptomsContainerImage">
              <img className="symptomsImage" src={data.img} alt="" />
            </div>
            <div className="textSymptomsContainer">
              <h4>{data.title}</h4>
              <p>{data.desc}</p>
              <div className="readMore">
                <a href={data.more}>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
