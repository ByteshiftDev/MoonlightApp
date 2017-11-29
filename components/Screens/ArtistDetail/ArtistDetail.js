/*
    Screen to display Artist's profile picture, bio, other work
*/

import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";

import Style from "../../Style";

export default class ArtistDetail extends Component {
  static navigationOptions = {
    title: "Artist Detail"
  };

  render() {
    const { navigate } = this.props.navigation;
    const { artist } = this.props.navigation.state.params;

    return (
      <View style={Style.myView}>
        <Text style={Style.myText}>{artist.name.first}</Text>
      </View>
    );
  }
}
