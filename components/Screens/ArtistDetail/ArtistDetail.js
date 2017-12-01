/*
    Screen to display Artist's profile picture, bio, other work
*/

import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
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
      <View style={Style.artistDetailContainer}>
        <View style={Style.avatarContainer}>
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
        <View style={Style.artContainer}>
          <FlatList
            numColumns={2}
            data={[
              { image: artist.picture.large },
              { image: artist.picture.large },
              { image: artist.picture.large },
              { image: artist.picture.large }
            ]}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <Image style={Style.box} source={{ uri: item.image }} />
            )}
          />
        </View>
      </View>
    );
  }
}
