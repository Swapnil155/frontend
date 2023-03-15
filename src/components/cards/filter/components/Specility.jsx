import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import { data } from "../../../../asset/MOCK_DATA";

const Specility = ({ handlerFilter,passClaerFilter}) => {
  
  const [allData, setAllData] = useState(data);
  const [specility, setSpecility] = useState([]);
  

  useEffect(() => {
    setSpecility(genrateFilterDataSpecility);
    if(passClaerFilter){
      let Value = specility.map((type) => {
        return { ...type, isChecked: false };
      });
      setSpecility(Value);
    }
  }, [passClaerFilter]);

  const genrateFilterDataSpecility = () => {
    const v = [...new Set(allData.map((item) => item.specility))];
    return(v
      .filter(value=>value !== '')
      .map((item,i)=>({_id:i,name: item})))
  };

  const changeHandler = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempSpe = specility.map((type) => {
        return { ...type, isChecked: checked };
      });
      setSpecility(tempSpe);
      // console.log(tempSpe)
      const value = [...new Set(tempSpe.filter((i) => i.isChecked === true))];
      const modarateName = value.map((i) => i.name);
      handlerFilter(modarateName)

    } else {
      let tempCity = specility.map((type) =>
        type.name === name ? { ...type, isChecked: checked } : type
      );
      setSpecility(tempCity);
      // console.log(tempCity)
      const value = [...new Set(tempCity.filter((i) => i.isChecked === true))];
      const modarateName = value.map((i) => i.name);
      handlerFilter(modarateName)
    }
  };

// const onChangeHAndlier = (value) =>{
  
//   const currentIndex = checked.indexOf(value)
//   const newChecked = [...checked]
//   // console.log(currentIndex)
  
//   if(currentIndex === -1){
//     newChecked.push(value)
//   }else {
//     newChecked.splice(currentIndex,1)
//   }
//   const vaule = [...new Set(newChecked.map(i=>i))]
//   setChecked(vaule)
//   //  handlerFilter(newChecked)
// }

// console.log(checked)
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="heading4">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse4"
          aria-expanded="false"
          aria-controls="collapse4"
        >
          Speciality Tour
        </button>
      </h2>
      <div
        id="collapse4"
        className="accordion-collapse collapse show"
        aria-labelledby="heading4"
      >
        <div className="accordion-body">
          
        <div className="d-flex justify-content-between">
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Any
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="allSelect"
                checked={!specility.some((type) => type?.isChecked !== true)}
                // checked={
                //   moderate.filter((type) => type?.isChecked !== true).length < 1
                // }
                onChange={changeHandler}
              />
            </div>
          </div>
          {specility.map((type, i) => (
            <div className="d-flex justify-content-between" key={i}>
              <label className="form-check-label" htmlFor="flexCheckChecked">
                {type.name}
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={type.name}
                  checked={type?.isChecked || false}
                  // checked={checked.indexOf(type.name) === -1 ? false : true}
                  onChange={changeHandler}
                  // onChange={()=>onChangeHAndlier(type.name)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specility;
