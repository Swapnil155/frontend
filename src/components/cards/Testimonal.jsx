import React from "react";
import {ImQuotesLeft} from 'react-icons/im'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Testimonal = (props) => {
  return (
    <Swiper
    // direction={"vertical"}
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
          slidesPerView: 1,
          spaceBetween: 20,
        },
        799: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        999: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
      freeMode={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper pb-5 px-2 w-100 h-100"
    >
      {props.todos.map((elem, i) => {
        return (
          <SwiperSlide key={i} className="pt-5">
            <div className="testimonial card rounded-3 shadow border-0">
              <div className="testimonial-avatar">
                <img
                  className="avatar avatar-lg p-1"
                  src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-3.jpg"
                  alt="..."
                />
              </div>
              <div className="text">
                <div className="testimonial-quote">
                  <ImQuotesLeft />
                </div>
                <p className="testimonial-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever
                </p>
                <strong>Jessica Watson</strong>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonal;
