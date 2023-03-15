import React from "react";
import BreadCrumb from "../../layout/BreadCrumb";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import BlogCards from "./components/BlogCards";
import Header from "./components/Header";

const AllBlog = () => {
  return (
    <div>
      <Navbar />
        <Header />
        <div className="container">
        <BreadCrumb/>
        </div>
        <BlogCards />
        <Footer />
    </div>
  );
};

export default AllBlog;
