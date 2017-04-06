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
    ActivityIndicator} from 'antd-mobile';

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
        }, 1000);
        Actions.MainPage();
    }
    render() {
        return (
            <View style={styles.container}>
                <Flex direction="column" justify="center" >
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
                        text="正在加载"
                        animating={this.state.animating}
                    />
                </Flex>


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