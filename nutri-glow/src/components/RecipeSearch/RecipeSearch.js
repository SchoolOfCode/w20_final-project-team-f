import React from 'react';
import './RecipeSearch.scss';

export default function RecipeSearch() {
  return (
    <div>
      <form className="searchForm">
        <input
          className="searchBar"
          placeholder="type ingredient"
          type="text"
        />
      </form>
    </div>
  );
}
