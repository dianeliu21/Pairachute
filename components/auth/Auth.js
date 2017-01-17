import React, { Component } from 'react';
import {
  Button,
  Navigator,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Signup from './Signup';
const styles = require("../../styles/styles.js");

export class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  async login(email, password) {
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Logged in!");
      _navigate('HomeScreen');
    } catch(error) {
      console.log(error.toString());
    }
  }

  signup() {
    // Navigate to sign up screen
  }

  _navigate(title) {
    this.props.navigator.push({
      name: title,
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.authTitle}>Pairachute</Text>
        <TextInput
          placeholder="Email Address"
          style={styles.authInput}
        />
        <TextInput
          placeholder="Password"
          style={styles.authInput}
        />
        <Button
          onPress={() => this._navigate('HomeScreen')}
          title="Log In"
        />
        <Button
          onPress={() => this._navigate('Signup')}
          title="Don't have an account? Sign up"
        />
      </View>
    );
  }
}

module.exports = Auth
