import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../axios/Axios";
import { CaptainDataContext } from "../context/Captaincontext";

const Captainlogin = () => {

  const navigate = useNavigate();
   
  

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { setcaptaindata} = useContext(CaptainDataContext);

  const submitHandler = async (e) => {

    e.preventDefault();
    const logindata = {
      email,
      password,
    };


    try {
      const response = await api.post("/captain/login", logindata);
      if(response){
       localStorage.setItem("captainToken:",response.data.token)
            setcaptaindata(response.data.captain)
       console.log(response.data)
       
       navigate("/captainhome")
      }
      
    } catch (error) {
      console.log("Captain login error", error);
      
    }
    

    
      

  



  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">Uber</h1>
      </div>

      {/* Login Form */}
      <form
        onSubmit={submitHandler}
        className="flex-1 flex items-center justify-center px-6"
      >
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">Captain sign in</h2>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition">
            Continue
          </button>

          {/* Switch to User */}
          <Link
            to="/userlogin"
            className="w-full flex justify-center items-center bg-yellow-400 mt-4 text-black py-3 rounded-lg text-lg font-medium hover:bg-yellow-500 transition"
          >
            Login as User
          </Link>

          {/* Extra Links */}
          <p className="text-center text-sm text-gray-600 mt-4">
            New Captain?{" "}
            <Link to="/captainsignup" className="text-black font-medium">
              Create Captain Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Captainlogin;
