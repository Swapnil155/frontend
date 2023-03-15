import React, { useEffect, useState } from "react";
import {FaAddressCard, FaBirthdayCake, FaEnvelopeOpenText, FaPhoneAlt} from 'react-icons/fa'

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
const PersonalDetails = (props) => {
    const [personalInfo,setPersonalInfo] = useState(initialstate)
    useEffect(()=>{
        setPersonalInfo(props.PersonalData)
    },[props.PersonalData])
    // console.log(personalInfo)

    const ChangeHandler = (e) => {
        setPersonalInfo({...personalInfo,
        [e.target.name]:e.target.value,
        [e.target.name]:e.target.value,
        [e.target.name]:e.target.value,
        [e.target.name]:e.target.value})
        // console.log(e.target.name)
    }
    const SubmitPersonalInfo = (e) =>{
        e.preventDefault()
        if(!personalInfo){
            alert('please Fill the input')
        }else{
            console.log(personalInfo)
        }
    }
  return (
    <div className="text-block">
      <div className="row mb-3">
        <div className="col-sm-9">
          <h5>Personal Details</h5>
        </div>
        <div className="col-sm-3 text-end">
          <button
            className="btn btn-link ps-0 text-primary collapsed Link shadow-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#personalDetails"
            aria-expanded="false"
            aria-controls="personalDetails"
          >
            Update
          </button>
        </div>
      </div>
      <p className="text-sm text-muted">
        <FaAddressCard className="me-2" />
        {props.PersonalData.name}
        <br />
        <FaBirthdayCake className="me-2" />
        
        {props.PersonalData.BOD}
        <br />
        <FaEnvelopeOpenText className="me-2" />
        
        {props.PersonalData.email} <span className="mx-2"> | </span>{" "}
        <FaPhoneAlt className="me-2" />
       
        {props.PersonalData.MobileNo}
      </p>
      <div className="collapse" id="personalDetails" style={{}}>
        <form onSubmit={SubmitPersonalInfo}>
          <div className="row pt-4">
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                onChange={ChangeHandler}
                defaultValue={personalInfo.name}
              />
            </div>
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="date">
                Date of birth
              </label>
              <input
                className="form-control"
                type="text"
                name="BOD"
                id="date"
                onChange={ChangeHandler}
                defaultValue={personalInfo.BOD}
              />
            </div>
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                onChange={ChangeHandler}
                defaultValue={personalInfo.email}
              />
            </div>
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="phone">
                Phone number
              </label>
              <input
                className="form-control"
                type="text"
                name="MobileNo"
                id="phone"
                onChange={ChangeHandler}
                defaultValue={personalInfo.MobileNo}
              />
            </div>
          </div>
          <button className="btn btn-outline-primary mb-4" type="submit">
            Save your personal details
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
