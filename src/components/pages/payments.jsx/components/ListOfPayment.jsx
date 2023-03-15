import React from "react";
import {FaCheck, FaRupeeSign} from 'react-icons/fa'
import { Link } from "react-router-dom";

const ListOfPayment = () => {
  return (
    <div className="list-group shadow mb-5">
      <Link
        className="list-group-item list-group-item-action p-4"
        to="/Booking/Booking-Details"
      >
        <div className="row">
          <div className="col-lg-4 align-self-center mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <h3 className="fw-700 mb-0">Raigad Fort</h3>
              
            </div>
            <p className="text-sm text-muted">One-Day Trek</p>
            <span className="badge badge-pill p-2 badge-secondary-light">
              February 16, 2019 - February 19, 2019
            </span>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                <h6 className="label-heading">Payment type</h6>
                <p className="text-sm fw-bold">UPI</p>
                <h6 className="label-heading">Guste </h6>
                <p className="text-sm fw-bold mb-0">3</p>
              </div>
              <div className="col-6 col-md-4 col-lg-3 py-3">
                <h6 className="label-heading">Referance</h6>
                <p className="text-sm fw-bold">2021457896</p>
                <h6 className="label-heading">Charge</h6>
                <p className="text-sm fw-bold mb-0"><FaRupeeSign className="mb-1"/> 244.42</p>
              </div>
              <div className="col-6 col-md-4 col-lg-3 py-3">
                <h6 className="label-heading">Booked Date</h6>
                <p className="text-sm fw-bold">February 16, 2019 </p>
              </div>
              <div className="col-12 col-lg-3 align-self-center">
                <span className="text-primary text-sm text-uppercase me-4 me-lg-0">
                  <FaCheck className="me-2" /> Booking paid
                </span>
                <br className="d-none d-lg-block" />
                <span className="text-primary text-sm text-uppercase">
                  <FaCheck className="me-2" /> Confirmed
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListOfPayment;
