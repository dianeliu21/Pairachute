import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as firebase from 'firebase';
import {ActionCreators} from '../../actions';
import Signup from './Signup';
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

  // async login(email, password) {
  //   try{
  //     await firebase.auth().signInWithEmailAndPassword(email, password);
  //     console.log("Logged in!");
  //     // Actions.home;
  //   } catch(error) {
  //     console.log("Login error: " + error.toString());
  //   }
  // }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {} }, mapDispatchToProps)(Login);
