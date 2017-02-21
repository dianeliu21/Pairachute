import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';

import * as secrets from '../../config/secrets.js';

// Dummy Login component - for testing purposes
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
const styles = require("../../styles/styles.js");
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

class DummyLogin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return(
      <View style={styles.container}>
        <Text style={styles.authTitle}>Pairachute</Text>
        <Text>Dummy Login - for testing purposes only</Text>
        <Button
          onPress={() => this.props.login(secrets.TEST_EMAIL, secrets.TEST_PASSWORD)}
          title="Log In"
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
  return bindActionCreators({login}, dispatch);
}

const DummyLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DummyLogin)

export default DummyLoginContainer;
