import React, { Component } from 'react';
import {ScrollView} from 'react-native';

import _ from 'lodash';

import {
    Cell
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
    'ViewPager',
    'Tabs',
    'Flatlist',
    'Modal'
];

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Function List'
    };

    render() {
        const { navigate } = this.props.navigation;
        return(
            <ScrollView>
                {_.map(itemArr, (value, i) => (
                    <Cell
                        bodyText={value}
                        key={i}
                        onPress={() => navigate(value)}
                    />
                ))}
            </ScrollView>
        );
    }
}

export default MainScreen;