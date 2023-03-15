import React from "react";
import { Link } from "react-router-dom";
import TrendingCard from "../../../cards/Trending";
import {HiChevronDoubleRight} from 'react-icons/hi'

const Data = [
  {
    imgState: "./images/State-1.jpg",
    stateName: "Maharastra",
    stateCode: "1001",
  },
  {
    imgState: "./images/State-2.jpg",
    stateName: "Kerla",
    stateCode: "1001",
  },
  {
    imgState: "./images/State-3.jpg",
    stateName: "Delhi",
    stateCode: "1001",
  },
  {
    imgState: "./images/State-4.jpg",
    stateName: "Jamu-Kashmir",
    stateCode: "1001",
  },
  {
    imgState: "./images/State-5.jpg",
    stateName: "Nepal",
    stateCode: "1001",
  },
  {
    imgState: "./images/State-6.jpg",
    stateName: "Haidrabad",
    stateCode: "1001",
  },
];

const Trending = () => {
  return (
    <section className="py-6">
      <div className="container">
        {/* Title */}
        <div className="row mb-5">
          <div className="col-md-8">
            <p className="subtitle text-primary">Most popular Tours</p>
            <h2 className="fw-bold">What's trending</h2>
          </div>
          <div className="col-md-4 d-md-flex align-item-center justify-content-end">
            <Link className="text-muted text-sm Link" to="/Tour">
              See all cities <HiChevronDoubleRight />
            </Link>
          </div>
        </div>
        
        {/* card */}
        <TrendingCard todos={Data.slice(0,5)} />
        {/* End Cards */}

      </div>
    </section>
  );
};

export default Trending;
