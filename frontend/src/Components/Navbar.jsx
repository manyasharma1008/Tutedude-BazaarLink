import React, { useEffect, useState } from 'react';
import './theme.css'; 

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <nav >
      <ul >
        <li>Home</li>
        <li>Developers</li>
        <li>Contact Us</li>
        <button>Login</button>
        <div className="toggle-switch">
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
            <span className="slider round"></span>
          </label>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
