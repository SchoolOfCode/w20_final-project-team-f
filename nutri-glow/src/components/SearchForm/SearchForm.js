import React from 'react';
import './SearchForm.scss';

export default function SearchForm({ handleSubmit, handleChange, value }) {
  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e.preventDefault())}
        className="searchForm"
      >
        <input
          className="searchBar"
          type="text"
          placeholder="type ingredient"
          value={value}
          onChange={(event) => handleChange(event.target.value)}
        ></input>
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
