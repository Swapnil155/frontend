import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsClock } from "react-icons/bs";

const Blog = ({data, pagination}) => {
  return (
    <div className="row">
      {data.slice(pagination.start,pagination.end).map((elem, i) => {
        const { blogImg, type } = elem;
        return (
          <div className="col-lg-4 col-sm-6 mb-4 hover-animate" key={i}>
            <div className="card shadow border-0 h-100">
              <Link to="/Blog/Blog-Details">
                <img
                  className="img-fluid card-img-top"
                  src={blogImg}
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <Link
                  className="text-uppercase text-muted text-sm letter-spacing-2 Link"
                  to="/Blog"
                >
                  {type}
                </Link>
                <h5 className="my-2 fw-bold">
                  <Link className="text-decoration-none text-dark Link" to="/Blog/Blog-Details">
                    Autumn fashion tips and tricks{" "}
                  </Link>
                </h5>
                <p className="text-gray-500 text-sm my-3">
                  <BsClock className="mb-1 fs-6 me-2" />
                  January 16, 2016
                </p>
                <p className="my-2 text-muted text-sm">
                  Pellentesque habitant morbi tristique senectus. Vestibulum
                  tortor quam, feugiat vitae, ultricies ege...
                </p>
                <Link className="btn btn-link ps-0 Link shadow-0" to="/Blog/Blog-Details">
                  Read more
                  <HiOutlineArrowNarrowRight className="fs-5 mt-0 ms-2" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
