import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="login-from">
        <h1 className="display-3 fw-800 text-center mb-5">Login</h1>
          
        <form className="form-validate">
              <div className="mb-4">
                <label className="form-label" htmlFor="loginUsername">
                  {" "}
                  Email Address
                </label>
                <input
                  className="form-control"
                  name="loginUsername"
                  id="loginUsername"
                  type="email"
                  placeholder="name@address.com"
                  autoComplete="off"
                  required
                  data-msg="Please enter your email"
                />
              </div>
              <div className="mb-4">
                <div className="row">
                  <div className="col">
                    <label className="form-label" htmlFor="loginPassword">
                      {" "}
                      Password
                    </label>
                  </div>
                  <div className="col-auto">
                    <Link className="form-text small text-primary Link" to="">
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <input
                  className="form-control"
                  name="loginPassword"
                  id="loginPassword"
                  placeholder="Password"
                  type="password"
                  required
                  data-msg="Please enter your password"
                />
              </div>
              <div className="mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    id="loginRemember"
                    type="checkbox"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="loginRemember"
                  >
                    {" "}
                    <span className="text-sm">Remember me for 30 days</span>
                  </label>
                </div>
              </div>
              {/* Submit*/}
              <div className="d-grid">
                <button className="btn btn-lg btn-primary shadow-0 ">Login</button>
              </div>
              <hr className="my-4" />
              <p className="text-center">
                <small className="text-muted text-center">
                  Don't have an account yet? <Link className="Link" to="">Sign Up </Link>
                </small>
              </p>
            </form>
        
      </div>
    </section>
  );
};

export default Login;
