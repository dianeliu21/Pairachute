import React from 'react';
import { connect } from 'react-redux';
import { Actions, Scene, Switch } from 'react-native-router-flux';
import LoginContainer from '../components/auth/LoginContainer';
import HomeContainer from '../components/home/HomeContainer';
import SignupContainer from '../components/auth/SignupContainer';


const scenes = Actions.create(
  <Scene key="root">
    <Scene
      key="splash"
      component={connect(state=>({ isAuthenticated: state.authState ? state.authState.isAuthenticated : false }))(Switch)}
      tabs={true}
      selector={props=>props.isAuthenticated ? "home" : "login"}
      initialScene={true}
    >
      <Scene key="login" component={LoginContainer} hideNavBar={true}/>
      <Scene key="home" component={HomeContainer} hideNavBar={true}/>
    </Scene>
    <Scene key="signup" component={SignupContainer}/>
  </Scene>
);

export default scenes;
