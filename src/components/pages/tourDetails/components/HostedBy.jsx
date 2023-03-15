import React from "react";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";

const initialstate = {
  authorId: "",
  authorProfile: "",
  orgName: "",
  authorSayAboutTour: "",
};

const HostedBy = (props) => {
  const [author, setAuthor] = useState(initialstate);
 
  useEffect(()=>{
    setAuthor(props.data)
   
  },[props])
  console.log(author);

  if (author === undefined) {
    setAuthor(initialstate)
  }
  return (
    <div className="text-block">
      <div className="d-flex">
        <img
          className="avatar avatar-lg p-1 flex-shrink-0 me-4 inner-shadow"
          src="https://image.shutterstock.com/image-vector/climber-gear-logo-design-vector-260nw-1805334631.jpg"
          alt="Jack London"
        />
        <div>
          <p>
            <span className="text-muted text-uppercase letter-spacing-1 text-sm">
              Hosted by
            </span>
            <br />
            {/* <strong>Adventures Tour Org.</strong> */}
            <strong>{author === undefined ? '' : author.orgName}.</strong>
          </p>
          <p className="text-muted text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <p className="text-muted text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-sm">
            <Link className="Link" to={`/Organizer/${author === undefined ? '' : author.authorId}`}>
              See Adventuer's 3 other listings
              <MdArrowRightAlt className="ms-2 fs-5" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HostedBy;
