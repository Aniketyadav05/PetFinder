import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-[Menorca] fixed top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] backdrop-blur-lg bg-white/50 border-b-2 border-b-black border-r-2 border-r-black border-white/50 shadow-md rounded-3xl mt-4 z-50 px-4 sm:px-6 h-14">
      <nav className="h-full flex items-center justify-between">
        {/* Left: Site name */}
        <Link to="/" className="text-lg sm:text-xl font-extrabold text-[#442001]  hover:text-yellow-400 whitespace-nowrap">
          Pet Haven
        </Link>

        {/* Center: Logo */}
        <div className="flex-grow flex justify-center mr-14 sm:mr-0 sm:ml-14">
          <Link to="/">
            <img className="h-10 w-auto object-contain " src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 text-base font-medium text-[#442001] ">
          <li>
            <Link to="/pets" className="cursor-pointer text-[#442001]  hover:text-yellow-400 transition font-bold text-lg">
              Pets
            </Link>
          </li>
          <li>
            <Link to="/organisation" className="cursor-pointer text-[#442001]  hover:text-yellow-400 transition font-bold text-lg ">
              Organizations
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolutelg:hidden   pb-4 px-2 text-yellow-500 font-extrabold text-2xl   backdrop-blur-lg bg-gray-300/50 border-b border-white/50 shadow-lg rounded-3xl mt-4 ">
          <ul className="flex flex-col items-center space-y-2 ">
            <li>
              <Link to="/pets" onClick={() => setMenuOpen(false)} className="hover:text-[#EF673C]">
                Pets
              </Link>
            </li>
            <li>
              <Link to="/organisation" onClick={() => setMenuOpen(false)} className="hover:text-[#EF673C]">
                Organizations
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
