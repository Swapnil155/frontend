import React from "react";
import {FaMapMarkedAlt} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {GoMail} from 'react-icons/go'

const Addres = () => {
  return (
    <div>
      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <div className="icon-rounded mb-4 bg-primary-light">
                <FaMapMarkedAlt className="svg-icon w-2rem h-2rem text-primary">
                </FaMapMarkedAlt>
              </div>
              <h5 className="fw-700">Address</h5>
              <p className="text-muted">
                13/25 New Avenue
                <br />
                New Heaven, 45Y 73J
                <br />
                England, <strong>Great Britain</strong>
              </p>
            </div>
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <div className="icon-rounded mb-4 bg-primary-light">
                <FiPhoneCall className="svg-icon w-2rem h-2rem text-primary">
                </FiPhoneCall>
              </div>
              <h5 className="fw-700">Call center</h5>
              <p className="text-muted">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p className="text-muted">
                <strong>+33 555 444 333</strong>
              </p>
            </div>
            <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
              <div className="icon-rounded mb-4 bg-primary-light">
                <GoMail className="svg-icon w-2rem h-2rem text-primary">
                </GoMail>
              </div>
              <h5 className="fw-700">Electronic support</h5>
              <p className="text-muted">
                Please feel free to write an email to us or to use our
                electronic ticketing system.
              </p>
              <ul className="list-unstyled text-muted">
                <li>info@sell.com</li>
                <li>support@sell.com</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Addres;
