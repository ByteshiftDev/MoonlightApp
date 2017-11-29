import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from './components/Screens/Home/Home'
import ArtistList from './components/Screens/ArtistList/ArtistList'
import ArtistDetail from './components/Screens/ArtistDetail/ArtistDetail'
import { AppLoading, Font } from 'expo'

// List of screens to navigate
const AppNavigation = StackNavigator ({
  Home: { screen: Home },
  ArtistList: { screen: ArtistList },
  ArtistDetail: { screen: ArtistDetail },
});

export default class App extends Component {
  state = { isReady: false }

  componentWillMount() {
    (async() => {
      await Font.loadAsync({
        'Montserrat': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        'MontserratBold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf')
      });
      this.setState({ isReady: true });
    })();
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <AppNavigation/>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
