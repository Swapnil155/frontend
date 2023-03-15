import React from "react";
import { Link } from "react-router-dom";
import {FaRegFile} from 'react-icons/fa'

const StepFour = () => {
  return (
    <>
      <div>
        <p className="subtitle text-primary">Book your holiday home</p>
        <h1 className="h2 mb-5">
          {" "}
          Booking placed <span className="text-muted float-end">
            Step 4
          </span>{" "}
        </h1>
        <div className="text-block">
          <p className="text-muted">Thank you for your booking, Ondrej. </p>
          <p className="text-muted mb-5">
            Samsa was a travelling salesman - and above it there hung a picture
            that he had recently cut out of an illustrated magazine and housed
            in a nice, gilded frame.
          </p>
          <p className="text-center mb-5">
            <Link
              className="btn btn-primary mx-2 mb-2"
              to="/Booking/Booking-Details"
            >
              {" "}
              <FaRegFile className="me-2" />
              View your order
            </Link>
            <Link className="btn btn-outline-muted mb-2" to="/">
              Or something else
            </Link>
          </p>
          <p className="mb-5 text-center">
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/illustration/undraw_celebration_0jvk.svg"
              alt = ''
              style={{ width: 400 }}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default StepFour;
