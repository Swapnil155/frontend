import React from "react";
import BreadCrumb from "../../../layout/BreadCrumb";

const Header = () => {
  return (
    <section className="mt-5 py-5 bg-gray-100 shadow hero-header">
      <div className="container">
        <BreadCrumb />
        <h1 className="fw-700">Maharastra</h1>
        <p className="lead mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </div>
    </section>
  );
};

export default Header;
