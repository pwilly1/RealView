import React from 'react';
import { Link } from 'react-router-dom';
import "../css/global.css";

const NavBar = () => {
  return (
    <nav id="main-nav" className="hidden-small">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/listings">Property Listing</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/agents">Agent Directory</Link></li>
        <li><Link to="/stats">Market Statistics</Link></li>
        <li><Link to="/sell">List Property</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

