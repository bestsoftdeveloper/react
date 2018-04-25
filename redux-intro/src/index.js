import React from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import CounterContainer from './components/counterContainer';
import HomePageContainer from './components/homePageContainer';

import counterReducer  from './components/counterReducer';
// https://daveceddia.com/how-does-redux-work/
import CounterOne from './components/counterOne';

const store = createStore(counterReducer);

const App = () => (
  <Provider store={store}>
    <HomePageContainer/>
   </Provider>

 // <CounterOne></CounterOne>
);

render(<App />, document.getElementById('root'));