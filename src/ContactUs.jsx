import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call or form submission logic here
  };

  return (
    <div className="min-w- auto min-h-screen bg-white px-max py-max max-w-auto">
      {/* Page Title */}
      <h1 className="text-center text-2xl font-bold text-orange-400 underline mb-8">
        Contact Us
      </h1>

      {/* Request a Callback ; link to document: https://docs.google.com/spreadsheets/d/1ig3shA9MBufGRsRlhAjPQiTNUsGKT8mcBpgoS8_vbVM/edit?gid=0#gid=0 */}
      <div className="border border-orange-200 rounded-2xl p-6 max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-bold text-orange-400 underline mb-6">
          Request A CallBack
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border-b border-gray-300 focus:outline-none p-2"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full border-b border-gray-300 focus:outline-none p-2"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border-b border-gray-300 focus:outline-none p-2"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            rows="4"
            className="w-full border-b border-gray-300 focus:outline-none p-2"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-orange-400 text-white px-6 py-1 rounded-full hover:bg-orange-500"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Reach Out To Us */}
      <div className="border border-orange-200 rounded-2xl p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold text-orange-400 underline mb-6">
          Reach Out To Us
        </h2>
        <div className="space-y-3 text-lg">
          <p>
            <FaPhoneAlt className="inline text-orange-400 mr-2" />
            Call Us: <a href="tel:+917756900769" className="text-black">+91 7756900769</a>
          </p>
          <p>
            <FaWhatsapp className="inline text-green-500 mr-2" />
            Whatsapp Us: <a href="https://wa.me/917756900769" className="text-black">+91 7756900769</a>
          </p>
          <p>
            <FaEnvelope className="inline text-orange-400 mr-2" />
            Email Us: <a href="mailto:welltogetherin@gmail.com" className="text-black">welltogetherin@gmail.com</a>
          </p>
        </div>

        {/* Social Media */}
        <div className="mt-6">
          <p className="text-lg mb-3">Social Media</p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
              <FaFacebook className="text-white" />
            </a>
            <a href="https://www.instagram.com/welltogetherin?igsh=MTJvMWNrNTVrMHo3bg==" className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
              <FaInstagram className="text-white" />
            </a>
            <a href="https://www.linkedin.com/company/well-together-in/" className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
              <FaLinkedin className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
              <FaTwitter className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
