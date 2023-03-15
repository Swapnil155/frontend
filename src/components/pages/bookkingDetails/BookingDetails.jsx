import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../layout/BreadCrumb";
import Gallery from "./components/Gallery";
import ThingKeepInMind from "./components/ThingKeepInMind";
import {FaChild,FaGlassCheers,FaSmokingBan,FaCat,FaRegFile,FaPrint} from 'react-icons/fa'

const BookingDetails = () => {
  const PrintWindow = () => {
    window.print();
  };
  return (
    <section className="hero-header container py-6">
      <div className="row">
      <BreadCrumb />
      <ThingKeepInMind />
      <div className="col-lg-7 col-xl-5 px-4 pb-4 ps-xl-5 pe-xl-5">
        <div className="text-block">
          <p className="subtitle">Monday Apr 17 - Tuesday Apr 18</p>
          <h1 className="hero-heading mb-3">
            Modern Apt - Vibrant Neighborhood
          </h1>
        </div>
        {/*  */}
        <div className="text-block">
          <h6 className="mb-4">1 night in London</h6>
          <div className="row mb-3">
            <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
              <div className="date-tile me-3">
                <div className="text-uppercase">
                  {" "}
                  <span className="text-sm">Apr</span>
                  <br />
                  <strong className="text-lg">17</strong>
                </div>
              </div>
              <p className="text-sm mb-0">
                Wednesday check-in
                <br />
                3PM - 7PM
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="date-tile me-3">
                <div className="text-uppercase">
                  {" "}
                  <span className="text-sm">Apr</span>
                  <br />
                  <strong className="text-lg">18</strong>
                </div>
              </div>
              <p className="text-sm mb-0">
                Thursday check-out
                <br />
                11AM
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="text-block">
          <div className="row">
            <div className="col-sm">
              <h6>Address</h6>
              <p className="text-muted">Ap #867, 859 Sit Rd., London</p>
            </div>
            <div className="col-sm">
              <h6>Phone</h6>
              <p className="text-muted">+421 454 897 545</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="text-block">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <h6>Entire appartment</h6>
              <p className="text-muted mb-0">
                Hosted by{" "}
                <a href="user-profile.html" className="text-reset">
                  Jack London
                </a>
              </p>
            </div>
            <a href="user-profile.html">
              <img
                className="avatar avatar-lg p-1 flex-shrink-0 ms-4"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-10.jpg"
                alt="Jack London"
              />
            </a>
          </div>
        </div>
        {/*  */}
        <div className="text-block">
          <h6 className="mb-3">Who's coming</h6>
          <div className="row mb-3">
            <div className="col-auto text-center text-sm">
              <img
                className="avatar avatar-border-white mb-1"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-0.jpg"
                alt="Ondrej"
              />
              <br />
              Ondrej
            </div>
            <div className="col-auto text-center text-sm">
              <img
                className="avatar avatar-border-white mb-1"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-1.jpg"
                alt="Julie"
              />
              <br />
              Julie
            </div>
            <div className="col-auto text-center text-sm">
              <img
                className="avatar avatar-border-white mb-1"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-2.jpg"
                alt="Barbora"
              />
              <br />
              Barbora
            </div>
          </div>
        </div>
        {/*  */}
        <div className="text-block">
          <div className="row">
            <div className="col">
              <h6> Total cost</h6>
              <p className="text-muted">$499.50</p>
            </div>
            <div className="col align-self-center">
              <p className="text-end d-print-none">
                <Link
                  className="btn btn-link text-muted Link"
                  to="/Account/Payment/Invoice"
                >
                  <FaRegFile className="me-2" />
                  Your invoice
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="text-block">
          <h6 className="mb-4">Things to keep in mind</h6>
          <ul className="list-unstyled">
            <li className="mb-2">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                  <FaChild className="text-secondary fa-fw text-center" />
                </div>
                <div>
                  <span className="text-sm">
                    Not suitable for children and infants - The entrance
                    staircase doesn't have handrails
                  </span>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                  <FaGlassCheers className="text-secondary fa-fw text-center" />
                </div>
                <div>
                  <span className="text-sm">No parties or events</span>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                  <FaSmokingBan className="text-secondary fa-fw text-center" />
                </div>
                <div>
                  <span className="text-sm">No smoking</span>
                </div>
              </div>
            </li>
            <li className="mb-2">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                  <FaCat className="text-secondary fa-fw text-center" />
                </div>
                <div>
                  <span className="text-sm">No pets</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/*  */}

        {/*  */}
        <div className="text-block d-print-none">
          <button
            className="btn btn-link ps-0 shadow-0 "
            onClick={() => PrintWindow()}
          >
            <FaPrint className="me-2" />
            Print{" "}
          </button>
        </div>

        {/*  */}
      </div>
      <div className="col-lg-5 col-xl-7 map-side-lg px-lg-0">
      <Gallery />
      </div>
      </div>
    </section>
  );
};

export default BookingDetails;
