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
import * as firebase from 'firebase';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordMatch: true,
    }
  }

  async signup(email, password) {
    try{
      // await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Account created");
      // Navigate to new user flow

    } catch(error) {
      console.log(error.toString());
    }
  }

  verify_password(password) {
    password === this.state.password ? this.setState({passwordMatch: true}) : this.setState({passwordMatch: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.authTitle}>New Account</Text>
        <TextInput
          onChangeText={(email) => this.setState({email})}
          placeholder="Email Address"
          style={styles.authInput}
        />
        <TextInput
          onChangeText={(password) => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.authInput}
        />
        <TextInput
          onChangeText={(password2) => this.verify_password(password2)}
          placeholder="Verify Password"
          secureTextEntry={true}
          style={[styles.authInput, this.state.passwordMatch ? null : styles.authInputIncorrect]}
        />
        <Button
          onPress={() => this.signup()}
          title="Sign Up"
        />
      </View>

    );
  }
}

module.exports = Signup
