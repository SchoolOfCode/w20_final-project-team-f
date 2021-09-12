import React from 'react';
import './VegTracker.scss';
import ProgressBtn from '../ProgressBtn/ProgressBtn';

export default function VegTracker() {
  return (
    <div className="waterTrackerContainer">
      <div className="itemTracker">
        <div className="waterTrackerText">
          <h2>Fruit and veg Tracker</h2>
          <p>
            Eating your daily fruits and veggies has numerous health benefits.
            It is recommended you eat 10 portions of fruit or vegetables a day
            to meet your target!
          </p>
        </div>

        <ProgressBtn />

        {/* <div className="progressData">
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
