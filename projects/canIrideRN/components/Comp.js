import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import CurrentWeather from './CurrentWeather';
import Alarm from './Alarm';
import { Container, Input } from 'native-base';

export default class Comp extends Component {
  state = {
    endpoint: 'http://192.168.8.101:4001',
    weather: '',
    data: '',
    letAlarmOff: false
  };
  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('FromAPI', data =>
      this.setState({
        weather: data
      })
    );
    socket.on('LETALARMOFF', data => {
      this.setState({
        letAlarmOff: data
      });
    });
    socket.on('ITSRAIN', data => {
      this.setState({
        itsRain: data
      });
    });
  }
  onPressTime = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('wetTime', this.state.wetTime);
    // Alert.alert('Clickc');
  };
  render() {
    console.log(this.state.letAlarmOff);

    return (
      <Container style={styles.container}>
        <CurrentWeather
          current={this.state.weather.current}
          location={this.state.weather.location}
        />

        {this.state.letAlarmOff ? <Alarm /> : null}
        <Input
          placeholder="Time"
          value={this.state.wetTime}
          onChangeText={text => this.setState({ wetTime: text })}
        />
        <Button
          onPress={this.onPressTime}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#282c34'
  }
});
