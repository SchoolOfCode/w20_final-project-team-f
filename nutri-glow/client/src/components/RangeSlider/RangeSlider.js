import React, { useState } from 'react';
import './RangeSlider.scss';

const RangeSlider = () => {
  const [rangeval, setRangeval] = useState(null);

  return (
    <div className="rangeSlider">
      <div className="slider">
        <span>1 </span>
        <input
          type="range"
          className="range"
          min="1"
          max="10"
          onChange={(event) => setRangeval(event.target.value)}
        />
        <span> 10</span>
      </div>
      <h4>{rangeval}</h4>
    </div>
  );
};

export default RangeSlider;
