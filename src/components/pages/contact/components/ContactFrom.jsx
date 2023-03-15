import React from "react";
import { Link } from "react-router-dom";
import {FaFacebookSquare, FaInstagram, FaTwitter} from 'react-icons/fa'

const ContactFrom = () => {
  return (
    <div>
      <section className="py-6 bg-gray-100">
        <div className="container">
          <h2 className="h4 mb-5">Contact form</h2>
          <div className="row">
            <div className="col-md-7 mb-5 mb-md-0">
              <form
                className="form"
                id="contact-form"
              >
                <div className="controls">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="name">
                          Your firstname *
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your firstname"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-4">
                        <label className="form-label" htmlFor="surname">
                          Your lastname *
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="surname"
                          id="surname"
                          placeholder="Enter your  lastname"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="email">
                      Your email *
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your  email"
                      required="required"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label" htmlFor="message">
                      Your message for us *
                    </label>
                    <textarea
                      className="form-control"
                      rows={4}
                      name="message"
                      id="message"
                      placeholder="Enter your message"
                      required="required"
                      defaultValue={""}
                    />
                  </div>
                  <button className="btn btn-outline-primary" type="submit">
                    Send message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <div className="ps-lg-4 text-sm">
                <p className="text-muted">
                  Effects present letters inquiry no an removed or friends.
                  Desire behind latter me though in. Supposing shameless am he
                  engrossed up additions. My possible peculiar together to.
                  Desire so better am cannot he up before points. Remember
                  mistaken opinions it pleasure of debating. Court front maids
                  forty if aware their at. Chicken use are pressed removed.{" "}
                </p>
                <p className="text-muted">
                  Able an hope of body. Any nay shyness article matters own
                  removal nothing his forming. Gay own additions education
                  satisfied the perpetual. If he cause manor happy. Without
                  farther she exposed saw man led. Along on happy could cease
                  green oh.{" "}
                </p>
                <div className="social">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to="/" target="_blank">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/" target="_blank">
                        <FaFacebookSquare />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="/" target="_blank">
                        <FaInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactFrom;
