import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return ( 
    <footer className="bg-gray-800 text-white text-center py-4 text-[10px] md:text-2xl">
      <p className="flex items-center justify-center space-x-4">
        <span>&copy; {new Date().getFullYear()} WellTogether.in | All rights reserved |</span>
        
        <a href="https://www.instagram.com/welltogetherin?igsh=MTJvMWNrNTVrMHo3bg==" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/well-together-in/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/welltogetherin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaSquareFacebook />
        </a>
      </p>
    </footer>
  );
}