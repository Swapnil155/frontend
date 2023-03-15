import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const [getEmail, setGetEmail] = useState('')

  const submitEmail = (e) =>{
    e.preventDefault()
    console.log(getEmail)
  }
  
  return (
    <section>
    <div className="py-6 bg-gray-200 text-muted d-print-none">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="fw-bold text-uppercase text-dark mb-3">
              Directory
            </div>
            <p>Directory are provide the nice feature also we find tour for your comfort and also your budget</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link
                  className="text-muted Link text-primary-hover"
                  to="#"
                  target="_blank"
                  title="twitter"
                >
                  <BsTwitter />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  className="text-muted Link text-primary-hover"
                  to="#"
                  target="_blank"
                  title="facebook"
                >
                  <BsFacebook />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  className="text-muted Link text-primary-hover"
                  to="#"
                  target="_blank"
                  title="instagram"
                >
                  <BsInstagram />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
            <h6 className="text-uppercase text-dark mb-3">Trending</h6>
            <ul className="list-unstyled">
              <li>
                <Link className="text-muted Link" to="index">
                  Maharastra
                </Link>
              </li>
              <li>
                <Link className="text-muted Link" to="category-rooms">
                  Kerla
                </Link>
              </li>
              <li>
                <Link className="text-muted Link" to="category-2-rooms">
                  Delhi
                </Link>
              </li>
              <li>
                <Link className="text-muted Link" to="category-3-rooms">
                  Jamu-Kashmir
                </Link>
              </li>
              <li>
                <Link className="text-muted Link" to="detail-rooms">
                  Nepal
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
            <h6 className="text-uppercase text-dark mb-3">Pages</h6>
            <ul className="list-unstyled">
              <li>
                <Link className="text-muted Link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-muted Link" to="/Constct">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-muted Link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-muted Link" to="/SignIn">
                  Sign In
                </Link>
              </li>
              <li>
                <Link className="text-muted Link" to="/SignUp">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="text-uppercase text-dark mb-3">
              Daily Offers &amp; Discounts
            </h6>
            <p className="mb-3">
              {" "}
              Getting awesome Daily offer's and Discount in our wesite Enter your mail address ang claim the offer's
            </p>
            <form onSubmit={submitEmail} id="newsletter-form">
              <div className="input-group mb-3">
                <input
                  className="form-control bg-transparent border-dark border-end-0"
                  type="email"
                  onChange={(e)=>setGetEmail(e.target.value)}
                  value={getEmail}
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  required="required"
                />
                <button
                  className="btn btn-outline-dark border-start-0"
                  type="submit"
                >
                  <FiSend className="text-lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Bottom of Footer */}
    <div className="py-4 fw-light bg-gray-800 text-gray-300">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <p className="text-sm mb-md-0">
            © 2021, Directory. All rights reserved.
          </p>
        </div>
        <div className="col-md-6">
          <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-end">
            <li className="list-inline-item">
              <img
                className="w-2rem"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/visa.svg"
                alt="..."
              />
            </li>
            <li className="list-inline-item">
              <img
                className="w-2rem"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/mastercard.svg"
                alt="..."
              />
            </li>
            <li className="list-inline-item">
              <img
                className="w-2rem"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/paypal.svg"
                alt="..."
              />
            </li>
            <li className="list-inline-item">
              <img
                className="w-2rem"
                src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/western-union.svg"
                alt="..."
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* end Bottom of Footer */}
  </section>
  );
};

export default Footer;
