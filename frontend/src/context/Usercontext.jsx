import React, { createContext, useState } from 'react'
export const UserDataContext = createContext();

const Usercontext = ({children}) => {
   
   
   const [userdata, setuserdata] = useState({
    email:'',
    fullname:{
      firstname:'',
      lastname:'',
    }
   })


  return (
    <div>
        <UserDataContext.Provider value={{ userdata, setuserdata}}>
            {children}
        </UserDataContext.Provider> 
      
    </div>
  )
}

export default Usercontext
