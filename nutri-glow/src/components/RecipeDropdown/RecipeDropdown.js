import React from 'react';
import { Intolerance } from '../../data';

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
      <select onChange={(event) => handleChange(event.target.value)}>
        {intolerance}
      </select>
    </div>
  );
}
