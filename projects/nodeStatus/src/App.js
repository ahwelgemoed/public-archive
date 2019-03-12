import React, { Component } from 'react';
import ProductionNode from './ProductionNode';
import OfflineDisplay from './OfflineDisplay';
import DevNode from './DevNode';
import { Offline, Online } from 'react-detect-offline';
import './App.css';

class App extends Component {
  state = { count: 1 };
  tick() {
    this.setState({ count: this.state.count + 1 });
    if (this.state.count >= 43200) {
      window.location.reload(true);
    }
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  componentDidMount() {
    this.startTimer();
    fetch('https://socket.mto.group:1337/', {
      headers: new Headers({ 'content-type': 'application/json' }),
      mode: 'no-cors'
    }).then(function(response) {
      console.log(response);
    });
  }
  render() {
    return (
      <div className="">
        <div className="row">
          <Offline>
            <OfflineDisplay />
          </Offline>
          <Online>
            <div className="six columns">
              <ProductionNode />
            </div>
            <div className="six columns">
              <DevNode />
            </div>
          </Online>
        </div>
      </div>
    );
  }
}

export default App;
