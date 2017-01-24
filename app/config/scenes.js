import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import Home from '../components/home/Home';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={Login} hideNavBar={true} initial={true}/>
    <Scene key="signup" component={Signup} hideNavBar={false}/>
    <Scene key="home" component={Home} hideNavBar={true}/>
  </Scene>
);

export default scenes;
