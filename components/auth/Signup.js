import React, { Component } from 'react';
const styles = require("../../styles/styles.js");
import {
  Button,
  Navigator,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export class Signup extends Component {
  constructor(props) {
    super(props);
  }

  async signup(email, password) {
    try{
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Account created");
      // Navigate to new user flow

    } catch(error) {
      console.log(error.toString());
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.authTitle}>New Account</Text>
        <TextInput
          placeholder="Email Address"
          style={styles.authInput}
        />
        <TextInput
          placeholder="Password"
          style={styles.authInput}
        />
        <TextInput
          placeholder="Verify Password"
          style={styles.authInput}
        />
        <Button
          title="Sign Up"
        />
      </View>

    );
  }
}

module.exports = Signup
