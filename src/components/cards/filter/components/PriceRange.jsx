import React, {useEffect,useState} from "react";
import {BiRupee} from 'react-icons/bi'

const PriceRange = () => {
  const [value,onChange]=useState(10000);

  useEffect(()=>{
      const ele = document.querySelector('.buble');
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  })
  // console.log(value)

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Price Range
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
      >
        <div className="accordion-body" htmlFor="PriceRange">
            <input
              className="form-range"
              type="range"
              min="1"
              max="10000"
              defaultValue={value}
              onChange={({ target: { value: radius } }) => {
                onChange(radius);
              }}
            />
            <div className="buble"><BiRupee className="mb-1"/>1 - <BiRupee className="mb-1"/>{value}</div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
