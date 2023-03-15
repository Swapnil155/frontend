import React from "react";
import TestimonalCard from "../../../cards/Testimonal";

const data = [
    {
        id :1
    },
    {
        id :2
    },{
        id :3
    },{
        id :4
    },{
        id :5
    },{
        id :6
    },{
        id :7
    },
];

const Testimonial = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="text-center pb-lg-4">
          <p className="subtitle text-primary">Testimonial</p>
          <h2 className="mb-5 fw-bold">Our dear customer said about us</h2>
        </div>
      </div>
      <div className="container">
        
        <TestimonalCard todos={data} />
      </div>
    </section>
  );
};

export default Testimonial;
