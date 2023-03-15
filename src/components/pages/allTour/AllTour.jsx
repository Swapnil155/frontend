import React from 'react'
import Filter from '../../cards/filter/Filter'
import BreadCrumb from '../../layout/BreadCrumb'
import Footer from '../../layout/Footer'
import Navbar from '../../layout/Navbar'
import { Header } from './components/Header'
import TourCard from './components/TourCard'

const AllTour = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="container-fulid hero-container">
            <BreadCrumb />
            <div className="row mx-5">
                {/* <div className="col-lg-3 py-5">
                    <Filter />
                </div> */}
                <div className="col-lg-12">
                    <TourCard />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AllTour