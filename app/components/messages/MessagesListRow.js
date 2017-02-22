import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
// const styles = require('../../styles/styles.js');

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    backgroundColor: 'red',
    flexDirection: 'column'
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

class MessagesListRow extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('message list row data', this.props.thread_info)
    return(
      <TouchableHighlight
        onPress={() => this.props.loadMessages(this.props.thread_info)}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.thread_info.title}</Text>
          <Text style={styles.message}>{this.props.thread_info.last_message}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = MessagesListRow;
