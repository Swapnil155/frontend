import React from "react";
import { Link } from "react-router-dom";

const WritterInfo = () => {
  return (
    <div className="col-xl-8 col-lg-10 mx-auto">
      <p className="py-3 mb-5 text-muted text-center fw-300">
        <Link to="/">
          <img className="avatar p-1 me-2 Link"
            src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-11.jpg"
            alt="" />
        </Link>{" "}
        Written by{" "}
        <Link className="fw-bold Link" to="/">
          John Slim
        </Link>
        <span className="mx-1">|</span> January 16, 2016 in{" "}
        <Link className="fw-bold Link" to="blog.html">
          Living
        </Link>
        <span className="mx-1">|</span>
        <Link className="text-muted Link" to="/">
          2 comments{" "}
        </Link>
      </p>
      <p className="lead mb-5">
        As am hastily invited <strong>settled at limited</strong> civilly
        fortune me. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
        eleifend leo.
      </p>
    </div>
  );
};

export default WritterInfo;
