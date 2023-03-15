import React from "react";
import BookingCard from "../../cards/BookingCard";
import BreadCrumb from "../../layout/BreadCrumb";

const BookingGrid = () => {
  return (
    <section className="py-5 hero-header">
      <div className="container">
        {/* breadcrum */}
        <BreadCrumb />
        {/* end breadcrum */}
        {/* Header */}
        <h1 className="pt-3 h1 hero-heading fw-700">Your nearest bookings</h1>
        <p className="text-muted mb-5">
          You have no upcoming trips. Start exploring ideas for your next trip.
        </p>
        <p className="mb-6">
          <img
            className="img-fluid"
            src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/illustration/undraw_trip_dv9f.svg"
            alt=""
            style={{ width: "400px" }}
          />
        </p>
        <h2 className="mb-5 fw-700">Your past bookings</h2>
        {/* end Header */}
        <div className="row">
          <div className="col-xl-3 col-md-4 col-sm-6 mb-5" >
            <BookingCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingGrid;
