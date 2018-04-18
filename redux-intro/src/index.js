// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import { applyMiddleware, combineReducers, createStore } from "redux";

const userReducer = (state={
		user:{
			name:"John",
			age:0
		}
	}, action) =>{
	if(action.type === "CHANGE_NAME"){
		state = {...state, name: action.payload}
	}
	if(action.type === "CHANGE_AGE"){
		state = {...state, age: action.payload}
	}
	return state;
};

const tweetsReducer = (state={
		tweets:[]
	}, action) =>{
	if(action.type === "INC"){
		return state+1;
	}
	return state;
};

const reducers = combineReducers(
{
	user:userReducer,
	tweet:tweetsReducer
});

const logger = (store) => (next) => (action) =>{
	console.log("action fired", action);
	next(action);
};

const middleware = applyMiddleware(logger);

const store = createStore(reducers, middleware);

store.subscribe(()=>{
	console.log("store changed ", store.getState());
});

store.dispatch({type:"INC", payload:1});
store.dispatch({type:"INC", payload:1});
store.dispatch({type:"INC", payload:1});
store.dispatch({type:"INC", payload:1});
