import React, {Component} from 'react';
import {Scene, Router, ActionConst, Modal} from 'react-native-router-flux';

import LoginPage from './LoginPage'
import IconText from './components/IconText'
import TalkPage from './talk/TalkPage'
import PeoplePage from './people/PeoplePage'
import MarketPage from './market/MarketPage'
import SettingPage from './setting/SettingPage'

export default class Root extends Component {
    render() {
        return (
            <Router>
                <Scene key="modal" component={Modal}>
                    <Scene key="root" hideNavBar>
                        <Scene key="LoginPage" component={LoginPage} title="用户登录" type={ActionConst.REFRESH}/>

                        <Scene key="tabbar" tabs type={ActionConst.REPLACE}>

                            <Scene
                                key="tab1"
                                title="会话"
                                icon={props => IconText({ ...props, icon: 'ios-chatboxes' })}
                                navigationBarStyle={{backgroundColor:'#108EE9'}} titleStyle={{color:'white'}}
                            >
                                <Scene key="talk" component={TalkPage} initial={true} title="会话"/>
                            </Scene>

                            <Scene
                                key="tab2"
                                title="联系人"
                                icon={props => IconText({ ...props, icon: 'ios-people' })}
                                navigationBarStyle={{backgroundColor:'#108EE9'}} titleStyle={{color:'white'}}
                            >
                                <Scene key="people" component={PeoplePage} title="联系人"/>
                            </Scene>

                            <Scene
                                key="tab3"
                                title="应用"
                                icon={props => IconText({ ...props, icon: 'md-appstore' })}
                                navigationBarStyle={{backgroundColor:'#108EE9'}} titleStyle={{color:'white'}}
                            >
                                <Scene key="market" component={MarketPage} title="应用"/>
                            </Scene>

                            <Scene
                                key="tab4"
                                title="设置"
                                icon={props => IconText({ ...props, icon: 'ios-cog' })}
                                navigationBarStyle={{backgroundColor:'#108EE9'}} titleStyle={{color:'white'}}
                            >
                                <Scene key="setting" component={SettingPage} title="设置"/>
                            </Scene>
                        </Scene>

                    </Scene>
                </Scene>
            </Router>
        );
    }
}
