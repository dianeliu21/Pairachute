import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native'
const styles = require("../../styles/styles.js");

class Tab extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log("HELLO FROM TAB!!!")
    console.log(this.props)
    return(
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

module.exports = Tab;
