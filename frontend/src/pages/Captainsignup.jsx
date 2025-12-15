import React, { useState } from "react";
import { Link } from "react-router-dom";

const Captainsignup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [vehicleType, setVehicleType] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const signupData = {
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType,
      },
    };

    console.log(signupData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">Uber</h1>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={submitHandler}
        className="flex-1 flex items-center justify-center px-6"
      >
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">Captain Sign Up</h2>

          {/* Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstname(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastname(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Vehicle Details */}
          <h3 className="text-lg font-semibold mb-4">Vehicle Information</h3>

          <div className="mb-4">
            <select
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Vehicle Color"
              onChange={(e) => setVehicleColor(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Vehicle Plate Number"
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="number"
              placeholder="Vehicle Capacity"
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Submit */}
          <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
            Create Captain Account
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already a Captain?{" "}
            <Link to="/captainlogin" className="text-black font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Captainsignup;
