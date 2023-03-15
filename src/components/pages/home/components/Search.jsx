import React from "react";

import { FaCrosshairs } from "react-icons/fa";

const Search = () => {
  return (
    <div className="container">
      <div className=" search-bar rounded p-3 p-lg-4 position-relative mt-n5 z-index-20 shadow">
        <form>
          <div className="row">
            <div className="col-lg-4 d-flex align-items-center form-group">
              <input
                className="form-control border-0 shadow-0"
                type="text"
                name="search"
                placeholder="What are you searching for?"
              />
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-center form-group">
              <div className="input-label-absolute input-label-absolute-right w-100">
                <input
                  className="form-control border-0 shadow-0"
                  type="text"
                  name="location"
                  placeholder="Location"
                  id="location"
                />
              </div>
              <FaCrosshairs className="text-muted" />
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-center form-group">
              <div className="input-label-absolute input-label-absolute-right w-100">
                <input
                  className="form-control border-0 shadow-0"
                  type="text"
                  name="categories"
                  placeholder="Categories"
                  id="categories"
                />
              </div>
            </div>

            <div className="col-lg-2 form-group d-grid mb-0">
              <button className="btn btn-primary h-100" type="submit">
                Search{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
