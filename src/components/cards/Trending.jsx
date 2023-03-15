import React from 'react'
import { Link } from "react-router-dom";

const Trending = (props) => {
  return (
    
    <div className="row">
    {props.todos.map((elem, index) => {
      const { imgState, stateName, stateCode } = elem;
      if (0 === index) {
        return (
          <div className="d-flex align-items-lg-stretch mb-4 col-lg-8" key={index}>
            <div
              className="card shadow-lg border-0 w-100 border-0 hover-animate"
              style={{
                background: `center center url(${imgState}) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <Link className="tile-link text-decoration-none" to="/Tour/State">
              <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
                <h3 className="text-shadow fw-bold letter-spacing-1 mb-0">
                  {stateName}
                </h3>
              </div>
              </Link>
            </div>
          </div>
        );
      }
    })}

    {props.todos.map((elem, index) => {
      const { imgState, stateName, stateCode } = elem;
      if (0 !== index) {
        return (
          <div
            className="d-flex align-items-lg-stretch mb-4 col-lg-4"
            key={index}
          >
            <div
              className="card shadow-lg border-0 w-100 border-0 hover-animate"
              style={{
                background: `center center url(${imgState}) no-repeat`,
                backgroundSize: "cover",
              }}
            >
            <Link className="tile-link text-decoration-none" to="/Tour/State">
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow fw-bold letter-spacing-1 mb-0">
                {stateName}
              </h3>
            </div>
            </Link>
            </div>
          </div>
        );
      }
    })}
  </div>
  )
}

export default Trending
