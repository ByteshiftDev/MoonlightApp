/*
    Screen to hold the logo and a button to transition to Artist List
*/

<<<<<<< HEAD
import React, { Component } from 'react'
import { AppRegistry, View, Text, Image } from 'react-native'
import Button from 'react-native-button';
import { AppLoading, Font } from 'expo'

=======
import React, { Component } from "react";
import { View, Text, Button } from "react-native";
>>>>>>> master

import Style from "../../Style";
import HomeLogo from "./HomeLogo";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  state = { isReady: false }

  componentWillMount() {
    (async() => {
      await Font.loadAsync({
        'Montserrat': require('../../../assets/fonts/Montserrat/Montserrat-Regular.ttf')
      });
      this.setState({ isReady: true });
    })();
  }

  render() {
    const { navigate } = this.props.navigation;

    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
<<<<<<< HEAD
      <View style = { Style.homeView }>
        <HomeLogo/>
        <Button style = { Style.homeButton } onPress= { ()=> navigate('ArtistList') }>View Artists</Button>
=======
      <View style={Style.myView}>
        <HomeLogo />
        <Button
          onPress={() => navigate("ArtistList")}
          title="View Artist List"
          color="#841584"
        />
>>>>>>> master
      </View>
    );
  }
}
