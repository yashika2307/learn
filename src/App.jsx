import './TempApp.css'
import React from "react";
import 'tailwindcss';
import ParentsVisit from './assets/parents-visit.png';
import KidCare from './assets/kid-care.jpg';
import SpeakToParents from './assets/speak-to-parents.jpg';
import HomePage from './assets/HomePage.png';



const services = [
  {
    title: "Take my Parents for Visit",
    description: "Care taker can take your parents to hospital or anywhere else.",
    image: ParentsVisit
  },
  {
    title: "Spend time with parents",
    description: "Conversations are the best medicines! We believe that, care giver will speak to them.",
    image: SpeakToParents
  },
  {
    title: "Look after my Kid",
    description: "Care provider will take care of your kid at your place.",
    image: KidCare,
    comingSoon:true
  },
];

export default function App() {
  return (

    <div className="font-sans">
      {/* Section 1 - Hero */}
      <section className="px-6 py-10 bg-[#FDFAF5]">
        <div className="container-box mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl  font-bold mb-4 text-blue">
              Bringing Generations Together, With Care
            </h1>
            <h2 className="text-2xl text-[#071a4d] mb-4">
              Connecting elderly and parents with college students providing care and companionship.
            </h2>
          </div>
          <div className="md:w-1/2">
            <img
              src={HomePage}
              alt="Family Care"
              className="w-full h-auto rounded-lg md:ml-6"
            />
          </div>
        </div>
      </section>
 
      {/* Section 2 - Services */}
      <section className="bg-mygrey py-10">
        <div className="text-center mb-8 container-box">
          <h1 className="text-4xl font-semibold  text-black mb-8">Our Services</h1>
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
          {services.map((service, index) => (
            <div
            key={index}
            className="relative bg-white rounded-lg shadow-md w-full max-w-sm overflow-hidden flex flex-col"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
                />
              {service.comingSoon && (
                <div className="absolute inset-0 bg-[#6a6161e3] flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Coming Soon</span>
                </div>
              )}
              <div className="p-4 flex-grow flex flex-col justify-between">
                <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-sm text-center text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
          </div>
      </section>
{/* Section 3 - Why Us */}
      <section className="bg-mywhite py-12 px-6">
        <div className='container-box'>

          <h2 className="text-4xl font-semibold  text-black text-center my-9">Why Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-blue-600 text-3xl mb-2">🔍</div>
            <p className="font-medium  text-black">Care givers at your place</p>
            <p className="text-sm  text-black">Your place, your rules, our care givers</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">📅</div>
            <p className="font-medium  text-black">No commitments</p>
            <p className="text-sm  text-black">Book for as many hours as you want. No min hrs required.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">🎓</div>
            <p className="font-medium  text-black">Educated care givers</p>
            <p className="text-sm  text-black">Our care givers are well educated.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">🛡️</div>
            <p className="font-medium  text-black">Verified Backgrounds</p>
            <p className="text-sm  text-black">Expert legal advice to ease documentation process.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">👁️</div>
            <p className="font-medium  text-black">Honest reviews</p>
            <p className="text-sm  text-black">See reviews before you book any care givers.</p>
          </div>
        </div>
        </div>
      </section>

      {/* Section 4 - Join Community */}
      <section className="bg-mygrey py-12 px-6 text-center">
        <div className='container-box'>
        <h1 className="text-4xl font-semibold my-5  text-black">Join the Community!</h1>
        <p className="mb-4 text-lg font-medium text-black">Grab a chance to give back to your community and<br />Earn upto 16,000 per month!</p>
        <button className="action-button px-4 py-6 text-2xl "> <a href="https://docs.google.com/forms/d/e/1FAIpQLScEzOmNCmQ6suHCxLOgznQ1ZrJFP-SuQAyWh2UVN4m7h8dQqA/viewform?usp=header" > Become a Care Giver  </a>  </button>
      
    
        </div>
      </section>

      
    </div>
  );
}
