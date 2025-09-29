// Updated Navigation.js (removed theme toggle)
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating to a different page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActiveLink = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="logo-icon">🤖</span>
            <span className="logo-text">Akshat</span>
          </Link>

          {/* NAV LINKS */}
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <Link
                to="/"
                className={isActiveLink('/') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActiveLink('/about') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-user"></i>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={isActiveLink('/projects') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-code"></i>
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className={isActiveLink('/experience') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-briefcase"></i>
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/certifications"
                className={isActiveLink('/certifications') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-award"></i>
                Certifications
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActiveLink('/contact') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <i className="fas fa-envelope"></i>
                Contact
              </Link>
            </li>
          </ul>

          {/* ACTIONS */}
          <div className="nav-actions">
            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;