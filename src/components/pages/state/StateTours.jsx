import React from 'react'
import Header from './components/Header'
import Tours from './components/Tours'
import Filter from '../../cards/filter/Filter'
import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'

const StateTours= () => {
  return (
    <div>
      <Navbar />
        <Header />
        <section>
        <div className="container-fulid hero-container">
          <div className='container px-5'>
          <Tours />
          </div>
          {/* <div className="row mx-5">
             <div className="col-lg-3 py-5">
            <Filter />
          <div className="col-lg-12">
          <Tours />
          </div> 
          </div>*/}
        </div>
        </section>
        <Footer />
    </div>
  )
}

export default StateTours