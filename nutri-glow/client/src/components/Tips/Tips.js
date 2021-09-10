import React from 'react';
import './Tips.scss';
import { tipsCard1 } from '../../data';

export default function Tips({ data }) {
  return (
    <div className="tipsIntro">
      <div className="tipsTitle">
        <h1>Useful tips during this trimester</h1>
      </div>
      <div className="tipsCardContainer">
        {tipsCard1.map((data) => (
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
