import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import MainPage from './src/MainPage'

export default class AntUI extends Component {
  render() {
    return (
      <MainPage/>
    );
  }
}

AppRegistry.registerComponent('AntUI', () => AntUI);
