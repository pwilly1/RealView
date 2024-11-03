import React from 'react';
import '../css/global.css'; 

const HamburgerMenu = () => {
  const toggleMenu = () => {
    document.getElementById('main-nav').classList.toggle('hidden-small');
  };

  return (
    <div>
      <nav id="hamburger" onClick={toggleMenu}>
        <div id="toggle-nav">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
