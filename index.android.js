import React, {Component} from 'react';

import {
    AppRegistry
} from 'react-native';

import Demo from './demo/index';

class ReactNativeGM extends Component {
    render() {
        return <Demo/>;
    }
}

AppRegistry.registerComponent('ReactNativeGM', () => ReactNativeGM);
