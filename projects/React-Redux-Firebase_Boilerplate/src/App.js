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
            <h1>Hi I'm wrapped in My Provider and Store</h1>
            Build Something
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
