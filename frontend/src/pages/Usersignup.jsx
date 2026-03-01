import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import api from "../axios/Axios";

const Usersignup = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  
const navigate = useNavigate();

  const submitHandler = async  (e) => {
    e.preventDefault();
 
    
    
   const payload = {
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  };

    try {
      const response = await api.post('/user/register', payload);
    if(response){
      navigate('/userlogin');  
       localStorage.setItem('userToken', response.data.token);
      
    }
      
    } catch (error) {
      console.log(error);
    }

    
  }



  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">Uber</h1>
      </div>

      {/* Signup Form */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex-1 flex items-center justify-center px-6"
      >
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">
            Create your Uber account
          </h2>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First name
              </label>
              <input
                onChange={(e) => {
                  setfirstname(e.target.value);
                }}
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Last name
              </label>
              <input
                onChange={(e) => {
                  setlastname(e.target.value);
                }}
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Signup Button */}
          <button
          className="w-full flex items-center justify-center bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
            Sign up
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
            to="/userlogin"
            className="text-black font-medium cursor-pointer">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Usersignup;
