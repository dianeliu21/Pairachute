import React, {Component} from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import MessagesList from './MessagesList';
const styles = require('../../styles/styles.js');

class MessagesTab extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await this.props.loadThreadList();
  }

  render() {
    return(
      <View>
        <Button
          onPress={() => console.log("new msg")}
          title="New Message">
        </Button>
        <MessagesList loadMessages={this.props.loadMessages} dataSource={this.props.threads.threads}/>
      </View>
    );
  }
}

module.exports = MessagesTab;
