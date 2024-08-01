import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo/nadanaloga.png"; // replace with your logo path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b-4">
      <div className="container mx-auto px-4"> {/* Add padding to the container */}
        {/* First row: logo, nav links, and social icons */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="h-16 mr-3 cursor-pointer" />
            </NavLink>
            <div className="hidden md:flex flex-col items-center ml-6 space-y-2">
              <div className="flex space-x-4">
                <button onClick={() => window.open("https://www.facebook.com/bharathanaatiyam?mibextid=ZbWKwL")} className="text-blue-700 hover:text-blue-900 focus:outline-none">
                  <FaFacebook size={20} style={{ color: '#1877F2' }} />
                </button>
                <button onClick={() => window.open("https://www.instagram.com/nadanaloga_chennai?igsh=MTNva2wxNGYxaGl2Nw==")} className="text-pink-600 hover:text-pink-800 focus:outline-none">
                  <FaInstagram size={20} style={{ color: '#E1306C' }} />
                </button>
                <button onClick={() => window.open("https://youtube.com/@nadanaloga?si=lfh_J02auPFQoh2I")} className="text-red-600 hover:text-red-800 focus:outline-none">
                  <FaYoutube size={20} style={{ color: '#FF0000' }} />
                </button>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex space-x-4">
            <NavLink to="/" exact activeClassName="text-blue-500" className="hover:text-pinkcolor">Home</NavLink>
            <NavLink to="/about" activeClassName="text-blue-500" className="hover:text-pinkcolor">About</NavLink>
            <NavLink to="/gallery" activeClassName="text-blue-500" className="hover:text-pinkcolor">Gallery</NavLink>
            <NavLink to="/contact" activeClassName="text-blue-500" className="hover:text-pinkcolor">Contact</NavLink>
          </nav>
          <button className="md:hidden flex items-center text-blue-500 focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        {/* Second row: contact information */}
        <div className="hidden md:flex justify-end items-center space-x-4 mt-2">
          <span className="flex items-center text-gray-600">
            <FaPhone className="mr-2 font-bold" /> +91 9566866588
          </span>
          <span className="flex items-center text-gray-600">
            <FaEnvelope className="mr-2 font-bold" /> nadanalogaa@gmail.com
          </span>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <NavLink to="/" exact activeClassName="text-blue-500" className="block p-4 hover:bg-gray-100" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" activeClassName="text-blue-500" className="block p-4 hover:bg-gray-100" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/gallery" activeClassName="text-blue-500" className="block p-4 hover:bg-gray-100" onClick={toggleMenu}>Gallery</NavLink>
          <NavLink to="/contact" activeClassName="text-blue-500" className="block p-4 hover:bg-gray-100" onClick={toggleMenu}>Contact</NavLink>
          <div className="p-4">
            <span className="block text-gray-600 mb-2 font-bold">
              <FaPhone className="mr-2 inline font-bold" /> +91 9566866588
            </span>
            <span className="block text-gray-600 mb-2 font-bold">
              <FaEnvelope className="mr-2 inline font-bold" /> nadanalogaa@gmail.com
            </span>
            <div className="flex space-x-4 mb-2">
              <button onClick={() => window.open("https://www.facebook.com/bharathanaatiyam?mibextid=ZbWKwL")} className="text-blue-700 hover:text-blue-900 focus:outline-none">
                <FaFacebook size={20} style={{ color: '#1877F2' }} />
              </button>
              <button onClick={() => window.open("https://www.instagram.com/nadanaloga_chennai?igsh=MTNva2wxNGYxaGl2Nw==")} className="text-pink-600 hover:text-pink-800 focus:outline-none">
                <FaInstagram size={20} style={{ color: '#E1306C' }} />
              </button>
              <button onClick={() => window.open("https://youtube.com/@nadanaloga?si=lfh_J02auPFQoh2I")} className="text-red-600 hover:text-red-800 focus:outline-none">
                <FaYoutube size={20} style={{ color: '#FF0000' }} />
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
