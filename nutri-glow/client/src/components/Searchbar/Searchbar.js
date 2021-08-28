import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './Searchbar.scss';

// search bar displayed in Navbar
export default function Searchbar() {
  return (
    <div>
      <div className="control">
        <input className="input" type="text" placeholder="Search" />
        <AiOutlineSearch className="icon" />
      </div>
    </div>
  );
}
