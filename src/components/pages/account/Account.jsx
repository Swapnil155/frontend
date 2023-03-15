import React from "react";
import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../../layout/BreadCrumb";
import {HiOutlineIdentification} from 'react-icons/hi'
import {RiDoorLockLine} from 'react-icons/ri'
import {GiSwipeCard} from 'react-icons/gi'

const Account = () => {
    const pathname = useLocation().pathname
    // console.log(pathname)
  return (
    <section className="py-5 hero-header">
      <div className="container">
        {/* breadcrum */}
        <BreadCrumb />
        {/* end breadcrum */}
        {/* Header */}
        <h1 className="fw-700 pt-3">Your account</h1>
        <p className="text-muted mb-5">Mange your Account and setting here.</p>
        {/* end Header */}
        <div className="row">
            {/* Personal Info */}
          <div className="col-6 col-md-4 mb-3">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <HiOutlineIdentification className="svg-icon text-secondary w-2rem h-2rem"/>
                </div>
                <h5 className="card-title mb-3 fw-700">
                  <Link
                    className="text-decoration-none text-dark stretched-link"
                    to={`${pathname}/Personal-Info`}
                  >
                    Personal info
                  </Link>
                </h5>
                <p className="text-muted card-text text-sm">
                  Provide personal details and how we can reach you
                </p>
              </div>
            </div>
          </div>
          {/* end Persnol Info */}
          {/* Security Login */}
          
          <div className="col-6 col-md-4 mb-3">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <RiDoorLockLine className="svg-icon text-secondary w-2rem h-2rem"/>
                </div>
                <h5 className="card-title mb-3 fw-700">
                  <Link
                    className="text-decoration-none text-dark stretched-link"
                    to={`${pathname}/Login-Security`}
                  >
                    Login & Security
                  </Link>
                </h5>
                <p class="text-muted card-text text-sm">Update your password and secure your account</p>
              </div>
            </div>
          </div>
          {/* End Security Login */}

          {/* Paayment */}
          <div className="col-6 col-md-4 mb-3">
            <div className="card h-100 border-0 shadow hover-animate">
              <div className="card-body">
                <div className="icon-rounded bg-secondary-light mb-3">
                  <GiSwipeCard className="svg-icon text-secondary w-2rem h-2rem"/>
                </div>
                <h5 className="card-title mb-3 fw-700">
                  <Link
                    className="text-decoration-none text-dark stretched-link"
                    to={`${pathname}/Payment`}
                  >
                    Payment's
                  </Link>
                </h5>
                <p class="text-muted card-text text-sm">Review payments, payouts, coupons, gift cards, and taxes</p>
              </div>
            </div>
          </div>
          {/* end Payment */}

        </div>
      </div>
    </section>
  );
};

export default Account;
