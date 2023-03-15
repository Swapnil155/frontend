import React, { useEffect, useState } from "react";
import { data } from "../../../../asset/MOCK_DATA";

const DepartureCity = ({handlerFilter, passClaerFilter}) => {
  const [allData, setAllData] = useState(data);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setCities(genrateFilterDataDepatureCity);
    if(passClaerFilter){
      let Value = cities.map((type) => {
        return { ...type, isChecked: false };
      });
      setCities(Value);
    }
  }, [passClaerFilter]);
  
  
  const genrateFilterDataDepatureCity = () => {
    const v = [...new Set(allData.map((item) => item.departureCity))];
    return(v
      .filter(value=>value !== '')
      .map((item,i)=>({_id:i,name: item})))
  };

  const changeHandler = (e) => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempCities = cities.map((city) => {
        return { ...city, isChecked: checked };
      });
      setCities(tempCities);
      const value = [...new Set(tempCities.filter((i) => i.isChecked === true))];
      const modarateName = value.map((i) => i.name);
      handlerFilter(modarateName);
    } else {
        let tempCities = cities.map((type) =>
        type.name === name ? { ...type, isChecked: checked } : type
        );
        setCities(tempCities);
      const value = [...new Set(tempCities.filter((i) => i.isChecked === true))];
      const modarateName = value.map((i) => i.name);
      handlerFilter(modarateName);
    }
  };
  // console.log(cities)
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="heading5">
        <button
          className="accordion-button "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse5"
          aria-expanded="false"
          aria-controls="collapse5"
        >
          Departure City
        </button>
      </h2>
      <div
        id="collapse5"
        className="accordion-collapse collapse show"
        aria-labelledby="heading5"
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
                onChange={changeHandler}
                checked={!cities.some((city) => city?.isChecked !== true)}
              />
            </div>
          </div>
          {cities.map((city, i) => (
            <div className="d-flex justify-content-between" key={i}>
              <label className="form-check-label" htmlFor="flexCheckChecked">
                {city.name}
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={city.name}
                  checked={city?.isChecked || false}
                  onChange={changeHandler}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartureCity;
