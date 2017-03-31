// import Signup from './Signup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signup, switchSignupToLogin } from '../../actions/authActions';

// Signup component
import React, { Component } from 'react';
const styles = require("../../styles/styles.js");
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as firebase from 'firebase';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordMatch: true,
    }
  }

  verify_password(password) {
    password === this.state.password ? this.setState({passwordMatch: true}) : this.setState({passwordMatch: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.authTitle}>New Account</Text>
        <Text style={styles.authErrorText}>{this.props.authState.errorMessage}</Text>
        <TextInput
          onChangeText={(name) => this.setState({name})}
          placeholder="Name"
          style={styles.authInput}
        />
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
          onPress={() => this.props.signup(this.state.name, this.state.email, this.state.password)}
          title="Sign Up"
        />
        <Button
          onPress={() => this.props.switchSignupToLogin()}
          title="Back to Login"
        />
      </View>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signup, switchSignupToLogin}, dispatch);
}

const SignupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Signup)

export default SignupContainer;
