import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';


export default class TalkPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>会话页面</Text>

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
