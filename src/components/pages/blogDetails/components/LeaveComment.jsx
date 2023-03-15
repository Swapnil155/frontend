import React, { useState } from "react";

const LeaveComment = () => {
  const [allValue, setAllValue] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const changeHandler = (e) => {
      setAllValue({...allValue,
    [e.target.name]: e.target.value,
    [e.target.email]: e.target.value,
    [e.target.comment]: e.target.value
    })
  }

  const submitComment = (e) =>{
      e.preventDefault()
      console.log(allValue)
  }
  return (
    <div className="mb-5">
      <button
        className="btn btn-outline-primary collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#leaveComment"
        aria-expanded="false"
        aria-controls="leaveComment"
      >
        Leave a comment
      </button>
      <div className="collapse" id="leaveComment" style={{}}>
        <div className="mt-4">
          <h5 className="mb-4">Leave a comment</h5>
          <form className="form" id="comment-form" onSubmit={submitComment}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-4">
                  <label className="form-label" htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input 
                    className="form-control" 
                    id="name"
                    name="name"
                    onChange={changeHandler}
                    type="text" 
                    required="required" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-4">
                  <label className="form-label" htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input 
                    className="form-control" 
                    id="email" 
                    name="email"
                    onChange={changeHandler}
                    type="text"
                    required="required" />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="comment">
                Comment <span className="required">*</span>
              </label>
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                onChange={changeHandler}
                rows={4}
                defaultValue={""}
                required="required"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              <i className="far fa-comment" /> Comment{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeaveComment;
