/*
    Screen to fetch Artist data
*/

import React, { Component } from "react";
import { AppRegistry, View, Text, FlatList } from "react-native";

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
      <FlatList
        data={this.state.data}      // Hold array
        keyExtractor={(x, i) => i}  // 'x' is object in array, 'i' is index
        renderItem={(               // Render each item in array
          { item }                  
        ) => <Text>{`${item.name.first} ${item.name.last}`}</Text>}
      />
    );
  }
}
