import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
const styles = require('../../styles/styles.js');

class Prompt extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.promptContainer}>
        <Text style={styles.promptHeading}>Pairachute Prompt</Text>
        <Text>{this.props.data.message}</Text>
      </View>
    )
  }
}

module.exports = Prompt;
