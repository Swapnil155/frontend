import React from "react";
import {FaStar} from 'react-icons/fa'
import ReviewFrom from "./ReviewFrom";

const Review = () => {
  return (
    <div className="text-block">
      <p className="subtitle text-sm text-primary">Reviews </p>
      <h5 className="mb-4 fw-bold">Listing Reviews </h5>
      {/* Reviews */}
      <div className="d-flex d-block d-sm-flex review">
        <div className="text-md-center flex-shrink-0 me-4 me-xl-5">
          <img
            className="d-block avatar avatar-xl p-2 mb-2"
            src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-8.jpg"
            alt="Padmé Amidala"
          />
          <span className="text-uppercase text-muted text-sm">Dec 2018</span>
        </div>
        <div>
          <h6 className="mt-2 mb-1 fw-bold">Padmé Amidala</h6>
          <div className="mb-2">
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
          </div>
          <p className="text-muted text-sm">
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections{" "}
          </p>
        </div>
      </div>
      <div className="d-flex d-block d-sm-flex review">
        <div className="text-md-center flex-shrink-0 me-4 me-xl-5">
          <img
            className="d-block avatar avatar-xl p-2 mb-2"
            src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-2.jpg"
            alt="Luke Skywalker"
          />
          <span className="text-uppercase text-muted text-sm">Dec 2018</span>
        </div>
        <div>
          <h6 className="mt-2 mb-1 fw-bold">Luke Skywalker</h6>
          <div className="mb-2">
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-primary" />
            <FaStar className="text-gray-200" />
          </div>
          <p className="text-muted text-sm">
            The bedding was hardly able to cover it and seemed ready to slide
            off any moment. His many legs, pitifully thin compared with the size
            of the rest of him, waved about helplessly as he looked. "What's
            happened to me?" he thought. It wasn't a dream.{" "}
          </p>
        </div>
      </div>
      {/* ennd Reviews */}
      {/* Review From */}
      <ReviewFrom />
      {/* End Review From */}
    </div>
  );
};

export default Review;
