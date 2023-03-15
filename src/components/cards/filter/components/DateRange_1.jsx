import React from "react";

const DateRange_1 = () => {
  return (
    <div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="heading2">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse2"
            aria-expanded="false"
            aria-controls="collapse2"
          >
            Date's Range
          </button>
        </h2>
        <div
          id="collapse2"
          className="accordion-collapse collapse show"
          aria-labelledby="heading2"
        >
          <div className="accordion-body" htmlFor="DateRange">
            <div className="d-flex justify-content-between">
              <input
                type="date"
                className="form-control text-sm shadow-0 border-0"
              />
              <input
                type="date"
                className="form-control text-sm shadow-0 border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRange_1;
