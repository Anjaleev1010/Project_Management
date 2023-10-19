// import React from 'react'
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Edit3 = () => {
  const [inpval, setINP] = useState({
    name: "",
    date: "",
    mobile: "",
    priority: "",
    desc: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  return (
    <div className="container">
      <NavLink to="/">Home</NavLink>
      <form className="mt-4">
        <div className="row">
          <div className="mb-3 col-lg-3 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Issue Name
            </label>
            <input
              type="text"
              onChange={setdata}
              value={inpval.name}
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          
          <div className="mb-3 col-lg-3 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              set Reminder
            </label>
            <input
              type="date"
              onChange={setdata}
              value={inpval.mobile}
              name="mobile"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-3 col-md-6 col-12">
          <label for="exampleInputPassword1" className="form-label">
              Priority
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="priority"
              onChange={setdata}
              value={inpval.priority}
            >
              <option selected>Priority</option>
              <option value="1">High</option>
              <option value="2">Medium</option>
              <option value="3">Low</option>
            </select>
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              onChange={setdata}
              value={inpval.desc}
              className="form-control"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary col-lg-1 col-md-6 col-12"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit3;
