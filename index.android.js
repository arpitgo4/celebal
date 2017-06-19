
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Router from './App/config/router';

export default class completeProject extends Component {
  render() {
    console.log('Router', Router);
    return (   
      <Router />
    );
  }
}
 
AppRegistry.registerComponent('completeProject', () => completeProject);