import React from 'react';
import NavBar from './NavBar';
import Auth from './Auth';
import HamburgerMenu from "../components/HamburgerMenu"
const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>RealView</h1>
        <NavBar />
        <Auth />
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
