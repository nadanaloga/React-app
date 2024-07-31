// ThemeToggle.js
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center px-3 py-2 text-gray-300 rounded-md focus:outline-none hover:text-white hover:bg-gray-700"
    >
      {darkMode ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 8V4M8 8V4M3 12H21M12 19l9 3-9-3-9 3z"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}
      <span className="ml-1">{darkMode ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
};

export default ThemeToggle;
