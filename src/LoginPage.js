import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import {Flex,
    InputItem,
    WhiteSpace,
    Button,
    ActivityIndicator,
    WingBlank
} from 'antd-mobile';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false,
        };
    }

    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }

    showToast = () => {
        this.setState({ animating: !this.state.animating });
        this.closeTimer = setTimeout(() => {
            this.setState({ animating: !this.state.animating });
            Actions.tabbar();
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                    <InputItem
                        placeholder="输入用户名"
                    >
                    </InputItem>
                    <WhiteSpace />
                    <InputItem
                        placeholder="输入密码"
                    >
                    </InputItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.showToast}>登 录</Button>
                    <ActivityIndicator
                        toast
                        text="正在登录"
                        animating={this.state.animating}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
    }
});