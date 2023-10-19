// import React from 'react'
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar1/sidebar1";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// function Home1() {
//   return (

//   )
// }

// export default Home1
// import React from 'react'

const Home3 = () => {
  return (
    <div className="d-flex flex-row">
        <div>
          <Sidebar/>
        </div>
        <div className="d-flex flex-column ">
            <div className="d-flex mt-2">
            <div className="add_btn mt-2 mb-2">
            <Link to="/register3" className="button">
              <button className="btn btn-primary"><AddCircleOutlineIcon/></button>
            </Link>
          </div>
            </div>
            <div>
            <table className="table">
            <thead>
              <tr className="table-primary">
                <th scope="col">#</th>
                <th scope="col">Issues Name</th>
                <th scope="col">Set deadline</th>
                <th scope="col">Priority</th>
                <th scope="col" className="table-primary w-500">Description</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Website </td>
                <td>20/10/2023</td>
                <td>Medium</td>
                <td>Food Website</td>
                <td className="d-flex justify-content-evenly">
                  <Link to="/Details3" className="button">
                    <button className="btn btn-success">
                      <VisibilityIcon />
                    </button>
                  </Link>
                  <Link to="/Edit3" className="button">
                    <button className="btn btn-primary">
                      <ModeEditIcon />
                    </button>
                  </Link>
                  <Link className="button">
                    <button className="btn btn-danger">
                      <DeleteIcon />
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Testing </td>
                <td>25/10/2023</td>
                <td>Low</td>
                <td>End to End Testing of Website</td>
                <td className="d-flex justify-content-evenly">
                  <Link to="/Details1" className="button">
                    <button className="btn btn-success">
                      <VisibilityIcon />
                    </button>
                  </Link>
                  <Link to="/Edit1" className="button">
                    <button className="btn btn-primary">
                      <ModeEditIcon />
                    </button>
                  </Link>
                  <Link className="button">
                    <button className="btn btn-danger">
                      <DeleteIcon />
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
            </div>
        </div>
    </div>
  );
};

export default Home3;
{/* <div>
        {/* <Sidebar/> 
      </div>
      <div className="mt-5">
        <div className="container">
          <div className="add_btn mt-2 mb-2">
            <Link to="/register3" className="button">
              <button className="btn btn-primary">Add Data</button>
            </Link>
          </div>
          <table className="table">
            <thead>
              <tr className="table-primary">
                <th scope="col">#</th>
                <th scope="col">Issues Name</th>
                <th scope="col">Set deadline</th>
                <th scope="col">Priority</th>
                <th scope="col">Description</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Website </td>
                <td>20/10/2023</td>
                <td>Medium</td>
                <td>Food Website</td>
                <td className="d-flex justify-content-evenly">
                  <Link to="/Details3" className="button">
                    <button className="btn btn-success">
                      <VisibilityIcon />
                    </button>
                  </Link>
                  <Link to="/Edit3" className="button">
                    <button className="btn btn-primary">
                      <ModeEditIcon />
                    </button>
                  </Link>
                  <Link className="button">
                    <button className="btn btn-danger">
                      <DeleteIcon />
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Testing </td>
                <td>25/10/2023</td>
                <td>Low</td>
                <td>End to End Testing of Website</td>
                <td className="d-flex justify-content-evenly">
                  <Link to="/Details1" className="button">
                    <button className="btn btn-success">
                      <VisibilityIcon />
                    </button>
                  </Link>
                  <Link to="/Edit1" className="button">
                    <button className="btn btn-primary">
                      <ModeEditIcon />
                    </button>
                  </Link>
                  <Link className="button">
                    <button className="btn btn-danger">
                      <DeleteIcon />
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}