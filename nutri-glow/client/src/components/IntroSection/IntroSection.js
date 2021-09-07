import React from 'react';
import './IntroSection.scss';

export default function IntroSection({ title, subtitle, desc, img, button }) {
  return (
    <div className="introSectionContainer">
      <div className="leftIntroSection">
        <div className="wrapperIntroSection">
          <div className="textIntroSection">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{desc}</p>
          </div>
          <button className="introSectionButton">{button}</button>
        </div>
      </div>
      <div className="rightIntroSection">
        <div className="imgIntroSection">
          <img className="imgIntroSec" src={img} alt="trimester"></img>
        </div>
      </div>
    </div>
  );
}
