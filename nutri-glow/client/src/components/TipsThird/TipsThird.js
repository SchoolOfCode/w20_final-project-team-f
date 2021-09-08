import React from 'react';
import './TipsThird.scss';
import { tipsCard3 } from '../../data';

export default function TipsThird() {
  return (
    <div className="tipsIntro">
      <div className="tipsTitle">
        <h1>Useful tips during this trimester</h1>
      </div>
      <div className="tipsCardContainer">
        {tipsCard3.map((data) => (
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
