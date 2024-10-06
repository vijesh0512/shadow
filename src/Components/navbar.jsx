import React, { useState } from 'react';
import './live.css';

const Navbar = ({ onNavClick }) => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  const toggleSide = () => {
    setIsSideOpen(!isSideOpen);
  };

  const handleNavClick = (navItem) => {
    onNavClick(navItem);
    setIsSideOpen(false); // Close the side nav after clicking an item
  };

  return (
    <>
      <div className='navflex'>
        <img src="./line.jfif" alt="line" onClick={toggleSide} />
        <h1 className='navbar'>SHADOW PLAYER</h1>
      </div>
      {isSideOpen && <SideNav onNavClick={handleNavClick} />}
    </>
  );
};

const SideNav = ({ onNavClick }) => {
  return (
    <div className='side-nav'>
      <ul>
        <li onClick={() => onNavClick('home')}>Home</li>
        <li onClick={() => onNavClick('vlc')}>Live TV</li>
        <li onClick={() => onNavClick('Movies')}>Movies</li>
        <li onClick={() => onNavClick('Shows')}>TV Shows</li>
        <li onClick={() => onNavClick('Kids')}>Kids</li>
        <li onClick={() => onNavClick('Albums')}>Albums</li>
        <li onClick={() => onNavClick('Series')}>Series</li>
        <li onClick={() => onNavClick('Vid')}>Video Songs</li>
        {/* <li onClick={() => onNavClick('stream')}>Livestream</li> */}
        {/* <li onClick={() => onNavClick('FT')}>24/7</li> */}
        {/* Add other nav items here */}
      </ul>
    </div>
  );
};

export default Navbar;
