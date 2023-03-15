import React from 'react'
import {Route, Routes } from "react-router-dom";
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import BookingGrid from '../components/pages/bookingGrid/BookingGrid';
import BookingDetails from '../components/pages/bookkingDetails/BookingDetails';


const UserBooking = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<BookingGrid />} />
            <Route path='/Booking-Details' element={<BookingDetails />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default UserBooking