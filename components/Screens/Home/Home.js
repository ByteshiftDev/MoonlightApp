/*
    Screen to hold the logo and a button to transition to Artist List
*/

import React, { Component } from 'react'
import { AppRegistry, View, Text, Button } from 'react-native'

import Style from '../../Style'
import HomeLogo from './HomeLogo'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = { Style.myView }>
        <HomeLogo/>
        <Button onPress= { ()=> navigate('ArtistList') } 
        title = "View Artist List" 
        color = "#841584"/> 
      </View>
    )
  }
}

