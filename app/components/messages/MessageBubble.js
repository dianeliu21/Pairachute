import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import MaterialInitials from 'react-native-material-initials/native';
const styles = require('../../styles/styles.js');
import * as constants from '../../styles/constants.js'

class MessageBubble extends Component {
  constructor(props) {
    super(props);
  }

  _getAvatar() {
    return !this._isOwnMessage() && !this._isSameSenderAsNext()
      ? (<MaterialInitials backgroundColor={constants.mediumGray} color={'white'} single={false} size={constants.messageAvatarSize} style={styles.messageAvatar} text={this.props.users[this.props.message.sender_id]}/>)
      : null
  }

  _getBubbleStyle() {
    return this._isOwnMessage() ? styles.sentMessage : styles.receivedMessage
  }

  _getBubbleTextStyle() {
    return this._isOwnMessage() ? styles.sentMessageText : styles.receivedMessageText
  }

  _getSenderName() {
    return !this._isOwnMessage() && !this._isSameSenderAsPrev()
     ? (<Text style={styles.receivedMessageSender}>{this.props.users[this.props.message.sender_id]}</Text>)
     : null
  }

  _getWrapperStyle() {
    if (!this._isOwnMessage()) {
      if (!this._isSameSenderAsNext()) {
        return styles.receivedMsgBubbleWrapperWithAvatar
      }
      return styles.receivedMsgBubbleWrapperNoAvatar
    }
  }

  _isOwnMessage() {
    return this.props.message.sender_id === this.props.sender_id
  }

  _isSameSenderAsNext() {
    return this.props.message.sender_id === this.props.message.next_sender_id
  }

  _isSameSenderAsPrev() {
    return this.props.message.sender_id === this.props.message.prev_sender_id
  }

  render() {
    return(
      <View>
        {this._getSenderName()}
        <View style={this._getWrapperStyle()}>
          {this._getAvatar()}
          <View style={[styles.messageBubble, this._getBubbleStyle()]}>
            <Text style={this._getBubbleTextStyle()}>{this.props.message.message}</Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = MessageBubble;
