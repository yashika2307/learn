import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p>&copy; {new Date().getFullYear()} WellTogether.in | All rights reserved  |</p>
      <span><FaLinkedin/></span>
      <span><FaSquareFacebook/></span>
    </footer>
  );
}