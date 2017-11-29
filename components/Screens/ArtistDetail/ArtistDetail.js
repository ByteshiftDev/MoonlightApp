/*
    Screen to display Artist's profile picture, bio, other work
*/

import React, { Component } from "react";
import { View, Text } from "react-native";
import { Avatar } from "react-native-elements";

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
        <Avatar
          xlarge
          rounded
          source={{
            uri: artist.picture.large
          }}
          activeOpacity={0.7}
        />
        <Text style={Style.myText}>
          {artist.name.first} {artist.name.last}
        </Text>
      </View>
    );
  }
}
