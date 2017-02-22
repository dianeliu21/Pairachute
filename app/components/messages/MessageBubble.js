import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
const styles = require('../../styles/styles.js');

class MessageBubble extends Component {
  constructor(props) {
    super(props);
  }

  _getBubbleStyle() {
    return this.props.message.sender_id === this.props.user.uid
      ? styles.sentMessage
      : styles.receivedMessage
  }

  render() {
    console.log(this.props)
    return(
      <View style={this._getBubbleStyle()}>
        <Text>{this.props.message.sender_name}</Text>
        <Text>{this.props.message.message}</Text>
      </View>
    );
  }
}

module.exports = MessageBubble;
