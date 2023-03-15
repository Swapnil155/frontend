import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import AuthService from "../../services/Auth.service";

const inintialstate = {
  email : '',
  password : '',
  cPassword : '',
}
const SignUp = () => {
  const [userInfo, setUserInfo] = useState(inintialstate)
  const navigate = useNavigate()

  const onSubmitHandler = async (e) =>{
    e.preventDefault()

    const email =  userInfo.email
    const password = userInfo.password
    const cPassword = userInfo.cPassword

    if (password === cPassword) {
      window.alert('Password match with Re-password')
      try {
        await AuthService.singUp(email,password).then((res)=>{
          if (res.status === 400 || res.status === 401){
            window.alert(res.data.Error[0].message)
            // window.location.reload()
          }
          if (res.status === 200) {
            navigate("/");
            window.alert(`Registartion Successfully completed`)
            window.location.reload()
          } 
        })
      } catch (error) {
        console.error(error)
      }
    } else {
      window.alert('Password miss match with Re-password')
    }

  }
  const onChangeHandler = (e) =>{
    const {name, value} = e.target
    setUserInfo({
      ...userInfo,
      [name] : value
    })
  }
  console.log(userInfo)
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
              <h2 className="fw-700">Sign Up</h2>
              <p className="text-muted">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                sunt, ipsa ab voluptatem autem asperiores voluptates pariatur,
                quis voluptas ut cumque possimus neque iure dolorem laborum
                fuga, minima vel at!
              </p>
            </div>
            <form className="form-validate" onSubmit={onSubmitHandler}>
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
                <label className="form-label" htmlFor="loginPassword">
                  {" "}
                  Password
                </label>
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
                <label className="form-label" htmlFor="loginCPassword">
                  {" "}
                  Confirm Password
                </label>
                <input
                  className="form-control"
                  name="cPassword"
                  onChange={onChangeHandler}
                  id="loginCPassword"
                  placeholder="Password"
                  type="password"
                  required
                  data-msg="Please enter your password"
                />
              </div>
              {/* Submit*/}
              <div className="d-grid">
                <button type="submit" className="btn btn-lg btn-primary shadow-0 ">
                  Sign Up
                </button>
              </div>
              <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
              <div className="d-grid gap-2">
                <button className="btn btn-sign py-2 btn-outline-primary btn-social shadow-0 ">
                  <FaFacebookF className="fa-2x fab btn-social-icon">
                    {" "}
                  </FaFacebookF>
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
              <p className="text-sm text-muted">
                By signing up you agree to Directory's{" "}
                <Link className="Link" to="#">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link className="Link" to="#">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
            <Link className="close-absolute me-md-5 me-xl-6 pt-5 Link" to="/">
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

export default SignUp;
