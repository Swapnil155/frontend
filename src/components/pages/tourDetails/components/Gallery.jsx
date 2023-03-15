import React from "react";

const Gallery = () => {
  return (
    <div className="text-block">
        <h4 className="fw-bold mb-3">Gallery </h4>
      <div className="row gallery mb-3 ms-n1 me-n1">
        <div className="col-lg-4 col-6 px-1 mb-2">
          <a
            href="img/photo/photo-1426122402199-be02db90eb90.jpg"
            data-fancybox="gallery"
            title="Our street"
          >
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1426122402199-be02db90eb90.jpg"
              alt="..."
            />
          </a>
        </div>
        <div className="col-lg-4 col-6 px-1 mb-2">
          <a
            href="img/photo/photo-1512917774080-9991f1c4c750.jpg"
            data-fancybox="gallery"
            title="Outside"
          >
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1512917774080-9991f1c4c750.jpg"
              alt="..."
            />
          </a>
        </div>
        <div className="col-lg-4 col-6 px-1 mb-2">
          <a
            href="img/photo/photo-1494526585095-c41746248156.jpg"
            data-fancybox="gallery"
            title="Rear entrance"
          >
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1494526585095-c41746248156.jpg"
              alt="..."
            />
          </a>
        </div>
        <div className="col-lg-4 col-6 px-1 mb-2">
          <a
            href="img/photo/photo-1484154218962-a197022b5858.jpg"
            data-fancybox="gallery"
            title="Kitchen"
          >
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1484154218962-a197022b5858.jpg"
              alt="..."
            />
          </a>
        </div>
        <div className="col-lg-4 col-6 px-1 mb-2">
          <a
            href="img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
            data-fancybox="gallery"
            title="Bedroom"
          >
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
              alt="..."
            />
          </a>
        </div>
        <div className="col-lg-4 col-6 px-1 mb-2">
          <a
            href="img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
            data-fancybox="gallery"
            title="Bedroom"
          >
            <img
              className="img-fluid"
              src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
              alt="..."
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
