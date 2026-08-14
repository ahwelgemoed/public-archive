import React, { Component } from 'react';
import Websocket from 'react-websocket';
import NodeDown from './NodeDown';
import NodeUp from './NodeUp';
import './App.css';

class ProductionNode extends Component {
  state = {
    endpoint: 'wss://socket.mto.group:1337',
    nodeUp: false
    // endpoint: 'ws://192.168.1.170:1337'
  };
  handleData(data) {
    // let result = JSON.parse(data);
  }
  onOpen = () => {
    this.setState({
      nodeUp: true
    });
    // console.log('open');
  };

  onClose = () => {
    this.setState({
      nodeUp: false
    });
    // console.log('onClose');
  };

  componentDidMount() {}
  render() {
    const { nodeUp } = this.state;
    return (
      <div className={nodeUp ? 'allGood' : 'breaky'}>
        <Websocket
          url={this.state.endpoint}
          onMessage={this.handleData.bind(this)}
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
        />
        <div className="Aligner">
          <div className="Aligner-item">
            {nodeUp ? (
              <React.Fragment>
                <NodeUp name={'PRODUCTION'} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <NodeDown name={'PRODUCTION'} />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductionNode;
