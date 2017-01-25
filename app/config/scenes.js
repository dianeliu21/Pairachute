import React from 'react';
import { connect } from 'react-redux';
import { Actions, Scene, Switch } from 'react-native-router-flux';
import AuthContainer from '../components/auth/AuthContainer';
import Home from '../components/home/Home';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';


const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="splash"
      component={connect(state=>({ isAuthenticated: state.authState ? state.authState.isAuthenticated : false }))(Switch)}
      tabs={true}
      selector={props=>props.isAuthenticated ? "home" : "authContainer"}
      initialScene={true}
    >
      <Scene key="authContainer" component={AuthContainer} hideNavBar={true}/>
      <Scene key="home" component={Home} hideNavBar={true}/>
    </Scene>
    <Scene key="signup" component={Signup}/>
  </Scene>
);

export default scenes;
