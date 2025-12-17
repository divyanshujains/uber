import React from "react";

import { UserDataContext } from "../context/Usercontext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

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
