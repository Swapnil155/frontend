import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Tour from "../../../cards/TourCard";
import PackageService from "../../../services/Package.service";

const data = [
  {
    id: 1,
    imag: "./images/State-1.jpg",
    location: "Mumbai",
    price: 120,
  },
  {
    id: 2,
    imag: "./images/State-2.jpg",
    location: "Mumbai",
    price: 120,
  },
  {
    id: 3,
    imag: "./images/State-3.jpg",
    location: "Mumbai",
    price: 120,
  },
  {
    id: 4,
    imag: "./images/State-4.jpg",
    location: "Mumbai",
    price: 120,
  },
  {
    id: 5,
    imag: "./images/State-5.jpg",
    location: "Mumbai",
    price: 120,
  },
  {
    id: 6,
    imag: "./images/State-6.jpg",
    location: "Mumbai",
    price: 120,
  },
  {
    id: 7,
    imag: "./images/State-1.jpg",
    location: "Mumbai",
    price: 120,
  },
  {
    id: 8,
    imag: "./images/State-2.jpg",
    location: "Mumbai",
    price: 120,
  },
  {
    id: 9,
    imag: "./images/State-3.jpg",
    location: "Mumbai",
    price: 120,
  },
];

const PopularTour = () => {
  const [allPackages, setAllPackages] = useState([])

  useEffect(()=>{
    PackageService.getAllPackages().then((res)=>{
      setAllPackages(res.data.data)
    },(error)=>{
      console.log(error)
    })
  },[])
  return (
    <section className="py-6 bg-gray-100">
      <div className="container">
        <div className="text-center pb-lg-4">
          <p className="subtitle text-secondary">Try something new today</p>
          <h2 className="mb-5 fw-bold">Popular places around you</h2>
        </div>
      </div>

      {/* Tour card */}
      <div className="container">
        <Tour todos={allPackages} />
        <div className="text-center mt-5">
          <Link className="btn btn-outline-primary" to="/Tour/State">
            See all places
          </Link>
        </div>
      </div>

      {/* end Card */}
    </section>
  );
};

export default PopularTour;
