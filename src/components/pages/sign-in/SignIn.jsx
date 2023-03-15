import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {VscClose} from 'react-icons/vsc'
import {FaFacebookF,FaGoogle} from 'react-icons/fa'
import { useState } from "react";
import AuthService from "../../services/Auth.service";

const initialstate = {
  email : '',
  password : ''
}
const SignIn = () => {
  const [loginData, setLoginData] = useState(initialstate)
  const navigate = useNavigate()

  const onSubmitHandle = async (e) =>{
    e.preventDefault()
    alert('done')
    // console.info(loginData)
    const email = loginData.email
    const password = loginData.password
    try {
      await AuthService.login(email, password).then((res)=>{
        console.log(res)
            if (res.status === 400 || res.status === 401){
              window.alert(res.data.Error[0].message)
              // window.location.reload()
            }
            if (res.status === 200) {
              navigate("/")
              window.alert(`Welcome Back`)
              window.location.reload()
            } 
      })
    } catch (error) {
      const err = error.response
      console.log(err)
      if(err.status === 401 || err.status === 400){
         window.alert(err.data.Error[0].message)
      }
    }
  }

  const onChangeHandler = (e) => {
    const { name , value } = e.target
    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  return (
    <div className="container-fluid px-3">
      <div className="row min-vh-100">
        <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div className="w-100 py-5 px-md-5 px-xxl-6 position-relative">
            <div className="mb-5">
              <img
                className="img-fluid mb-3"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/logo-square.svg"
                alt="..."
                style={{ maxWidth: "4rem" }}
              />
              <h2 className="fw-700">Welcome back</h2>
            </div>
            <form onSubmit={onSubmitHandle} className="form-validate">
              <div className="mb-4">
                <label className="form-label" htmlFor="loginUsername">
                  {" "}
                  Email Address
                </label>
                <input
                  className="form-control"
                  name="email"
                  onChange={onChangeHandler}
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
                  name="password"
                  onChange={onChangeHandler}
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
                <button type="submit" className="btn btn-lg btn-primary shadow-0 ">Sign in</button>
              </div>
              <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
              <div className="d-grid gap-2">
                <button className="btn btn-sign py-2 btn-outline-primary btn-social shadow-0 ">
                  <FaFacebookF className="fa-2x fab btn-social-icon"> </FaFacebookF>
                  Connect{" "}
                  <span className="d-none d-sm-inline">with Facebook</span>
                </button>
                <button className="btn btn-sign py-2 btn-outline-secondary btn-social shadow-0">
                  <FaGoogle className="fa-2x fab btn-social-icon"> </FaGoogle>
                  Connect{" "}
                  <span className="d-none d-sm-inline">with Google</span>
                </button>
              </div>
              <hr className="my-4" />
              <p className="text-center">
                <small className="text-muted text-center">
                  Don't have an account yet? <Link className="Link" to="">Sign Up </Link>
                </small>
              </p>
            </form>
            <Link
              className="close-absolute me-md-5 me-xl-6 pt-5 Link"
              to="/"
            >
              <VscClose className="text-primary fs-1 hover" />
            </Link>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
          <div
            className="bg-cover h-100 me-n3"
            style={{
              backgroundImage:
                "url(https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1497436072909-60f360e1d4b1.jpg)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
