// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Store } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux'
// import { store } from '@reduxjs/toolkit'

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <Provider store={store}>
// //   {/* <React.StrictMode> */}
// //     <App />
// //   {/* </React.StrictMode> */}
    
// //   {/* // </Provider>, */}
// // )
// ReactDOM.createRoot(document.getElementById('root')).render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>
// );


import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
);