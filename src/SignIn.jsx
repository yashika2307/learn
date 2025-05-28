import React, { useState } from "react";

export default function SignIn() {
  const [role, setRole] = useState("care-provider");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 4 && /^\d{4}$/.test(otp)) {
      alert("Logged in successfully!");
    } else {
      alert("Please enter a valid 4-digit OTP");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Sign In as</h1>
      <div className="flex justify-center mb-4 space-x-4">
        <button
          onClick={() => setRole("care-provider")}
          className={`px-4 py-2 rounded ${role === "care-provider" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Care Provider
        </button>
        <button
          onClick={() => setRole("care-receiver")}
          className={`px-4 py-2 rounded ${role === "care-receiver" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Care Receiver
        </button>
      </div>

      {step === 1 ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStep(2);
          }}
          className="space-y-4"
        >
          <input
            className="w-full p-2 border rounded"
            placeholder="Phone Number"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">Send OTP</button>
        </form>
      ) : (
        <form onSubmit={handleOTPSubmit} className="space-y-4">
          <input
            className="w-full p-2 border rounded"
            placeholder="Enter 4-digit OTP"
            maxLength={4}
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
            Sign In as {role === "care-provider" ? "Care Provider" : "Care Receiver"}
          </button>
        </form>
      )}
    </div>
  );
}
