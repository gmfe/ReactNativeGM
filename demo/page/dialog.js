import React from 'react';
import {View} from 'react-native';
import {
    Styles as S,
    Header,
    Button,
    Alert,
    Confirm,
    Prompt,
    Page,
    Toast
} from '../../src/index';

class Component extends React.Component {
    render() {
        const {navigator} = this.props;
        return (
            <Page header={<Header navigator={navigator}/>}>
                <View style={S.padding10}>
                    <Button
                        type="primary"
                        style={S.marginTop10}
                        onPress={() => {
                            Alert('这是标题', '中午吃嘉旺！').then(() => {
                                console.log('alert resolve');
                            }).catch(() => {
                                console.log('alert reject');
                            });
                        }}
                    >
                        alert
                    </Button>

                    <Button
                        type="default"
                        style={S.marginTop10}
                        onPress={() => {
                            Confirm('这是标题', '确定中午吃嘉旺么？').then(() => {
                                console.log('confirm resolve');
                            }).catch(() => {
                                console.log('confirm reject');
                            });
                        }}
                    >
                        confirm
                    </Button>

                    <Button
                        type="default"
                        style={S.marginTop10}
                        onPress={() => {
                            Confirm('这是标题', '确定中午吃嘉旺么？').then(() => {
                                console.log('confirm resolve');
                            }).catch(() => {
                                console.log('confirm reject');
                            });

                            Toast.info('会盖上面么');
                        }}
                    >
                        confirm + toast toast 会盖上面
                    </Button>

                    <Button
                        type="default"
                        style={S.marginTop10}
                        onPress={() => {
                            Prompt('这是标题', '确定中午吃嘉旺么？', {
                                placeholder: '输入',
                                defaultValue: 'aaa'
                            }).then((text) => {
                                console.log('confirm resolve', text);
                            }).catch(() => {
                                console.log('confirm reject');
                            });
                        }}
                    >
                        prompt
                    </Button>
                </View>
            </Page>
        );
    }
}

export default Component;