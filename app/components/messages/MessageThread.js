import React, {Component} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  ListView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
const styles = require('../../styles/styles.js');
import MessageBubble from './MessageBubble';
import Prompt from './Prompt';

class MessageThread extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      behavior: 'padding',
      dataSource: ds.cloneWithRows(this.prepareMessages()),
      listHeight: 0,
      screenWidth: 0,
      scrollViewHeight: 0,
      text: ''
    }
  }

  prepareMessages(messages=this.props.focusedThread.messages) {
    if (messages) {
      prev_sender_id = null
      prev_message_timestamp = null

      prev_message_key = null
      for (var key in messages) {
        messages[key].prev_sender_id = prev_sender_id
        messages[key].prev_message_timestamp = prev_message_timestamp
        prev_sender_id = messages[key].sender_id
        prev_message_timestamp = messages[key].timestamp

        messages[key].next_sender_id = null
        messages[key].next_message_timestamp = null

        if (prev_message_key) {
          messages[prev_message_key].next_sender_id = messages[key].sender_id
          messages[prev_message_key].next_message_timestamp = messages[key].timestamp
        }
        prev_message_key = key
      }
      return messages
    } else {
      return []
    }
  }

  componentDidUpdate() {
    // calculate bottom
    const bottomOfList =  this.state.listHeight - this.state.scrollViewHeight
    // tell the scrollView component to scroll to it
    this.scrollView.scrollTo({ y: bottomOfList, animated: false })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps && nextProps.focusedThread.messages) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(this.prepareMessages(nextProps.focusedThread.messages))
      })
    }
  }

  _displayMessage(data) {
    if (data.sender_id==='prompt') {
      return(<Prompt data={data}/>)
    } else {
      return(<MessageBubble users={this.props.focusedThread.users} sender_id={this.props.user.uid} message={data}/>)
    }
  }

  _renderFooter() {
    return(
      <TextInput
        style={{margin: 2, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        placeholder='Type a message'
        value={this.state.text}
      />
    )
  }

  _sendMessage(text, sender_uid, thread_id) {
    this.props.sendMessage(text, sender_uid, thread_id)
    this.setState({
      text: ''
    })
  }

  render() {
    return(
      <KeyboardAvoidingView behavior={this.state.behavior} style={styles.wrapper}>
        <View style={styles.wrapper}>
          <ScrollView
            ref={(component)=> this.scrollView = component}
            onContentSizeChange={(contentWidth, contentHeight) => {this.setState({listHeight: contentHeight})}}
            onLayout={(e)=>{this.setState({scrollViewHeight: e.nativeEvent.layout.height, screenWidth:e.nativeEvent.layout.width})}}
          >
            <ListView
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={(data) => this._displayMessage(data)}
              style={{marginTop:100}}
            />
          </ScrollView>
        </View>
        <View style={styles.messageInputView}>
          <TextInput
            multiline={true}
            onChangeText={(text) => this.setState({text})}
            placeholder='Type a message'
            style={[styles.messageTextInput, {width: this.state.screenWidth - 65}]}
            value={this.state.text}
          />
          <Button
            onPress={() => this._sendMessage(this.state.text, this.props.user.uid, this.props.focusedThread.id)}
            title='Send'
            style={styles.messageSend}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

module.exports = MessageThread;
