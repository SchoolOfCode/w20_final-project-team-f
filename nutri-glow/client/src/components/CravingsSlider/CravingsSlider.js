import React, { useState } from 'react';
import { cravings } from '../../data';
import './CravingsSlider.scss';

export default function CravingsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleClick(side) {
    if (side === 'left') {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5);
    } else {
      setCurrentSlide(
        currentSlide < cravings.length - 1 ? currentSlide + 1 : 0
      );
    }
  }
  return (
    <div className="cravings">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {cravings.map((data) => (
          <div className="cravingsContainer">
            <div className="itemCravings">
              <div className="leftCravingsContainer">
                <div className="cravingImgContainer">
                  <img src={data.img} alt="" className="cravingsImage" />
                </div>
              </div>
              <div className="rightCravings">
                <div className="textCravings">
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="arrow left"
        src="/assets/arrowLeft.png"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        className="arrow right"
        src="/assets/arrowRight.png"
        alt=""
        onClick={() => handleClick('right')}
      />
    </div>
  );
}
