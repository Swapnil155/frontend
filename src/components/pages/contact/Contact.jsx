import React from 'react'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import Header from './components/Header'
import Addres from './components/Addres'
import ContactFrom from './components/ContactFrom'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <Addres />
        <ContactFrom />
        <Footer />
    </div>
  )
}

export default Contact