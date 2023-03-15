import React from "react";

import { GiReceiveMoney, GiBackpack } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination,Autoplay } from "swiper";

const SlideHeader = ({ data }) => {
  console.log(data);
  return (
    <Swiper
    loop={true}
    loopFillGroupWithBlank={true}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination,Autoplay]}
      className="mySwiper"
    >
      {data.slice(0, 5).map((elem, i) => {
        const { imgState, stateName } = elem;
        return (
          <SwiperSlide key={i}>
            <div
              className="d-flex align-items-center dark-overlay bg-cover pt-5"
              style={{
                background: `center center url(${imgState}) no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="container h-100 pt-5 mb-5">
                <div
                  className="d-flex h-100 text-white overlay-content align-items-center pt-5"
                  data-swiper-parallax={-500}
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transitionDuration: "0ms",
                  }}
                >
                  <div className="w-100">
                    <div className="row">
                      <div className="col-lg-8">
                        <p className="subtitle text-white letter-spacing-3 mb-3 font-weight-light text-shadow">
                          Blue &amp; White
                        </p>
                        <h2
                          className="display-3 fw-bold mb-3 text-shadow"
                          style={{ lineHeight: 1 }}
                        >
                          {stateName}
                        </h2>
                        <p className="mb-5 text-shadow">
                          His room, a proper human room although a little too
                          small, lay peacefully between its four familiar walls.
                          A collection of textile samples lay spread out on the
                          table.
                        </p>
                        <Link
                          className="btn btn-outline-light d-none d-sm-inline-block text-shadow"
                          to="/Tour/State"
                        >
                          Start exploring {stateName}{" "}
                          <FaAngleRight className="fa fa-angle-right ms-2" />
                        </Link>
                      </div>
                      <div className="col-lg-4 ps-lg-5 my-3 my-md-5 my-lg-0 ">
                        <div className="d-flex text-reset text-decoration-none hover-animate mb-2 mb-md-5">
                          <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                            <GiReceiveMoney className=" text-dark w-2rem h-2rem" />
                          </div>
                          <div>
                            <h5 className="fw-800 text-shadow">Cost-Effective</h5>
                            <div className="badge badge-light text-shadow">from $345</div>
                          </div>
                        </div>
                        <div className="d-flex text-reset text-decoration-none hover-animate mb-2 mb-md-5">
                          <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                            <GiBackpack className="text-dark w-2rem h-2rem"></GiBackpack>
                          </div>
                          <div>
                            <h5 className="fw-800 text-shadow">Tour's</h5>
                            <div className="badge badge-light text-shadow">100+ Trip's</div>
                          </div>
                        </div>
                        <div className="d-flex text-reset text-decoration-none hover-animate">
                          <div className="icon-rounded bg-white opacity-7 flex-shrink-0 me-4">
                            <GrGallery className="text-dark w-2rem h-2rem" />
                          </div>
                          <div>
                            <h5 className="fw-800 text-shadow">Guide &amp; gallery</h5>
                            <p className="text-shadow">See more</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideHeader;
