import React, { Component } from 'react';

import {Scene, Router,ActionConst} from 'react-native-router-flux';

import LoginPage from './LoginPage'
import MainPage from './MainPage'

export default class Root extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="LoginPage" component={LoginPage} title="用户登录" hideNavBar/>
                    <Scene key="MainPage" component={MainPage} title="登录主页" type={ActionConst.REPLACE} hideNavBar/>
                </Scene>
            </Router>
        );
    }
}
