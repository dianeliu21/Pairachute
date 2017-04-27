import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import MaterialInitials from 'react-native-material-initials/native';
const styles = require('../../styles/styles.js');

class MessageBubble extends Component {
  constructor(props) {
    super(props);
  }

  _getBubble() {
    if (this._isOwnMessage()) {
      return (
        <View style={[styles.messageBubble, styles.sentMessage]}>
          <Text style={styles.sentMessageText}>{this.props.message.message}</Text>
        </View>
      )
    } else if (!this._isSameSenderAsPrev()) {
      return (
        <View style={styles.receivedMsgBubbleWrapperNoAvatar}>
          <Text style={styles.receivedMessageSender}>{this.props.users[this.props.message.sender_id]}</Text>
          <View style={[styles.messageBubble, styles.receivedMessage]}>
            <Text style={styles.receivedMessageText}>{this.props.message.message}</Text>
          </View>
        </View>
      )
    } else if (!this._isSameSenderAsNext()) {
      return (
        <View style={styles.receivedMsgBubbleWrapperWithAvatar}>
          <MaterialInitials
            backgroundColor={'red'}
            color={'white'}
            size={25}
            text={this.props.users[this.props.message.sender_id]}
            single={false}
          />
          <View style={[styles.messageBubble, styles.receivedMessage]}>
            <Text style={styles.receivedMessageText}>{this.props.message.message}</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.receivedMsgBubbleWrapperNoAvatar}>
          <View style={[styles.messageBubble, styles.receivedMessage]}>
            <Text style={styles.receivedMessageText}>{this.props.message.message}</Text>
          </View>
        </View>
      )
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

  //
  // {
  //   this._shouldDisplaySenderName()
  //     ? <Text style={styles.receivedMessageName}>{this._getDisplayName(this.props.message.sender_id)}</Text>
  //     : null
  // }
  // {
  //   this._shouldDisplayAvatar()
  //     ? <MaterialInitials
  //         backgroundColor={'red'}
  //         color={'white'}
  //         size={30}
  //         text={this._getDisplayName(this.props.message.sender_id)}
  //         single={false}
  //       />
  //     : null
  // }
  // <View style={[styles.messageBubble, this._getBubbleStyle()]}>
  //   <Text style={this._getTextStyle()}>{this.props.message.message}</Text>
  // </View>
  //
  //
  render() {
    return(
      <View>
        {this._getBubble()}
      </View>
    );
  }
}

module.exports = MessageBubble;
