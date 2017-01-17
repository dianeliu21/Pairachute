import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as firebase from 'firebase';
import Auth from './components/auth/Auth';
import Signup from './components/auth/Signup';
import HomeScreen from './components/home/HomeScreen';
const styles = require('./styles/styles.js');


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZLWVwyg4dnTcWWotXpqYfn-RF02mX4r4",
  authDomain: "pairachute-5adf4.firebaseapp.com",
  databaseURL: "https://pairachute-5adf4.firebaseio.com",
  storageBucket: "pairachute-5adf4.appspot.com",
  messagingSenderId: "803241803289"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class Pairachute extends Component {
  renderScene(route, navigator) {
    if (route.name == 'Auth') {
      return <Auth navigator={navigator}/>
    }
    if (route.name == 'HomeScreen') {
      return <HomeScreen navigator={navigator}/>
    }
    if (route.name == 'Signup') {
      return <Signup navigator={navigator}/>
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'Auth'}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('Pairachute', () => Pairachute);
