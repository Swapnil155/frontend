import React, { useState } from "react";
import {  GiCampingTent, GiFirstAidKit, GiHiking } from "react-icons/gi";
import { FaBusAlt,FaUsers } from "react-icons/fa";
import { MdLocalDining } from "react-icons/md";
import { useEffect } from "react";

const Icons = (data) => {
  const [iconInfo, setIconInfo] = useState([])
  useEffect(()=>{
    setIconInfo(data.data)
  },[data.data])
  console.log(iconInfo)
  const {Tour_Booking} = iconInfo
  console.log(Tour_Booking)
  return (
      <div className="text-block">
        <div className="row">

          <div className="col-sm-4">
            <div className="d-flex">
              <div className="text-primary">
                <MdLocalDining className="details-icons" />
              </div>
              <div className="flex-shrink-1 icon-text">
                <p className="fw-bold"> Meals</p>
                <p className="lh-1"> breckfast, diner, lunch</p>
              </div>
            </div>
          </div>  

          <div className="col-sm-4 py-1">
            <div className="d-flex">
              <div className="text-primary">
                <FaBusAlt className="details-icons" />
              </div>
              <div className="flex-shrink-1 icon-text">
                <p className="fw-bold"> Pick up</p>
                <p className="lh-1"> At Mumbai Railway Station</p>
              </div>
            </div>
          </div>
            
          <div className="col-sm-4 py-1">
            <div className="d-flex">
              <div className="text-primary">
                <GiCampingTent className="details-icons" />
              </div>
              <div className="flex-shrink-1 icon-text">
                <p className="fw-bold"> Base camp</p>
                <p className="lh-1"> at Mumbai</p>
              </div>
            </div>
          </div>
            
          <div className="col-sm-4 py-1">
            <div className="d-flex">
              <div className="text-primary">
                <GiFirstAidKit className="details-icons" />
              </div>
              <div className="flex-shrink-1 icon-text">
                <p className="fw-bold"> First aid</p>
                <p className="lh-1"> All first aid equipment</p>
              </div>
            </div>
          </div>
            
          <div className="col-sm-4 py-1">
            <div className="d-flex">
              <div className="text-primary">
                <GiHiking className="details-icons" />
              </div>
              <div className="flex-shrink-1 icon-text">
                <p className="fw-bold"> Moderate</p>
                <p className="lh-1"> Easy moderate</p>
              </div>
            </div>
          </div>
          
          <div className="col-sm-4 py-1">
            <div className="d-flex">
              <div className="text-primary">
                <FaUsers className="details-icons" />
              </div>
              <div className="flex-shrink-1 icon-text">
                <p className="fw-bold"> Vacancy</p>
                <p className="lh-1 avavilable-lable" >available {20}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Icons;
