import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'column',justifyContent: 'flex-start', 
	  alignItems: 'stretch',paddingTop:60}}>
        <View style={{ height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ height: 150, backgroundColor: 'skyblue'}} />
        <View style={{ height: 250, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};