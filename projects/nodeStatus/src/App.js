import React, { Component } from 'react';
import ProductionNode from './ProductionNode';
import OfflineDisplay from './OfflineDisplay';
import DevNode from './DevNode';
import { Offline, Online } from 'react-detect-offline';
import './App.css';

class App extends Component {
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
