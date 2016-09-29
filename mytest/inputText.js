import React, { Component } from 'react';
import {  Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'translate  word'};
  }

  render() {
    return (
      <View style={{paddingTop: 100}}>
        <TextInput
          style={{height: 100}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word ).join(' ')}
        </Text>
      </View>
    );
  }
}