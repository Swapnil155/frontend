import React from "react";
import {BiCheckShield} from 'react-icons/bi'

const SecurityCard = () => {
  return (
    <div className="card border-0 shadow">
      <div className="card-header bg-primary-light py-4 border-0">
        <div className="d-flex align-items-center">
          <div>
            <h4 className="h6 subtitle text-sm text-primary">
              Let's make your account more secure
            </h4>
          </div>
          <BiCheckShield className="svg-icon w-3rem h-3rem ms-3 text-primary flex-shrink-0"/>
        </div>
      </div>
      <div className="card-body p-4">
        <h6 className="card-text">Your account security: </h6>
        <p className="card-text mb-4">
          <span className="badge badge-info-light">Medium</span>
        </p>
        <p className="text-muted card-text">
          We’re always working on ways to increase safety in our community.{" "}
        </p>
        <p className="text-muted card-text">
          That’s why we look at every account to make sure it’s as secure as
          possible.
        </p>
      </div>
    </div>
  );
};

export default SecurityCard;
