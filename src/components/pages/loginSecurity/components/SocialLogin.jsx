import React from "react";
import { Link } from "react-router-dom";

const SocialLogin = () => {
  return (
    <div className="text-block">
      <h5 className="mb-4 fw-700">Social accounts</h5>
      <div className="row">
        <div className="col-sm-8">
          <h6>Facebook</h6>
          <p className="text-sm text-muted">Not connected</p>
        </div>
        <div className="col text-end">
          <Link className="btn btn-link text-primary ps-0 Link" to="#">
            Connect
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <h6>Google</h6>
          <p className="text-sm">Connected</p>
        </div>
        <div className="col text-end">
          <Link className="btn btn-link text-primary ps-0 Link" to="#">
            Disconnect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
