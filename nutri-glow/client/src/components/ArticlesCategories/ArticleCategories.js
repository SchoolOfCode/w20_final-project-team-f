import React, { useState, useEffect } from 'react';
import './ArticlesCategories.scss';
import ArticleList from '../ArticleList/ArticleList';
import { Link } from 'react-router-dom';

import { article1, article2, article3 } from '../../data.js';

export default function ArticleCategories() {
  const [selectedList, setSelectedList] = useState(1);
  const [data, setData] = useState([]);
  const list = [
    {
      id: 1,
      title: 'Trying to concieve',
    },
    {
      id: 2,
      title: 'Pregnancy',
    },
    {
      id: 3,
      title: 'New mum',
    },
  ];

  useEffect(() => {
    switch (selectedList) {
      case 1:
        setData(article1);
        break;
      case 2:
        setData(article2);
        break;
      case 3:
        setData(article3);
        break;
      default:
        setData(article1);
    }
  }, [selectedList]);

  return (
    <div className="articles">
      <h1>Articles for you</h1>
      <h2>Articles to help you learn more about yourself and your baby</h2>
      <ul>
        {list.map((item) => (
          <ArticleList
            title={item.title}
            active={selectedList === item.id}
            setSelectedList={setSelectedList}
            id={item.id}
          />
        ))}
      </ul>
      <div className="articleContainer">
        {data.map((data) => (
          <Link exact to={data.url}>
            <div className="itemArticleContainer">
              <div className="articleContainerImage">
                <img className="articleCardImage" src={data.img} alt="" />
              </div>
              <div className="textArticleContainer">
                <h3>{data.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
