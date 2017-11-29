/*
    Screen to show list of artists to choose from
*/

import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";

import Style from "../../Style";

export default class ArtistList extends Component {
  // Setting navigation specifications
  static navigationOptions = {
    title: "Artist List"
  };

  // Holds List of artist
  state = {
    data: []
  };

  // After mounting component, API CALL
  componentWillMount() {
    this.fetchData();
  }

  // API Call to get lists of artists
  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=10");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  // Using react native elements to create list of artists
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <List>
          <FlatList
            data={this.state.data} // Build list using data stored in state
            keyExtractor={(x, i) => i} // 'x' is object in array, 'i' is index acts as unique ID
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                avatar={{ uri: item.picture.thumbnail }}
                title={`${item.name.first} ${item.name.last}`}
                onPress={() => navigate("ArtistDetail", { artist: item })}
              />
            )}
          />
        </List>
      </View>
    );
  }
}
