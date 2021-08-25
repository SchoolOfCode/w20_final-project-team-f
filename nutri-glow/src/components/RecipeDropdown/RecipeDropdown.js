import React from 'react';
import { Intolerance } from '../../data';
import './RecipeDropdown.scss';

export default function RecipeDropdown({ handleChange }) {
  const intolerance = Intolerance.map(({ name, title }, index) => {
    return (
      <option key={index} value={name}>
        {title}
      </option>
    );
  });

  return (
    <div className="allergyDropdown">
      <select
        className="intoleranceSelect"
        onChange={(event) => handleChange(event.target.value)}
      >
        {intolerance}
      </select>
    </div>
  );
}
