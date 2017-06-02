import React from 'react';
import {
    View,
    Text as RNText
} from 'react-native';
import {H1, H2, H3, H4, Styles as S, Page, Text} from '../../src/index';

class Component extends React.Component {
    static navigationOptions = {
        title: 'Typography'
    };

    render() {
        return (
            <Page>
                <H1>标题一</H1>
                <H2 style={{backgroundColor: 'red'}}>标题二</H2>
                <H3>标题三</H3>
                <H4>标题四</H4>

                <Text>默认字体</Text>
                <Text>默认字体</Text>
                <Text>默认字体</Text>
                <Text>默认字体</Text>
                <Text>默认字体</Text>

                <RNText>原生默认字体</RNText>
                <RNText>原生默认字体</RNText>
                <RNText>原生默认字体</RNText>
                <RNText>原生默认字体</RNText>
                <RNText>原生默认字体</RNText>

                <View style={S.borderBottom}/>
            </Page>
        );
    }
}

export default Component;