import React from 'react';
import './TrackerCategories.scss';
import { trimesterCard } from '../../data';
import { Link } from 'react-router-dom';

export default function TrackerCategories() {
  return (
    <div className="trimesterIntro">
      <div className="trimesterTitle">
        <h1>Find out what your trimester means for you</h1>
      </div>
      <div className="trimesterCardContainer">
        {trimesterCard.map((data) => (
          <Link exact to={data.url}>
            <div className="itemCardContainer">
              <div className="cardContainerImage">
                <img className="cardImage" src={data.img} alt="" />
              </div>
              <div className="textCardContainer">
                <h3>{data.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
