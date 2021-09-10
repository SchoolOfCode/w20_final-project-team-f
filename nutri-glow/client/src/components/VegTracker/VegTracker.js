import React from 'react';
import './VegTracker.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

const testData = [{ bgcolor: '#7D9596', completed: 30 }];

export default function VegTracker() {
  return (
    <div className="waterTrackerContainer">
      <div className="itemTracker">
        <div className="waterTrackerText">
          <h2>Fruit and veg Tracker</h2>
          <p>
            Eating your daily fruits and veggies has numerous health benefits.
            Eat atleast 5 portions a day to meet your target!
          </p>
        </div>

        <div className="progressData">
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}