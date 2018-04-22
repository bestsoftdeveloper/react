import React from 'react';
import { render } from 'react-dom';
import Counter from './components/counter';

const App = () => (
  <div>
    <Counter />
  </div>
);

render(<App />, document.getElementById('root'));