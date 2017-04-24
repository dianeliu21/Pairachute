import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
const styles = require('../../styles/styles.js');

class ContactsListRow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: this.props.contact_info.first_name,
      last_name: this.props.contact_info.last_name,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.contact_info !== nextProps.contact_info) {
      this.setState({
        first_name: nextProps.contact_info.first_name,
        last_name: nextProps.contact_info.last_name,
      })
    }
  }

  render() {
    return(
        <View style={styles.messageListRow}>
          <Text style={styles.messageListRowTitle}>{this.state.first_name} {this.state.last_name}</Text>
        </View>
    );
  }
}

module.exports = ContactsListRow;
