import React, {Component} from 'react';
import {
  ListView,
  Text,
  View,
} from 'react-native';
const styles = require('../../styles/styles.js');

import MessagesListRow from './MessagesListRow';

class MessagesList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([this.props.dataSource ? this.props.dataSource : []]),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps && nextProps.dataSource) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        dataSource: ds.cloneWithRows(nextProps.dataSource)
      })
    }
  }

  render() {
    return(
        <ListView
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(data) => <MessagesListRow loadMessages={this.props.loadMessages} thread_info={data}/>}
          style={{marginTop: 20}}
        />
    );
  }
}

module.exports = MessagesList;
