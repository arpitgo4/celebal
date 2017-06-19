import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../pages/loginn';
import Home from '../pages/SignupVriew';
import restdata from '../pages/restdata';
import SignupVriew from '../pages/SignupVriew';

const Router = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: { title: 'Login' }
  },
  Home: {
    screen: Home,
    navigationOptions: { title: "Homepage" }
  },
  restdata: {
    screen: restdata,
    navigationOptions: { title: 'List of Movies' }
  },
  SignUp: {
    screen: SignupVriew,
    navigationOptions: { title: 'Sign Up' }
  },





  initialRouteName: {
    screen: Login
  },
});

export default Router;