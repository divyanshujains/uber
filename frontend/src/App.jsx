import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Userlogin from './pages/Userlogin'
import Usersignup from './pages/Usersignup'
import Captainsignup from './pages/Captainsignup'
import Captainlogin from './pages/Captainlogin'

const App = () => {
  return (
    <div>
           <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/userlogin" element={<Userlogin />} />
                  <Route path="/usersignup" element={<Usersignup />} />
                  <Route path="/captainsignup" element={<Captainsignup />} />
                  <Route path="/captainlogin" element={<Captainlogin />} />
            </Routes>
      
    </div>
  )
}

export default App
