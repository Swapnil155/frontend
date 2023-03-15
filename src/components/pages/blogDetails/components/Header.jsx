import React from 'react'
import BreadCrumb from '../../../layout/BreadCrumb_1'

const Header = () => {
  return (
    <section
    className="d-flex align-items-center dark-overlay bg-cover mb-5 hero-header"
    style={{
        background: `center center url("/images/bg-img-1.jpg") no-repeat`,
        backgroundSize: "cover",
        height: `60vh`
    }}>
        <div className="container py-6 py-lg-7 text-white overlay-content text-center mx-auto" >
          <div className="row py-lg-7">
            <div className="col-xl-10 mx-auto">
              <BreadCrumb />
              <h1 className="display-3 text-serif fw-800 text-shadow">
                Blog Name
              </h1>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Header