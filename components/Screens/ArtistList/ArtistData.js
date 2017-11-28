/*
    Screen to fetch Artist data
*/

import React, { Component } from "react";
import { AppRegistry, View, Text, FlatList } from "react-native";
import { List, ListItem } from "react-native-elements";

import Style from "../../Style";

export default class ArtistData extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=10");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
      <View>
        <List>
          <FlatList
            data={this.state.data} // Hold array
            keyExtractor={(x, i) => i} // 'x' is object in array, 'i' is index
            renderItem={({ item }) => (
              <ListItem
                roundAvatar
                avatar={{ uri: item.picture.thumbnail }}
                title={`${item.name.first} ${item.name.last}`}
              />
            )}
          />
        </List>
      </View>
    );
  }
}
