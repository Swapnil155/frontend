import React, { useEffect, useState, useRef } from "react";
import { DateRangePicker } from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import jQuery from "jquery";
import moment from "moment";

const initialSettings = {
  autoUpdateInput: false,
  autoApply: true,
  locale: { cancelLabel: "Clear" },
};
const DateRange = ({ ChangeHandlerDateRange, passClaerFilter }) => {
  const [state, setState] = useState(initialSettings);
  const [dates, setDates] = useState('');
  
  useEffect(() => {
    if (passClaerFilter) {
      setDates('');
    } 
  }, [passClaerFilter]);


  const handleApply = (event, picker) => {
    
    setDates(
      picker.startDate.format("MMMM DD, YYYY") +
        " To " +
        picker.endDate.format("MMMM DD, YYYY")
    );
    // picker.element.val("");

    ChangeHandlerDateRange({
     start: picker.startDate.format("MM/DD/YYYY"),
      end : picker.endDate.format("MM/DD/YYYY")
    });
  };
  console.log(dates);
  return (
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
          <DateRangePicker
            initialSettings={initialSettings}
            // onHide={handleApply}
            onApply={(event, picker) => handleApply(event, picker)}
            // onCancel={(event, picker)=>handleCancel(event,picker)}
          >
            <button className="input-button">
            <input
            className="form-control w-100 "
            type="text"
            name="dateRange"
            id="dateRange"
            defaultValue={dates}
            placeholder="Choose your Dates"
          />
            </button>
          </DateRangePicker>
          
        </div>
      </div>
    </div>
  );
};
export default DateRange;
