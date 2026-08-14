import React, { Component } from 'react';
import moment from 'moment';
import Firebase from './firebase';

export default class NodeUp extends Component {
  state = { lastDownTime: [] };
  componentWillMount() {
    let messagesRef = Firebase.database()
      .ref(this.props.name)
      .orderByKey()
      .limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ lastDownTime: message });
    });
  }
  render() {
    return (
      <React.Fragment>
        <span className="pulse">
          <h2>NODE {this.props.name} UP</h2>
        </span>
        {this.state.lastDownTime.text ? (
          <React.Fragment>
            <h2>
              <b>Last Down Time</b>
            </h2>
            <h2 className="noSpace">
              Duration:{' '}
              {moment
                .utc(this.state.lastDownTime.text.howLong * 1000)
                .format('HH:mm:ss')}
            </h2>
            <h2 className="noSpace">
              Came Back Up :{' '}
              {moment(this.state.lastDownTime.text.time).format('HH:mm')}
            </h2>
          </React.Fragment>
        ) : null}
      </React.Fragment>
    );
  }
}
