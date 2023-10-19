import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar1/sidebar1";

const Proread = () => {
  const [data, setData] = useState([""]);

   const getData =()=> {
    axios
      .get("https://6530363a6c756603295e691a.mockapi.io/project")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  
  function handleDelete(id) {
    axios
      .delete(`https://6530363a6c756603295e691a.mockapi.io/project/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (
    id,
    name,
    task,
    date,
    reminder,
    priority,
    status,
    desc
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("task", task);
    localStorage.setItem("date", date);
    localStorage.setItem("reminder", reminder);
    localStorage.setItem("priority", priority);
    localStorage.setItem("status", status);
    localStorage.setItem("desc", desc);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="d-flex flex-row">
        <Sidebar />
      </div>
      
      <div className="d-flex flex-column ">
      <h2>Read</h2>
      <Link to="/procreate">
        <button className="btn btn-primary" >+</button>
      </Link>
      <table className="table m-5">
        <thead className="table-primary">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Project Name</th>
            <th scope="col">Add Task</th>
            <th scope="col">Add Deadline</th>
            <th scope="col">Add Reminder</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Description</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.task}</td>
                  <td>{eachData.date}</td>
                  <td>{eachData.reminder}</td>
                  <td>{eachData.priority}</td>
                  <td>{eachData.status}</td>
                  <td>{eachData.desc}</td>
                  <td>
                    <Link to="/proupdate">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.task,
                            eachData.date,
                            eachData.reminder,
                            eachData.priority,
                            eachData.status,
                            eachData.desc
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                    
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
      </div>
    </div>
  );
};

export default Proread;
// export {getData};
