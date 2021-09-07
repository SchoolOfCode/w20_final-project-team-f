import React from 'react';
import './TrackerBlock.scss';

export default function TrackerBlock(props) {
  return (
    <div className="blockContainer">
      <div className="leftblockContainer">
        <div className="imgBlockContainer">
          <img className="imgBlock" src={props.img} alt="" />
        </div>
      </div>
      <div className="rightblockContainer">
        <div className="blockWrapper">
          <h1>{props.title}</h1>
          <p>{props.block}</p>
        </div>
      </div>
    </div>
  );
}
