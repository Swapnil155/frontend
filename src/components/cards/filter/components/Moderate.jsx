import React, { useEffect, useState } from "react";
import { data } from "../../../../asset/MOCK_DATA";

const Moderate = ({ handlerFilter,passClaerFilter }) => {
  const [allData, setAllData] = useState(data);
  const [moderate, setModerate] = useState([]);

  useEffect(() => {
    setModerate(gernrateFilterDataModerateCheckbox);
    if(passClaerFilter){
      let Value = moderate.map((type) => {
        return { ...type, isChecked: false };
      });
      setModerate(Value);
    }
  }, [passClaerFilter]);
  
  const gernrateFilterDataModerateCheckbox = () => {
    const v =  [...new Set(allData.map((item, i) => item.Moderate))];
    return(v
      .filter(value=>value !== '')
      .map((item,i)=>({_id:i,name: item})))
  };
  // console.log(moderate)

  const changeHandler = (e) => {
    const { name, checked } = e.target;

    if (name === "allSelect") {
      let Value = moderate.map((type) => {
        return { ...type, isChecked: checked };
      });
      setModerate(Value);
      const value = [...new Set(Value.filter((i) => i.isChecked === true))];
      const modarateName = value.map((i) => i.name);
      handlerFilter(modarateName);
    } else {
      let tempType = moderate.map((type) =>
        type.name === name ? { ...type, isChecked: checked } : type
      );
      setModerate(tempType);
      const value = [...new Set(tempType.filter((i) => i.isChecked === true))];
      const modarateName = value.map((i) => i.name);
      handlerFilter(modarateName);
    }
  };
  // console.log(checkedValue);


  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Moderate's
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby="headingThree"
      >
        <div className="accordion-body ">
          <div className="d-flex justify-content-between">
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Any
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="allSelect"
                checked={!moderate.some((type) => type?.isChecked !== true)}
                // checked={
                //   moderate.filter((type) => type?.isChecked !== true).length < 1
                // }
                onChange={changeHandler}
              />
            </div>
          </div>
          {moderate.map((type, i) => (
            <div className="d-flex justify-content-between" key={i}>
              <label className="form-check-label">{type.name}</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={type.name}
                  onChange={changeHandler}
                  checked={type?.isChecked || false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Moderate;
