import React, { Component } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
// import AppNavigator from './AppNavigator';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import PoemsList from './components/PoemsList';
import PostPoem from './components/PostPoem';
import About from './components/About';

export default class App extends Component {
  state = {
    showRealApp: true
  };

  _onDone = async () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    AsyncStorage.clear();
    // await AsyncStorage.setItem('iniLoad', JSON.stringify(obj));
    await this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return <AppNavigator />;
    } else {
      return <AppIntroSlider slides={slides} onDone={this._onDone} />;
    }
  }
}
const AppNavigator = StackNavigator({
  Home: { screen: Home },
  About: { screen: About },
  PoemsList: { screen: PoemsList },
  PostPoem: { screen: PostPoem }
});
AppRegistry.registerComponent('App', () => App);
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: screenWidth,
    height: screenHeight
  },
  title: {
    fontSize: 22,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16
  },
  text: {
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16
  }
});

const slides = [
  {
    key: '1',
    title: 'The idea is simple',
    text: '',
    backgroundColor: '#000',
    titleStyle: { fontFamily: 'Proxima Nova Alt' },
    textStyle: { fontFamily: 'Montserrat-SemiBold' }
  },
  {
    key: '2',
    title: 'A simple space to add...',
    text: `... a Thought/Poem or anything really, It’s
    anonymous and very open.`,
    backgroundColor: '#000',
    titleStyle: { fontFamily: 'Proxima Nova Alt' },
    textStyle: { fontFamily: 'Montserrat-SemiBold' }
  },
  {
    key: '3',
    title: `It can't be deleted...`,
    text: `or edited.`,
    backgroundColor: '#000',
    titleStyle: { fontFamily: 'Proxima Nova Alt' },
    textStyle: { fontFamily: 'Montserrat-SemiBold' }
  },
  {
    key: '4',
    title: ' Use any Language or Emoji',
    text: `We ask that you post anything you want as long as it's true,make it short, make it long, just fucking make it. `,
    backgroundColor: '#000',
    titleStyle: { fontFamily: 'Proxima Nova Alt' },
    textStyle: { fontFamily: 'Montserrat-SemiBold' }
  },
  {
    key: '5',
    title: 'You can add your Instagram handle...',
    text: `...if you want to be found, or leave it blank.`,
    backgroundColor: '#000',
    titleStyle: { fontFamily: 'Proxima Nova Alt' },
    textStyle: { fontFamily: 'Montserrat-SemiBold' }
  }
];
