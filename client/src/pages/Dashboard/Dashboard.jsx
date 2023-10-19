// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import './dashboard.scss';
// // import { useEffect } from 'react';
// import Header from '../../components/header/Header';
// // import He;


// const Dashboard = () => {
//   return (
//     <div>
// 		<Header />
// 			<div className='dashboard'>
// 				<div className='dashboard__left'>
// 					<Sidebar />
// 				</div>
// 				<div className='dashboard__right'>
// 					<div className='dashboard__rightContent'>
// 						<h2>Task Status Dashboard</h2>
// 						<div className='taskcount'>
// 							{/* <div className='todo box'>Todo - {pendingTask.length}</div> */}
// 							<div className='todo box'></div>
// 							<div className='done box'></div>
// 							{/* <div className='done box'>Complete - {completedTask.length}</div> */}
// 							<div className='doing'>Complete - {completedTask.length}</div>
// 						</div>
// 						<div className='createButton'>
// 							<Link to='/taskmanager' className='button'>
// 								Create Task
// 							</Link>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Dashboard



import Sidebar from '../../components/sidebar/Sidebar';
import ProgressBar from 'react-bootstrap/ProgressBar' //for progress
import { fetchCount } from '../../blink/Actions/index.js';


import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import './dashboard.scss';
// import { useEffect } from 'react';
// import Header from '../../components/header/Header';
import React, { useState } from 'react'
import { LineChart } from 'recharts';
// import { LineChart } from 'recharts';
// import {getData} from 'client/src/Comp2/Proread.jsx'

const Dashboard = () => {
	
	return (
		    <div>
					 <div className='dashboard'>
						<div className='dashboard__left'>
							<Sidebar />
						</div>
					 	<div className='dashboard__right'>
							<div className='dashboard__rightContent'>
								<h2>Task Status Dashboard</h2>
								<div className='ProgressBar'>
								<ProgressBar>
								{/* now variable  */}
										<ProgressBar striped variant="danger" now={10} key={fetchCount.Todo} label={`Todo`} />
										<ProgressBar variant="warning" now={20} key={fetchCount.Ongoing} label={`Ongoing`} />
										<ProgressBar striped variant="success" now={35} key={1} label={`Completed`} />
										</ProgressBar>
								</div>
								<div className='taskcount'> 
									{/* <div className='todo box'>Todo - {pendingTask.length}</div> */}
									<div className='todo box'>{fetchCount.Todo}</div>
									<div className='doing box'>{fetchCount.Ongoing}</div>
									{/* <div className='done box'>Complete - {completedTask.length}</div> */}
									<div className='done box'>{1}</div>
								</div>
								<div className='createButton'>
									<Link to='/proread' className='button'>
										Create Task
									</Link>
								</div>
							</div>
							{/* <div><LineChart/></div> */}
							
						</div>
					</div> 
				</div>

			);
		};

export default Dashboard