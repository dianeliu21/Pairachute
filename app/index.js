import React, { Component } from 'react';
import { Router } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import configureStore from './config/configureStore';
import scenes from './config/scenes';

// Redux store
const store = configureStore();

// Connect react native router flux with Redux
// const RouterWithRedux = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes}/>
      </Provider>
    );
  }
}
