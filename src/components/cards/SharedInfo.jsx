import React from "react";
import {HiOutlineIdentification} from 'react-icons/hi'

const SharedInfo = () => {
  return (
    <div className="card border-0 shadow">
      <div className="card-header bg-primary-light py-4 border-0">
        <div className="d-flex align-items-center">
          <div>
            <h4 className="h6 subtitle text-sm text-primary">
              What info is shared with others?
            </h4>
          </div>
          <HiOutlineIdentification className="w-3rem h-3rem ms-3 text-primary flex-shrink-0"/>
        </div>
      </div>
      <div className="card-body p-4">
        <p className="text-muted text-sm card-text">
          Directory only releases contact information for hosts and guests{" "}
          <strong>after a reservation is confirmed</strong>.
        </p>
        <p className="text-muted text-sm card-text">
          Amet nisi eiusmod minim commodo sit voluptate aute ut quis ea veniam
          sunt proident ex. <strong>Exercitation culpa laboris</strong>{" "}
          consequat fugiat non ipsum veniam Lorem aliqua deserunt tempor elit
          veniam.
        </p>
      </div>
    </div>
  );
};

export default SharedInfo;
