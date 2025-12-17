import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/Captaincontext';

const Captinprotect = ({children}) => {
   
     const navigate = useNavigate();
    const token = localStorage.getItem("captainToken");

    const { captaindata, setcaptaindata } = useContext(CaptainDataContext);

    useEffect(()=>{

        if(!token){
            navigate("/captainlogin");
        }
    },[token])
   
    

  return (
    <div>
      {children}
    </div>
  )
}

export default Captinprotect
