import React from 'react';
import './ArticleList.scss';

export default function ArticleList({ title, active, setSelectedList, id }) {
  return (
    <li
      className={active ? 'articleList active' : 'articleList'}
      onClick={() => setSelectedList(id)}
    >
      {title}
    </li>
  );
}
