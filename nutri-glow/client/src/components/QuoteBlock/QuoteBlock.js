import React from 'react'
import "./QuoteBlock.scss"
import "./preg-image.png"

const QuoteBlock = (props) => {
    return (
        <div className="quoteBlockContainer">
            <div className="quoteBlockLeft">
                <img className="quoteBlockImage" src="./preg-image.png"/>
            </div>
            <div className="quoteBlockRight">
                <h2 className="quoteText">{props.text}</h2>
                <br/>
                <h2 className="quoteAuthor">{props.author}</h2>
            </div>
        </div>
    )
}

export default QuoteBlock

