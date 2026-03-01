/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const Usercontext = ({ children }) => {
  const [userdata, setuserdata] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });

  return (
    <UserDataContext.Provider value={{ userdata, setuserdata }}>
      {children}
    </UserDataContext.Provider>
  );
};

export default Usercontext;
