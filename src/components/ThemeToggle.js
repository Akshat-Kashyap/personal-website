import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
    </button>
  );
};

export default ThemeToggle;