import React from 'react'
import { Link } from 'react-router-dom';
import ParentsVisit from './assets/parents-visit.png';
import KidCare from './assets/kid-care.jpg';
import SpeakToParents from './assets/speak-to-parents.jpg';
import WelltogetherLogo from './assets/welltogether_logo.jpg';
import HomePage from './assets/HomePage.png';
import './App.css'


function Header() {
  return (
   <><header className="bg-white shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x+8">
            <img src={WelltogetherLogo} alt="WellTogether" className="w-30 h-30" />
            <div className="text-2xl font-bold text-black">WellTogether</div>
          </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <nav className="space-x-4">
            <a href="#" className="text-black hover:text-blue-900 hover:font-bold">Home</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeCWx4_C09BtXH-NO0K8HPaNAIT3OL2Cu4ZILtv__Dzz9lIyA/viewform?usp=header" className="text-black hover:text-blue-900 hover:font-bold">Find Care Provider</a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScEzOmNCmQ6suHCxLOgznQ1ZrJFP-SuQAyWh2UVN4m7h8dQqA/viewform?usp=header" className="text-black hover:text-blue-900 hover:font-bold">Become a Care Provider</a>
             <Link to="/AboutUs" className="text-black hover:text-blue-900 hover:font-bold">About Us</Link>
            <Link to="/Support" className="text-black hover:text-blue-900 hover:font-bold">Contact Us</Link>
           {/* <Link to="/Register" className="text-black hover:text-blue-900 hover:font-bold">Register</Link> */}
           {/* <Link to="/Signin" className="text-black hover:text-blue-900 hover:font-bold">Sign In</Link> */}
          

          </nav>
        </div>
        </div>
      </header>
       </>
  )
}

export default Header
