import React from "react";
import Header from './Header';

export default function ContactUsPage() {
  const whatsappNumber = "8177950736"; // Replace with actual number
  const whatsappMessage = "Hi, I'm interested in learning more about your care services!";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
    {/* <Header /> */}
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-white mx-auto ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-100% w-100% text-left border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-[#1e3a8a]">Contact Us</h1>

        <div className="space-y-6 text-lg text-gray-700">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:welltogetherin@gmail.com"
              className="text-blue-700 underline hover:font-bold"
            >
              welltogetherin@gmail.com
            </a>
          </p>

          {/* <p>
            📞 Phone:{" "}
            <a
              href="tel:99999999"
              className="text-blue-700 underline hover:font-bold"
            >
              99999999
            </a>
          </p> */}

          <p>
            💬 WhatsApp:{" "}
            <a
              href={whatsappURL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-b from-blue-200 to-blue-600 text-black px-4 py-6 dark:from-blue-500 dark:to-blue-800 hover:from-blue-700 hover:to-blue-300  transition duration-300"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="mr-2"
              >
                <path d="M380.9 97.1C339-19.4 192.2-27 108 59.8C42.3 129.1 33.8 232.7 82.6 312.7L52.2 444.3l135.3-35.6c30 10.3 62.3 15.7 95.5 15.7 36.4 0 72.5-9.3 104.5-27.1 109.5-62.7 147.3-205.2 91.4-299.9zM224 388c-30.3 0-60.2-7.5-86.7-21.6l-6.2-3.4-80.2 21.2 21.4-77.9-4.3-6.8C47.3 246.2 56.4 157 112.4 104.6 184.4 37.3 295.8 42.1 359.6 113.8c57.5 66.1 46.5 169.3-28.4 215.4-30.4 18.2-64.6 27.8-107.2 27.8z"/>
              </svg> */}
              Chat Now
            </a>
          </p>
        </div>
      </div>
    </div>
 </>
  );
}
