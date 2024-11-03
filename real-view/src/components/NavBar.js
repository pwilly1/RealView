import React from 'react';
import { Link } from 'react-router-dom';
import "../css/global.css";

const NavBar = () => {
  return (
    <nav id="main-nav" className="hidden-small">
      <ul>
        <li>Home</li>
        <li><a href="/listings">Property Listing</a></li>
        <li>About Us</li>
        <li>Agent Directory</li>
        <li>Market Statistics</li>
        <li>List Property</li>
      </ul>
    </nav>
  );
};

export default NavBar;
