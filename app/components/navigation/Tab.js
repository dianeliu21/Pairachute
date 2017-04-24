import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native'
const styles = require("../../styles/styles.js");

class Tab extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Text>{this.props.user.email}</Text>
      </View>
    );
  }
}

module.exports = Tab;
