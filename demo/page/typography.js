import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {Header, P, H1, H2, H3, H4, Styles as S, Page} from '../../src/index';

class Component extends React.Component {
    render() {
        const {navigator} = this.props;
        return (
            <Page header={<Header navigator={navigator}/>}>
                <View style={S.borderBottom}>
                    <H2 style={[S.textCenter]}>说明</H2>
                    <P>text即使设置了lineHeight但是文本不会居中。 所以做了特殊处理，加了paddingBottom</P>
                </View>
                <H1>标题一</H1>
                <H2 style={{backgroundColor: 'red'}}>标题二</H2>
                <H3>标题三</H3>
                <H4>标题四</H4>

                <View style={S.borderBottom}/>
                <P style={{backgroundColor: 'blue'}}>
                    以下是原生的文本。
                    给其设置lineHeight，可以看到文本贴下边了。
                    多行情况下，行之间的间隙没有问题，但也贴边。
                </P>
                <Text style={{backgroundColor: 'red', lineHeight: 30}}>abc 你好</Text>
                <Text style={{backgroundColor: 'red', lineHeight: 30}}>abc 你好你好
                    你好你好</Text>
            </Page>
        );
    }
}

export default Component;