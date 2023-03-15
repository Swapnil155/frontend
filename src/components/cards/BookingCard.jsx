import React from "react";
import { Link } from "react-router-dom";
import {FaStar} from 'react-icons/fa'

const BookingCard = () => {
  return (
    <div>
      <div className="card hover-animate h-100 border-0 shadow">
        <div className="card-img-top overflow-hidden">
          <Link to="/">
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1484154218962-a197022b5858.jpg"
              alt="Modern, Well-Appointed Room"
            />
          </Link>
        </div>
        <div className="card-body d-flex align-items-center">
          <div className="w-100">
            <p className="subtitle fw-normal text-sm mb-2">March 2019</p>
            <h6 className="card-title">
              <a
                className="text-decoration-none text-dark"
                href="user-booking-detail.html"
              >
                Modern, Well-Appointed Room
              </a>
            </h6>
            <div className="d-flex card-subtitle">
              <p className="flex-grow-1 mb-0 text-muted text-sm">
                Private room
              </p>
              <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
                <FaStar className="text-warning" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
