import './TempApp.css'
import React from "react";
import 'tailwindcss';
import { HiOutlineShieldCheck } from "react-icons/hi2";

import { MdOutlineVerifiedUser } from "react-icons/md";
import { LuCalendarX } from "react-icons/lu";
import ParentsVisit from './assets/CallSubscription.jpg';
import KidCare from './assets/Ambulance.png';
import SpeakToParents from './assets/parents-visit.png';
import HomePage from './assets/HomePage.png';
import IconVerified from './assets/IconVerified.svg'
import noCommitmentsIcon from './assets/IconCommit.svg'
import iconHome from './assets/IconHome.svg'
import { LiaAmbulanceSolid } from 'react-icons/lia';
import { FaUserGraduate } from "react-icons/fa"
import iconFeedback from './assets/IconFeedback.svg'
import iconEmergency from './assets/iconEmergency.svg'
import FAQ from './components/FAQ';
import TestimonialCarousel from './components/TestimonialCarousel';

const services = [
  {
    title: "Call Subscription",
    description: <>
      Unlimited calls. Unlimited care.
      <br /><br />
      Sometimes, all they need is someone to talk to. Hamare trained caregivers and listeners are just a call away — every day, anytime.
    </>,
    image: ParentsVisit
  },
  {
    title: "At Home Visit",
    description:
      <>Companionship | Assisted Walks | Social Visits <br /><br />Elderly parents often feel lonely. Our companions bring conversations, care, and confidence — jaise aap unke paas ho.</>,
    image: SpeakToParents
  },
  {
    title: "Emergency Subscription",
    description: <>Kabhi kabhi zarurat turant hoti hai. <br /><br /> Whether it's a fall, sudden illness, or unexpected situation — ambulance aur caretaker ek call door. Even if you’re far away, we’re always close.</>,
    image: KidCare,
    comingSoon: false
  },
];

