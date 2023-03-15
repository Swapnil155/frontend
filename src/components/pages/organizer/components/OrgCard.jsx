import React from "react";
import { Link } from "react-router-dom";
import { ImFire } from "react-icons/im";
import { MdOutlineVerified } from "react-icons/md";

const OrgCard = () => {
  return (
    <div className="card border-0 shadow mb-6 mb-lg-0 my-3">
      <div className="card-header bg-gray-100 py-4 border-0 text-center">
        <Link className="d-inline-block" to="#">
          <img
            className="d-block avatar avatar-xxl p-2 mb-2"
            src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-10.jpg"
            alt=""
          />
        </Link>
        <h5>Jack London</h5>
        <p className="text-muted text-sm mb-0">Los Angeles, CA</p>
      </div>
      <div className="card-body p-4">
        <div className="d-flex align-items-center mb-3">
          <div className="icon-rounded icon-rounded-sm bg-primary-light flex-shrink-0 me-2">
            <ImFire className="text-primary svg-icon-md" />
          </div>
          <div>
            <p className="mb-0">2877 reviews</p>
          </div>
        </div>
        <div className="d-flex align-items-center mb-3">
          <div className="icon-rounded icon-rounded-sm bg-primary-light flex-shrink-0 me-2">
            <MdOutlineVerified className="text-primary svg-icon-md" />
          </div>
          <div>
            <p className="mb-0">Verified</p>
          </div>
        </div>
        <hr />
        <h6 className="fw-700">Jack provided</h6>
        <ul className="card-text text-muted">
          <li>Government ID</li>
          <li>Email address</li>
          <li>Phone number</li>
        </ul>
      </div>
    </div>
  );
};

export default OrgCard;
