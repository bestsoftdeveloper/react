import React from 'react';
import { render } from 'react-dom';
import Counter from './components/counter';

// https://daveceddia.com/how-does-redux-work/
const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById('root'));