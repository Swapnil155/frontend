import React, {useState} from "react";


const ReviewFrom = () => {
    const [allValue, setAllValue] = useState({
        name: '',
        rating: '5',
        email: '',
        review: '',
    })

    const ChangleHandler = (e) =>{
        setAllValue({...allValue,
        [e.target.name]:e.target.value,
        [e.target.rating]: e.target.value,
        [e.target.email]: e.target.value,
        [e.target.review]: e.target.value
    })
    }

    const SubmitReview = (e) =>{
        e.preventDefault()
        if(!allValue)
        {
            alert('plz fill all these stuff')
        }else{
            console.log(allValue)
        }
    }
  return (
    <div className="py-5">
      <button
        className="btn btn-outline-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#leaveReview"
        aria-expanded="false"
        aria-controls="leaveReview"
      >
        Leave a review
      </button>
      <div className="collapse mt-4" id="leaveReview">
        <h5 className="mb-4">Leave a review</h5>
        <form className="form" id="contact-form" onSubmit={SubmitReview}>
          <div className="row">
            <div className="col-sm-6">
              <div className="mb-4">
                <label className="form-label" htmlFor="name">
                  Your name *
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={ChangleHandler}
                  id="name"
                  placeholder="Enter your name"
                  required="required"
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="mb-4">
                <label className="form-label" htmlFor="rating">
                  Your rating *
                </label>
                <select
                  className="form-select focus-shadow-0"
                  name="rating"
                  onChange={ChangleHandler}
                  id="rating"
                  required="required"
                >
                  <option value={5}>★★★★★ (5/5)</option>
                  <option value={4}>★★★★☆ (4/5)</option>
                  <option value={3}>★★★☆☆ (3/5)</option>
                  <option value={2}>★★☆☆☆ (2/5)</option>
                  <option value={1}>★☆☆☆☆ (1/5)</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="email">
              Your email *
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={ChangleHandler}
              id="email"
              placeholder="Enter your  email"
              required="required"
            />
          </div>
          <div className="mb-4">
            <label className="form-label" htmlFor="review">
              Review text *
            </label>
            <textarea
              className="form-control"
              rows={4}
              name="review"
              onChange={ChangleHandler}
              id="review"
              placeholder="Enter your review"
              required="required"
              defaultValue={""}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Post review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewFrom;