export default function App() {
  return (

    <div className="font-sans">
      {/* Section 1 - Hero */}
      <section className="px-6 py-10 bg-[#FDFAF5]">
        <div className="container-box mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl md:text-5xl  font-bold mb-4 text-blue">
              Bringing Generations Together, With Care
            </h1>
            <h2 className="text-2xl text-myblue mb-4">
              Connecting elderly and parents with college students providing care and companionship.
            </h2>
          </div> */}
          <div className="md:w-full">
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
      {/* <section className="bg-mywhite py-12 px-6">
        <div className='container-box'>

          <h2 className="text-4xl font-semibold  text-black text-center my-9">Why Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-blue-600 text-3xl mb-2">🔍</div>
            <p className="font-medium  text-black">Security</p>
            <p className="text-sm  text-black">Triple Layer Security <br/>Police Verification <br/>Physical Home Verification<br/>Social Media Background Check <br/>
</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">📅</div>
            <p className="font-medium  text-black">No Commitments</p>
            <p className="text-sm  text-black">Koi monthly charge nahi, koi unnecessary package nahi. Bas zarurat padne par caregiver bulaiye. As simple as that.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">📅</div>
            <p className="font-medium  text-black">At Home Service</p>
            <p className="text-sm  text-black">Get service at the comfort of your Home</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">🎓</div>
            <p className="font-medium  text-black">Educated Care Givers</p>
            <p className="text-sm  text-black"><>Because care requires understanding. <br />Our caregivers are not just trained — they’re educated, empathetic, and truly connected to your needs.</></p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">🛡️</div>
            <p className="font-medium  text-black">On Time Emergency assistance</p>
            <p className="text-sm  text-black">Because care requires understanding. <br />Our caregivers are not just trained — they’re educated, empathetic, and truly connected to your needs."</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">👁️</div>
            <p className="font-medium  text-black">Honest Reviews</p>
            <p className="text-sm  text-black">Caregiver choose karne ka right aapka hai. <br />Har service ke baad feedback liya jata hai — aapke experience se hi hum behtar hote hain.</p>
          </div>
        </div>
        </div>
      </section> */}

      <section class="bg-[#fdf8f3] py-16 px-4">
        <div class="max-w-7xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-12">Why Us?</h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Card 1 --> */}
            <div class="bg-white rounded-[2rem] w-80 h-60 shadow-md p-6 text-center ">
              <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-[#edc6aa] border border-black-500 p-3">
                <HiOutlineShieldCheck
                  className="w-full h-full"
                  strokeWidth={1}

                />
              </div>
              <h3 class="text-xl font-medium mb-2 border-b pb-2">Triple Layer Security</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Police Verification<br />
                Physical Home Verification<br />
                Social Media Background Check
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="bg-white rounded-[2rem] w-80 h-60 shadow-md p-6 text-center">
              <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-[#edc6aa] border border-black-500 p-3">
                {/* <img src={noCommitmentsIcon} alt="Verified Icon" className="w-full h-auto" /> */}
                <LuCalendarX
                  strokeWidth={1}
                  className='w-full h-full'
                />        </div>
              <h3 class="text-xl font-medium mb-2 border-b pb-2">No Commitments</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Koi monthly charge nahi,<br />
                koi unnecessary package nahi.<br />
                Bas zarurat padne par caregiver bulaiye.
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="bg-white rounded-[2rem] w-80 h-60 shadow-md p-6 text-center">
              <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-[#edc6aa] border border-black-500 p-3">
                <img src={iconHome} alt="Verified Icon" className="w-full h-auto" />

              </div>
              <h3 class="text-xl font-medium mb-2 border-b pb-2">At Home Services</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Ghar vahi, Jaha Suvidha Sabhi<br />
                Get service at the comfort of your Home.
              </p>
            </div>

            {/* <!-- Card 4 --> */}
            <div class="bg-white rounded-[2rem] w-80 h-60 shadow-md p-6 text-center">
              <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-[#edc6aa] border border-black-500 p-4">
                <FaUserGraduate
                  className="w-full h-full"
                  stroke="#111"
                  strokeWidth="25"
                  fill="transparent"
                  style={{ color: 'transparent' }}
                />

              </div>
              <h3 class="text-xl font-medium mb-2 border-b pb-2">Educated Care Givers</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Because care requires understanding.<br />
                Our caregivers are not just trained,<br />
                they’re educated, empathetic & truly connected to your needs.
              </p>
            </div>

            {/* <!-- Card 5 --> */}
            <div class="bg-white rounded-[2rem] w-80 h-60 shadow-md p-6 text-center">
              <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-[#edc6aa] border border-black-500 p-[0.8rem]">
                <img src={iconEmergency} alt="Verified Icon" className="w-full h-auto" strokeWidth="40" />

              </div>
              <h3 class="text-xl font-medium mb-2 border-b pb-2">Emergency Assistance</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                No more dependency in emergency.<br />
                Ambulance and caretaker<br />
                just a call away
              </p>
            </div>

            {/* <!-- Card 6 --> */}
            <div class="bg-white rounded-[2rem] w-80 h-60 shadow-md p-6 text-center">
              <div class="mx-auto mb-4 w-16 h-16 rounded-full bg-[#edc6aa] border border-black-500 p-3.5">
                <img src={iconFeedback} alt="Verified Icon" className="w-full h-auto" />

              </div>
              <h3 class="text-xl font-medium mb-2 border-b pb-2">Honest Reviews</h3>
              <p class="text-gray-600 text-sm leading-relaxed">
                Caregiver choose karne ka right aapka hai.
                Har service ke baad feedback paiye,<br />
                aapke experience se hi hum behtar hote hain.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4 - FAQ */}
      <section className="bg-white py-12">
        <div className="container-box mx-auto w-full">
          <FAQ />
        </div>
      </section >
      {/* Section 4 - FAQ */}
      <section className="bg-white py-12">
        <div className="container-box mx-auto w-full">
          <TestimonialCarousel itemsPerSlide={2} />
        </div>
      </section >


    </div >
  );
}
