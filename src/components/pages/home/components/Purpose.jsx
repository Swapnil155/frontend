import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { GiBackpack, GiHiking, GiForestCamp } from "react-icons/gi";

const Purpose = () => {
  return (
    <section className="pt-2 pb-5">
      <div className="container">
        <div className="pb-lg-4">
          <div className="col-md-8">
            <p className="subtitle text-secondary">
              one-of-a-kind trekking app
            </p>
            <h2 className="fw-bold">Discover grate local tour around you</h2>
          </div>
        </div>

        <div className="row">

          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="px-0 pe-lg-3">
              <div className="icon-rounded mb-3 bg-secondary-light">
                <FaSearchLocation className="fs-4 text-secondary" />
              </div>
              <h3 className="h6 text-uppercase letter-spacing-1 fw-bold">
                Find the perfect place
              </h3>
              <p className="text-muted text-sm">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed in
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="px-0 pe-lg-3">
              <div className="icon-rounded mb-3 bg-primary-light">
                <GiBackpack className="fs-4 text-primary" />
              </div>
              <h3 className="h6 text-uppercase letter-spacing-1 fw-bold">
                Book your seats
              </h3>
              <p className="text-muted text-sm">
                The bedding was hardly able to cover it and seemed ready to
                slide off any moment. His many legs, pit
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="px-0 pe-lg-3">
              <div className="icon-rounded mb-3 bg-secondary-light">
                <GiForestCamp className="fs-4 text-secondary" />
              </div>
              <h3 className="h6 text-uppercase letter-spacing-1 fw-bold">Enjoy your Tour</h3>
              <p className="text-muted text-sm">
                His room, a proper human room although a little too small, lay
                peacefully between its four familiar{" "}
              </p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3 mb-3 mb-lg-0">
            <div className="px-0 pe-lg-3">
              <div className="icon-rounded mb-3 bg-primary-light">
                <GiHiking className="fs-4 text-primary" />
              </div>
              <h3 className="h6 text-uppercase letter-spacing-1 fw-bold">
                Explor the nature
              </h3>
              <p className="text-muted text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, veniam.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Purpose;
