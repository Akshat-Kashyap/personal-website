import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Added Link import
import Navigation from './Navigation';

const Layout = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navigation />
      <main className="page-container">
        {children}
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/certifications">Certifications</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <p className="copyright">
              &copy; {new Date().getFullYear()} Akshat Kashyap. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
};

export default Layout;