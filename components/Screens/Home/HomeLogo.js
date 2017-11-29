import React, { Component } from 'react'
import { AppRegistry, View, Text, Image } from 'react-native'

import Style from '../../Style'

export default class HomeLogo extends Component {
  render() {
    return (
      <View style = { Style.logoView }>
        <Image style = { Style.homeLogo } source={require('../../../assets/images/logo.png')} />
      </View>
    )
  }
}
