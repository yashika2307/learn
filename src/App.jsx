import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import 'tailwindcss';
import { Link } from 'react-router-dom';
import ParentsVisit from './assets/parents-visit.png';
import KidCare from './assets/kid-care.jpg';
import SpeakToParents from './assets/speak-to-parents.jpg';
import WelltogetherLogo from './assets/welltogether_logo.jpg';

const services = [
  {
    title: "Take my Parents for Visit",
    description: "Care taker can take your parents to hospital or anywhere else.",
    image: ParentsVisit
  },
  {
    title: "Look after my Kid",
    description: "Care provider will take care of your kid at your place",
    image: KidCare
  },
  {
    title: "Spend time with parents",
    description: "Conversations are the best medicines! We believe that, care giver will speak to them.",
    image: SpeakToParents
];

// import exampleImage from "../assets/example.png";

// <img src={exampleImage} alt="Example" />;

export default function App() {
  return (

    <div className="font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6">
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
            <Link to="/Support" className="text-black hover:text-blue-900 hover:font-bold">Support</Link>
           <Link to="/Register" className="text-black hover:text-blue-900 hover:font-bold">Register</Link>
           <Link to="/Signin" className="text-black hover:text-blue-900 hover:font-bold">Sign In</Link>
          

          </nav>
        </div>
        </div>
      </header>

    <div className="font-sans">
      {/* Section 1 - Hero */}
      <section className="bg-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-[#071a4d] mb-4">
              Bringing Generations <br /> Together, With Care
            </h1>
            <h2 className="text-2xl text-[#071a4d] mb-4">
              Connecting elderly and parents with <br /> college students providing care and <br /> companionship.
            </h2>
          </div>
          <div className="md:w-1/2">
            <img
              src={"src/assets/Group4.png"}
              alt="Family Care"
              className="w-full"
            />
          </div>
        </div>
      </section>
 </div>
      {/* Section 2 - Services */}
      <section className="bg-[#d1e3f0] py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold  text-black">Our Services</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md w-full max-w-sm overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-sm text-center text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 - Join Community */}
      <section className="bg-[#f8f8fa] py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-2  text-black">Join the Community!</h2>
        <p className="mb-4 text-lg font-medium text-black">If you want to help your community<br />Earn upto 1200 per day!</p>
        <button className="bg-black text-black px-6 py-2 rounded hover:opacity-90">Become a Care Giver</button>
      </section>

      {/* Section 4 - Why Us */}
      <section className="bg-[#d1e3f0] py-12 px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold  text-black">Why Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-blue-600 text-3xl mb-2">🔍</div>
            <p className="font-medium  text-black">Care givers at your place</p>
            <p className="text-sm  text-black">Your place, your rules, our care givers. All facility at the comfort of your home.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">📅</div>
            <p className="font-medium  text-black">No commitments</p>
            <p className="text-sm  text-black">Book for as many hours you want. No min hrs required.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">🎓</div>
            <p className="font-medium  text-black">Educated care givers</p>
            <p className="text-sm  text-black">Our care givers are well educated & understand foundation of kids should be strong</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">🛡️</div>
            <p className="font-medium  text-black">Verified Backgrounds</p>
            <p className="text-sm  text-black">Expert legal advice to ease documentation process</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">👁️</div>
            <p className="font-medium  text-black">Honest reviews</p>
            <p className="text-sm  text-black">See reviews before you book any care givers</p>
          </div>
        </div>
      </section>
    </div>
  );
}
