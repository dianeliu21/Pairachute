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
    return this._isOwnMessage()
      ? styles.sentMessage
      : styles.receivedMessage
  }

  _getDisplayName(uid) {
    return this.props.users[uid]
  }

  _getTextStyle() {
    return this._isOwnMessage()
      ? styles.sentMessageText
      : styles.receivedMessageText
  }

  _isOwnMessage() {
    return this.props.message.sender_id === this.props.sender_id
  }

  _isSameSenderAsPrev() {
    return this.props.message.sender_id === this.props.message.prev_sender_id
  }

  render() {
    return(
      <View style={styles.messageBubbleWrapper}>
        {!this._isOwnMessage() && !this._isSameSenderAsPrev() ? <Text style={styles.receivedMessageName}>{this._getDisplayName(this.props.message.sender_id)}</Text> : null}
        <View style={[styles.messageBubble, this._getBubbleStyle()]}>
          <Text style={this._getTextStyle()}>{this.props.message.message}</Text>
        </View>
      </View>
    );
  }
}

module.exports = MessageBubble;
