import React from 'react';
import {} from 'react-native';
import {
    Page,
    Tabbar,
    Header,
} from '../../src/index';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Page header={<Header navigator={this.props.navigator} pageName={'Tabbar'}/>} bottom={<Tabbar/>}>
            </Page>
        );
    }
}

