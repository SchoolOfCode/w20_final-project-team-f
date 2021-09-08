import React from 'react'
import './RecipesButton.scss'

const RecipesButton = (props) => {
    return (
    <div>
      <button className="recipesButton">{props.name}</button>
    </div>
    )
}

export default RecipesButton