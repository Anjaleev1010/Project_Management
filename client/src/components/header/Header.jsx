// import './header.scss'
// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../../styles/components/_button.scss';


// const header=() =>{
//   return (
//     <div>
//         <nav className='header'>
//             <div className="header_logo">
//                 <h5>Organiza</h5>
//             </div>
            
//             <div className="header_button">
//             <Link to='/signin'>
//               <button className='button'>Sign in</button>
// 						</Link>
// 						<Link to='/signup' className='button'>
//               <button className='button'>Register</button>
// 						</Link>
//             {/* <Link to='/signin' className='button'> */}
// 					    {/* <button className='button'>Sign in</button> */}
// 					  {/* </Link> */}
//             {/* <Link to='/signup' className='button'> */}
// 					    {/* <button className='button'>Register</button> */}
// 					  {/* </Link> */}
//             </div>
//         </nav>
//     </div>
//   )
// }

// export default header

import React from 'react'
// import './header.scss';
import './header.css'
import '../../styles/components/_button.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutSuccess } from '../../redux/authSlice';
import history from '../../history';

const header = () => {
  const dispatch = useDispatch();
	const { auth } = useSelector((state) => ({ ...state }));

	const handleClick = (e) => {
		e.preventDefault();
		dispatch(logoutSuccess());
		localStorage.removeItem('auth');
		history.push('/signin');
		window.location.reload();
	};
  return (
		<div>
			<nav className='header'>
				<div className='header__logo'>
					<h5>Organiza</h5>
				</div>
				<div className='header__buttons'>
					{auth.currentUser && auth.currentUser.token ? (
						<Link to='/signin' className='button' onClick={handleClick}>
							SignOut
						</Link>
					) : (
						<>
							<Link to='/signin' className='button'>
								SignIn
							</Link>
							<Link to='/signup' className='button'>
								SignUp
							</Link>
						</>
					)}
				</div>
			</nav>
		</div>
	);
};

export default header



