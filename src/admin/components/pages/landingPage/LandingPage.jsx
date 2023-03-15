import React from "react";

const LandingPage = () => {
  return (
    <section>
      <section
        className="d-flex align-items-center dark-overlay bg-cover"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        <div className="container py-6 py-lg-7 text-white overlay-content">
          <div className="row">
            <div className="col-xl-8">
              <h1 className="display-3 fw-bold text-shadow">
                Let us guide you home
              </h1>
              <p className="text-lg text-shadow mb-6">
                Uncover the best offers on the real estate market.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container">
          <div className="pb-lg-4">
            <p className="subtitle text-secondary">Why us?</p>
            <h2 className="mb-5">
              Discover the best investment opportunities around you
            </h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="px-0 pe-lg-4">
                <div className="icon-rounded mb-3 bg-primary-light">
                  <svg className="svg-icon w-2rem h-2rem text-primary">
                    <use xlinkHref="#destination-map-1"> </use>
                  </svg>
                </div>
                <h3 className="h6 text-uppercase">
                  Find the best investment area
                </h3>
                <p className="text-muted text-sm">
                  One morning, when Gregor Samsa woke from troubled dreams, he
                  found himself transformed in his bed in
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="px-0 pe-lg-4">
                <div className="icon-rounded mb-3 bg-secondary-light">
                  <svg className="svg-icon w-2rem h-2rem text-secondary">
                    <use xlinkHref="#real-estate-1"> </use>
                  </svg>
                </div>
                <h3 className="h6 text-uppercase">Purchase a property</h3>
                <p className="text-muted text-sm">
                  The bedding was hardly able to cover it and seemed ready to
                  slide off any moment. His many legs, pit
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
              <div className="px-0 pe-lg-4">
                <div className="icon-rounded mb-3 bg-primary-light">
                  <svg className="svg-icon w-2rem h-2rem text-primary">
                    <use xlinkHref="#pay-1"> </use>
                  </svg>
                </div>
                <h3 className="h6 text-uppercase">Profit</h3>
                <p className="text-muted text-sm">
                  His room, a proper human room although a little too small, lay
                  peacefully between its four familiar{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container bg-gray-100 py-6 px-3 px-lg-5 rounded-3 shadow-sm">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-start">
              <p className="subtitle text-secondary">
                Start using Directory today
              </p>
              <p className="text-lg">
                Directory is the best way to find &amp; discover great local
                businesses
              </p>
              <p className="text-muted mb-0">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed in
              </p>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <p className="mb-2">
                  <a className="btn btn-lg btn-primary" href="#">
                    Create Your Account
                  </a>
                </p>
                <p className="text-muted text-small">It's free! </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
