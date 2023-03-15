import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { DateRangePicker } from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";

const BookingCard = (props) => {
  const handleApply = (event, picker) => {
    picker.element.val(
      picker.startDate.format("MMMM DD,YYYY") +
        " To " +
        picker.endDate.format("MMMM DD, YYYY")
    );
    console.log(
      picker.startDate.format("MM/DD/YYYY"),
      picker.endDate.format("MM/DD/YYYY")
    );
  };

  const handleCancel = (event, picker) => {
    picker.element.val("");
  };
  // const [bookingDate, setBookingDate] = useState('20 Jan 2020 To 22 Jan 2022')
  // const [guests, setGuests] = useState('1')

  const [allValue, setAllValue] = useState({
    bookingDate: "20 Jan 2020 To 22 Jan 2022",
    guests: "1",
  });

  const chnageHandler = (e) => {
    setAllValue({
      ...allValue,
      [e.target.bookingDate]: e.target.value,
      [e.target.guests]: e.target.value,
    });
  };
console.info(`/Tour-Booking/${props.data._id}/Step-1`)
  const submitBooking = (e) => {
    e.preventDefault();
    console.log(allValue);
    // this.history.push('/Tour/Tour-Name/2')
    window.location.href = `/Tour-Booking/${props.data._id}/Step-1`
    
    // if(!bookingDate || !guests)
    // {
    //   alert('Please fill all the stuff')
    // }else{
    //   console.log(bookingDate,guests)
    // }
  };

  return (
    <div className="p-4 shadow ms-lg-4 rounded sticky-top" style={{ top: 100 }}>
      <p className="text-muted">
        <span className="text-primary h2 fw-bold">$120</span> per person
      </p>
      <hr className="my-4" />
      <form className="form" onSubmit={submitBooking}>
        <div className="mb-4">
          <label className="form-label" htmlFor="bookingDate">
            Your stay *
          </label>
          <div className="">
            <DateRangePicker
              initialSettings={{
                startDate : '03/04/2022',
                endDate : '03/05/2022',
                
                locale: {
                  cancelLabel: "Clear",
                },
              }}
              onApply={handleApply}
              onCancel={handleCancel}
            >
              <input
                type="text"
                className="form-control text-sm"
                placeholder="Choose your Date's"
                disabled
              />
            </DateRangePicker>
          </div>
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="guests">
            Guests *
          </label>
          <select
            className="form-control"
            name="guests"
            id="guests"
            // onChange={(e)=>setGuests(e.target.value)}
            // value={guests}
            onChange={chnageHandler}
          >
            <option value={1}>1 Guest</option>
            <option value={2}>2 Guests</option>
            <option value={3}>3 Guests</option>
            <option value={4}>4 Guests</option>
            <option value={5}>5 Guests</option>
          </select>
        </div>
        <div className="d-grid mb-4">
          <button className="btn btn-primary" type="submit">
            Book your tour
          </button>
        </div>
      </form>
      <p className="text-muted text-sm text-center">
        Some additional text can be also placed here.
      </p>
      <hr className="my-4" />
      <div className="text-center">
        <p>
          {" "}
          <Link className="text-secondary text-sm Link" to="/">
            {" "}
            <FaHeart className="mb-1" /> Bookmark This Listing
          </Link>
        </p>
        <p className="text-muted text-sm">79 people bookmarked this place </p>
      </div>
    </div>
  );
};

export default BookingCard;
