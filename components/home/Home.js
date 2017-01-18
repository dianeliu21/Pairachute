import React, {Component} from 'react';
import {Text} from 'react-native';
const styles = require('../../styles/styles.js');

class Home extends Component {
  render() {
    return(
      <Text style={styles.authTitle}>Pairachute</Text>
    );
  }
}

module.exports = Home
