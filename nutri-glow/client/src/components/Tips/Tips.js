import React from 'react';
import './Tips.scss';
import { tipsCard } from '../../data';

export default function Tips() {
  return (
    <div className="tipsIntro">
      <div className="tipsTitle">
        <h1>Useful tips during this trimester</h1>
      </div>
      <div className="tipsCardContainer">
        {tipsCard.map((data) => (
          <div className="itemTipsContainer">
            <div className="tipsContainerImage">
              <img className="tipsImage" src={data.img} alt="" />
            </div>
            <div className="textTipsContainer">
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
