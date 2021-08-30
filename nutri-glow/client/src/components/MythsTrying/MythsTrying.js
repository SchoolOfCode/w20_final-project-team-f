import React from 'react';
import { myths1 } from '../../data';
import ArticleCard from '../ArticleCard/ArticleCard';
import './MythsTrying.scss';

export default function MythsTrying() {
  return (
    <div className="mythsContainer">
      {/* <div className="leftMyths">
        <img  className="bigImage" src="/assets/big.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero
          laborum alias neque labore quibusdam ad laudantium voluptatibus minima
          totam doloremque incidunt, aliquam accusamus qui fuga quis eius
          explicabo
          repudiandae!adhlafhasfhahfm,mdbvasjlflsjfhlSFALJHFSDKJGHSKGHAGHKJSG
        </p>
      </div> */}
      <div className="rightMyths">
        {myths1.map((myth) => (
          <ArticleCard myth={myth} />
        ))}
      </div>
    </div>
  );
}
