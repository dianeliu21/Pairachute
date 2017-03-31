// import Login from './Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, switchLoginToSignup } from '../../actions/authActions';

// Login component
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
const styles = require("../../styles/styles.js");
import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      behavior: 'padding'
    }
  }

  render() {
    console.log(this.props)
    return(
      <KeyboardAvoidingView behavior={this.state.behavior} style={styles.container}>
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
          onPress={() => this.props.switchLoginToSignup()}
          title="Don't have an account? Sign up"
        />
      </KeyboardAvoidingView>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    authState: state.authState,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({login, switchLoginToSignup}, dispatch);
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export default LoginContainer;
