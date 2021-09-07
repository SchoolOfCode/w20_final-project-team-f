import React from 'react';
import './TrackerBlock.scss';

export default function TrackerBlock(props) {
  return (
    <div className="blockContainer">
      <div className="blockWrapper">
        <h1>{props.title}</h1>
        <h5>{props.block}</h5>
      </div>
    </div>
  );
}
