/*
    Screen to show list of artists to choose from
*/

import React, { Component } from 'react'
import { AppRegistry, View, Text, FlatList } from 'react-native'

import Style from '../../Style'

export default class ArtistList extends Component {
  static navigationOptions = {
    title: 'Artist List'
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style = {Style.myView}>

        <FlatList data = { [{name: 'bob'}, {name: 'tim'}] }     // Hold array
        keyExtractor = { (x, i) => i }                          // 'x' is object in array, 'i' is index
        renderItem = { ({item}) =>                              // Render each item in array
          <Text> 
            {item.name
          }</Text>}   
        />
        
        <Text onPress= { ()=> navigate('Home') } style = {Style.myText} >
          Go Home
        </Text>

      </View>
    )
  }
}

