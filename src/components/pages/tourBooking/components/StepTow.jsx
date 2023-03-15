import React from "react";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft, FaRegTrashAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const initialstate = {
  id : '',
  name: "",
  age: "",
};
const StepTow = () => {
  var {_id} = useParams()
  console.log(_id)
  const [guest, setGuests] = useState(initialstate);
  let guestList = [];
  const onSubmitHandler = (e) => {
    e.preventDefault();
    guestList.push(guest);
    console.log(guestList);
  };
  const ChangeHandlerAdd = (e) => {

    setGuests({
      ...guest,
      id : new Date().getTime.toString(),
      [e.target.name]: e.target.value,
    });
  };
  const deleteHandler = (e) => {

  }
  console.log(guest);
  return (
    <>
      <p className="subtitle text-primary">Book your holiday home</p>
      <h1 className="h2 mb-5">
        {" "}
        Who's coming? <span className="text-muted float-end">Step 2</span>{" "}
      </h1>
      <div className="text-block">
        <div className="alert alert-warning text-sm mb-3">
          <div className="d-flex align-items-center">
            <BsHeart className="me-2 fa-2x" />
            <div>
              <strong>This home is on people’s minds.</strong> It’s been viewed
              43 times in the past week.
            </div>
          </div>
        </div>
      </div>
      <div className="text-block">
        <label className="h5" htmlFor="form_guests">
          Guests
        </label>
        <p className="text-sm text-muted">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed in.
        </p>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                placeholder="First name | Last name"
                type="text"
                name="name"
                id="name"
                onChange={ChangeHandlerAdd}
              />
            </div>
            <div className="col-lg-3 mb-3">
              <label className="form-label" htmlFor="name">
                Date of birth
              </label>
              <input
                className="form-control"
                type="date"
                name="age"
                onChange={ChangeHandlerAdd}
                id="name"
              />
            </div>
            <div className="col-lg-3 mt-4 pt-2 mb-3">
              <button type="submit" className="btn btn-outline-primary">
                Add Guest
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="text-block">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {guestList.map((index)=>{
              console.log(index)
            })} */}
            <tr>
              <th scope="row">1</th>
              <td>Swapnil Bendal</td>
              <td>23</td>
              <td><FaRegTrashAlt className="text-danger" onClick={deleteHandler} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row form-block flex-column flex-sm-row mt-4">
        <div className="col text-center text-sm-start">
          <Link
            className="btn btn-link text-muted Link"
            to={`/Tour-Booking/${_id}/Step-1`}
          >
            {" "}
            <FaChevronLeft className="me-2" />
            Back
          </Link>
        </div>
        <div className="col text-center text-sm-end">
          <Link className="btn btn-primary px-3" to={`/Tour-Booking/${_id}/Step-3`}>
            {" "}
            Next step
            <FaChevronRight className="ms-2" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StepTow;
