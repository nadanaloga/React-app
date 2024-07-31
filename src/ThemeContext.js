// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context to hold the theme state and toggle function
export const ThemeContext = createContext();

// Custom hook to consume the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component to wrap your entire application
export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Determine which theme classes to apply based on darkMode state
  const themeClasses = darkMode
    ? 'dark'
    : 'light';

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeClasses }}>
      <div className={themeClasses}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
