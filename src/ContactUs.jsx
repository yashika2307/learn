import React from "react";

import { FaRegCopy, FaWhatsapp } from "react-icons/fa"; // Import copy and WhatsApp icons
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { PiWhatsappLogoBold } from "react-icons/pi"
import { MdOutlineEmail } from "react-icons/md"; // Import email icon
import Header from './Header';

export default function ContactUsPage() {
  const whatsappNumber = "7756900769"; // Replace with actual number
  const whatsappMessage = "Hi, I'm interested in learning more about your care services!";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const email = "welltogetherin@gmail.com"; // Replace with actual email

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard!");
    }).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <>
      {/* <Header /> */}
      <div className="min-w-screen flex items-center justify-center bg-white mx-auto self-center">
        <div className="contact-us-card bg-white rounded-lg shadow-lg p-8 max-w-100% w-100% text-left border border-gray-200">
          <h1 className="text-3xl font-bold mb-6 text-[#1e3a8a]">Contact Us</h1>

          <div className="text-lg text-gray-700">
            <div className="flex items-center">
              <MdOutlineEmail className="mr-2 text-gray-500 text-4xl" />
              <p className="mr-2">Email: <a 
              href="mailto:welltogetherin@gmail.com"
              className="text-blue-700 underline hover:font-bold inline-block min-w-[230]"
            >
              welltogetherin@gmail.com
            </a></p>
              <FaRegCopy
                className="cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => copyToClipboard(email)}
              />
            </div>
            <div className="flex items-center mt-4">
              <PiWhatsappLogoBold className="mr-2 text-green-500 text-4xl" />
              <p className="mr-2">WhatsApp: <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
             7756900769
            </a></p>
              <FaRegCopy
                className="cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => copyToClipboard(whatsappNumber)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
