/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component, PropTypes } from 'react';
import {  AppRegistry,Navigator, Text, TouchableHighlight, View } from 'react-native';
import MyScene from './MyScene';
export default class SimpleNavigationApp extends Component {
  render() {
    return (
         <Navigator
        initialRoute={{ title: 'Scene0', index: 0 }}
        renderScene={(route, navigator) =>
	
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
		
        }
      />
    )
  }
}


AppRegistry.registerComponent('myReactApp', () => SimpleNavigationApp);