import React from "react";
import SecurityCard from "../../cards/SecurityCard";
import BreadCrumb from "../../layout/BreadCrumb";
import Login from "./components/Login";
import SocialLogin from "./components/SocialLogin";
const LoginSecurity = () => {
  return (
    <section className="py-5 hero-header">
      <div className="container">
        {/* breadcrum */}
        <BreadCrumb />
        {/* end breadcrum */}
        {/* Header */}
        <h1 className="fw-700 pt-3">Login Security</h1>
        <p className="text-muted mb-5">
          Mange your Login and Security and setting here.
        </p>
        {/* end Header */}
        <div className="row">
          <div className="col-lg-7 mb-5 mb-lg-0">
              <Login />
              <SocialLogin />
          </div>
          <div className="col-md-8 col-lg-4 ms-lg-auto">
              <SecurityCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSecurity;
