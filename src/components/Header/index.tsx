import React, { useState } from 'react';
import './Header.scss'; // Assuming SCSS for styling
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Logo3.png'

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <img loading="lazy" src={logo} alt="logo" className='logo' onClick={() => {navigate('/')}}/>

      {/* Desktop Navigation */}
      <nav className="nav hidden md:flex">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">Our Team</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/casestudy" className="nav-item">Success stories</Link>
        <Link to='/contactus'>
            <button className="action-btn" >
      <span className="btn-label">Contact Us</span>
    </button>
        </Link>
      </nav>

      {/* Mobile Hamburger Button */}
      <button 
        className="mobile-menu-btn md:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''} md:hidden`}>
        <nav className="mobile-nav">
          <Link to="/" className="mobile-nav-item" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" className="mobile-nav-item" onClick={closeMobileMenu}>Our Team</Link>
          <Link to="/services" className="mobile-nav-item" onClick={closeMobileMenu}>Services</Link>
          <Link to="/casestudy" className="mobile-nav-item" onClick={closeMobileMenu}>Success stories</Link>
          <Link to='/contactus' onClick={closeMobileMenu}>
            <button className="mobile-action-btn">
              <span className="btn-label">Contact Us</span>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
