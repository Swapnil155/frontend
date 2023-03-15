import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import Content from "./components/Content";
import OrgCard from "./components/OrgCard";
import TourList from "./components/TourList";

const Organizer = () => {
  let {id} = useParams()
  console.log(id)
  return (
    <>
    <Navbar/>
    <section className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 me-lg-auto">
            <OrgCard />
          </div>
          <div className="col-lg-9 ps-lg-5">
            <h1 className="fw-800 mb-0">Hello, I'm Jack!</h1>
            <Content />
            <TourList />
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Organizer;
