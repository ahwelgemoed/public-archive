import React, { Component } from 'react';
// import AppNavigator from './AppNavigator';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import PoemsList from './components/PoemsList';
import PostPoem from './components/PostPoem';
import About from './components/About';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
const AppNavigator = StackNavigator({
  Home: { screen: Home },
  About: { screen: About },
  PoemsList: { screen: PoemsList },
  PostPoem: { screen: PostPoem }
});
AppRegistry.registerComponent('App', () => App);
