import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import Menu_open from '../assets/Menu_open.png';
import Menu_close from '../assets/Menu_close.png';

const Navbar = ({ setPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar' role="navigation" aria-label="Primary">
      <img src={Logo} alt="Saranya logo" className='Logo' />

      {!menuOpen && (
        <img 
          src={Menu_open} 
          alt="Open Menu"  
          className='Menu-open' 
          onClick={() => setMenuOpen(true)} 
        />
      )}

      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} role="menu">
        <img 
          src={Menu_close} 
          alt="Close Menu" 
          className='Menu-close' 
          onClick={() => setMenuOpen(false)} 
        />

        <li><button role="menuitem" onClick={() => { setPage("home"); setMenuOpen(false); }}>Home</button></li>
        <li><button role="menuitem" onClick={() => { setPage("about"); setMenuOpen(false); }}>About</button></li>
        <li><button role="menuitem" onClick={() => { setPage("skills"); setMenuOpen(false); }}>Skills</button></li>
        <li><button role="menuitem" onClick={() => { setPage("projects"); setMenuOpen(false); }}>Projects</button></li>
        <li><button role="menuitem" onClick={() => { setPage("contact"); setMenuOpen(false); }}>Contact</button></li>
      </ul>
    </div>
  );
};

export default Navbar;
