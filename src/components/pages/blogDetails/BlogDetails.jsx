import React from "react";
import Footer from "../../layout/Footer";
import Navbar from "../../layout/Navbar";
import Comments from "./components/Comments";
import Content from "./components/Content";
import Header from "./components/Header";
import LeaveComment from "./components/LeaveComment";
import WritterInfo from "./components/WritterInfo";

const BlogDetails = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <div className="row">
          <WritterInfo />
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-10 mx-auto">
            <Content />
            <Comments />
            <LeaveComment />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
