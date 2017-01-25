import React, {Component} from 'react';
import {Text, View} from 'react-native';
const styles = require('../../styles/styles.js');

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.authTitle}>Pairachute</Text>
        <Text>Welcome, {this.props.user.email}!</Text>
      </View>
    );
  }
}

module.exports = Home
