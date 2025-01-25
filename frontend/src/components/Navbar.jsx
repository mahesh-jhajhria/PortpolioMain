import React from 'react'
import logo from "../../public/logo.png";
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <a href="#" className="text-white -mt-3 -mb-3 font-bold">
        <img className='w-[70px] h-[70px] bg-green-100 rounded-full'  src={logo} alt='#'/>
      </a>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white hover:text-blue-300" >HOME</a>
        <a href="#" className="text-white hover:text-blue-300"> <Link 
        smooth={true}
        duration={1000}
        to="projects"> PROJECTS </Link></a> 
        <a href="#" className="text-white hover:text-blue-300">RESUME</a>
        <a href="#" className="text-white hover:text-blue-300">
          <Link 
        smooth={true}
        duration={1000}
        to="contactus">CONTACT</Link></a>
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