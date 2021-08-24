import React from 'react';
import { Intolerance } from '../../data';
import { Cuisine } from '../../data';

export default function RecipeDropdown({ handleChange, handleValue }) {
  const intolerance = Intolerance.map(({ name, title }, index) => {
    return (
      <option key={index} value={name}>
        {title}
      </option>
    );
  });

  const cuisine = Cuisine.map(({ name, title }, index) => {
    return (
      <option key={index} value={name}>
        {title}
      </option>
    );
  });
  return (
    <div className="dropdown">
      <select onChange={(event) => handleChange(event.target.value)}>
        {intolerance}
      </select>
      <select onChange={(event) => handleValue(event.target.value)}>
        {cuisine}
      </select>
    </div>
  );
}
