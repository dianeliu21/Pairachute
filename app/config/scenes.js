import React from 'react';
import { connect } from 'react-redux';
import { Actions, Scene, Switch } from 'react-native-router-flux';
const styles = require("../styles/styles.js");

import HomeContainer from '../components/home/HomeContainer';
import LoginContainer from '../components/auth/LoginContainer';
import SignupContainer from '../components/auth/SignupContainer';
import TabContainer from '../components/navigation/TabContainer';
import TabIcon from '../components/navigation/TabIcon';

// <Scene key="root">
//   <Scene
//     key="splash"
//     component={connect(state=>({ isAuthenticated: state.authState ? state.authState.isAuthenticated : false }))(Switch)}
//     tabs={true}
//     selector={props=>props.isAuthenticated ? "home" : "login"}
//     initialScene={true}
//   >
//     <Scene key="login" component={LoginContainer} hideNavBar={true}/>
//     <Scene key="home" component={HomeContainer} hideNavBar={true}/>
//   </Scene>
//   <Scene key="signup" component={SignupContainer}/>
// </Scene>

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginContainer} hideNavBar initial/>
    <Scene key="signup" component={SignupContainer}/>
    <Scene key="home" component={HomeContainer}/>
    <Scene key="tabbar" tabs tabBarStyle={styles.tabBar}>
      <Scene key="tab1" title="Home" icon={TabIcon} component={TabContainer} hideNavBar/>
      <Scene key="tab2" title="Messages" icon={TabIcon} component={TabContainer} initial hideNavBar/>
      <Scene key="tab3" title="Settings" icon={TabIcon} component={TabContainer} hideNavBar/>
    </Scene>
  </Scene>
);

export default scenes;
