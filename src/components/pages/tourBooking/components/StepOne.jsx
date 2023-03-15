import React from 'react'

import {BsHeart} from 'react-icons/bs'
import {FaChild,FaGlassCheers,FaSmokingBan,FaCat,FaChevronRight} from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
const StepOne = (props) => {
  var {_id} = useParams()
console.log(_id)
  return (
    <>
      <p className="subtitle text-primary">Book your holiday home</p>
              <h1 className="h2 mb-5">
                {" "}
                Review tour rules{" "}
                <span className="text-muted float-end">Step 1</span>{" "}
              </h1>
              <div className="text-block">
                <div className="alert alert-warning text-sm mb-3">
                  <div className="d-flex align-items-center">
                    <BsHeart className="me-2 fa-2x" />
                    <div>
                      <strong>This home is on people’s minds.</strong> It’s been
                      viewed 43 times in the past week.
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <h5 className="mb-4">One Day trek </h5>
                <div className="row mb-3">
                  <div className="col-md-6 d-flex align-items-center mb-3 mb-md-0">
                    <div className="date-tile me-3">
                      <div className="text-uppercase">
                        {" "}
                        <span className="text-sm">Aug</span>
                        <br />
                        <strong className="text-lg">17</strong>
                      </div>
                    </div>
                    <p className="text-sm mb-0">
                      Wednesday 
                      
                    </p>
                  </div>
                  <div className="col-md-6 d-flex align-items-center">
                    <div className="date-tile me-3">
                      <div className="text-uppercase">
                        {" "}
                        <span className="text-sm">Aug</span>
                        <br />
                        <strong className="text-lg">18</strong>
                      </div>
                    </div>
                    <p className="text-sm mb-0">
                      Thursday 
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <h5 className="mb-4">Things to keep in mind</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                        <FaChild className="text-secondary fa-fw text-center" />
                      </div>
                      <div>
                        <span className="text-sm">
                          Not suitable for children and infants - The entrance
                          staircase doesn't have handrails
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                        <FaGlassCheers className="text-secondary fa-fw text-center" />
                      </div>
                      <div>
                        <span className="text-sm">No parties or events</span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                        <FaSmokingBan className="text-secondary fa-fw text-center" />
                      </div>
                      <div>
                        <span className="text-sm">No smoking</span>
                      </div>
                    </div>
                  </li>
                  <li className="mb-2">
                    <div className="d-flex align-items-center mb-3">
                      <div className="icon-rounded icon-rounded-sm bg-secondary-light flex-shrink-0 me-4">
                        <FaCat className="text-secondary fa-fw text-center" />
                      </div>
                      <div>
                        <span className="text-sm">No pets</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="row form-block flex-column flex-sm-row mt-5">
                <div className="col text-center text-sm-start"></div>
                <div className="col text-center text-sm-end">
                  <Link
                    className="btn btn-primary px-3"
                    to={`/Tour-Booking/${_id}/Step-2`}
                  >
                    {" "}
                    Next step
                    <FaChevronRight className=" ms-2" />
                  </Link>
                </div>
              </div>   
    </>
  )
}

export default StepOne