// Sidebar.js

import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg h-screen w-64 fixed left-0 top-0 z-20">
      <div className="flex flex-col items-center mt-12">
        {/* Sidebar items */}
        
        <NavLink
          to="/dance"
          activeClassName="bg-gray-200"
          className="w-full py-4 flex items-center justify-center text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          Overview
        </NavLink>
        <NavLink
          to="/reviews"
          activeClassName="bg-gray-200"
          className="w-full py-4 flex items-center justify-center text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Curriculum
        </NavLink>
        <NavLink
          to="/instructors"
          activeClassName="bg-gray-200"
          className="w-full py-4 flex items-center justify-center text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 6l3 6h12M3 18h12a2 2 0 002-2V8a2 2 0 00-2-2h-4l-3-6-3 6H3a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          Instructors
        </NavLink>
        <NavLink
          to="/reviews"
          activeClassName="bg-gray-200"
          className="w-full py-4 flex items-center justify-center text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Reviews
        </NavLink>
        <NavLink
          to="/assignments"
          activeClassName="bg-gray-200"
          className="w-full py-4 flex items-center justify-center text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          Assignments
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
