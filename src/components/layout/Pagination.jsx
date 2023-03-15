import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, oncPaginationChange, totalCard }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    oncPaginationChange(value - showPerPage, value);
    window.scrollTo(0, 0);
  }, [counter]);

  const onButtonClick = (type) =>{
    if (type === "prev") {
        if (counter === 1) {
          setCounter(1);
        } else {
          setCounter(counter - 1);
        }
      } else if (type === "next") {
        if (Math.ceil(totalCard / showPerPage) === counter) {
          setCounter(counter);
        } else {
          setCounter(counter + 1);
        }
      };
  }

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-primary" onClick={() => onButtonClick("prev")}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => onButtonClick("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
