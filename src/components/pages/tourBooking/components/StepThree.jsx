import React from 'react'
import {BsHeart} from 'react-icons/bs'
import {FaChevronRight,FaChevronLeft,FaCcAmex,FaCcVisa,FaCcMastercard} from 'react-icons/fa'
import { Link, useParams } from "react-router-dom";

const StepThree = () => {
  var {_id} = useParams()
  return (
    <>
      <p className="subtitle text-primary">Book your holiday home</p>
      <h1 className="h2 mb-5">
        {" "}
        Confirm and pay <span className="text-muted float-end">
          Step 3
        </span>{" "}
      </h1>
      <div className="text-block">
        <div className="alert alert-warning text-sm mb-3">
          <div className="d-flex align-items-center">
          <BsHeart className="me-2 fa-2x" />
            <div>
              <strong>This home is on people’s minds.</strong> It’s been viewed
              43 times in the past week.
            </div>
          </div>
        </div>
      </div>
      <div className="text-block">
        <form action="#">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h5 className="mb-0">Pay with your card</h5>
            <div className="text-muted">
              <FaCcAmex className="fa-2x me-2"> </FaCcAmex>
              <FaCcVisa className="fa-2x me-2"> </FaCcVisa>
              <FaCcMastercard className="fa-2x" />
            </div>
          </div>

          <button
            className="btn btn-link btn-collapse ps-0 text-muted"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#addNewCard"
            aria-expanded="false"
            aria-controls="addNewCard"
            data-expanded-text="Close"
            data-collapsed-text="Add a new card"
          >
            Add a new card
          </button>
          <div className="row collapse" id="addNewCard">
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="card-name">
                Name on Card
              </label>
              <input
                className="form-control"
                type="text"
                name="card-name"
                placeholder="Name on card"
                id="card-name"
              />
            </div>
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="card-number">
                Card Number
              </label>
              <input
                className="form-control"
                type="text"
                name="card-number"
                placeholder="Card number"
                id="card-number"
              />
            </div>
            <div className="mb-4 col-md-4">
              <label className="form-label" htmlFor="expiry-date">
                Expiry Date
              </label>
              <input
                className="form-control"
                type="text"
                name="expiry-date"
                placeholder="MM/YY"
                id="expiry-date"
              />
            </div>
            <div className="mb-4 col-md-4">
              <label className="form-label" htmlFor="cvv">
                CVC/CVV
              </label>
              <input
                className="form-control"
                type="text"
                name="cvv"
                placeholder={123}
                id="cvv"
              />
            </div>
            <div className="mb-4 col-md-4">
              <label className="form-label" htmlFor="zip">
                ZIP
              </label>
              <input
                className="form-control"
                type="text"
                name="zip"
                placeholder={123}
                id="zip"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="text-block">
        <h6>Cancellation policy</h6>
        <p className="text-sm text-muted">
          Samsa was a travelling salesman - and above it there hung a picture
          that he had recently cut out of .
        </p>
        <p className="text-sm text-muted">
          He must have tried it a hundred times, shut his eyes so that he
          wouldn't have to look at the flounde.
        </p>
      </div>
      <div className="row form-block flex-column flex-sm-row mt-4">
        <div className="col text-center text-sm-start">
          <Link className="btn btn-link text-muted" to={`/Tour-Booking/${_id}/Step-2`}>
            {" "}
            <FaChevronLeft className="me-2" />
            Back
          </Link>
        </div>
        <div className="col text-center text-sm-end">
          <Link className="btn btn-primary px-3" to={`/Tour-Booking/${_id}/Step-4`}>
            {" "}
            Next step
            <FaChevronRight className="ms-2" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default StepThree