import React from 'react';
import './WaterTracker.scss';
import ProgressBtn from '../ProgressBtn/ProgressBtn';

const testData = [{ bgcolor: '#C4E8E9', completed: 60 }];

export default function WaterTracker() {
  return (
    <div className="waterTrackerContainer">
      <div className="itemTracker">
        <div className="waterTrackerText">
          <h2>Water tracker</h2>
          <p>
            Drinking enough water is vital, track your water intake on here.
            Drink at least 10 glasses a day to hit your goal!
          </p>
        </div>

        <ProgressBtn/>

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
