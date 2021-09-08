import React from 'react';
import './IntroSection.scss';

export default function IntroSection({
  title,
  subtitle,
  desc,
  img,
  button,
  back,
}) {
  return (
    <div className="introSectionContainer">
      <div className="leftIntroSection">
        <div className="wrapperIntroSection">
          <div className="textIntroSection">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{desc}</p>
          </div>
          <div className="buttonSection">
            <button className="introSectionButton">{button}</button>
            <button className="introSectionBack">{back}</button>
          </div>
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
