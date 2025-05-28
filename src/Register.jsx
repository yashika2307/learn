import React, { useState } from "react";

export default function Register() {
  const [role, setRole] = useState("care-provider");

  return (
    <div className="max-w-md mx-auto p-6"> 
      <h1 className="text-2xl font-bold mb-4 text-center">Register as</h1>
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setRole("care-provider")}
          className={`px-4 py-2 rounded ${role === "care-provider" ? "bg-blue-600 text-black" : "bg-gray-500"}`}
        >
          Care Provider
        </button>
        <button
          onClick={() => setRole("care-receiver")}
          className={`px-4 py-2 rounded ${role === "care-receiver" ? "bg-blue-600 text-black" : "bg-gray-500"}`}
        >
          Care Receiver
        </button>
      </div>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" placeholder="Full Name" required />
        <input className="w-full p-2 border rounded" placeholder="Email" type="email" required />
        <input className="w-full p-2 border rounded" placeholder="Phone Number" type="tel" required />
        <button className="w-full bg-black text-black py-2 rounded hover:opacity-90">
          Register as {role === "care-provider" ? "Care Provider" : "Care Receiver"}
        </button>
      </form>
    </div>
  );
}
