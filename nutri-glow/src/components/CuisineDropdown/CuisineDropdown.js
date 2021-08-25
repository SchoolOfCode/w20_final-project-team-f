import React from 'react';
import { Cuisine } from '../../data';
import './CuisineDropdown.scss';

export default function CuisineDropdown({ handleChange }) {
  const cuisine = Cuisine.map(({ name, title }, index) => {
    return (
      <option key={index} value={name}>
        {title}
      </option>
    );
  });
  return (
    <div>
      <select
        className="cuisineSelect"
        onChange={(event) => handleChange(event.target.value)}
      >
        {cuisine}
      </select>
    </div>
  );
}
