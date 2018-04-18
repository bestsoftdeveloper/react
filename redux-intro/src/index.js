// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import { createStore } from "redux";
const reducer = function(){

};

const store = createStore(reducer,0);

store.subscribe(()=>{
	console.log("store changed ", store.getState());
});

store.dispatch({type:"A", payload:1});
