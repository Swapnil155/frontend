import React, { useEffect, useState } from "react";
import BreadCrumb from "../../layout/BreadCrumb";
import PersonalDetails from "./components/PersonalDetails";
import Address from "./components/Address";
import SharedInfo from "../../cards/SharedInfo";

const initialstate = {
  name: "",
  BOD: "",
  email: "",
  MobileNo: "",
  Street: "",
  apt: "",
  city: "",
  State: "",
  pin: "",
};

const PersonalInfo = () => {
  const [PersonalInfo, setPersonalInfo] = useState(initialstate);
  useEffect(() => {
    const personal = { ...PersonalInfo };
    personal["name"] = "swapnil Bendal";
    personal["BOD"] = "15/05/1999";
    personal["email"] = "swapnil@gmail.com";
    personal["MobileNo"] = "9221301979";
    personal["apt"] = "Akurli gaon";
    personal["Street"] = "Akurli Road";
    personal["city"] = "Kandivali Borivali";
    personal["State"] = "Maharastra";
    personal["pin"] = "400101";
    setPersonalInfo(personal);
  }, []);
  console.log(PersonalInfo);
  return (
    <section className="py-5 hero-header">
      <div className="container">
        {/* breadcrum */}
        <BreadCrumb />
        {/* end breadcrum */}
        {/* Header */}
        <h1 className="fw-700 pt-3">Personal info</h1>
        <p className="text-muted mb-5">
          Mange your Personal info and setting here.
        </p>
        {/* end Header */}
        <div className="row">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <PersonalDetails PersonalData={PersonalInfo} />
            <Address PersonalData={PersonalInfo} />
          </div>
          <div className="col-md-8 col-lg-4 ms-lg-auto">
            <SharedInfo /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
