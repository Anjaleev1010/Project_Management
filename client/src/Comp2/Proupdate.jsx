import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Proupdate = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setTask(localStorage.getItem("task"));
    setDate(localStorage.getItem("date"));
    setReminder(localStorage.getItem("reminder"));
    setPriority(localStorage.getItem("priority"));
    setStatus(localStorage.getItem("status"));
    setDesc(localStorage.getItem("desc"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id:", id);
    axios
      .put(`https://6530363a6c756603295e691a.mockapi.io/project/${id}`, {
        name: name,
        task: task,
        date: date,
        reminder: reminder,
        priority: priority,
        status: status,
        desc: desc,
      })
      .then(() => {
        navigate("/proread");
      });
  };
  return (
    <div className="container p-7">
      <div className="d-flex flex-column">
        <h2>Update</h2>
      </div>
      <div className="d-flex flex-column">
        <form className="mt-8 ">
          <div className="row">
            <div className="mb-3 col-lg-8 col-md-6 col-12">
              <label className="form-label">Project Name</label>
              <input
                type="text"
                name="name"
                value={name}
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
                value={task}
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
                value={date}
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
                value={reminder}
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
              value={priority}
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
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected>Status</option>
              <option value="Backlog">Backlog</option>
              <option value="In Progess">In Progess</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
            <div className="mb-3 col-lg-12 col-md-12 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Description
              </label>
              <textarea
                name="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-control"
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <Link to="/proread">
              <button
                type="submit"
                className="btn btn-primary col-lg-1 col-md-6 col-12 "
                onClick={handleUpdate}
              >
                Update
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Proupdate;
