import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

// import Signup from './Signup';
const styles = require("../../styles/styles.js");
import {
  Button,
  Navigator,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  login() {
    this.props.login();
  }


  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.authTitle}>Pairachute</Text>
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
        <Button
          onPress={() => this.login()}
          title="Log In"
        />
        <Button
          onPress={Actions.signup}
          title="Don't have an account? Sign up"
        />
      </View>
    );
  }
}

module.exports = Login
