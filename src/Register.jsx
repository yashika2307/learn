import React from "react";

const services = [
  {
    title: "Take my Parents for Visit",
    description: "Care taker can take your parents to hospital or anywhere else.",
    image: "https://your-image-url.com/parents-visit.jpg"
  },
  {
    title: "Look after my Kid",
    description: "Care provider will take care of your kid at your place",
    image: "https://your-image-url.com/kid-care.jpg"
  },
  {
    title: "Spend time with parents",
    description: "Conversations are the best medicines! We believe that, care giver will speak to them.",
    image: "https://your-image-url.com/speak-to-parents.jpg"
  }
];

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Section 1 - Hero */}
      <section className="bg-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-[#1e3a8a] mb-4">
              Bringing Generations <br /> Together, With Care
            </h1>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://your-image-url.com/family-care.png"
              alt="Family Care"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Services */}
      <section className="bg-[#d1e3f0] py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Our Services</h2>
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
      <section className="bg-white py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Join the Community!</h2>
        <p className="mb-4 text-lg font-medium">If you want to help your community<br />Earn upto 1200 per day!</p>
        <button className="bg-black text-white px-6 py-2 rounded hover:opacity-90">Become a Care Giver</button>
      </section>

      {/* Section 4 - Why Us */}
      <section className="bg-[#f4f6f8] py-12 px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Why Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-blue-600 text-3xl mb-2">🔍</div>
            <p className="font-medium">Care givers at your place</p>
            <p className="text-sm">Your place, your rules, our care givers. All facility at the comfort of your home.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">📅</div>
            <p className="font-medium">No commitments</p>
            <p className="text-sm">Book for as many hours you want. No min hrs required.</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">🎓</div>
            <p className="font-medium">Educated care givers</p>
            <p className="text-sm">Our care givers are well educated & understand foundation of kids should be strong</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">🛡️</div>
            <p className="font-medium">Verified Backgrounds</p>
            <p className="text-sm">Expert legal advice to ease documentation process</p>
          </div>
          <div>
            <div className="text-blue-600 text-3xl mb-2">👁️</div>
            <p className="font-medium">Honest reviews</p>
            <p className="text-sm">See reviews before you book any care givers</p>
          </div>
        </div>
      </section>
    </div>
  );
}
