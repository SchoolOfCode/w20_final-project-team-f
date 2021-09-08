import React from 'react';
import './Symptoms.scss';
import { symptomsCard1 } from '../../data';

export default function Symptoms() {
  return (
    <div className="symptomsContainer">
      <div className="symptomsTitle">
        <h1>Symptoms during this stage</h1>
      </div>
      <div className="symptomsCardContainer">
        {symptomsCard1.map((data) => (
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
  );
}
