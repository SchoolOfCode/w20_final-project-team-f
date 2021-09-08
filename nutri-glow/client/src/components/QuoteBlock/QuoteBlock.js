import React from 'react';
import './QuoteBlock.scss';

const QuoteBlock = (props) => {
  return (
    <div className="quoteBlockContainer">
      <div className="quoteBlockLeft">
        <img className="quoteBlockImage" src="/assets/pregImge.png" alt="" />
      </div>
      <div className="quoteBlockRight">
        <h2 className="quoteText">{props.text}</h2>
        <br />
        <h2 className="quoteAuthor">{props.author}</h2>
      </div>
    </div>
  );
};

export default QuoteBlock;
