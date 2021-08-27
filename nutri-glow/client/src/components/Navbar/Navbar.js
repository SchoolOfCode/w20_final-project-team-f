import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Searchbar from '../Searchbar/Searchbar';
import Login from '../Login/Login';
import { MenuList } from './MenuList';

export default function Navbar() {

  const user = null;

  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link exact to={url} activeClassName="active">
          {title}
        </Link>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <h2 className="logoOne">NUTRI</h2>
        </Link>
        <Link to="/">
          <h2 className="logoTwo">GLOW</h2>
        </Link>
      </div>
      <nav>
        <div className="menuIcon" onClick={handleClick}>
          <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={clicked ? 'menu' : 'menu close'}>{menuList}</ul>
      </nav>
      <Searchbar />
      <Link to="/profile">
        <Login />
      </Link>
    </header>
  );
}
