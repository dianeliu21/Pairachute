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

  componentWillMount() {
    this.props.loadThreadList();
  }

  render() {
    console.log("MessageTab:")
    console.log(this.props)
    return(
      <View style={styles.container}>
        <Button
          onPress={() => console.log("new msg")}
          title="New Message">
        </Button>
        <MessagesList dataSource={this.props.threads.threads}/>
      </View>
    );
  }
}

module.exports = MessagesTab;
