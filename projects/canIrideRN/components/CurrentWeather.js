import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Card, CardItem, Body, Text } from 'native-base';

export default class CurrentWeather extends Component {
  render() {
    const { current, location } = this.props;
    return (
      <View>
        {current ? (
          <Card>
            <CardItem style={{ backgroundColor: '#1f2627', color: '#bdbdbd' }}>
              <Body style={{ backgroundColor: '#1f2627', color: '#bdbdbd' }}>
                <Text style={{ backgroundColor: '#1f2627', color: '#bdbdbd' }}>
                  Temp: {current.feelslike_c}
                </Text>
                <Text>Rain: {current.precip_mm}</Text>
                <Text>Wind: {current.wind_kph}</Text>
              </Body>
            </CardItem>
          </Card>
        ) : (
          <Text> Loading </Text>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#282c34'
    // color: '#bdbdbd'
  }
});
