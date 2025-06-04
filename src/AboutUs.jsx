import React from "react";
import Header from "./Header";


export default function AboutUs() {
  return (
    <>
    {/* <Header /> */}
    <div className="font-san text-gray-800">
      <div className="container-box max-w-100% mx-auto p-10">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6 ">
          About Us
        </h1>

        {/* Tagline */}
        <p className="text-xl text-center font-medium text-gray-700 mb-10">
          Bringing Generations Together, With Care
        </p>

        {/* Section 1 - Who We Are */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2 ">
            Who We Are
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            WellTogether is a social impact platform that enables:
          </p>
          <ul className="list-disc ml-6 mt-2 text-gray-700 text-lg">
            <li>Elderly couples living alone to receive support and companionship.</li>
            <li>Parents of young children to find reliable, on-demand care.</li>
            <li>College students to earn by offering compassionate care.</li>
          </ul>
          <p className="text-gray-700 text-lg mt-4">
            We operate with a strong focus on <strong>safety, trust</strong>, and <strong>social contribution</strong>, ensuring all care providers go through background verification and training.
          </p>
        </section>

        {/* Section 2 - Vision */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            To build a society where every elderly person feels supported, every child is cared for, and every student has the opportunity to give back while growing personally and professionally.
          </p>
        </section>

        {/* Section 3 - Our Impact */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Impact
          </h2>
          <ul className="list-disc ml-6 text-gray-700 text-lg">
            <li>Created a caring community in Jaipur and expanding across India.</li>
            <li>Facilitated hundreds of meaningful connections between caregivers and families.</li>
            <li>Helped students earn income and build life skills through real-world experiences.</li>
          </ul>
        </section>

        {/* Section 4 - Why We Do This */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Why We Do This
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            With the rise of nuclear families and busy urban lifestyles, elderly parents and young children often lack immediate care support. At the same time, many college students seek opportunities to earn and serve. <strong>WellTogether</strong> brings these two needs together, creating value for everyone involved.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}
