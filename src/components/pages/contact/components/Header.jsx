import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../../layout/BreadCrumb_1";

const Header = () => {
  return (
    <section className="hero py-6 py-lg-7 text-white dark-overlay hero-header">
      <img
        className="bg-image"
        src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1522143049013-2519756a52d4.jpg"
        alt="How can we help you today?"
      />
      <div className="container overlay-content">
        {/* Breadcrumbs */}
        <BreadCrumb/>
        <h1 className="fw-700 text-shadow">How can we help you today?</h1>
      </div>
    </section>
  );
};

export default Header;
