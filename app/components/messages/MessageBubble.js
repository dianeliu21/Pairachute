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
    return this.props.message.sender_id === this.props.sender_uid
      ? styles.sentMessage
      : styles.receivedMessage
  }

  _getDisplayName(uid) {
    console.log('this is display name: ', this.props.users[uid])
    return this.props.users[uid]
  }

  render() {
    console.log('this is message: ', this.props.message.message)
    return(
      <View style={[styles.messageBubble, this._getBubbleStyle()]}>
        <Text>{this._getDisplayName(this.props.message.sender_id)}</Text>
        <Text>{this.props.message.message}</Text>
      </View>
    );
  }
}

module.exports = MessageBubble;
