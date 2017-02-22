import React, {Component} from 'react';
import {
  Button,
  ListView,
  Text,
  TextInput,
  View,
} from 'react-native';
const styles = require('../../styles/styles.js');
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import MessageBubble from './MessageBubble';

class MessageThread extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.focusedThread.messages ? this.props.focusedThread.messages : [])
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps && nextProps.focusedThread.messages) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(nextProps.focusedThread.messages)
      })
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

  render() {
    return(
      <View style={{flex: 1}}>
        <ListView
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted/>}
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(data) => <MessageBubble user={this.props.user} message={data}/>}
          style={{marginTop:100}}
        />
        <TextInput
          style={{margin: 2, height: 40, bottom: 0, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          placeholder='Type a message'
          value={this.state.text}
        />
        <Button
          onPress={() => console.log('hello!')}
          title='Send'
        />
      </View>
    );
  }
}

module.exports = MessageThread;
