import React, {Component} from 'react';
import {
  Button,
  ListView,
  Text,
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
      dataSource: ds.cloneWithRows([])
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

  render() {
    console.log('messagethread props', this.props)
    return(
      <ListView
        dataSource={this.state.dataSource}
        enableEmptySections={true}
        renderRow={(data) => <MessageBubble user={this.props.user} message={data}/>}
        style={{marginTop:100}}
      />
    );
  }
}
// renderScrollComponent={(props)=><InvertibleScrollView {...props} inverted/>}
module.exports = MessageThread;
