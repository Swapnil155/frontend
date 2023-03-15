import React from "react";

const Login = () => {
  return (
    <div className="text-block">
      <h5 className="mb-4 fw-700">Login</h5>
      <div className="row">
        <div className="col-sm-8">
          <h6>Password</h6>
          <p className="text-sm text-muted">Last updated 3 years ago</p>
        </div>
        <div className="col text-end">
          <button
            className="btn btn-link ps-0 text-primary collapsed shadow-0 Link"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#updatePassword"
            aria-expanded="false"
            aria-controls="updatePassword"
          >
            Update
          </button>
        </div>
      </div>
      <div className="collapse" id="updatePassword">
        <div className="row mt-4">
          <div className="mb-4 col-12">
            <label className="form-label" htmlFor="password-current">
              Current Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password-current"
              id="password-current"
            />
          </div>
          <div className="mb-4 col-md-6">
            <label className="form-label" htmlFor="password-new">
              New Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password-new"
              id="password-new"
            />
          </div>
          <div className="mb-4 col-md-6">
            <label className="form-label" htmlFor="password-confirm">
              Confirm Password
            </label>
            <input
              className="form-control"
              type="password"
              name="password-confirm"
              id="password-confirm"
            />
          </div>
        </div>
        <button className="btn btn-outline-primary">Update Password</button>
      </div>
    </div>
  );
};

export default Login;
