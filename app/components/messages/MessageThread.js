import React, {Component} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

class MessageThread extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Text>Hello this is a message thread</Text>
    );
  }
}

module.exports = MessageThread;
