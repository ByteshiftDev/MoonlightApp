/*
    Screen to hold the logo and a button to transition to Artist List
*/

import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import Button from 'react-native-button';

import Style from '../../Style'
import HomeLogo from './HomeLogo'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { Style.homeView }>
        <HomeLogo/>
        <Button style = { Style.homeButton }onPress= { ()=> navigate('ArtistList') }>View Artist List</Button>
      </View>
    )
  }
}
