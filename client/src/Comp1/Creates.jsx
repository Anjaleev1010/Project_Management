import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Creates = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [number, setNumber] = useState("");
const [desc, setDesc] = useState("");
const history= useNavigate()

const header={"Access-Control-Allow-Origin":"*"}

const handleSubmit =(e)=>{
  e.preventDefault();
  console.log("click");
  axios.post('https://6530363a6c756603295e691a.mockapi.io/Crud1',
    {name : name, email : email, number : number,desc : desc,
    header,
    }
  
  )
  
  .then(()=>{
    history("/read")
  })
};
  return (
    <div className="container p-4">
      {/* <NavLink to="/">Home</NavLink> */}
      <form className="mt-4 ">
        <div className="row">
          
          <div className="mb-3 col-lg-8 col-md-6 col-12">
            <label className="form-label">
              Member Name
            </label>
            <input
              type="text"                           
              name="name"
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
              onChange={(e)=>setDesc(e.target.value)}            
              className="form-control"              
              aria-describedby="emailHelp"
            />
          </div>              
             <div></div>
          <button
            type="submit"
            className="btn btn-primary col-lg-1 col-md-6 col-12 " onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Creates;
