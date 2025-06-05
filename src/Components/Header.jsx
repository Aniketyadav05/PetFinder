import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className="h-14 px-10">
      <nav className="h-full flex items-center justify-between">
        
        {/* Left: Site name */}
        <Link to="/" className="text-xl font-bold">
          Pet Haven
        </Link>

        {/* Center: Logo */}
        <div className="flex-grow flex justify-center">
          <Link to="/">
            <img className="h-10 w-auto object-contain" src="/logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Right: Navigation */}
        <ul className="flex space-x-8 text-base font-medium">
          <li>
            <Link to="/pets" className="cursor-pointer hover:text-gray-300 transition">
              Pets
            </Link>
          </li>
          <li>
            <Link to="/organisation" className="cursor-pointer hover:text-gray-300 transition">
              Organizations
            </Link>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Header
