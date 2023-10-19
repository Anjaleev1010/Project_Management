// import React from 'react'
import './Sidebar.scss';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';


// const Sidebar = () => {
// 	// const { auth } = useSelector((state) => ({ ...state }));
// 	// const { currentUser } = auth;
//     return (
// 		<div>
// 			<div className="sidebar">
// 			<ul className='sidebar'>
// 				<li className='list-item'>
// 					{/* <h5>{currentUser.username}</h5> */}
// 				</li>
// 			</ul>
// 			</div>
// 		 	<ul className='sidebar'>
// 				<li className='list-item'>
// 					{/* <h5>{currentUser.username}</h5> */}
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/dashboard'>Dashboard</Link>
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/TaskManager'>Task</Link>
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/Gantt'>Gantt Chart</Link>
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/dashboard'>Chats</Link>
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/dashboard'>Practice</Link>
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/dashboard'>Notification</Link>
// 				</li>
// 				<li className='list-item'>
// 					<Link to='/settings'>Settings</Link>
// 				</li>
// 			</ul> 
// 			Sidebar
// 		</div>
// 	);
// };

// export default Sidebar

// // import './Sidebar.scss';
// // import { useSelector } from 'react-redux';
// // import { Link } from 'react-router-dom';

// // const Sidebar = () => {
// // 	const { auth } = useSelector((state) => ({ ...state }));
// // 	const { currentUser } = auth;

// // 	return (
// // 		<div>
// // 			<ul className='sidebar'>
// // 				<li className='list-item'>
// // 					<h5>{currentUser.username}</h5>
// // 				</li>
// // 				<li className='list-item'>
// // 					<Link to='/dashboard'>Dashboard</Link>
// // 				</li>
// // 				<li className='list-item'>
// // 					<Link to='/settings'>Settings</Link>
// // 				</li>
// // 			</ul>
// // 		</div>
// // 	);
// // };

// // export default Sidebar;




import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaLaptopCode,
    FaClipboardList
}from "react-icons/fa";
import { HiMiniPaperClip } from "react-icons/hi2";
import { BiBell ,BiBug ,BiClipboard} from "react-icons/bi";
// import { IconName } from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/proread",
            name:"Projects",
            icon:<FaClipboardList/>
        },
        {
            path:"/projects/project",
            name:"issues",
            icon:<BiBug/>
        },
        {
            path:"/members",
            name:"Members",
            icon:<FaUserAlt/>
        },
        {
            path:"/charts",
            name:"Gantt Chart",
            icon:<FaRegChartBar/>
        },
        {
            path:"/uploads",
            name:"Uploads",
            icon:<HiMiniPaperClip/>
        }
        // {
        //     path:"/product",
        //     name:"Practice",
        //     icon:<FaLaptopCode/>
        // },
        // {
        //     path:"/notifications",
        //     name:"Notifications",
        //     icon:<BiBell/>
        // },
        // {
        //     path:"/Pro",
        //     name:"Projects ",
        //     icon:<FaClipboardList/>
        // }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">

                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;