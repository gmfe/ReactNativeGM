import React from 'react';
import {ScrollView, ToastAndroid, BackHandler} from 'react-native';

import _ from 'lodash';

import {
    Cell, CellBody
} from '../../src';

const itemArr = [
    'Typography',
    'Button',
    'Cell',
    'Form',
    'Layout',
    'Request',
    'Icon',
    'Tabbar',
    'Lazyload',
    'SearchBar',
    'Tabs',
    'Dialog',
    'Toast'
];

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Function List'
    };

    handleBackPress = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    };

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView>
                {_.map(itemArr, (value, i) => (
                    <Cell
                        key={i}
                        onPress={() => navigate(value)}
                    >
                        <CellBody>{value}</CellBody>
                    </Cell>
                ))}
            </ScrollView>
        );
    }
}

export default MainScreen;