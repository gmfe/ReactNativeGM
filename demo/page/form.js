import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback

} from 'react-native';
import {
    Styles as S,
    Variable as V,
    Header,
    TextArea,
    Text,
    TextInput,
    Button,
    Page,
    Radio
} from '../../src/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            checked: false,
            show: false
        };
    }

    render() {
        const {navigator} = this.props;
        return (
            <Page noScrollContent header={<Header navigator={navigator} pageName={'Form'}/>}>
                <KeyboardAwareScrollView
                    style={[S.flex]}
                    viewIsInsideTabBar={false}
                >
                    <View>
                        <Text>TextArea</Text>
                        <TextArea
                            style={S.border}
                            value={this.state.value}
                            onChangeText={value => {
                                this.setState({
                                    value
                                });
                            }}
                        />

                        <Text>Input</Text>
                        <TextInput
                            style={[S.input, S.border]}
                            value={this.state.value}
                            onChangeText={value => {
                                this.setState({
                                    value
                                });
                            }}
                        />
                    </View>

                    <View>
                        <Text>Radio</Text>
                        <Radio checked={this.state.checked} onChange={(checked) => {
                            this.setState({
                                checked
                            });
                        }}>回家</Radio>
                    </View>


                    <View>
                        <Text>键盘遮挡场景2。 非ScrollView ListView</Text>

                        <Button type="primary" onPress={() => {
                            this.setState({
                                show: true
                            });
                        }}>点我打开浮层 input</Button>
                        <View style={{height: 150}}/>
                        <View style={{padding: 10, backgroundColor: 'white'}}>
                            <Text>
                                键盘遮挡场景1 。用 KeyboardAwareScrollView。 记得取消Page的ScrollView(传 noScrollContent)
                            </Text>
                            <TextInput
                                style={[S.input, S.border]}
                                value={this.state.value}
                                onChangeText={value => {
                                    this.setState({
                                        value
                                    });
                                }}
                            />
                        </View>
                    </View>
                    <View style={{height: 100}}/>
                </KeyboardAwareScrollView>
                {this.state.show ? (
                    <KeyboardAvoidingView
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: 'rgba(0, 0, 0, .5)'
                        }}
                        behavior="padding"
                        keyboardVerticalOffset={V.headerHeight}
                    >
                        <TouchableWithoutFeedback onPress={() => {
                            this.setState({
                                show: false
                            });
                        }}>
                            <View style={S.flex}>
                                <View style={S.flex}/>
                                <View style={{
                                    left: 0,
                                    right: 0,
                                    padding: 10,
                                    backgroundColor: 'white'
                                }}>
                                    <Text>购买数量</Text>
                                    <TextInput
                                        style={[S.input, S.border, S.marginTop10, S.marginBottom10]}
                                        value={this.state.value}
                                        onChangeText={value => {
                                            this.setState({
                                                value
                                            });
                                        }}
                                    />
                                    <Button type="primary">加入购物车</Button>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                ) : null}
            </Page>
        );
    }
}

export default Component;