import React, { Component } from "react";
import { View, Text } from "react-native";

import Style from "../../Style";

export default class HomeLogo extends Component {
  render() {
    return (
      <View style={Style.myView}>
        <Text style={Style.myText}>Logo</Text>
      </View>
    );
  }
}
