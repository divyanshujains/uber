import React from "react";

import { useNavigate } from "react-router-dom";
import {  useEffect } from "react";

const Userprotect = ({ children }) => {
  const token = localStorage.getItem("userToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/userlogin");
    }
  }, []);
  return <div>{children}</div>;
};

export default Userprotect;
