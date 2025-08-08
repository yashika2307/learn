import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WelltogetherLogo from './assets/welltogether_logo.png';
import "./Header.css"
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Title */}
          <Link to="/">
        <div className="flex items-center space-x-3">
          <img src={WelltogetherLogo} alt="WellTogether" className="w-20 h-auto" />
      {/* </Link>     */}
      {/* <Link to="/" className="text-lg font-bold text-black md:text-2xl lg:text-3xl hover:text-blue-900"> */}
            {/* WellTogether */}
          <span className="text-lg font-bold text-black md:text-2xl lg:text-3xl">WellTogether</span>
        </div>
          </Link>    

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">

           <Link to="/" className="text-black hover:text-blue-900 hover:font-bold">Home</Link>
          {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCWx4_C09BtXH-NO0K8HPaNAIT3OL2Cu4ZILtv__Dzz9lIyA/viewform?usp=header" className="text-black hover:text-blue-900 hover:font-bold">Find Care Giver</a> */}
          <Link to="/JoinUs" className="text-black hover:text-blue-900 hover:font-bold">Join Us</Link>
          <Link to="/AboutUs" className="text-black hover:text-blue-900 hover:font-bold">About Us</Link>
          <Link to="/Support" className="text-black hover:text-blue-900 hover:font-bold">Contact Us</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none" style={{padding:"10px"}}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block text-black hover:text-black hover:font-bold">Home</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCWx4_C09BtXH-NO0K8HPaNAIT3OL2Cu4ZILtv__Dzz9lIyA/viewform?usp=header" className="block text-black hover:text-blue-900 hover:font-bold">Find Care Giver</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScEzOmNCmQ6suHCxLOgznQ1ZrJFP-SuQAyWh2UVN4m7h8dQqA/viewform?usp=header" className="block text-black hover:text-blue-900 hover:font-bold">Become a Care Giver</a>
          <Link to="/AboutUs" className="block text-black hover:text-blue-900 hover:font-bold">About Us</Link>
          <Link to="/Support" className="block text-black hover:text-blue-900 hover:font-bold">Contact Us</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
