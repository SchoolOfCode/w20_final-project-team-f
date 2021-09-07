import React from 'react';
import { symptomsCard3 } from '../../data';
import './SymptomsThird.scss';

export default function SymptomsThird() {
  return (
    <div>
      <div className="symptomsContainer">
        <div className="symptomsTitle">
          <h1>Symptoms during this stage</h1>
        </div>
        <div className="symptomsCardContainer">
          {symptomsCard3.map((data) => (
            <div className="itemSymptomsContainer">
              <div className="symptomsContainerImage">
                <img className="symptomsImage" src={data.img} alt="" />
              </div>
              <div className="textSymptomsContainer">
                <h4>{data.title}</h4>
                <p>{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
