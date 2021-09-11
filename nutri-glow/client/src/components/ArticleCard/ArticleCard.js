import React, { useState } from 'react';
import './ArticleCard.scss';

export default function ArticleCard({ data }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="articleCard">
      <img className="mythImage" src={data.img} alt="" />
      <div className="textWrapper">
        <header>
          <h4>{data.title}</h4>
        </header>
        <p>
          {readMore ? data.desc : `${data.desc.substring(0, 150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
      </div>
    </article>
  );
}
