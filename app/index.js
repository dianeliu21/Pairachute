import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import configureStore from './config/configureStore';
import fb from './config/initializeFirebase';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
const styles = require('./styles/styles.js');
import {
  Navigator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Redux store
const store = configureStore({});

// Connect react native router flux with Redux
const RouterWithRedux = connect()(Router);

// Route tree
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar={true} initial={true}/>
    <Scene key="signup" component={Signup} hideNavBar={false}/>
    <Scene key="home" component={Home} hideNavBar={true}/>
  </Scene>
);

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
