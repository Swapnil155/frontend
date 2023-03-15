import React from "react";
import { Link } from "react-router-dom";
import {FaReply, FaRegClock } from 'react-icons/fa'

const Comments = () => {
  return (
    <div className="mt-5">
      <h6 className="text-uppercase fw-700 text-muted mb-4">2 comments</h6>
      {/* comment*/}
      <div className="d-flex mb-4">
        <img
          className="avatar avatar-lg p-1 flex-shrink-0 me-4"
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-0.jpg"
          alt="Julie Alma"
        />
        <div>
          <h5>Julie Alma</h5>
          <p className="text-uppercase text-sm text-muted">
            <FaRegClock className="mb-1" /> September 23, 2017 at 12:00 am
          </p>
          <p className="text-muted">
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <p>
            <Link className="btn btn-link text-primary Link" to="/">
              <FaReply /> Reply
            </Link>
          </p>
        </div>
      </div>
      {/* /comment*/}
      {/* comment*/}
      <div className="d-flex mb-4">
        <img
          className="avatar avatar-lg p-1 flex-shrink-0 me-4"
          src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-8.jpg"
          alt="Louise Armero"
        />
        <div>
          <h5>Louise Armero</h5>
          <p className="text-uppercase text-sm text-muted">
            <FaRegClock className="mb-1" /> June 23, 2017 at 12:35 pm
          </p>
          <p className="text-muted">
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit
            amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
            ultricies mi vitae est. Mauris placerat eleifend leo. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas.{" "}
          </p>
          <p>
            <Link className="btn btn-link text-primary Link" to="/">
              <FaReply /> Reply
            </Link>
          </p>
        </div>
      </div>
      {/* /comment*/}
    </div>
  );
};

export default Comments;
