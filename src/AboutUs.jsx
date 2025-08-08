import React from "react";
import Header from "./Header";


export default function AboutUs() {
  return (
    <>
    {/* <Header /> */}
    <div className="font-san text-gray-800">
      <div className="container-box max-w-100% mx-auto p-10">
      

    <div className="min-h-screen bg-white px-6 py-10">
      {/* Page Title */}
      <h1 className="text-center text-2xl font-bold text-orange-400 mb-8">
        About Us
      </h1>

      {/* Our Story */}
      <div className="border border-orange-200 rounded-2xl p-6 max-w-auto mx-auto mb-10">
        <h2 className="text-xl font-bold text-orange-400 mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          It all began with a personal heartbreak — one that left us with both pain and purpose.
        </p>
        <p className="text-gray-700 mb-4">
          Some time ago, we lost family member. She was kind, warm, and fiercely independent. But when she needed help the most — in a moment of urgency — there was no one around. We were all caught in our everyday lives, miles away, unaware of how quickly things could turn. The help she needed never came in time.
        </p>
        <p className="text-gray-700 mb-4">
          Her loss left more than just a void in our home. It opened our eyes to the silent struggles of countless elders around us — dignified, loving individuals who once cared for us, now quietly navigating aging, often alone.
        </p>
        <p className="text-gray-700 mb-4">
          We noticed it everywhere: elderly people struggling with simple technology, missing their daily walks, waiting for someone to talk to, or just needing a companion for a doctor visit or a wedding. Their families love them — no doubt — but distance, demanding careers, or personal obligations leave little time to be physically present.
        </p>
        <p className="text-gray-700 mb-4">That’s where WellTogether was born.</p>
        <p className="text-gray-700 mb-4">
          We exist so that no elder feels forgotten. We're here to bridge the gap — to bring warmth, care, and companionship back into their everyday lives through trained, trusted, and verified companions, many of whom are students who bring joy, help, and purpose with them.
        </p>
        <p className="text-gray-700 mb-4">
          WellTogether isn’t just a service. It’s a promise — that someone will be there. With empathy. With trust. With time.
        </p>
        <p className="text-gray-700">
          Because the people who held our hands when we were learning to walk deserve someone to walk with now. And we’re here to make sure they’re never alone again.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
        <div className="border border-orange-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Vision</h2>
          <p className="text-gray-700">
            To build a society where every elderly person feels supported, every child is cared for, and every student has the opportunity to give back while growing personally and professionally.
          </p>
        </div>
        <div className="border border-orange-200 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-orange-400 mb-4">Mission</h2>
          <p className="text-gray-700">
            With the rise of nuclear families and busy urban lifestyles, elderly parents and young children often lack immediate care support. At the same time, many college students seek opportunities to earn and serve. WellTogether brings these two needs together, creating value for everyone involved.
          </p>
        </div>
      </div>

      {/* Our Presence */}
      <div className="border border-orange-200 rounded-2xl p-6 max-w-4xl mx-auto mb-10">
        <h2 className="text-xl font-bold text-orange-400 mb-4">Our Presence</h2>
        <p className="text-gray-700">Our Services are present pan India.</p>
        <p className="text-gray-700">Call Service: Pan India</p>
        <p className="text-gray-700">At home Companionship: Jaipur & Pune</p>
      </div>

      {/* Our Team */}
      <div className="border border-orange-200 rounded-2xl p-6 max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-orange-400 mb-4">Our Team</h2>
        <p className="text-gray-700">Executer: Yashika Gupta</p>
        <p className="text-gray-700">Idea: Anju Gupta</p>
        <p className="text-gray-700">Mentor: Govind P Gupta</p>
      </div>
    </div>
      </div>
    </div>
    </>
  );
}
