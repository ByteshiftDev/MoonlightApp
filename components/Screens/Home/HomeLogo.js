import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'

import Style from '../../Style'

export default class HomeLogo extends Component {
  render() {
    return (
      <View style={Style.homeView}>
        <Text style={Style.homeText}>Welcome to</Text>
        <Text style={Style.homeLogo}>Moonlight</Text>
        <Text style={Style.homeText}>Coffee, boutique, and gallery</Text>        
      </View>
    )
  }
}
