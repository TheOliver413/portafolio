import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          <Terminal className="logo-icon" size={28} />
          <span>Dev<span className="text-gradient">Portfolio</span></span>
        </a>

        <div className={`nav-links ${isOpen ? 'active glass-panel' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Sobre Mí</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a>
          <a href="#contact" className="btn btn-outline" onClick={() => setIsOpen(false)}>Contactar</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
