import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../assets/Logo.png'
import Menu_open from '../assets/Menu_open.png'
import Menu_close from '../assets/Menu_close.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='navbar'>
      <img src={Logo} alt="Logo" className='Logo' />

      {/* Hamburger icon (only show when menu closed) */}
      {!menuOpen && (
        <img 
          src={Menu_open} 
          alt="Open Menu"  
          className='Menu-open' 
          onClick={() => setMenuOpen(true)} 
        />
      )}

      {/* Side menu */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <img 
          src={Menu_close} 
          alt="Close Menu" 
          className='Menu-close' 
          onClick={() => setMenuOpen(false)} 
        />

        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      {/* Desktop button */}
      <a href="#contact" className='nav-connect'>
        <button className='Connect'>Connect with me</button>
      </a>
    </div>
  )
}

export default Navbar
