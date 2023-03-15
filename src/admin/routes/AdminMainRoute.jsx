import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Layouts/navbar/Navbar'
import SideBar from '../components/Layouts/sidebar/SideBar'
import Dashboard from '../components/pages/dashboard/Dashboard'
import LandingPage from '../components/pages/landingPage/LandingPage'
import Login from '../components/pages/login/Login'
import Registration from '../components/pages/registration/Registration'

const AdminMainRoute = () => {
  return (
    <div>
      <SideBar />
      <div className="home" id='home'>
          <Navbar />
        <Routes >
            <Route path="/" element={<LandingPage />} />
            {/* <Route path='/Login'  element={<Login />} />
            <Route path='/Registration' element={<Registration />} /> */}
            <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

export default AdminMainRoute