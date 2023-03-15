import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tour from "../../../cards/TourCard";
import PackageService from "../../../services/Package.service";

const data = [
    {
      id: 1,
      imag: "/images/State-1.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 2,
      imag: "/images/State-2.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 3,
      imag: "/images/State-3.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 4,
      imag: "/images/State-4.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 5,
      imag: "/images/State-5.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 6,
      imag: "/images/State-6.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 7,
      imag: "/images/State-1.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 8,
      imag: "/images/State-2.jpg",
      location: "Mumbai",
      price: 120,
    },
    {
      id: 9,
      imag: "/images/State-3.jpg",
      location: "Mumbai",
      price: 120,
    },
  ];
const SimilarTo = () => {
  const [allPackages, setAllPackages] = useState([])

  useEffect(()=>{
    PackageService.getAllPackages().then((res)=>{
      setAllPackages(res.data.data)
    },(error)=>{
      console.log(error)
    })
  },[])
  return (
    <div className="container">
      <div>
        <h5 className="mb-0 fw-bold">Similar tour's</h5>
        <p className="subtitle text-sm text-primary mb-4">You may also like</p>
      </div>
      <Tour todos={allPackages} />
    </div>
  );
};

export default SimilarTo;
