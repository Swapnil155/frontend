import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiRupee } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";
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

const TourList = () => {
  const [allPackages, setAllPackages] = useState([]);

  useEffect(() => {
    PackageService.getAllPackages().then(
      (res) => {
        setAllPackages(res.data.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <div className="text-block">
      <h4 className="mb-5 fw-700">Jack's Listings</h4>
      <div className="row">
        {allPackages.slice(0, 6).map((elem, i) => {
          const {
            Tour_Image,
            Title,
            Tour_Price,
            Tour_Location,
            _id,
            Tour_author,
          } = elem;
          return (
            <div className="col-sm-6 col-lg-4 mb-2" key={i}>
              <div className="card h-100 border-0 shadow ">
                <div className="card-img-top  overflow-hidden gradient-overlay">
                  <Link to="/details">
                    <img
                      src={Tour_Image.coverImage}
                      className="img-fluid"
                      alt="..."
                    />
                  </Link>
                  {/* Hosted by */}
                  <div className="card-img-overlay-bottom z-index-20">
                    <div className="d-flex text-white text-sm align-items-center">
                      <img
                        className="avatar avatar-border-white flex-shrink-0 me-2"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-0.jpg"
                        alt="Pamela"
                      />
                      <div>{Tour_author.orgName}</div>
                    </div>
                  </div>
                  {/* end Hosted */}

                  {/* card Bookmark */}
                  <div
                    className="card-img-overlay-top text-end"

                    // onClick={()=>{checkhandler(elem,props)}}
                  >
                    <Link
                      className="card-fav-icon position-relative z-index-40"
                      to="/"
                    >
                      <AiOutlineHeart className="fs-4 text-white" />
                    </Link>
                  </div>
                  {/* end bookmark */}
                </div>

                <div className="card-body">
                  <h5 className="card-title fs-6 fw-bold">{Title.tourName}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>

                  {/*  */}
                  <div className="d-flex card-subtitle mb-3">
                    <p className="flex-grow-1 mb-0 text-muted text-sm">
                      <GoLocation className="mb-1" />{" "}
                      {Tour_Location.Destination}
                    </p>
                    <p className="flex-shrink-1 mb-0 card-stars text-xs text-end">
                      <AiFillStar className="text-warning" />
                      <AiFillStar className="text-warning" />
                      <AiFillStar className="text-warning" />
                      <AiFillStar className="text-warning" />
                      <AiFillStar className="text-warning" />
                    </p>
                  </div>
                  <p className="card-text text-muted">
                    <span className="h4 fw-bold text-primary">
                      <BiRupee className="fw-700 fs-3 mb-1" />
                      {Tour_Price.price}
                    </span>
                    per person
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TourList;
