import React from 'react';
import { connect } from 'react-redux';
import { Actions, Scene, Switch } from 'react-native-router-flux';
const styles = require("../styles/styles.js");

import ContactsTabContainer from '../components/contacts/ContactsTabContainer';
import DummyLoginContainer from '../components/auth/DummyLoginContainer';
import HomeContainer from '../components/home/HomeContainer';
import LoginContainer from '../components/auth/LoginContainer';
import MessagesTabContainer from '../components/messages/MessagesTabContainer';
import MessageThreadContainer from '../components/messages/MessageThreadContainer';
import SignupContainer from '../components/auth/SignupContainer';
import TabContainer from '../components/navigation/TabContainer';
import TabIcon from '../components/navigation/TabIcon';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="dummylogin" component={DummyLoginContainer} hideNavBar initial/>
    <Scene key="login" component={LoginContainer} hideNavBar/>
    <Scene key="signup" component={SignupContainer} hideNavBar/>
    <Scene key="home" component={HomeContainer}/>
    <Scene key="tabbar" tabs tabBarStyle={styles.tabBar}>
      <Scene key="tab1" title="Contacts" icon={TabIcon} component={ContactsTabContainer} renderBackButton={()=> null}/>
      <Scene key="tab2" title="Messages" icon={TabIcon} component={MessagesTabContainer} initial renderBackButton={()=> null} rightTitle='New Msg' onRight={()=>console.log('new message')}/>
      <Scene key="tab3" title="Settings" icon={TabIcon} component={TabContainer} hideNavBar/>
    </Scene>
    <Scene key="message" title="Message" component={MessageThreadContainer} hideNavBar={false}/>
  </Scene>
);

export default scenes;
