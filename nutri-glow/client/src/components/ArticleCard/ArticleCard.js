import React, { useState } from 'react';
import './ArticleCard.scss';

export default function ArticleCard({ data }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="articleCard">
      <div className="imgArticle">
        <img className="mythImage" src={data.img} alt="" />
      </div>
      <div className="textWrapper">
        <h4>{data.title}</h4>
        <p>
          {readMore ? data.desc : `${data.desc.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
      </div>
    </div>
  );
}
