import React from 'react'


export const UserDataContext = createContext();

const Usercontext = ({children}) => {
  return (
    <div>
        <UserDataContext.Provider value={{}}>
            {children}
        </UserDataContext.Provider> 
      
    </div>
  )
}

export default Usercontext
