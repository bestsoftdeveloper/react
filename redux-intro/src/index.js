// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import { applyMiddleware, combineReducers, createStore } from "redux";
import { logger } from "redux-logger"
import axios from "axios";
import thunk from "redux-thunk";

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

const loggerCustom = (store) => (next) => (action) =>{
	console.log("action fired", action);
	next(action);
};

const error = (store) => (next) => (action) =>{
	console.log("action fired", action);
	try{
		next(action);
	}
	catch(e){
		console.log("Erooooooooor!",e);
	}
};

const middleware = applyMiddleware(thunk, logger, error);

const store = createStore(reducers, middleware);

store.subscribe(()=>{
	console.log("store changed ", store.getState());
});

// store.dispatch({type:"INC", payload:1});
// store.dispatch({type:"INC", payload:1});
// store.dispatch({type:"INC", payload:1});
// store.dispatch({type:"INC", payload:1});

store.dispatch((dispatch)=>
{
	dispatch({type:"GET_USERS"});
	axios.get("http://rest.learncode.academy/api/wstern/users")
	.then((response)=>{
		console.log(response);
		dispatch({type:"USERS", payload: response.data});
	})
	.catch((err)=>{
		console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
		dispatch({type:"GET_USERS_ERROR", payload: err});
	});
	
});

