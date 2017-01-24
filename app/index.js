import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './config/configureStore';
import fb from './config/initializeFirebase';
import scenes from './config/scenes';
const styles = require('./styles/styles.js');

// Redux store
const store = configureStore({});

// Connect react native router flux with Redux
const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes}/>
      </Provider>
    );
  }
}

module.export = App;
