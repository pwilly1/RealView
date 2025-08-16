import React, { useState } from 'react';
import '../css/global.css'; 

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const nav = document.getElementById('main-nav');
    if (nav) {
      nav.classList.toggle('hidden-small');
    }
  };

  return (
    <div>
      <nav 
        id="hamburger" 
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation menu"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleMenu();
          }
        }}
      >
        <div id="toggle-nav">
          <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
          <div className={`hamburger-line ${isOpen ? 'open' : ''}`}></div>
        </div>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
