import React from 'react';
import { ProfileCard } from '../../data';
import './ProfileIntro.scss';

export default function ProfileIntro() {
  return (
    <div className="profileIntro">
      <h1>Hi Alina</h1>
      <h2>How are you today?</h2>
      <div className="containerIntro">
        {ProfileCard.map((card) => (
          <div className="cardContainer">
            <div className="topCard">
              <div className="icon">{card.icon}</div>
            </div>
            <div className="centerCard">
              <h2>{card.quest}</h2>
            </div>
            <div className="bottomCard">
              <div className="slider">{card.slider}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
