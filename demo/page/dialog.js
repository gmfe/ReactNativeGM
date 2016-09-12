import React from 'react';
import {View, Text} from 'react-native';
import {
    Styles as S,
    Header,
    Button,
    Dialog,
    Alert,
    Confirm,
    Page
} from '../../src/index';

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.handleRequestClose = ::this.handleRequestClose;
        this.handleCancel = ::this.handleCancel;
        this.handleOK = ::this.handleOK;

        this.state = {
            visible: false,
            title: '弹窗标题',
            buttons: [{
                type: 'default',
                label: '取消',
                onPress: this.handleCancel
            }],
            onRequestClose: this.handleRequestClose,
            text: '自定义弹窗内容，居左对齐显示，告知需要确认的信息等'
        };
    }

    handleRequestClose() {
        console.log('handleRequestClose');
        this.setState({
            visible: false
        });
    }

    handleOK() {
        this.setState({
            visible: false
        });
    }

    handleCancel() {
        this.setState({
            visible: false
        });
    }

    render() {
        const {text, ...rest} = this.state;
        const {navigator} = this.props;
        return (
            <Page header={<Header navigator={navigator}/>}>
                <View style={S.padding10}>
                    <Button
                        type="primary"
                        style={S.marginTop10}
                        onPress={() => this.setState({
                            visible: true,
                            title: '弹窗标题',
                            buttons: [{
                                type: 'primary',
                                label: '确定',
                                onPress: this.handleOK
                            }]
                        })}
                    >
                        show dialog with title
                    </Button>

                    <Button
                        type="primary"
                        style={S.marginTop10}
                        onPress={() => this.setState({
                            visible: true,
                            title: undefined,
                            buttons: [{
                                type: 'primary',
                                label: '确定',
                                onPress: this.handleOK
                            }]
                        })}
                    >
                        show dialog without title (default '提示')
                    </Button>

                    <Button
                        type="default"
                        style={S.marginTop10}
                        onPress={() => this.setState({
                            visible: true,
                            title: undefined,
                            buttons: [{
                                type: 'default',
                                label: '取消',
                                onPress: this.handleCancel
                            }, {
                                type: 'primary',
                                label: '确定',
                                onPress: this.handleOK
                            }]
                        })}
                    >
                        show dialog with OK and Cancel
                    </Button>

                    <Button
                        type="warn"
                        style={S.marginTop10}
                        onPress={() => this.setState({
                            visible: true,
                            title: undefined,
                            buttons: [{
                                type: 'warn',
                                label: '明白了',
                                onPress: this.handleCancel
                            }]
                        })}
                    >
                        show dialog with warn tips
                    </Button>

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

                    <Dialog {...rest}>
                        <Text style={S.text}>{text}</Text>
                    </Dialog>
                </View>
            </Page>
        );
    }
}

export default Component;