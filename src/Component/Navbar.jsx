import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import Menu_open from '../assets/Menu_open.png';
import Menu_close from '../assets/Menu_close.png';

const Navbar = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <img src={Logo} alt="Logo" className='Logo' />

      {!menuOpen && (
        <img 
          src={Menu_open} 
          alt="Open Menu"  
          className='Menu-open' 
          onClick={() => setMenuOpen(true)} 
        />
      )}

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <img 
          src={Menu_close} 
          alt="Close Menu" 
          className='Menu-close' 
          onClick={() => setMenuOpen(false)} 
        />

        <li><button onClick={() => { setPage("home"); setMenuOpen(false); }}>Home</button></li>
        <li><button onClick={() => { setPage("about"); setMenuOpen(false); }}>About</button></li>
        <li><button onClick={() => { setPage("skills"); setMenuOpen(false); }}>Skills</button></li>
        <li><button onClick={() => { setPage("projects"); setMenuOpen(false); }}>Projects</button></li>
        <li><button onClick={() => { setPage("contact"); setMenuOpen(false); }}>Contact</button></li>
      </ul>
    </div>
  );
};

export default Navbar;
