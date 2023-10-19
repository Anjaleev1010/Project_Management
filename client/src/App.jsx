import Signup from "./components/registeration/Signup";
import Signin from "./components/registeration/Signin";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import "./App.css";
import Header from "./components/header/Header";
// import Signin from './components/registration/Signin';
// import Signup from './components/registration/Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/main.scss";
import Home from "./pages/home/Home";
// import Dashboard from './pages/dashboard/Dashboard';
// import Dasboard from './pages/Dashboard/Dashboard';
// import RequireAuth from './utils/RequireAuth';
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard/Dashboard";
import Gantt from "./components/Gantt";


import Home3 from "./Comp3/Home3";
import Register3 from "./Comp3/Register3";
import Edit3 from "./Comp3/Edit3";
import Detail3 from "./Comp3/Detail3";
import Sidebar from "./components/Sidebar1/sidebar1";
import Upload from "./pages/uploads/Upload";
import Creates from "./Comp1/Creates";
import Read from "./Comp1/Read";
import Update from "./Comp1/Update";
import Procreate from "./Comp2/Procreate";
import Proupdate from "./Comp2/Proupdate";
import Proread from "./Comp2/Proread";
// import Chart1 from "./Comp2/Chart1";
// import { LineChart } from "recharts";



// import practice from './pages/Dashboard/Practice/practice';
const App = () => {
  // return (
  // const { auth } = useSelector((state) => ({ ...state }));
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* // element={!auth.currentUser ? <Signin /> : <Dasboard />} */}

          <Route
            path="/Dashboard"
            element={<Dashboard />}
            // element={!auth.currentUser ? <Signup /> : <Dasboard />}
          />

          <Route
            path="/Dashboard"
            element={
              // <RequireAuth>
              <Dashboard />
              // </RequireAuth>
            }
          />
            
          <Route
            path="/projects/project"
            element={
              // <RequireAuth>
              <Home3 />
              // </RequireAuth>
            }
          />
          
          
          <Route
            path="/Details3"
            element={
              // <RequireAuth>
              <Detail3 />
              // </RequireAuth>
            }
          />
          
          
          <Route
            path="/Edit3"
            element={
              // <RequireAuth>
              <Edit3 />
              // </RequireAuth>
            }
          />
          
          
          <Route
            path="/register3"
            element={
              // <RequireAuth>
              <Register3 />
              // </RequireAuth>
            }
          />
          <Route
            path="/charts"
            element={
              // <RequireAuth>
              <Gantt />
              // </RequireAuth>
            }
          />
          <Route
            path="/sidebar"
            element={
              // <RequireAuth>
              <Sidebar />
              // </RequireAuth>
            }
          />
		  <Route
            path="/uploads"
            element={
              // <RequireAuth>
              <Upload/>
              // </RequireAuth>
            }
          />
          <Route exact
            path="/create"
            element={
              // <RequireAuth>
              <Creates/>
              // </RequireAuth>
            }
          />
          <Route exact
            path="/procreate"
            element={
              // <RequireAuth>
              <Procreate/>
              // </RequireAuth>
            }
          />
          <Route exact
            path="/read"
            element={
              // <RequireAuth>
              <Read/>
              // </RequireAuth>
            }
          />
          <Route exact
            path="/proread"
            element={
              // <RequireAuth>
              <Proread/>
              // </RequireAuth>
            }
          />
          <Route exact
            path="/members"
            element={
              // <RequireAuth>
              <Read/>
              // </RequireAuth>
            }
          />
          <Route exact
            path="/update"
            element={
              // <RequireAuth>
              <Update/>
              // </RequireAuth>
            }
          />
          <Route exact
            path="/proupdate"
            element={
              // <RequireAuth>
              <Proupdate/>
              // </RequireAuth>
            }
          />
          {/* <Route exact
            path="/Linechart"
            element={
              // <RequireAuth>
              <LineChart/>
              // </RequireAuth>
            }
          />
          <Route exact
            path="/chart1"
            element={
              // <RequireAuth>
              <Chart1/>
              // </RequireAuth>
            }
          /> */}
        
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// function App() {

// export default App;
