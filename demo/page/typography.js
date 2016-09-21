import React from 'react';
import {
    View,
} from 'react-native';
import {Header, H1, H2, H3, H4, Styles as S, Page} from '../../src/index';

class Component extends React.Component {
    render() {
        const {navigator} = this.props;
        return (
            <Page header={<Header navigator={navigator}/>}>
                <H1>标题一</H1>
                <H2 style={{backgroundColor: 'red'}}>标题二</H2>
                <H3>标题三</H3>
                <H4>标题四</H4>

                <View style={S.borderBottom}/>
            </Page>
        );
    }
}

export default Component;