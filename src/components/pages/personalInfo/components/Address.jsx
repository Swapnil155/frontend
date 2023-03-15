import React, { useEffect, useState } from "react";
import {FaAddressBook} from 'react-icons/fa'
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
const Address = (props) => {
  const [personalInfo, setPersonalInfo] = useState(initialstate)
  useEffect(()=>{
    
    setPersonalInfo(props.PersonalData)

  },[props.PersonalData])
  
  // console.log(personalInfo)

  const ChangeHandlerAdd = (e)=>{
    setPersonalInfo({...personalInfo,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]:e.target.value,
      [e.target.name]:e.target.value})
      // console.log(e.target.name +' '+ e.target.value)

     
  }

  const onSubmitFormAdd = (e) =>{
    e.preventDefault()
    if(!personalInfo){
      alert('please fill the data')
    }else{
      console.log(personalInfo.name)
    }
  }
  return (
    <div className="text-block">
      <div className="row mb-3">
        <div className="col-sm-9">
          <h5>Address</h5>
        </div>
        <div className="col-sm-3 text-end">
          <button
            className="btn btn-link ps-0 text-primary collapsed Link shadow-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#address"
            aria-expanded="false"
            aria-controls="address"
          >
            Change
          </button>
        </div>
      </div>
      <div className="d-flex text-sm text-muted">
        {" "}
        <FaAddressBook className="flex-shrink-0 me-2" />
        <div className="mt-n1">
          {personalInfo.Street}, {personalInfo.apt}
          <br />
          {personalInfo.city}, {personalInfo.State}, {personalInfo.pin}
        </div>
      </div>
      <div className="collapse" id="address">
        <form onSubmit={onSubmitFormAdd}>
          <div className="row pt-4">
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="Street">
                Street
              </label>
              <input
                className="form-control"
                type="text"
                name="Street"
                id="Street"
                onChange={ChangeHandlerAdd}
                defaultValue={personalInfo.Street}
              />
            </div>
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="apt">
                apt. (optional)
              </label>
              <input
                className="form-control"
                type="text"
                name="apt"
                id="apt"
                onChange={ChangeHandlerAdd}
                defaultValue={personalInfo.apt}
              />
            </div>
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="city">
                City
              </label>
              <input
                className="form-control"
                type="text"
                name="city"
                id="city"
                onChange={ChangeHandlerAdd}
                defaultValue={personalInfo.city}
              />
            </div>
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="state">
                State
              </label>
              <input
                className="form-control"
                type="text"
                name="State"
                id="state"
                onChange={ChangeHandlerAdd}
                defaultValue={personalInfo.State}
              />
            </div>
            <div className="mb-4 col-md-6">
              <label className="form-label" htmlFor="pin">
                pin
              </label>
              <input
                className="form-control"
                type="text"
                name="pin"
                id="pin"
                onChange={ChangeHandlerAdd}
                defaultValue={personalInfo.pin}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-primary">Save address</button>
        </form>
      </div>
    </div>
  );
};

export default Address;
