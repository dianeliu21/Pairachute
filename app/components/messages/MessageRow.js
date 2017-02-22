import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
// const styles = require('../../styles/styles.js');

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  message: {
    color: 'gray',
    fontSize: 12,
  },
  title: {
    color: 'black',
    fontSize: 14,
  }
});

class MessageRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.data.title}</Text>
        <Text style={styles.message}>{this.props.data.last_message}</Text>
      </View>
    );
  }
}

module.exports = MessageRow;
