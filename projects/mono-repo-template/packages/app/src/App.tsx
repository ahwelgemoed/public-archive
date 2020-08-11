import React from 'react';
import logo from './logo.svg';
import './App.css';

import { sum, sums, C } from '@cloud/common';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>sum {sum(12, 2)}</p>
        <p>sums {sums(12, 2)}</p>
        <C />
      </header>
    </div>
  );
};

export default App;
