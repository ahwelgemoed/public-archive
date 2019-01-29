import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// Redux //
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <h1>Leas Portfolio</h1>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
