import React, {Component} from 'react';

import {Scene, Router, ActionConst,Modal} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginPage from './LoginPage'
import MainPage from './MainPage'
import TalkPage from './talk/TalkPage'
import PeoplePage from './people/PeoplePage'
import MarketPage from './market/MarketPage'
import SettingPage from './setting/SettingPage'

export default class Root extends Component {
    render() {
        return (
            <Router>
                <Scene key="modal" component={Modal}>
                    <Scene key="root" hideNavBar={true}>
                        <Scene key="LoginPage" component={LoginPage} title="用户登录" hideNavBar/>

                        <Scene key="tabbar" tabs={true} hideNavBar type={ActionConst.REPLACE}>
                            <Scene
                                key="tab1"
                                title="tab1"
                                icon={<Icon name="rocket" size={30} color="#900"/>}

                                initial={true}
                            >
                                <Scene key="talk" component={TalkPage} hideNavBar/>
                            </Scene>

                            <Scene
                                key="tab2"
                                title="tab2"
                                icon={<Icon name="rocket" size={30} color="#900"/>}

                            >
                                <Scene key="people" component={PeoplePage} hideNavBar/>
                            </Scene>

                            <Scene
                                key="tab3"
                                title="tab3"
                                icon={<Icon name="rocket" size={30} color="#900"/>}

                            >
                                <Scene key="market" component={MarketPage} hideNavBar/>
                            </Scene>

                            <Scene
                                key="tab4"
                                title="tab4"
                                icon={<Icon name="rocket" size={30} color="#900"/>}

                            >
                                <Scene key="setting" component={SettingPage} hideNavBar/>
                            </Scene>
                        </Scene>

                    </Scene>
                </Scene>
            </Router>
        );
    }
}
