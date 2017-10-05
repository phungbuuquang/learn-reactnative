import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import HomeScreen from './src/home'
import TwoPlayer from './src/twoplay'
import ThreePlayer from './src/threeplay'
import DetailTwoPlayer from './src/detailTwoplayer'
import FourPlayer from './src/fourplay'
import DetailFourPlayer from './src/detailFourplayer'
const Stack = StackNavigator({
  Home: {screen: HomeScreen},
  Twoplayer: {screen: TwoPlayer},
  Threeplayer: {screen: ThreePlayer},
  DetailTwoPlayer: {screen: DetailTwoPlayer},
  Fourplayer: {screen: FourPlayer},
  DetailFourPlayer: {screen: DetailFourPlayer}
  
})
export default class demoNavigation extends Component {
  render() {
    return <Stack />
  }
}

