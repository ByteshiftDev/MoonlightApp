/*
    Screen to show list of artists to choose from
*/

import React, { Component } from "react";
import { AppRegistry, View, Text, FlatList } from "react-native";

import Style from "../../Style";
import ArtistData from "./ArtistData";

export default class ArtistList extends Component {
  static navigationOptions = {
    title: "Artist List"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={Style.myView}>
        <ArtistData />
        <Text onPress={() => navigate("Home")} style={Style.myText}>
          Go Home
        </Text>
      </View>
    );
  }
}
