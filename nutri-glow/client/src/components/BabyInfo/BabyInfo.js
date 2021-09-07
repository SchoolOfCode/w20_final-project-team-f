import React from 'react';
import './BabyInfo.scss';

export default function BabyInfo({ title, desc, img }) {
  return (
    <div className="babyInfo">
      <div className="leftBabyInfo">
        <div className="babyInfoWrapper">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
      <div className="rightBabyInfo">
        <div className="imgBabyInfo">
          <img src={img} alt="" className="imgBaby" />
        </div>
      </div>
    </div>
  );
}
