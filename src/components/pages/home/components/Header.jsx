import React from "react";
import "../home.css";
import Search from "./Search";
const Header = () => {
  return (
      <div>
      <section
        className="d-flex align-items-center dark-overlay bg-cover header hero-header"
        style={{ 
          background: `center center url("./images/bg-img-1.jpg") no-repeat`,
          backgroundSize: "cover",
      }}
      >
        <div className="container py-6 py-lg-7 text-white text-center mx-auto" >
          <div className="row py-lg-7">
            <div className="col-xl-10 mx-auto">
              <h1 className="display-3 fw-bold text-shadow">
                Discover Directory
              </h1>
              <p className="text-lg text-shadow">
                Uncover the best places to eat, drink, and shop nearest to you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Search />
      </div>


    
  );
};

export default Header;
