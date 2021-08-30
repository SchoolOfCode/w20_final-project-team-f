import React, { useState } from 'react';
import './ArticleCard.scss';

export default function ArticleCard({ myth }) {
  const [readMore, setReadMore] = useState(false);
  // const {title, desc} = myth
  return (
    <div className="articleCard">
      <div className="imgContainer">
        <img src={myth.img} alt="" />
      </div>
      <div className="textWrapper">
        <h4>{myth.title}</h4>
        <p>
          {readMore ? myth.desc : `${myth.desc.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
      </div>
    </div>
  );
}
