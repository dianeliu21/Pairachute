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
    this.state = {
      title: this.props.thread_info.title,
      msg_preview: this.props.thread_info.last_message ? this.props.thread_info.last_message.message : ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.thread_info !== nextProps.thread_info) {
      this.setState({
        title: nextProps.thread_info.title,
        msg_preview: nextProps.thread_info.last_message.message
      })
    }
  }


  render() {
    console.log('message list row data', this.props.thread_info )
    return(
      <TouchableHighlight onPress={() => this.props.loadMessages(this.props.thread_info)}>
        <View style={styles.container}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.message}>{this.state.msg_preview}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = MessagesListRow;
