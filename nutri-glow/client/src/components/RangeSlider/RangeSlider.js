import React, { useState } from 'react';
import { ACTIONS } from '../ProfileIntro/ProfileIntro';
import './RangeSlider.scss';

const RangeSlider = ({id,dispatch}) => {
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
          onChange={(event) =>{ dispatch({
            type:"CARDQOUTE",
            id:id,
            sliderValue:event.target.value

          })
             setRangeval(event.target.value)}}
        />
        <span> 10</span>
      </div>
      <h4>{rangeval}</h4>
    </div>
  );
};

export default RangeSlider;
