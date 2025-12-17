import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext();

const Captaincontext = ({children}) => {


  const [captaindata, setcaptaindata] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });


  return (
    <div>
      <CaptainDataContext.Provider value={{captaindata, setcaptaindata}} >
        {children}
      </CaptainDataContext.Provider>
      
    </div>
  )
}

export default Captaincontext
