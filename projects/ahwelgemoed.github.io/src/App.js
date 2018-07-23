import React, { Component } from 'react';
import Head from './components/head'
import Body from './components/body'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head/>
        <Body/>
  
      </div>
    );
  }
}

export default App;
