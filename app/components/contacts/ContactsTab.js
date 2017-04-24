import React, {Component} from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import ContactsList from './ContactsList';
const styles = require('../../styles/styles.js');

class ContactsTab extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await this.props.loadContacts();
  }

  render() {
    return(
      <View style={styles.messageListContainer}>
        <ContactsList loadContacts={this.props.loadContacts} dataSource={this.props.contacts? this.props.contacts.contacts : null}/>
      </View>
    );
  }
}

module.exports = ContactsTab;
