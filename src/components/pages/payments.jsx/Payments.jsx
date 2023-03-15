import React from 'react'
import BreadCrumb from '../../layout/BreadCrumb'
import ListOfPayment from './components/ListOfPayment'

const Payments = () => {
  return (
      
    <section className="py-5 hero-header">
    <div className="container">
      {/* breadcrum */}
      <BreadCrumb />
      {/* end breadcrum */}
      {/* Header */}
      <h1 className="fw-700 pt-3">Payment's</h1>
      <p className="text-muted mb-5">
       See all your transcation here
      </p>
      {/* end Header */}
      <ListOfPayment />
    </div>
  </section>
  )
}

export default Payments