// import React from 'react'
// import './home.scss'
// import Dashboard from '../Dashboard/Dashboard'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const Home = () => {
// //   const { auth } = useSelector((state) => ({ ...state }));
// // 	const { currentUser } = auth;
// 	return (
// 		<div className='home'>
// 			<div className='home__container'>
// 				<h2>Organize it all</h2><br/>
// 				<p>With TaskManager</p><br/>
//         	{/* <button className='button'>Get Started</button> */}
// 			<Link to='/Dashboard' className='button' >
// 				Get Started
// 			</Link>

// 			</div>
// 			{/* <Router>
// 				<Header />
// 				<Routes>
// 					<Route path='/Dasboard' element={<Dasboard />} />
// 				</Routes>
// 			</Router> */}
// 		</div>
// 	);
// };
// // }

// export default Home

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;
  return (
    <div className="home">
      <div className="home__container">
        
          <h2>Organize it all</h2>
          <p>
            With
				<h1>Organiza</h1>
          </p>
        

        {currentUser && currentUser.token ? (
          <Link to="/dashboard" className="button">
            Get Started
          </Link>
        ) : (
          <Link to="/signin" className="button">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
