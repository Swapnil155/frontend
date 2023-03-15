import React from 'react'
import { Link } from "react-router-dom";
import {FaLongArrowAltRight} from 'react-icons/fa'

const Header = () => {
  return (
      
    <section className="position-relative py-6 hero-header 
    ">
      <img
        className="bg-image"
        src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1467987506553-8f3916508521.jpg"
        alt = ""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body p-5">
                <strong className="text-uppercase text-secondary d-inline-block mb-2 text-sm">
                  Featured
                </strong>
                <h2 className="mb-3 fw-700">Escape the city today</h2>
                <p className="text-muted">
                  As am hastily invited settled at limited civilly fortune me.
                  Really spring in extent an by. Judge but built party world.
                  Of so am he remember although required. Bachelor unpacked be
                  advanced at. Confined in declared marianne is vicinity
                </p>
                <Link className="btn btn-link p-0 Link shadow-0" to="/Blog/Blog-Details">
                  Continue reading{" "}
                  <FaLongArrowAltRight className="mb-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header