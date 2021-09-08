import React from 'react';
import './TrackerIntro.scss';

export default function TrackerIntro(props) {
  return (
    <div className="trackerIntro">
      <div className="leftTracker">
        <div className="wrapperTracker">
          <div className="titleTracker">
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
          </div>
          <div className="descTracker">
            <p>{props.text}</p>
            <h4>{props.intro}</h4>
          </div>
          <button className="trackerButton">{props.button}</button>
        </div>
      </div>
      <div className="rightTracker">
        <div className="imgTracker">
          <img src={props.img} alt="tracker"></img>
        </div>
      </div>
    </div>
  );
}
