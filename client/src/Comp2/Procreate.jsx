import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const Procreate = () => {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");
    axios
      .post("https://6530363a6c756603295e691a.mockapi.io/project", {
        name: name,
        task: task,
        date: date,
        reminder: reminder,
        priority: priority,
        status: status,
        desc: desc,
        header,
      })

      .then(() => {
        history("/proread");
      });
  };
  return (
    <div className="container p-4">
      {/* <NavLink to="/">Home</NavLink> */}
      <form className="mt-4 ">
        <div className="row">
          <div className="mb-3 col-lg-8 col-md-6 col-12">
            <label className="form-label">Project Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-8 col-md-6 col-12">
            <label className="form-label">Add Task</label>
            <input
              type="text"
              name="task"
              onChange={(e) => setTask(e.target.value)}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-16 col-12">
            <label className="form-label">Add Deadline</label>
            <input
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
              aria-describedby="emailHelp"
            />

          </div>
          <div className="mb-3 col-lg-6 col-md-16 col-12">
            <label className="form-label">Set Reminder</label>
            <input
              type="date"
              name="reminder"
              onChange={(e) => setReminder(e.target.value)}
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Priority</label>

            <select
              className="form-select"
              aria-label="Default select example"
              name="priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option selected>Priority</option>
              <option value="High">High</option>
              <option value="Low">Medium</option>
              <option value="Medium">Low</option>
            </select>
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label className="form-label">Status</label>

            <select
              className="form-select"
              aria-label="Default select example"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected>Status</option>
              <option value="Backlog">Backlog</option>
              <option value="In Progess">In Progess</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary col-lg-1 col-md-6 col-12 "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Procreate;
