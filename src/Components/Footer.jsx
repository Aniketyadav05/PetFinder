import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        
        {/* Brand Name */}
        <div className="text-2xl font-bold text-orange-400">
          Pet Haven 🐾
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm">
          <li>
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pets" className="hover:text-orange-400 transition">
              Pets
            </Link>
          </li>
          <li>
            <Link to="/organisation" className="hover:text-orange-400 transition">
              Organizations
            </Link>
          </li>
        </ul>

        {/* Developer Credit */}
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Pet Haven. Built with ❤️ by <span className="text-orange-400">Aniket Yadav</span>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
