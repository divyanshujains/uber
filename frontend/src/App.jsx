import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainsignup from './pages/Captainsignup'
import Captainlogin from './pages/Captainlogin'
import Start from './pages/Start'
import Userprotect from './components/Userprotect'
import Captinprotect from './components/Captinprotect'
import Captainhome from './pages/Captainhome'


const App = () => {
  return (
    <div className='rounded-2xl'>
      <Routes>
        <Route
          path="/home"
          element={
            <Userprotect>
              <Home />
            </Userprotect>
          }
        />
        <Route path="/" element={<Start />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/usersignup" element={<Usersignup />} />
        <Route path="/captainsignup" element={<Captainsignup />} />
        <Route path="/captainlogin" element={<Captainlogin />} />
        <Route
          path="/captainhome"
          element={
      
              <Captainhome />
           
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App
