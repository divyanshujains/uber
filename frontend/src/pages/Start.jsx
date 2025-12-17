import React from 'react'
import  { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Image Section */}
      <div
        className="relative flex-1 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Uber Logo/Text */}
        <div className="relative z-10 p-6">
          <h1 className="text-black text-3xl font-bold">Uber</h1>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="bg-white p-6 rounded-t-2xl shadow-lg">
        <h4 className="text-xl font-semibold mb-4">Get started with Uber</h4>

        <Link
          to="/userlogin"
          className="w-full   flex items-center justify-center   bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Start
