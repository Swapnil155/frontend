import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {FaStar,FaUsers, FaCalendar,FaArrowRight, FaRupeeSign} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const moment = require('moment');

const BookkingTourCard = (props) => {
  const [ packageinfo, setPackageinfo] = useState([]);
 
  useEffect(()=>{
    setPackageinfo(props.data)
  },[props])
  if (packageinfo.Tour_Dates !== undefined ) {
    console.log(packageinfo.Tour_Dates.startDate)
    var sDate = packageinfo.Tour_Dates.startDate
    var eDate = packageinfo.Tour_Dates.endtDate
    var startDate = new Date(sDate)
    var endDate = new Date(eDate)
  }
  


  return (
    <div className="card border-0 shadow">
    <div className="card-body p-4">
      <div className="text-block pb-3">
        <div className="d-flex align-items-center">
          <div>
            <h6>
              {" "}
              <Link className="text-reset Link" to="/">
               Raigad treking 
              </Link>
            </h6>
            <p className="text-muted text-sm mb-0">
              altitude 820 meters at the sea level
            </p>
            <div className="mt-n1">
              <FaStar className="text-primary" />
              <FaStar className="text-primary" />
              <FaStar className="text-primary" />
              <FaStar className="text-primary" />
              <FaStar className="text-gray-200" />
            </div>
          </div>
          <a className="flex-shrink-0" href="detail-rooms.html">
            <img
              className="ms-3 rounded"
              src="/images/bg-img-1.jpg"
              alt = ""
              width={100}
            />
          </a>
        </div>
      </div>
      <div className="text-block py-3">
        <ul className="list-unstyled mb-0">
          <li className="mb-3">
            <FaUsers className="text-muted me-2" />1
            guests
          </li>
          <li className="mb-0">
            <FaCalendar className="text-muted me-2" />
            Aug 17, 2019{" "}
            <FaArrowRight className="text-muted mx-3" />
            Aug 18, 2019
          </li>
        </ul>
      </div>
      <div className="text-block pt-3 pb-0">
        <table className="w-100">
          <tbody>
            <tr>
              <th className="fw-normal py-2"><FaRupeeSign />432.02 x 1 guest</th>
              <td className="text-end py-2"><FaRupeeSign />432.02</td>
            </tr>
            <tr>
              <th className="fw-normal pt-2 pb-3">Service fee</th>
              <td className="text-end pt-2 pb-3"><FaRupeeSign />67.48</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-top">
              <th className="pt-3">Total</th>
              <td className="fw-bold text-end pt-3"><FaRupeeSign />499.50</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div className="card-footer bg-primary-light py-4 border-0">
      <div className="d-flex align-items-center">
        <div>
          <h6 className="text-primary">
            Flexible – free cancellation
          </h6>
          <p className="text-sm text-primary opacity-8 mb-0">
            Cancel within 48 hours of booking to get a full refund.{" "}
            <a href="#" className="text-reset ms-3">
              More details
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BookkingTourCard