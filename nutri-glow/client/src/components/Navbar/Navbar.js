import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { NavBarMenuList } from './NavBarMenuList';
import Searchbar from '../Searchbar/Searchbar';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import LoginButton from '../LoginButton/LoginButton';
import { auth } from '../../firebase';

export default function Navbar() {
  //state for the hamburger menu bars
  const [clicked, setClicked] = useState(false);

  // state for login or profile menu display 
  // code reused from app.js - refactor for DRY

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);


  //mapping through the MenuList object to display link into the nav bar
  const navBarMenuList = NavBarMenuList.map(({ url, title }, index) => {
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
        <ul className={clicked ? 'menu' : 'menu close'}>{navBarMenuList}</ul>
      </nav>
      <Searchbar />
      {/* display login button if user isn't logged in and profile menu when logged in */}
      {user ? <ProfileMenu /> : <LoginButton />}
    </header>
  );
}

