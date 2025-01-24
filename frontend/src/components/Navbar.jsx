import React from 'react'

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <a href="#" className="text-white text-2xl font-bold">
        Logo
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white hover:text-blue-300" >HOME</a>
        <a href="#" className="text-white hover:text-blue-300">PROJECTS</a>
        <a href="#" className="text-white hover:text-blue-300">RESUME</a>
        <a href="#" className="text-white hover:text-blue-300">CONTACT</a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </nav>
  )
}

export default Navbar