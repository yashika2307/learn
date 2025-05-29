import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WelltogetherLogo from './assets/welltogether_logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <Link to="/">
          <img src={WelltogetherLogo} alt="WellTogether" className="w-50 h-50 rounded-full" />
      </Link>        
          {/* <span className="text-xl font-bold text-black">WellTogether</span> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">

           <Link to="/" className="text-black hover:text-blue-900 hover:font-bold">Home</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCWx4_C09BtXH-NO0K8HPaNAIT3OL2Cu4ZILtv__Dzz9lIyA/viewform?usp=header" className="text-black hover:text-blue-900 hover:font-bold">Find Care Provider</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScEzOmNCmQ6suHCxLOgznQ1ZrJFP-SuQAyWh2UVN4m7h8dQqA/viewform?usp=header" className="text-black hover:text-blue-900 hover:font-bold">Become a Care Provider</a>
          <Link to="/AboutUs" className="text-black hover:text-blue-900 hover:font-bold">About Us</Link>
          <Link to="/Support" className="text-black hover:text-blue-900 hover:font-bold">Contact Us</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
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
          <a href="#" className="block text-black hover:text-blue-900 hover:font-bold">Home</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCWx4_C09BtXH-NO0K8HPaNAIT3OL2Cu4ZILtv__Dzz9lIyA/viewform?usp=header" className="block text-black hover:text-blue-900 hover:font-bold">Find Care Provider</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScEzOmNCmQ6suHCxLOgznQ1ZrJFP-SuQAyWh2UVN4m7h8dQqA/viewform?usp=header" className="block text-black hover:text-blue-900 hover:font-bold">Become a Care Provider</a>
          <Link to="/AboutUs" className="block text-black hover:text-blue-900 hover:font-bold">About Us</Link>
          <Link to="/Support" className="block text-black hover:text-blue-900 hover:font-bold">Contact Us</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
