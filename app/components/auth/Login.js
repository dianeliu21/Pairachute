import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
const styles = require("../../styles/styles.js");
import {
  Button,
  Text,
  TextInput,
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

  render() {
    console.log(this.props)
    return(
      <View style={styles.container}>
        <Text style={styles.authTitle}>Pairachute</Text>
        <Text style={styles.authErrorText}>{ this.props.authState.errorMessage }</Text>
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
          onPress={() => this.props.login(this.state.email, this.state.password)}
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
