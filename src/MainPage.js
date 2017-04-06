import React, {Component} from 'react';
import {
    StyleSheet
} from 'react-native';

import TalkPage    from './talk/TalkPage'
import PeoplePage  from './people/PeoplePage'
import MarketPage  from './market/MarketPage'
import SettingPage from './setting/SettingPage'

import {TabBar} from 'antd-mobile';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AntUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'talk',
            hidden: false,
        };
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="会话"
                    key="会话"
                    icon={{uri: 'talk'}}
                    selectedIcon={{uri: 'talk-o'}}
                    selected={this.state.selectedTab === 'talk'}
                    badge={1}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'talk',
                        });
                    }}
                    iconStyle={
                        { width: 8, height: 8 }
                    }
                >
                    <TalkPage/>
                </TabBar.Item>
                <TabBar.Item
                    icon={{uri: 'people'}}
                    selectedIcon={{uri: 'people-o'}}
                    title="联系人"
                    key="联系人"
                    badge={'new'}
                    selected={this.state.selectedTab === 'people'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'people',
                        });
                    }}
                >
                    <PeoplePage/>
                </TabBar.Item>
                <TabBar.Item
                    icon={{uri: 'market'}}
                    selectedIcon={{uri: 'market-o'}}
                    title="应用"
                    key="应用"
                    dot
                    selected={this.state.selectedTab === 'market'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'market',
                        });
                    }}
                >
                    <MarketPage/>
                </TabBar.Item>
                <TabBar.Item
                    icon={{uri: 'setting'}}
                    selectedIcon={{uri: 'setting-o'}}
                    title="设置"
                    key="设置"
                    selected={this.state.selectedTab === 'setting'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'setting',
                        });
                    }}
                >
                    <SettingPage/>
                </TabBar.Item>
            </TabBar>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

