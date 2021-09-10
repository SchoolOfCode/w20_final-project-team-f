import React from 'react';
import './WaterTracker.scss';
import ProgressBar from '../ProgressBar/ProgressBar';

const testData = [{ bgcolor: '#C4E8E9', completed: 60 }];

export default function WaterTracker() {
  return (
    <div className="waterTrackerContainer">
      <div className="itemTracker">
        <div className="waterTrackerText">
          <h2>Water tracker</h2>
          <p>
            Drinking enough water is vital, track your water intake on here.
            Drink atleast 8 glasses a day to hit your goal!
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
