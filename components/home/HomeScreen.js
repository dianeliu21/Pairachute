import React, {Component} from 'react';
import {Text} from 'react-native';
const styles = require('../../styles/styles.js');

class HomeScreen extends Component {
  render() {
    return(
      <Text style={styles.authTitle}>Pairachute</Text>
    );
  }
}

module.exports = HomeScreen
