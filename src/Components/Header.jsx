import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className="h-14 px-10">
  <nav className="h-full flex items-center justify-between ">
    <Link to="/" className="text-xl font-bold">PetFinder</Link>
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