import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";
import { StackNavigator } from "react-navigation";

import Home from "./components/Screens/Home/Home";
import ArtistList from "./components/Screens/ArtistList/ArtistList";
import ArtistDetail from "./components/Screens/ArtistDetail/ArtistDetail";

// List of screens to navigate
const AppNavigation = StackNavigator({
  Home: { screen: Home },
  ArtistList: { screen: ArtistList },
  ArtistDetail: { screen: ArtistDetail }
});

export default class App extends Component {
  render() {
    return <AppNavigation />;
  }
}

AppRegistry.registerComponent("App", () => App);
