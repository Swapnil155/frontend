import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SlideHeader from "./SlideHeader";

const Data = [
    {
      imgState: "./images/State-1.jpg",
      stateName: "Maharastra",
      stateCode: "1001",
    },
    {
      imgState: "./images/State-2.jpg",
      stateName: "Kerla",
      stateCode: "1001",
    },
    {
      imgState: "./images/State-3.jpg",
      stateName: "Delhi",
      stateCode: "1001",
    },
    {
      imgState: "./images/State-4.jpg",
      stateName: "Jamu-Kashmir",
      stateCode: "1001",
    },
    {
      imgState: "./images/State-5.jpg",
      stateName: "Nepal",
      stateCode: "1001",
    },
    {
      imgState: "./images/State-6.jpg",
      stateName: "Haidrabad",
      stateCode: "1001",
    },
  ];

export const Header = () => {
  return (
    <section className="">
        <SlideHeader data={Data} />
    </section>
  );
};
