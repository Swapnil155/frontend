import React from "react";

import { Route, Routes, useParams } from "react-router-dom";
import BookkingTourCard from "../components/cards/BookkingTourCard";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import StepOne from "../components/pages/tourBooking/components/StepOne";

import StepTow from "../components/pages/tourBooking/components/StepTow";
import StepFour from "../components/pages/tourBooking/components/StepFour";
import StepThree from "../components/pages/tourBooking/components/StepThree";
import { useState } from "react";
import { useEffect } from "react";
import PackageService from "../components/services/Package.service";

const Tourbooking = () => {
  let {_id} = useParams()
  console.log(_id)
  const [packageDetails, setPackageDetails] = useState([])

  useEffect(()=>{
    PackageService.getPackageById(_id).then((res)=>{
      setPackageDetails(res.data)
      console.log(res.data)
    })
  },[_id])
  return (
    <>
      <Navbar />
      <section className="py-6">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
             <Routes>
                 <Route path="/Step-1" element={<StepOne />} />
                 <Route path="/Step-2" element={<StepTow />} />
                 <Route path="/Step-3" element={<StepThree />} />
                 <Route path="/Step-4" element={<StepFour />} />
             </Routes>
            </div>
            <div className="col-lg-5 ps-xl-5">
            <BookkingTourCard data={packageDetails} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Tourbooking;
