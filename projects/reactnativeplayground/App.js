import React, { Component } from 'react';
// import AppNavigator from './AppNavigator';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import PoemsList from './components/PoemsList';
import PostPoem from './components/PostPoem';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppNavigator />;
  }
}
const AppNavigator = StackNavigator({
  Home: { screen: Home },
  PostPoem: { screen: PostPoem },
  PoemsList: { screen: PoemsList }
});
AppRegistry.registerComponent('App', () => App);
