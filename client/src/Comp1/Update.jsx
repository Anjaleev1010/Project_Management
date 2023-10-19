import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [desc, setDesc] = useState("");

        const navigate = useNavigate();
    useEffect(() => {
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));
      setNumber(localStorage.getItem("number"));
      setDesc(localStorage.getItem("desc"));
    }, [])
    
    const handleUpdate=(e)=>{
        e.preventDefault();
        console.log("Id:",id);
        axios.put(`https://6530363a6c756603295e691a.mockapi.io/Crud1/${id}`,
        {name : name, email : email, number : number,desc : desc,
        
            }).then(()=>{
                navigate("/read");
            })
    }
    
  return (
    <div className='container p-7'>
        <div className='d-flex flex-column'>
        <h2>Update</h2>
        </div>
        <div className='d-flex flex-column'>
        <form className="mt-8 ">
        <div className="row">
          
          <div className="mb-3 col-lg-8 col-md-6 col-12">
            <label className="form-label">
              Member Name
            </label>
            <input
              type="text"                           
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"              
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-8 col-md-6 col-12">
            <label className="form-label">
              Email Id
            </label>
            <input
              type="email"                           
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"              
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-16 col-12">
            <label  className="form-label">
              Phone Number
            </label>
            <input
              type="number"                           
              name="number"
              value={number}
              onChange={(e)=>setNumber(e.target.value)}          
              className="form-control"              
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label  className="form-label">
              Job Designation
            </label>
            <input
              type="text"                           
              name="desc"
              value={desc}
              onChange={(e)=>setDesc(e.target.value)} 
                       
              className="form-control"              
              aria-describedby="emailHelp"
            />
          </div>              
            <Link to="/read">
          <button
            type="submit"
            className="btn btn-primary col-lg-1 col-md-6 col-12 " 
            onClick={handleUpdate}
          >
            Update
          </button></Link>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Update