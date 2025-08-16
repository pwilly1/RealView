import React, { useState } from 'react';

const Auth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      // Handle logout logic here
    } else {
      // Handle login logic here
      console.log('Login/Sign up clicked');
    }
  };

  return (
    <div className="auth">
      <button onClick={handleAuthClick} className="auth-button">
        {isLoggedIn ? (
          <>
            <i className="fas fa-user"></i> Logout
          </>
        ) : (
          <>
            <i className="fas fa-sign-in-alt"></i> Login/Sign up
          </>
        )}
      </button>
    </div>
  );
};

export default Auth;
