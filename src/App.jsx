import './TempApp.css'
import React from "react";
import 'tailwindcss';
import WhyUsSection from './sections/WhyUS';
import ParentsVisit from './assets/CallSubscription.webp';
import KidCare from './assets/Ambulance.webp';
import SpeakToParents from './assets/parents-visit.webp';
import HomePage from './assets/HomePage.webp';
import ServicesSection from './sections/ServicesSection';
import { FaQq } from 'react-icons/fa';
import FAQSection from './sections/FAQSection';
import TestimonialSection from './sections/TestimonialsSection';
const services = [
  {
    title: "Call Subscription",
    description: <>
      Unlimited Calls. Unlimited Care.
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
    description: <>Kabhi Kabhi Zarurat Turant Hoti Hai. <br /><br /> Whether it's a fall, sudden illness, or unexpected situation — ambulance aur caretaker ek call door. Even if you’re far away, we’re always close.</>,
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
      <ServicesSection services={services} />
      {/* Section 3 :  Why us */}
      <WhyUsSection />
      {/* Section 4 - FAQ */}
      <FAQSection />
      {/* Section 5 - Testimonial */}
      <TestimonialSection />
    </div >
  );
}
