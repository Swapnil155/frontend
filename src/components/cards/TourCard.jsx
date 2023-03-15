import React, { useState } from "react";
import { AiOutlineHeart, AiFillStar, AiFillHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiRupee } from "react-icons/bi";

import { Link, useLocation } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Bookmark from '../layout/Bookmark'

const TourCard = (props) => {
  // console.log(props.todos)
  let MainRouteTo = "";
  const pathname = useLocation()
    .pathname.split("/")
    .filter((X) => X);

  const MainPath = pathname.map((name, index) => {
    const routeTo = `/${pathname.slice(0, index + 1).join("/")}`;
    return routeTo;
  });
  MainRouteTo = MainPath[0];
  if (MainRouteTo === undefined) {
    MainRouteTo = "Tour";
  }

  // console.log(MainRouteTo)
  // const checkhandler = (id, data) =>{
  //   const datas = data.todos
  //   console.log(id,datas)
  //   const result = data.todos.map((d)=>
  //   d.id === id ? { ...d , isFavouirt: true} : d)

  //   console.log(result)
  //  }

  const onClickHandler = () => {
    alert('fuck shiit is working')
  };
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        // when window width is >= 640px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 768px
        620: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        799: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        999: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper pb-5 px-2 w-100"
    >
      {props.todos.map((elem, i) => {
        const {
          Tour_Image,
          Title,
          Tour_Price,
          Tour_Location,
          _id,
          Tour_author,
        } = elem;

        console.log(Tour_author.orgName)
        return (
          <SwiperSlide key={i}>
            <div className="card h-100 border-0 shadow ">
              <div className="card-img-top  overflow-hidden gradient-overlay">
                {}
                <Link to={`${MainRouteTo}/State/Tour-Details`}>
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
                  <Bookmark data={elem} />
                  {/* <div
                    className="card-fav-icon position-relative z-index-40"
                    onClick={onClickHandler}
                  >
                    <AiOutlineHeart className="fs-4 text-white" />
                  </div> */}
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
                    <GoLocation className="mb-1" /> {Tour_Location.Destination}
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
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TourCard;
