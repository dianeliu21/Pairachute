import React from 'react';
import { connect } from 'react-redux';
import { Actions, Scene, Switch } from 'react-native-router-flux';
const styles = require("../styles/styles.js");

import DummyLoginContainer from '../components/auth/DummyLoginContainer';
import HomeContainer from '../components/home/HomeContainer';
import LoginContainer from '../components/auth/LoginContainer';
import MessagesTabContainer from '../components/messages/MessagesTabContainer';
import SignupContainer from '../components/auth/SignupContainer';
import TabContainer from '../components/navigation/TabContainer';
import TabIcon from '../components/navigation/TabIcon';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="dummylogin" component={DummyLoginContainer} hideNavBar initial/>
    <Scene key="login" component={LoginContainer} hideNavBar/>
    <Scene key="signup" component={SignupContainer}/>
    <Scene key="home" component={HomeContainer}/>
    <Scene key="tabbar" tabs tabBarStyle={styles.tabBar}>
      <Scene key="tab1" title="Home" icon={TabIcon} component={TabContainer} hideNavBar/>
      <Scene key="tab2" title="Messages" icon={TabIcon} component={MessagesTabContainer} initial hideNavBar/>
      <Scene key="tab3" title="Settings" icon={TabIcon} component={TabContainer} hideNavBar/>
    </Scene>
  </Scene>
);

export default scenes;
