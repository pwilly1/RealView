import React from 'react';
import NavBar from './NavBar';
import Auth from './Auth';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>RealView</h1>
        <NavBar />
        <Auth />
      </div>
    </header>
  );
};

export default Header;
