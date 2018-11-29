import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  Icon,
  Container,
  Title,
  Subtitle,
  Body,
  CardItem,
  Card,
  Row,
  Col
} from 'native-base';

export default class About extends Component {
  static navigationOptions = {
    headerStyle: {
      height: 80,
      elevation: 0, //remove shadow on Android
      shadowOpacity: 0, //remove shadow on iOS
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      borderRadius: 5,
      backgroundColor: '#fff',
      paddingBottom: 5
    },
    headerTintColor: 'black',
    headerTitle: (
      <View style={{ width: '100%' }}>
        <Title
          style={{ fontFamily: 'Streamster', fontSize: 35, color: '#000' }}
        >
          Dis Net Jy
        </Title>
        <Subtitle
          style={{
            fontFamily: 'Proxima Nova Alt',
            fontSize: 16,
            color: '#000'
          }}
        >
          KLYNTJI
        </Subtitle>
      </View>
    )
  };
  render() {
    return (
      <View>
        <Text> Here </Text>
      </View>
    );
  }
}
