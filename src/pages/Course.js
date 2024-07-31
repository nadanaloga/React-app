import React from 'react';
import { NavLink, Outlet, Navigate } from 'react-router-dom';
// import { FaHome, FaBook, FaMusic } from 'react-icons/fa'; // Example icons
import SectionHeader from '../components/SectionHeader';


function Course() {
  return (

    <div >
  

<nav  className="w-full bg-white p-3 fixed top-12 md:top-24 lg:top-24 z-30">
      <ul className="flex flex-row justify-center space-x-4">
        <NavLink
          to="bharatanatyam"
          className={({ isActive }) =>
            `flex items-center py-2 rounded-md px-4 space-x-2 ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`
          }
        >
          {/* <FaHome className="text-lg" /> */}
          <span>Barathanatyam</span>
        </NavLink>
        <NavLink
          to="vocal"
          className={({ isActive }) =>
            `flex items-center py-2 rounded-md px-4 space-x-2 ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`
          }
        >
          {/* <FaBook className="text-lg" /> */}
          <span>Carnatic Vocal</span>
        </NavLink>
        <NavLink
          to="semiclassical"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-md space-x-2 ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`
          }
        >
          {/* <FaMusic className="text-lg" /> */}
          <span>Semi Classical Dance</span>
        </NavLink>
        <NavLink
          to="drawing"
          className={({ isActive }) =>
            `flex items-center py-2 px-4 rounded-md space-x-2 ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`
          }
        >
          {/* <FaMusic className="text-lg" /> */}
          <span>Drawing</span>
        </NavLink>

      </ul>
    </nav>
    <div className="flex-1 p-4 bg-gray-50 mt-10">
      <Outlet />
    </div>
  </div>
  )
}

export default Course