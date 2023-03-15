import React from 'react'
import {GoCalendar} from 'react-icons/go'
import {FaMapMarkedAlt} from 'react-icons/fa'
const Header = () => {
  return (
    <section className='details-header-img hero-header'
    style={{
      background: `center center url("/images/bg-img-1.jpg") no-repeat`,
      backgroundSize: "cover",
    }}
    >
      <div className="container h-100">
        <div className="d-flex h-100 overlay-content align-item-center text-white gradient-overlay">
          <div className="w-100 Tour-title">
            <h4 className='text-white'><FaMapMarkedAlt className='mb-2' /> Mumbai</h4>
            <h1 className='text-shadow text-title-bold'>Tour Name</h1>
            <p><GoCalendar className='mb-1'/> Date May 15, 2022 | 1 Day 1 Neight </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header