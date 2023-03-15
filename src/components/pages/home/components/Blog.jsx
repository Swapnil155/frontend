import React from "react";
import { Link, useLocation} from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsClock } from "react-icons/bs";


const data = [
  {
    id: 1,
    type: "Living",
    blogName: "Blog name",
    blogImg: "./images/State-1.jpg",
  },
  {
    id: 2,
    type: "Living",
    blogName: "Blog name",
    blogImg: "./images/State-2.jpg",
  },
  {
    id: 3,
    type: "Travel",
    blogName: "Blog name",
    blogImg: "./images/State-3.jpg",
  },
  {
    id: 4,
    type: "Living",
    blogName: "Blog name",
    blogImg: "./images/State-4.jpg",
  },
];

const Blog = () => {
  const pathname = useLocation().pathname
  return (
    <section className="py-6 bg-gray-100">
      <div className="container">
        {/* Title */}
        <div className="row mb-5">
          <div className="col-md-8">
            <p className="subtitle text-secondary">
              stories from around the globe
            </p>
            <h2 className="fw-bold">From our travle blog</h2>
          </div>
          <div className="col-md-4 d-md-flex align-item-center justify-content-end">
            <Link className="text-muted text-sm Link" to="/Blog">
              See all articles <HiChevronDoubleRight />
            </Link>
          </div>
        </div>

        {/* card */}
        
    <div className="row">
      {data.slice(0,3).map((elem, i) => {
        const { blogImg, type } = elem;
        return (
          <div className="col-lg-4 col-sm-6 mb-4 hover-animate" key={i}>
            <div className="card shadow border-0 h-100">
              <Link to={`/Blog/Blog-Details`}>
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
        {/* End Cards */}
      </div>
    </section>
  );
};

export default Blog;
