import React, { Component } from 'react';
import moment from 'moment';
import Firebase from './firebase';

export default class NodeDown extends Component {
  state = { count: 1 };
  tick() {
    this.setState({ count: this.state.count + 1 });
  }
  startTimer() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    if (this.state.count <= 3) {
    } else {
      Firebase.database()
        .ref(this.props.name)
        .push({ howLong: this.state.count, time: Date.now() });
    }
  }
  render() {
    const formatted = moment.utc(this.state.count * 1000).format('HH:mm:ss');
    return (
      <React.Fragment>
        <span className="pulse">
          <h2 className="red">
            NODE {this.props.name} DOWN{' '}
            <span className="bloky">{formatted}</span>
          </h2>
        </span>
      </React.Fragment>
    );
  }
}
