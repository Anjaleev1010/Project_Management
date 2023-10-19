import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar1/sidebar1";

const Read = () => {
  const [data, setData] = useState([""]);
  function getData() {
    axios
      .get("https://6530363a6c756603295e691a.mockapi.io/Crud1")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

function handleDelete(id){
    axios.delete(`https://6530363a6c756603295e691a.mockapi.io/Crud1/${id}`)
    .then(()=>{
        getData()
    })
}
const setToLocalStorage=(id,name,email,number,desc)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("number",number)
    localStorage.setItem("desc",desc)
}
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      
      <div className="d-flex flex-row"><Sidebar/></div>
      <div className="d-flex flex-column">
      <h2>Read</h2>
      <Link to="/create">
        <button className="btn btn-primary" >+</button>
      </Link>
      <table className="table m-5">
        <thead className="table-primary">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email Id</th>
            <th scope="col">Phone Number</th>
            <th scope="col"> Job Description</th>
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
                  <td>{eachData.email}</td>
                  <td>{eachData.number}</td>
                  <td>{eachData.desc}</td>
                  <td>
                    <Link to="/update">
                        <button className="btn btn-success" onClick={()=>setToLocalStorage(eachData.id,eachData.name,eachData.email,eachData.number,eachData.desc)}>Edit</button>
                    </Link>
                    
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
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

export default Read;
