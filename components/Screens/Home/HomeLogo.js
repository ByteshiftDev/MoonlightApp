<<<<<<< HEAD
import React, { Component } from 'react'
import { AppRegistry, View, Text, Image } from 'react-native'
=======
import React, { Component } from "react";
import { View, Text } from "react-native";
>>>>>>> master

import Style from "../../Style";

export default class HomeLogo extends Component {
  render() {
    return (
      <View style = { Style.logoView }>
        <Image style = { Style.homeLogo } source={require('../../../assets/images/logo.png')} />
      </View>
    );
  }
}
