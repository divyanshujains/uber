import React, { useContext } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../axios/Axios';
import {UserDataContext} from '../context/Usercontext';

const Userlogin = () => {

  const navigate = useNavigate();

  const {userdata , setuserdata} = useContext(UserDataContext);

   const [email, setemail] = useState('')
   const [password, setpassword] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!email || !password){
          alert('Please fill all the fields');
          return;
        }
        const logindata = {
          email: email,
          password: password,
        }
        try { 
          const response = await api.post('/user/login', logindata);
             if(response){
              setuserdata(response.data.user);
              localStorage.setItem('userToken', response.data.token);
              
              navigate('/home');
             }
        } catch (error) {
          console.error('Login failed:', error);
          
        }
       
    }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">Uber</h1>
      </div>

      {/* Login Form */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex-1 flex items-center justify-center px-6"
      >
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">Sign in to continue</h2>

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
              minLength={3}
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
            Continue
          </button>

          <Link
          to="/captainlogin"

           className="w-full flex justify-center items-center bg-green-400 mt-4 text-black py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
            login as a captain
          </Link>

          {/* Extra Links */}
          <p className="text-center text-sm text-gray-600 mt-4">
            New to Uber?{" "}
            <Link
              to="/usersignup"
              className="text-black font-medium cursor-pointer"
            >
              Create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Userlogin
